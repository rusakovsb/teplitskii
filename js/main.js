   
// Swiper
const topSlider = new Swiper('.top-slider', { 	 
	loop: true,  
	speed: 500,
	effect: "fade",
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: {
		delay: 3000,
	},
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
})
const itemSlider = new Swiper('.item-slider', { 
	loop: true,
	speed: 500,
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
	breakpoints: {
		320: {
		  slidesPerView: 1,
		  spaceBetween: 16,
		},
		768: {
		  slidesPerView: 3,
		  spaceBetween: 16,
		},
		1200: {
		  slidesPerView: 3,
		  spaceBetween: 32,
		},
	  }
})