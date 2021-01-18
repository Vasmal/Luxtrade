//hide tag 'img', show as background-image (css)
function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

$('.user-header__icon').click(function() {
	e.preventDefault();
	$('.user-header__menu').toggleClass('user-header__menu_active');
	//console.log($('.user-header__menu'));
});


//Особое внимание!!!!!

/*$(document).mouseup(function (e){ // событие клика по веб-документу
	let usrmenu = $('.user-header__menu');
	let usricon = $('.user-header__icon');
	
});*/


$('.icon-menu').on("click", function(){
	$(this).toggleClass('active');
	$('.menu-header__nav').toggleClass('active');
	$('body').toggleClass('stopscroll');
});

$('.slider').slick({
	nextArrow: '.slider-controls__next',
	prevArrow: '.slider-controls__prev',
	autoplay: true,
	adaptiveHeight: true,
 });

$('.slider-lots__body').slick({
	slidesToShow: 3,
	autoplay: true,
	//adaptiveHeight: true,
	//centerMode: true,
	centerPadding: '0',
	nextArrow: '.controls-lots-slider__arrow_n',
	prevArrow: '.controls-lots-slider__arrow_p',
	responsive: [
		{
			breakpoint: 860,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: false
			}
		},
		{
			breakpoint: 580,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
	]
});

$('.slider-quotes').slick({
	slidesToShow: 1,
	nextArrow: '.controls-quotes__btn button',
	prevArrow: false,
	fade: true,
	draggable: false,
	swipe: false,
	speed: 1000,
	adaptiveHeight: true
});

function windowSize(){
	if ($(window).width() <= '767'){
		$('.footer__info').appendTo('.footer__body');
		console.log(123);
	} else {
		$('.footer__info').appendTo($('.footer__logo'));
	}
}

$(window).on('load resize',windowSize);

$('.menu-header__link').on('click', function(e){
	var anchor = $(this);
	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top - 75}, 700);
	e.preventDefault();
	return false;
});