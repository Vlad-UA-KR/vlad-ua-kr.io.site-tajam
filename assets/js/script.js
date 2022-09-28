$(function () {

	$('.header__slider').slick({
		slidesToShow: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000
	})
});

$(function () {

	$('.navigation').click(function (e) {

		if ($(e.target.closest('div')).hasClass('navigation__burger')) {
			$('.navigation__burger, .navigation__menu').toggleClass('active');
			$('body').toggleClass('lock');
			return
		};

		if ($(e.target.closest('a')).hasClass('navigation__link')) {
			$('.navigation__burger, .navigation__menu').removeClass('active');
			$('body').removeClass('lock');
			return
		};
	})
});

$(function () {

	$('.load').click(function (e) {
		e.preventDefault();

		for (let i = 0; i < 6; i++) {
			$('.works__content-container').append('<img src="./img/works_image.png" alt="pika">');
		}
	})
})

$(function () {

	$('.slider-page__slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		initialSlide: 2,
		asNavFor: '.slider-page__slider-nav',
		infinite: false
	});

	$('.slider-page__slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 2,
		variableWidth: true,
		asNavFor: '.slider-page__slider-for',
		centerMode: true,
		focusOnSelect: true,
		speed: 500,
		prevArrow: '<i class="prevArr fa-solid fa-chevron-left"></i>',
		nextArrow: '<i class="nextArr fa-solid fa-chevron-right"></i>',
		infinite: false
	});
})