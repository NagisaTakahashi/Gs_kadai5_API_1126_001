//店舗の場所一覧はデータベース的属性のもののため暫定的にファイルを分けて処理（ゆくゆくDBに移管したい）


const CONFIGURATION = {
  "locations": [

    {
      title: "IENA ルミネ新宿店",
      address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 3F",
      coords: { lat: 35.68930403659601, lng: 139.69925114110447 },
      placeId: "ChIJiW2k-dCMGGARKmuQTAfCx7w",
      iconPath: "img/pins/pin_iena.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "SLOBE IENA ルミネエスト新宿店",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト B2F",
      coords: { lat: 35.69133832116103, lng: 139.70095187790986},
      placeId: "ChIJBZj3ptCMGGARFBKQKbKfxJ4",
      iconPath: "img/pins/pin_slobeiena.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "イエナ LA BOUCLE (NEWoman新宿店)",
      address1: "日本、〒160-0006 東京都新宿区新宿４丁目１−６ NEWoMan 4F",
      coords: { lat: 35.68898610493874, lng: 139.70191539140166},
      placeId: "ChIJ9TsfyNqMGGAR5c_q14Lc_u0",
      iconPath: "img/pins/pin_ienalaboucle.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "NOBLE ルミネ新宿店",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 2F",
      coords: { lat: 35.689458130657556, lng: 139.70078155284804},
      placeId: "ChIJY7Dfh9CMGGARV-_YzvZua08",
      iconPath: "img/pins/pin_noble.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "U by SPICK&SPAN 新宿ルミネ店",
      address1: "日本、〒160-0022 東京都新宿区新宿3丁目38-38番2号 ルミネ ルミネ2 2階",
      coords: { lat: 35.689499531486234, lng: 139.7009457472908},
      placeId: "ChIJ3XJO1ReNGGARohpKMsHYZ4w",
      iconPath: "img/pins/pin_ubyspickandspan.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "ユナイテッドアローズ 新宿店",
      address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿 ルミネ 1 B1・1F",
      coords: { lat: 35.689013620308394, lng: 139.699293982209},
      placeId: "ChIJlQav-dCMGGARwHH5lGm7RgE",
      iconPath: "img/pins/pin_unitedarrows.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "ビューティ＆ユース ユナイテッドアローズ 新宿ウィメンズストア",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト新宿 B2F",
      coords: { lat: 35.6912055673305, lng: 139.70106650859833},
      placeId: "ChIJBZj3ptCMGGAR7G8Emu3zDKE",
      iconPath: "img/pins/pin_beautyandyouth.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "FRAMeWORK ルミネ新宿",
      address1: "日本、〒160-0022 東京都新宿区西新宿１丁目１−５ ルミネ1 3F",
      coords: { lat: 35.68898827739082, lng: 139.69917237605742},
      placeId: "ChIJC3G5zT6NGGARP2jjKZiGMwg",
      iconPath: "img/pins/pin_framework.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "JOURNAL STANDARD relume ルミネ新宿店",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F",
      coords: { lat: 35.689609327789825, lng: 139.7012810615158},
      placeId: "ChIJE1VfiNCMGGARBsjkbeIB9x0",
      iconPath: "img/pins/pin_journalstandardrelume.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "アダム エ ロペ ルミネ新宿 ルミネ２",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F",
      coords: { lat: 35.68971572458533, lng: 139.70122864113924},
      placeId: "ChIJ_d8vidCMGGARCyb4d8okMss",
      iconPath: "img/pins/pin_adametrope.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "JOURNAL STANDARD 新宿Flags店",
      address1: "日本、〒160-0022 東京都新宿区新宿３丁目３７−１ Flags2F",
      coords: { lat: 35.690039690175986, lng: 139.7015725085983},
      placeId: "ChIJqf_IROyNGGARSl1qhsfxrqM",
      iconPath: "img/pins/pin_journalstandard.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "Deuxieme Classe ルミネ新宿店",
      address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 2F",
      coords: { lat: 35.68920808923628, lng: 139.69933755092617},
      placeId: "ChIJiW2k-dCMGGARPIXkuR0fIG8",
      iconPath: "img/pins/pin_deuxiemeclass.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    {
      title: "Spick & Span / Lilas ルミネ新宿店（Lilas 取扱店）",
      address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 4F",
      coords: { lat: 35.68913818380376, lng: 139.69950765218428},
      placeId: "ChIJ85TLG7GNGGARyJ3lVt0ZQtw",
      iconPath: "img/pins/pin_spickandspan.png",
      iconSizeWidth: 40,
      iconSizeHeight: 56.127,
      iconPointX: 0,
      iconPointY: 0,
    },

    // {"title":"IENA ルミネ新宿店","address1":"日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 3F","coords":{"lat":35.68930403659601,"lng":139.69925114110447},"placeId":"ChIJiW2k-dCMGGARKmuQTAfCx7w"},
    // {"title":"SLOBE IENA ルミネエスト新宿店","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト B2F","coords":{"lat":35.69133832116103,"lng":139.70095187790986},"placeId":"ChIJBZj3ptCMGGARFBKQKbKfxJ4"},
    // {"title":"イエナ LA BOUCLE (NEWoman新宿店)","address1":"日本、〒160-0006 東京都新宿区新宿４丁目１−６ NEWoMan 4F","coords":{"lat":35.68898610493874,"lng":139.70191539140166},"placeId":"ChIJ9TsfyNqMGGAR5c_q14Lc_u0"},
    // {"title":"NOBLE ルミネ新宿店","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 2F","coords":{"lat":35.689458130657556,"lng":139.70078155284804},"placeId":"ChIJY7Dfh9CMGGARV-_YzvZua08"},
    // {"title":"U by SPICK&SPAN 新宿ルミネ店","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−38番2号 ルミネ ルミネ2 2階","coords":{"lat":35.689499531486234,"lng":139.7009457472908},"placeId":"ChIJ3XJO1ReNGGARohpKMsHYZ4w"},
    // {"title":"ユナイテッドアローズ 新宿店","address1":"日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿 ルミネ 1 B1・1F","coords":{"lat":35.689013620308394,"lng":139.699293982209},"placeId":"ChIJlQav-dCMGGARwHH5lGm7RgE"},
    // {"title":"ビューティ＆ユース ユナイテッドアローズ 新宿ウィメンズストア","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト新宿 B2F","coords":{"lat":35.6912055673305,"lng":139.70106650859833},"placeId":"ChIJBZj3ptCMGGAR7G8Emu3zDKE"},
    // {"title":"FRAMeWORK ルミネ新宿","address1":"日本、〒160-0022 東京都新宿区西新宿１丁目１−５ ルミネ1 3F","coords":{"lat":35.68898827739082,"lng":139.69917237605742},"placeId":"ChIJC3G5zT6NGGARP2jjKZiGMwg"},
    // {"title":"JOURNAL STANDARD relume ルミネ新宿店","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F","coords":{"lat":35.689609327789825,"lng":139.7012810615158},"placeId":"ChIJE1VfiNCMGGARBsjkbeIB9x0"},
    // {"title":"アダム エ ロペ ルミネ新宿 ルミネ２","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F","coords":{"lat":35.68971572458533,"lng":139.70122864113924},"placeId":"ChIJ_d8vidCMGGARCyb4d8okMss"},
    // {"title":"JOURNAL STANDARD 新宿Flags店","address1":"日本、〒160-0022 東京都新宿区新宿３丁目３７−１ Flags2F","coords":{"lat":35.690039690175986,"lng":139.7015725085983},"placeId":"ChIJqf_IROyNGGARSl1qhsfxrqM"},
    // {"title":"Deuxieme Classe ルミネ新宿店","address1":"日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 2F","coords":{"lat":35.68920808923628,"lng":139.69933755092617},"placeId":"ChIJiW2k-dCMGGARPIXkuR0fIG8"},
    // {"title":"Spick & Span / Lilas ルミネ新宿店（Lilas 取扱店）","address1":"日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 4F","coords":{"lat":35.68913818380376,"lng":139.69950765218428},"placeId":"ChIJ85TLG7GNGGARyJ3lVt0ZQtw"}
  ],

  "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":21,"mapId":"3c2b35fc8f222ef2"},
  "mapsApiKey": "一時的に削除",
  "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false,"actions":false}
};

function initMap() {
  new LocatorPlus(CONFIGURATION);
}


console.log(CONFIGURATION.locations[0],"店舗リストの１番目");


