(function($) {
    "use strict";
     $(document).on('ready', function() {
	
        jQuery(window).on('scroll', function() {
			if ($(this).scrollTop() > 200) {
				$('#header .header-inner').addClass("sticky");
			} else {
				$('#header .header-inner').removeClass("sticky");
			}
		});
		
		
		$(function(){
			$('#nav').slicknav({
				'label' : '',
				'prependTo': '.mobile-menu',
				
			});
		});

		$('.testimonial-slider').owlCarousel({
			items:1,
			autoplay:false,
			autoplayTimeout:4500,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			animateIn:'bounceInRight',
			animateOut:'bounceOutRight',
			loop:true,
			merge:true,
			nav:false,
			dots:true,
		});
		
		
		$('.clients-slider').owlCarousel({
			autoplay:true,
			autoplayTimeout:4500,
			margin:15,
			smartSpeed: 1000,
			autoplayHoverPause:true,
			loop:true,
			nav:true,
			dots:false,
			responsive:{
				300: {
					items:1,
				},
				480: {
					items:2,
				},
				768: {
					items:3,
					nav:false,
				},
				1170: {
					items:5,
					nav:true,
				}
			}
		});
		
		$('.progress.two .progress-bar').each(function () {
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition': 'width 3s'
			});
			setTimeout(function () {
				$this.appear(function () {
					$this.css('width', width + '%');
				});
			}, 500);
		});
	
		
		if ($.fn.onePageNav) {
			$('#nav').onePageNav({
				currentClass: 'current',
				scrollSpeed: 1000,
				easing: 'easeInOutQuart'
			});
		}
		
		

		$('.video-popup').magnificPopup({
			type: 'video',	
		});
		
		var wow = new WOW(
		{
			boxClass:     'wow',
			animateClass: 'animated', 
			offset:       0,
			mobile:       false,
			live:         true,
			callback:     function(box) {

			},
			scrollContainer: null
		  }
		);
		wow.init();
		
		$(window).on('load', function() {
			
			if ($.fn.isotope) {
                $(".isotop-active").isotope({
                    filter: '*',
                });

					$('.works-menu ul li').on('click', function() {
                    $(".works-menu ul li").removeClass("active");
                    $(this).addClass("active");

                    var selector = $(this).attr('data-filter');
                    $(".isotop-active").isotope({
                        filter: selector,
                        animationOptions: {
                            duration: 750,
                            easing: 'easeOutCirc',
                            queue: false,
                        }
                    });
                    return false;
                });
            }
		});
		
		$('a').on('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top -0 
			}, 1000, 'easeInOutQuart');
			event.preventDefault();
		});
		

		$.scrollUp({
			scrollName: 'scrollUp',
			scrollDistance: 300,
			scrollFrom: 'top',
			scrollSpeed: 1000,
			easingType: 'easeInOutQuart',
			animationSpeed: 200,
			scrollTrigger: false,
			scrollTarget: false, 
			scrollText: ["<i class='fa fa-angle-up'></i>"],
			scrollTitle: false,
			scrollImg: false,
			activeOverlay: false,
			zIndex: 2147483647
		});
	});
	
})(jQuery);
