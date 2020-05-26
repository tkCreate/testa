// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

$('body').scrollspy({target: '#main-nav'});

// Scrolling
$('#main-nav a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function () {
            window.location.hash = hash;
        });

    }
});

// SCROLL
window.onscroll = function () {
    // When the user scrolls down 100px from the top of the document, show the button
    scrollFunction()
    //hide navbar
    hideNav()
};

//HIDE navbar
var prevScrollpos = window.pageYOffset;

function hideNav() {
    var currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {  //up
        $("#main-nav").css({
            display: 'none',
        })
    } else {  //down
        $("#main-nav").css({
            display: 'block',
        })
    }

    prevScrollpos = currentScrollpos;
}

//Scroll to TOP
function scrollFunction() {
    if (document.documentElement.scrollTop > 100) {
        $("#topUp").css({
            display: 'block',
        })
    } else {
        $("#topUp").css({
            display: 'none',
        })
    }
}

$('#topUp').click(function () {
    // just smooth scroll
    $('html').animate({
        scrollTop: 0
    }, 900);
})