import Swiper from 'swiper';
import 'swiper/swiper.css';
const contentSliderBox = document.querySelector(".content-box-second-part");
const contentSwiper = new Swiper(contentSliderBox, {

	slidesPerView: 1,
	spaceBetween:20,

	loop: true,
	loopFillGroupWithBlank: true,
	//не працює
	autoplay: {
		delay: 2000,
	},


})
