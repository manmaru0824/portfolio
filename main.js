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
