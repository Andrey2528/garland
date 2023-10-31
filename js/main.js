jQuery(document).ready(function ($) {
	$(".mainmenu-area").sticky({ topSpacing: 0 });

	$('.product-carousel').owlCarousel({
		loop: false,
		nav: false,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
				loop: false
			}
		}
	});

	$('.related-products-carousel').owlCarousel({
		loop: true,
		nav: true,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	// Bootstrap Mobile Menu fix
	$(".navbar-nav li a").click(function () {
		$(".navbar-collapse").removeClass('in');
	});

	// jQuery Scroll effect
	$('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
		var $anchor = $(this);
		var headerH = $('.header-area').outerHeight();
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});

	// Bootstrap ScrollPSY
	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 95
	});

	function updateTimer(timerContainer) {
		const hoursElement = timerContainer.querySelector('.hours');
		const minutesElement = timerContainer.querySelector('.minutes');
		const secondsElement = timerContainer.querySelector('.seconds');

		const now = new Date();
		const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

		const timeDifference = endOfDay - now;

		const hours = Math.floor(timeDifference / 3600000);
		const minutes = Math.floor((timeDifference % 3600000) / 60000);
		const seconds = Math.floor((timeDifference % 60000) / 1000);

		hoursElement.textContent = hours.toString().padStart(2, '0');
		minutesElement.textContent = minutes.toString().padStart(2, '0');
		secondsElement.textContent = seconds.toString().padStart(2, '0');
	}

	const timerContainers = document.querySelectorAll('.timer-container');

	timerContainers.forEach((timerContainer) => {
		setInterval(() => {
			updateTimer(timerContainer);
		}, 1000);

		updateTimer(timerContainer);
	});
});

