   
// Swiper init
const swiper = new Swiper('.slider', { 
	slidesPerView: 1, 
	loop: true,  
	navigation: {
		nextEl: '.slider-next',
		prevEl: '.slider-prev',
	},
	pagination: {
		el: '.slider-pagination',
		type: 'bullets',
		clickable: true
	},
})