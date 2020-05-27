$('#year').text(new Date().getFullYear());

$('body').scrollspy({ target: '#main-nav' });

$('#main-nav a').on('click', function(e) {
	if (this.hash !== '') {
		e.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			900,
			function() {
				window.location.hash = hash;
			}
		);
	}
});

window.onscroll = function() {
	scrollFunction();
	hideNav();
};

//HIDE navbar
var prevScrollpos = window.pageYOffset;

function hideNav() {
	var currentScrollpos = window.pageYOffset;
	if (prevScrollpos > currentScrollpos) {
		//up
		$('#main-nav').css({
			display: 'none'
		});
	} else {
		//down
		$('#main-nav').css({
			display: 'block'
		});
	}

	prevScrollpos = currentScrollpos;
}

//Scroll to TOP
function scrollFunction() {
	if (document.documentElement.scrollTop > 100) {
		$('#topUp').css({
			display: 'block'
		});
	} else {
		$('#topUp').css({
			display: 'none'
		});
	}
}

$('#topUp').click(function() {
	document.documentElement.scrollTop = 0;
});
