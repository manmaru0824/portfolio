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

const booksSwiper = new Swiper(".works_books_swiper", {
	loop: true,
	// effect: "coverflow",
	spaceBetween: 20,
	slidesPerView: 3.5,
	centeredSlides: true,
	autoPlay: true,
	speed: 6000,
	autoplay: {
		delay: 0,
		reverseDirection: true, // 逆方向にスライド
	},
});

const cardsSwiper = new Swiper(".works_cards_swiper", {
	loop: true,
	// effect: "flip",
	spaceBetween: 20,
	slidesPerView: 3.5,
	centeredSlides: true,
	autoPlay: true,
	speed: 1000,
	autoplay: {
		delay: 1500,
	},
});
