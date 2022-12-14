
//テーマ：①functionでまとめる②JSファイルの中で共通で使える変数を持ってみる



const itemCategory = ["tops","bottoms","one-piece","outer","inner","shoes","bag","leg-wear","accessory","other"];

// "IENA",
// "SLOBE IENA",
// "IENA LA BOUCLE",
// "noble",
// "spick&span",
// "U by Spick&Span",
// "UNITED ARROWS",
// "BEAUTY&YOUTH united arrows",
// "adam et rope",
// "FRAMe WORK",
// "Deuxieme Class",
// "JOURNAL STANDARD relume"


const brandlist = [

  {
    //店舗リスト用
    num: "001",
    brand: "IENA",
    foldername: "iena",
    storename_01: "<span>IENA</span><span>新宿ルミネ店</span>",
    storeplace_01: "<span>ルミネ新宿1/ 3F</span>",
    storename_02:"<span>IENA EDIFICE LA BOUCLE</span><br><span>NEWoMan新宿店</span>",
    storeplace_02:"<span>NEWoMan新宿 / 4F</span>",

    // //MAP用
    // title: "IENA ルミネ新宿店",
    // address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 3F",
    // coords: { lat: 35.68930403659601, lng: 139.69925114110447 },
    // placeId: "ChIJiW2k-dCMGGARKmuQTAfCx7w",
    // iconPath: "img/pins/pin_iena.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


  {
    //店舗リスト用
    num: "002",
    brand: "SLOBE IENA",
    foldername: "slobeiena",
    storename_01: "<span>SLOBE IENA</span><span>ルミネエスト新宿店</span>",
    storeplace_01: "<span>ルミネエスト/ B2F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用
    // title: "SLOBE IENA ルミネエスト新宿店",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト B2F",
    // coords: { lat: 35.69133832116103, lng: 139.70095187790986},
    // placeId: "ChIJBZj3ptCMGGARFBKQKbKfxJ4",
    // iconPath: "img/pins/pin_slobeiena.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {
    //店舗リスト用
    num: "003",
    brand: "IENA LA BOUCLE",
    foldername: "ienalaboucle",
    storename_01: "<span>IENA EDIFICE LA BOUCLE</span><span>NEWoMan新宿店</span>",
    storeplace_01: "<span>NEWoMan新宿 / 4F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用
    // title: "イエナ LA BOUCLE (NEWoman新宿店)",
    // address1: "日本、〒160-0006 東京都新宿区新宿４丁目１−６ NEWoMan 4F",
    // coords: { lat: 35.68898610493874, lng: 139.70191539140166},
    // placeId: "ChIJ9TsfyNqMGGAR5c_q14Lc_u0",
    // iconPath: "img/pins/pin_ienalaboucle.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {
    //店舗リスト用
    num: "004",
    brand: "NOBLE",
    foldername: "noble",
    storename_01: "<span>NOBLE</span><span>ルミネ新宿店</span>",
    storeplace_01: "<span>ルミネ新宿2 / 2F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用
    // title: "NOBLE ルミネ新宿店",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 2F",
    // coords: { lat: 35.689458130657556, lng: 139.70078155284804},
    // placeId: "ChIJY7Dfh9CMGGARV-_YzvZua08",
    // iconPath: "img/pins/pin_noble.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


  {
    //店舗リスト用
    num: "005",
    brand: "U by SPICK&SPAN",
    foldername: "ubyspickandspan",
    storename_01: "<span>U by SPICK&SPAN</span><span>新宿ルミネ店</span>",
    storeplace_01: "<span>ルミネ2 / 2F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用
    // title: "U by SPICK&SPAN 新宿ルミネ店",
    // address1: "日本、〒160-0022 東京都新宿区新宿3丁目38-38番2号 ルミネ ルミネ2 2階",
    // coords: { lat: 35.689499531486234, lng: 139.7009457472908},
    // placeId: "ChIJ3XJO1ReNGGARohpKMsHYZ4w",
    // iconPath: "img/pins/pin_ubyspickandspan.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


  {
    //店舗リスト用
    num: "006",
    brand: "UNITED ARROWS",
    foldername: "unitedarrows",
    storename_01: "<span>UNITED ARROWS</span><span>新宿店</span>",
    storeplace_01: "<span>ルミネ1 / B1・1F</span>",
    storename_02: "<span>BEAUTY&YOUTH United Arrows</span><span>新宿ウィメンズストア</span>",
    storeplace_02: "<span>ルミネエスト / B2F</span>",

    // //MAP用
    // title: "ユナイテッドアローズ 新宿店",
    // address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿 ルミネ1 B1・1F",
    // coords: { lat: 35.689013620308394, lng: 139.699293982209},
    // placeId: "ChIJlQav-dCMGGARwHH5lGm7RgE",
    // iconPath: "img/pins/pin_unitedarrows.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


  {
    //店舗リスト用
    num: "007",
    brand: "BEAUTY&YOUTH united Arrows",
    foldername: "beautyandyouth",
    storename_01: "<span>BEAUTY&YOUTH United Arrows</span><span>新宿ウィメンズストア</span>",
    storeplace_01: "<span>ルミネエスト / B2F</span>",
    storename_02: "<span>UNITED ARROWS</span><span>新宿店</span>",
    storeplace_02: "<span>ルミネ1 / B1・1F</span>",

    // //MAP用    
    // title: "ビューティ＆ユース ユナイテッドアローズ 新宿ウィメンズストア",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−１ ルミネエスト新宿 B2F",
    // coords: { lat: 35.6912055673305, lng: 139.70106650859833},
    // placeId: "ChIJBZj3ptCMGGAR7G8Emu3zDKE",
    // iconPath: "img/pins/pin_beautyandyouth.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {    
    //店舗リスト用
    num: "008",
    brand: "FRAMeWORK",
    foldername: "framework",
    storename_01: "<span>FRAMeWORK</span><span>ルミネ新宿</span>",
    storeplace_01: "<span>ルミネ1 / 3F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "FRAMeWORK ルミネ新宿",
    // address1: "日本、〒160-0022 東京都新宿区西新宿１丁目１−５ ルミネ1 3F",
    // coords: { lat: 35.68898827739082, lng: 139.69917237605742},
    // placeId: "ChIJC3G5zT6NGGARP2jjKZiGMwg",
    // iconPath: "img/pins/pin_framework.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {
    //店舗リスト用
    num: "009",
    brand: "JOURNAL STANDARD relume",
    foldername: "journalstandardrelume",
    storename_01: "<span>JOURNAL STANDARD relume</span><span>ルミネ新宿店</span>",
    storeplace_01: "<span>ルミネ新宿2 / 4F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "JOURNAL STANDARD relume ルミネ新宿店",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F",
    // coords: { lat: 35.689609327789825, lng: 139.7012810615158},
    // placeId: "ChIJE1VfiNCMGGARBsjkbeIB9x0",
    // iconPath: "img/pins/pin_journalstandardrelume.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {
    //店舗リスト用
    num: "010",
    brand: "adam et Rope",
    foldername: "adametrope",
    storename_01: "<span>adam et Rope</span><span>ルミネ新宿</span>",
    storeplace_01: "<span>ルミネ新宿2 / 4F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "アダム エ ロペ ルミネ新宿 ルミネ２",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３８−２ ルミネ新宿2 4F",
    // coords: { lat: 35.68971572458533, lng: 139.70122864113924},
    // placeId: "ChIJ_d8vidCMGGARCyb4d8okMss",
    // iconPath: "img/pins/pin_adametrope.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

  {
    //店舗リスト用
    num: "011",
    brand: "JOURNAL STANDARD",
    foldername: "journalstandard",
    storename_01: "<span>JOURNAL STANDARD</span><span>新宿Flags店</span>",
    storeplace_01: "<span>新宿Flags / 2F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "JOURNAL STANDARD 新宿Flags店",
    // address1: "日本、〒160-0022 東京都新宿区新宿３丁目３７−１ Flags 2F",
    // coords: { lat: 35.690039690175986, lng: 139.7015725085983},
    // placeId: "ChIJqf_IROyNGGARSl1qhsfxrqM",
    // iconPath: "img/pins/pin_journalstandard.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


{
    //店舗リスト用
    num: "012",
    brand: "Deuxieme Classe",
    foldername: "deuxiemeclasse",
    storename_01: "<span>Deuxieme Classe</span><span>ルミネ新宿店</span>",
    storeplace_01: "<span>ルミネ新宿1 / 2F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "Deuxieme Classe ルミネ新宿店",
    // address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 2F",
    // coords: { lat: 35.68920808923628, lng: 139.69933755092617},
    // placeId: "ChIJiW2k-dCMGGARPIXkuR0fIG8",
    // iconPath: "img/pins/pin_deuxiemeclass.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },


  {
    //店舗リスト用
    num: "013",
    brand: "Spick & Span",
    foldername: "spickandspan",
    storename_01: "<span>Spick & Span</span><span>ルミネ新宿店</span>",
    storeplace_01: "<span>ルミネ新宿1 / 4F</span>",
    storename_02: null,
    storeplace_02: null,

    // //MAP用 
    // title: "Spick & Span / Lilas ルミネ新宿店（Lilas 取扱店）",
    // address1: "日本、〒160-0023 東京都新宿区西新宿１丁目１−５ ルミネ新宿1 4F",
    // coords: { lat: 35.68913818380376, lng: 139.69950765218428},
    // placeId: "ChIJ85TLG7GNGGARyJ3lVt0ZQtw",
    // iconPath: "img/pins/pin_spickandspan.png",
    // iconSizeWidth: 40,
    // iconSizeHeight: 56.127,
    // iconPointX: 0,
    // iconPointY: 0,
  },

];




//初期表示設定
//Filter

for (let i = 0; i < itemCategory.length; i++){
  
  //上部Filterへのアイテムカテゴリー代入
  let filter_span = `
  <span>${itemCategory[i]}</span>
  `;
  $("#filter").append(filter_span); 

};

//初期表示設定
//お気に入り登録済みブランド商品


for (let i = 0; i < brandlist.length; i++){

  console.log(brandlist[i].brand);

  //ブランド単位のセグメントの追加
  let brand_wrapper = `

 
  <li class="brand_wrapper">

    <div class="store_wrapper">

      <div class="brand_name">
        <input type="checkbox" name="brand_name_checkbox" 
        value="${brandlist[i].brand}"
        class="brand_cbx" 
        id="cbx-brand-${brandlist[i].num}">

        <label for="cbx-brand-${brandlist[i].num}">${brandlist[i].brand}</label>
      </div>


      <div class="store_name" id="brand_${brandlist[i].num}-store">

        <div class="store_item">
          <input type="checkbox" name="cbx-brand-${brandlist[i].num}-store" 
          value="${brandlist[i].storename_01}"
          class="store_cbx cbx-brand-${brandlist[i].num}-store" 
          id="cbx-brand-${brandlist[i].num}-store-001">

          <div class="store_name_text">
            <label for="cbx-store-001">${brandlist[i].storename_01}</label>
            <p class="checkbox-note">(<img src="img/icon_store.svg" alt="">${brandlist[i].storeplace_01})</p>
          </div>
        </div>

        <div class="store_item">
          <input type="checkbox" name="cbx-brand-${brandlist[i].num}-store" 
          value="${brandlist[i].storename_02}"
          class="store_cbx cbx-brand-${brandlist[i].num}-store" 
          id="cbx-brand-${brandlist[i].num}-store-002">

          <div class="store_name_text">
            <label for="cbx-store-002">${brandlist[i].storename_02}</label>
            <p class="checkbox-note">(<img src="img/icon_store.svg" alt="">${brandlist[i].storeplace_02})</p>
          </div>
        </div>

      </div>

    </div>

    <div class="item_wrapper">
      <div class="item_card">
        <img src="img/item/${brandlist[i].foldername}/favorite_01.jpg" alt="">
        <div class="item-name"><p>商品名</p></div>
        <div class="item_SKU"><p>カラー/サイズ</p></div>
        <div class="item_price"><p>価格</p></div>
      </div>
      <div class="item_card">
        <img src="img/item/${brandlist[i].foldername}/favorite_02.jpg" alt="">
        <div class="item-name"><p>商品名</p></div>
        <div class="item_SKU"><p>カラー/サイズ</p></div>
        <div class="item_price"><p>価格</p></div>
      </div>
      <div class="item_card">
        <img src="img/item/${brandlist[i].foldername}/favorite_03.jpg" alt="">
        <div class="item-name"><p>商品名</p></div>
        <div class="item_SKU"><p>カラー/サイズ</p></div>
        <div class="item_price"><p>価格</p></div>
      </div>
      <div class="item_card">
        <img src="img/item/${brandlist[i].foldername}/favorite_04.jpg" alt="">
        <div class="item-name"><p>商品名</p></div>
        <div class="item_SKU"><p>カラー/サイズ</p></div>
        <div class="item_price"><p>価格</p></div>
      </div>
    </div>

  </li>
  
  `;

  $(".brand-list").append(brand_wrapper);
};


// ブランド名のチェックボックスをONにするとストア名もONになる

$(function() {
  for (let i = 0; i < brandlist.length; i++){
    // 「全選択」する
    $(`#cbx-brand-${brandlist[i].num}`).on('click', function() {
      $(`input[name="cbx-brand-${brandlist[i].num}-store"]`).prop('checked', this.checked);
    });

    // 「全選択」以外の子チェックボックスがクリックされたら、
    $(`input[name="cbx-brand-${brandlist[i].num}-store"]`).on('click', function() {
      if ($(`#brand_${brandlist[i].num}-store :checked`).length == $(`#brand_${brandlist[i].num}-store :input`).length) {
        // 全ての子チェックボックスにチェックが入っていたら、親「全選択」 = checked(true)
        $(`#cbx-brand-${brandlist[i].num}`).prop('checked', true);
      } else {
        // それ以外（1つでも2つでもチェックが入っていたら）、親「全選択」 = checked解除(false)
        $(`#cbx-brand-${brandlist[i].num}`).prop('checked', false);
      }
    });

  }
});

//参考URL:https://agohack.com/checkbox-all-selected/



//選択された店舗のみ抜粋して表示する


//チェックボックスのcheckedを取得
// $('input[type="checkbox"]').prop('checked');

//チェックボックスをチェックしたら発動
$('input[type="checkbox"]').change(function() {

  //prop()でチェックの状態を取得し変数に格納
  const prop = $(this).prop('checked');
  //そのチェック状態のvalue値を取得し変数に格納
  const val = $(this).val();

  //上記で取得した変数をテキストに出力
  console.log(val,prop);

    //prop=trueなもののみを全て取得して変数に格納する

    for (let i = 0; i < brandlist.length; i++){
    let checked_store = $(`input[name=cbx-brand-${brandlist[i].num}-store]:checked`);
    console.log(checked_store);

    //checked_store=１店舗以上にチェックが入っているとき
    // if( 0 < checked_store.length ) {
    //   for(let checked_data of checked_store) {
    //     console.log(checked_data.value,prop); 
    //   }
      let array = [];
      array =  $(`brand_${brandlist[i].num}-store`).val();
      console.log('選択された店舗 : ', array);
    }
    // console.log(checked_store);
  }
// }
); 


// $(function() {

//   for (let i = 0; i < brandlist.length; i++){

//   let selectedVals = [];
//   selectedVals = $(`brand_${brandlist[i].num}-store`).val();
//   console.log('selectedVals : ', selectedVals);

// //     $('input[type="checkbox"]').change(function() {
// //       // 配列を宣言
// //       const arr = [];
      
// //       $(`input[name=cbx-brand-${brandlist[i].num}-store]:checked`).each(function(){
// //           // チェックされている選択肢の値を配列に格納
// //           arr.push($(this).val());
// //       });

// //       console.log(arr);

// //     })
//   }
// });



// let selectedVals = [];
// selectedVals = $(`brand_${brandlist[i].num}-store`).val();
// console.log('selectedVals : ', selectedVals);




// 参考URL:https://www.flatflag.nir87.com/prop-1812
// 参考URL:https://gray-code.com/javascript/get-only-selected-checkboxes/



//googlemapのマーカーのうちcheckedのみ再レンダリング





//今後の改修したいところ
//①nullの店舗を消したい（仮説→テンプレートリテラルを分割してDivで挟む？）
//②店舗にリンクとモーダルを付けたい（例：IENAルミネ店をクリックすると、店舗情報が見れる）
//写真（店舗の雰囲気「あ〜ここね！」がわかる、営業時間、ルミネのフロアガイド（階数と場所）、、）





