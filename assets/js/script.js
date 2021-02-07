$(document).ready(function() {
	//accordeon
	$(".services__tab-info-container:first").css("display","block");
	$(".services__item").click(function() {
		$(this).find(".services__tab-info-container").slideToggle();
	});
	//slider
	$('.about-us__slider').slick({
  		infinite: true,
  		vertical: true,
  		verticalSwiping: true,
  		slidesToShow: 2,
  		slidesToScroll: 1,
  		adaptiveHeight: true,
  		autoplay: true,
  		autoplaySpeed: 8000,
  		responsive: [
    	{
      		breakpoint: 1124,
      		settings: {
        		slidesToShow: 1,
        		slidesToScroll: 1
      		}
    	}
  		]
	});
	//tabs
	$('.our-team__tabs-wrapper').each(function() {
	let ths = $(this);
	ths.find('.our-team__item').not(':nth-child(2)').hide();
	ths.find('.our-team__tab').click(function() {
		ths.find('.our-team__tab').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.our-team__item').hide().eq($(this).index()).fadeIn()
	}).eq(1).addClass('active');
	});
	// burger-menu
    if(window.matchMedia('(max-width: 769px)').matches){
		$('.header__burger').click(function() {
        	$('.header__burger').toggleClass('open-menu');
        	$(".header__navigation").slideToggle();
    	});
	} else {
		$(".header__navigation").css("display","block");
	};

});
