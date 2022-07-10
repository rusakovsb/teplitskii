   
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
});

const itemSlider = new Swiper('.item-slider', { 
	loop: true,
	speed: 500,
	spaceBetween: 24,
	navigation: {
		nextEl: '.item-slider-nav-next',
		prevEl: '.item-slider-nav-prev',
	},
	breakpoints: {
		320: {
		  slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		1200: {
		  slidesPerView: 3,		  
		},
	}
});

const itemGalleryThumbs = new Swiper('.item-gallery-thumbs', { 
	speed: 500,
	spaceBetween: 24,
    slidesPerView: 4,
});

const itemGallery = new Swiper('.item-gallery', { 
	speed: 500,
	spaceBetween: 24,
	thumbs: {
		swiper: itemGalleryThumbs,
	},
});

// Nav
(function ($) {
	$(".nav-toggle").click(function() {               
        if(!$(this).hasClass("active")) {  
            $(this).addClass("active");          
            $(".nav-bar").fadeIn();
        }
        else {      
            $(this).removeClass("active");      
            $(".nav-bar").fadeOut()
        }
    });	
})(jQuery);