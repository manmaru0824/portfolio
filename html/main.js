const worksSwiper = new Swiper(".works_images_swiper", {
  loop: true, // ループする
  // effect: "cube", // キューブのエフェクト
  spaceBetween: 20, // スライド間の余白
  slidesPerView: 3.5, // 画面に表示するスライド数
  centeredSlides: true, // アクティブなスライドを中央に表示
  speed: 6000, // 少しゆっくり(デフォルトは300)
  autoplay: {
    // 自動再生
    delay: 0, // 0秒後に次のスライド
  },
});
// サムネイル
const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 3, // サムネイルの枚数
});
// スライダー
const slider = new Swiper(".slider", {
  loop: true,
  effect: "fade", // フェード
  fadeEffect: {
    //ここにオプションを指定します
    crossFade: true,
  },
  // 前後の矢印
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});
// モーダル
const modalButton = document.querySelectorAll(".swiper-slide"); //.swiper-slideとクラスがある要素を全て取得
modalButton.forEach((button) => {
  // 取得した要素を一つずつ処理
  button.addEventListener("click", () => {
    // クリックしたときに処理を実行
    const activeModal = button.querySelector("img"); // クリックした画像を取得
    const modal = document.querySelector(".modal"); // htmlの下部に記述したモーダルを取得
    const modalImage = document.querySelector(".modal_image"); // モーダル内の空のimg要素を取得
    const modalClose = document.querySelector(".modal_close"); // モーダル内の閉じるボタンを取得
    const body = document.querySelector("body"); // body要素を取得
    modalImage.src = activeModal.src; // クリックした画像のsrcをモーダル内のimg要素に代入
    modal.classList.add("active"); // モーダルにactiveクラスを追加
    body.classList.add("active"); // bodyにactiveクラスを追加
    modalClose.addEventListener("click", () => {
      // 閉じるボタンをクリックしたときに処理を実行
      modal.classList.remove("active"); // モーダルからactiveクラスを削除
      body.classList.remove("active"); // bodyからactiveクラスを削除
    });
  });
});
