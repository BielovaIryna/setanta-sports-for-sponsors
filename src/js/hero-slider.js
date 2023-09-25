import Swiper from 'swiper';
import 'swiper/swiper.css';
const heroSwiperEl=document.querySelector(".hero-swiper")

const heroSwiper = new Swiper (heroSwiperEl,{
	direction: 'horizontal',
	loop:true,
  loopFillGroupWithBlank: true,
	//autoplay не працює????
	autoplay:{
		delay:2000,
		// disableOnInteraction:false,
		
	 },

	slidesPerView: 4,
  	spaceBetween: 5,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 6,
      spaceBetween: 5
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 8,
      spaceBetween: 5
    },
    on:{
      init:function(){
        console.log("Swiper initialization");
      },
      slideChange:function(){
        console.log("Slide change");
      }
    }
  },
  
	
	
})
