"use strict";

/** 1. Helper function to generate a Google Maps directions URL */
/** Google Mapsの道案内URLを生成するヘルパー機能 */
function generateDirectionsURL(origin, destination) {
  const googleMapsUrlBase = "https://www.google.com/maps/dir/?";
  const searchParams = new URLSearchParams("api=1");
  searchParams.append("origin", origin);
  const destinationParam = [];
  // Add title to destinationParam except in cases where Quick Builder set
  // the title to the first line of the address
  //クイックビルダーで設定した場合を除き，destinationParam にタイトルを追加する．
  // タイトルをアドレスの最初の行に追加する
  if (destination.title !== destination.address1) {
    destinationParam.push(destination.title);
  }
  destinationParam.push(destination.address1, destination.address2);
  searchParams.append("destination", destinationParam.join(","));
  return googleMapsUrlBase + searchParams.toString();
}

/** 2.
 * Defines an instance of the Locator+ solution, to be instantiated
 * when the Maps library is loaded.
 */
/**
 * LocatorPlusソリューションのインスタンスを定義し、Mapsライブラリがロードされた時にインスタンス化される。
 * Mapsライブラリがロードされた時にインスタンス化されます。
 */
function LocatorPlus(configuration) {
  const locator = this;

  locator.locations = configuration.locations || [];
  locator.capabilities = configuration.capabilities || {};

  const mapEl = document.getElementById("gmp-map");
  const panelEl = document.getElementById("locations-panel");
  locator.panelListEl = document.getElementById("locations-panel-list");
  const sectionNameEl = document.getElementById("location-results-section-name");
  const resultsContainerEl = document.getElementById("location-results-list");

  const itemsTemplate = Handlebars.compile(document.getElementById("locator-result-items-tmpl").innerHTML);

  locator.searchLocation = null;
  locator.searchLocationMarker = null;
  locator.selectedLocationIdx = null;
  locator.userCountry = null;

  // Initialize the map -------------------------------------------------------
  //マップの初期化
  locator.map = new google.maps.Map(mapEl, configuration.mapOptions);

  // Store selection.
  //店舗選択
  const selectResultItem = function (locationIdx, panToMarker, scrollToResult) {
    locator.selectedLocationIdx = locationIdx;
    for (let locationElem of resultsContainerEl.children) {
      locationElem.classList.remove("selected");
      if (getResultIndex(locationElem) === locator.selectedLocationIdx) {
        locationElem.classList.add("selected");
        if (scrollToResult) {
          panelEl.scrollTop = locationElem.offsetTop;
        }
      }
    }
    if (panToMarker && locationIdx != null) {
      locator.map.panTo(locator.locations[locationIdx].coords);
    }
  };

  // Create a marker for each location.
  // 各場所にマーカーを作成します。

  /*----------アイコンの取得----------*/
  const markers = locator.locations.map(function (location, index) {
    //繰り返し処理で各店舗のアイコンを描画 始まり
    // const icon = new google.maps.MarkerImage(
    //   location.iconPath,
    //   new google.maps.Size(location.iconSizeWidth, location.iconSizeHeight), //元サイズ、トリムサイズ（切り抜き時使用）
    //   new google.maps.Point(location.iconPointX, location.iconPointY), //ピン位置の図示場所
    //   null, //ピン位置ずらす場合の指定
    //   new google.maps.Size(40, 40), //リサイズ
    // );
    const icon = {
      url: location.iconPath,
      size: new google.maps.Size(location.iconSizeWidth, location.iconSizeHeight), 
      origin: new google.maps.Point(location.iconPointX, location.iconPointY),
      anchor: null,
      scaledSize: new google.maps.Size(40, 56.127),
    };
    //繰り返し処理で各店舗のアイコンを描画 終わり


    const marker = new google.maps.Marker({
      position: location.coords,
      map: locator.map,
      icon: icon,
      title: location.title,
    });
    marker.addListener("click", function () {
      selectResultItem(index, false, true);
    });
    return marker;
  });

  // Fit map to marker bounds.
  //マップをマーカー範囲にフィットさせる。
  locator.updateBounds = function () {
    const bounds = new google.maps.LatLngBounds();
    if (locator.searchLocationMarker) {
      bounds.extend(locator.searchLocationMarker.getPosition());
    }
    for (let i = 0; i < markers.length; i++) {
      bounds.extend(markers[i].getPosition());
    }
    locator.map.fitBounds(bounds);
  };
  if (locator.locations.length) {
    locator.updateBounds();
  }

  // Get the distance of a store location to the user's location,
  // used in sorting the list.
  // 店舗の位置からユーザーの位置までの距離を取得します。
  // リストのソートに使用されます。
  const getLocationDistance = function (location) {
    if (!locator.searchLocation) return null;

    // Use travel distance if available (from Distance Matrix).
    // 可能であれば移動距離を使用します (距離マトリクスから)。
    if (location.travelDistanceValue != null) {
      return location.travelDistanceValue;
    }

    // Fall back to straight-line distance.
    // 直線距離にフォールバックする
    return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(location.coords), locator.searchLocation.location);
  };

  // Render the results list --------------------------------------------------
  // 結果一覧のレンダリング
  const getResultIndex = function (elem) {
    return parseInt(elem.getAttribute("data-location-index"));
  };

  locator.renderResultsList = function () {
    let locations = locator.locations.slice();
    for (let i = 0; i < locations.length; i++) {
      locations[i].index = i;
    }
    if (locator.searchLocation) {
      sectionNameEl.textContent = "Nearest locations (" + locations.length + ")";
      locations.sort(function (a, b) {
        return getLocationDistance(a) - getLocationDistance(b);
      });
    } else {
      sectionNameEl.textContent = `All locations (${locations.length})`;
    }
    const resultItemContext = { locations: locations };
    resultsContainerEl.innerHTML = itemsTemplate(resultItemContext);
    for (let item of resultsContainerEl.children) {
      const resultIndex = getResultIndex(item);
      if (resultIndex === locator.selectedLocationIdx) {
        item.classList.add("selected");
      }

      const resultSelectionHandler = function () {
        if (resultIndex !== locator.selectedLocationIdx) {
          selectResultItem(resultIndex, true, false);
        }
      };

      // Clicking anywhere on the item selects this location.
      // Additionally, create a button element to make this behavior
      // accessible under tab navigation.
      // アイテムのどこかをクリックすると、この場所が選択されます。
      // さらに、この動作をタブナビゲーションでアクセスできるようにするために、ボタン要素を作成します。
      // タブナビゲーションでアクセスできるようにする。
      item.addEventListener("click", resultSelectionHandler);
      item.querySelector(".select-location").addEventListener("click", function (e) {
        resultSelectionHandler();
        e.stopPropagation();
      });

      // Clicking the directions button will open Google Maps directions in a
      // new tab
      // 道案内ボタンをクリックすると、Google Maps の道案内が新しいタブで表示されます。
      // 新しいタブで開きます。
      const origin = locator.searchLocation != null ? locator.searchLocation.location : "";
      const destination = locator.locations[resultIndex];
      const googleMapsUrl = generateDirectionsURL(origin, destination);
      item.querySelector(".directions-button").setAttribute("href", googleMapsUrl);
    }
  };

  // Optional capability initialization --------------------------------------
  // オプションのケイパビリティ初期化
  initializeSearchInput(locator);
  initializeDistanceMatrix(locator);

  // Initial render of results -----------------------------------------------
  // 結果の初期レンダリング
  locator.renderResultsList();
}

/** 3. When the search input capability is enabled, initialize it. */
/** 検索入力機能が有効な場合は、初期化する。 */
function initializeSearchInput(locator) {
  const geocodeCache = new Map();
  const geocoder = new google.maps.Geocoder();

  const searchInputEl = document.getElementById("location-search-input");
  const searchButtonEl = document.getElementById("location-search-button");

  const updateSearchLocation = function (address, location) {
    if (locator.searchLocationMarker) {
      locator.searchLocationMarker.setMap(null);
    }
    if (!location) {
      locator.searchLocation = null;
      return;
    }
    locator.searchLocation = { address: address, location: location };
    locator.searchLocationMarker = new google.maps.Marker({
      position: location,
      map: locator.map,
      title: "My location",
      icon: {
        // url: 'img/slobeiena_pin_test.png',
        // scaledSize: new google.maps.Size(40, 40)
        path: google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "pink",
        fillOpacity: 0.5,
        strokeOpacity: 0,
      },
    });

    // Update the locator's idea of the user's country, used for units. Use
    // `formatted_address` instead of the more structured `address_components`
    // to avoid an additional billed call.
    // ロケータの単位に使用されるユーザーの国に関する考え方を更新します。
    // 使用方法より構造化された `address_components` ではなく、`formatted_address` を使用します。
    // 追加の課金コールを回避するためです。
    const addressParts = address.split(" ");
    locator.userCountry = addressParts[addressParts.length - 1];

    // Update map bounds to include the new location marker.
    // 新しい位置マーカーを含むように地図の範囲を更新します。
    locator.updateBounds();

    // Update the result list so we can sort it by proximity.
    // 結果リストを更新し、近接順でソートできるようにする。
    locator.renderResultsList();

    locator.updateTravelTimes();
  };

  const geocodeSearch = function (query) {
    if (!query) {
      return;
    }

    const handleResult = function (geocodeResult) {
      searchInputEl.value = geocodeResult.formatted_address;
      updateSearchLocation(geocodeResult.formatted_address, geocodeResult.geometry.location);
    };

    if (geocodeCache.has(query)) {
      handleResult(geocodeCache.get(query));
      return;
    }
    const request = { address: query, bounds: locator.map.getBounds() };
    geocoder.geocode(request, function (results, status) {
      if (status === "OK") {
        if (results.length > 0) {
          const result = results[0];
          geocodeCache.set(query, result);
          handleResult(result);
        }
      }
    });
  };

  // Set up geocoding on the search input.
  // 検索入力にジオコーディングを設定する。
  searchButtonEl.addEventListener("click", function () {
    geocodeSearch(searchInputEl.value.trim());
  });

  // Initialize Autocomplete.
  // オートコンプリートを初期化する。
  initializeSearchInputAutocomplete(locator, searchInputEl, geocodeSearch, updateSearchLocation);
}

/** 4. Add Autocomplete to the search input. */
/** 検索入力にオートコンプリートを追加する。 */
function initializeSearchInputAutocomplete(locator, searchInputEl, fallbackSearch, searchLocationUpdater) {
  // Set up Autocomplete on the search input. Bias results to map viewport.
  // 検索入力にオートコンプリートを設定する。マップビューポートに結果をバイアスをかける。
  const autocomplete = new google.maps.places.Autocomplete(searchInputEl, {
    types: ["geocode"],
    fields: ["place_id", "formatted_address", "geometry.location"],
  });
  autocomplete.bindTo("bounds", locator.map);
  autocomplete.addListener("place_changed", function () {
    const placeResult = autocomplete.getPlace();
    if (!placeResult.geometry) {
      // Hitting 'Enter' without selecting a suggestion will result in a
      // placeResult with only the text input value as the 'name' field.
      // 提案を選択せずに 'Enter' キーを押すと
      // 'name'フィールドとしてテキスト入力値のみを持つplaceResultが返されます。
      fallbackSearch(placeResult.name);
      return;
    }
    searchLocationUpdater(placeResult.formatted_address, placeResult.geometry.location);
  });
}

/** 5. Initialize Distance Matrix for the locator. */
/** ロケータの距離行列を初期化する。 */
function initializeDistanceMatrix(locator) {
  const distanceMatrixService = new google.maps.DistanceMatrixService();

  // Annotate travel times to the selected location using Distance Matrix.
  // 選択した場所までの移動時間をDistance Matrixでアノテーションします。
  locator.updateTravelTimes = function () {
    if (!locator.searchLocation) return;

    const units = locator.userCountry === "USA" ? google.maps.UnitSystem.IMPERIAL : google.maps.UnitSystem.METRIC;
    const request = {
      origins: [locator.searchLocation.location],
      destinations: locator.locations.map(function (x) {
        return x.coords;
      }),
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: units,
    };
    const callback = function (response, status) {
      if (status === "OK") {
        const distances = response.rows[0].elements;
        for (let i = 0; i < distances.length; i++) {
          const distResult = distances[i];
          let travelDistanceText, travelDistanceValue;
          if (distResult.status === "OK") {
            travelDistanceText = distResult.distance.text;
            travelDistanceValue = distResult.distance.value;
          }
          const location = locator.locations[i];
          location.travelDistanceText = travelDistanceText;
          location.travelDistanceValue = travelDistanceValue;
        }

        // Re-render the results list, in case the ordering has changed.
        // 順番が変わった場合に備えて、結果一覧を再描画する。
        locator.renderResultsList();
      }
    };
    distanceMatrixService.getDistanceMatrix(request, callback);
  };
}
