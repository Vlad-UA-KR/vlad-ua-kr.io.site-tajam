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

		$('.navigation__burger, .navigation__menu').removeClass('active');
		$('body').removeClass('lock');
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