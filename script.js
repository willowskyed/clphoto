    // header effect
    $(document).ready(function() {
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2000,
            delay: (el, i) => 100 * (i+1)
            });
    });
    // nav functionality
    $(document).ready(function() {
        var $toggleButton = $('.toggle-button'),
        $menuWrap = $('.menu-wrap');
    // Hamburger button
    $toggleButton.on('click', function() {
        $(this).toggleClass('button-open');
        $menuWrap.toggleClass('menu-show');
        });
    });

    // intersection observer

const zooms = document.querySelectorAll(".zoom-in");
const zooms2 = document.querySelectorAll(".zoom-in-2");
const zooms3 = document.querySelectorAll(".zoom-in-3");
const zooms4 = document.querySelectorAll(".zoom-in-4");
const zooms5 = document.querySelectorAll(".zoom-in-img");

const options = {
    threshold: 0.7,
    rootMargin: "0px"
};

const zoomOnScroll = new IntersectionObserver(function(
    entries,
    zoomOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove("scrolled");
        } else {
            entry.target.classList.add("scrolled");
        }
    });
},
options);

zooms.forEach(zoom => {
    zoomOnScroll.observe(zoom);
});
zooms2.forEach(zoom => {
    zoomOnScroll.observe(zoom);
});
zooms3.forEach(zoom => {
    zoomOnScroll.observe(zoom);
});
zooms4.forEach(zoom => {
    zoomOnScroll.observe(zoom);
});
zooms5.forEach(zoom => {
    zoomOnScroll.observe(zoom);
});

    // carousel
    $(document).ready(function() {
        $("#owl-demo").owlCarousel({
            lazyLoad: true,
            lazyLoadEager: 4,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 4000,
            animateIn: 'linear',
            animateOut: 'linear',
            responsiveClass:true,
            responsive:{
            0:{
            items:2,
            loop:true,
            nav:false
            },
            769:{
            items:3,
            loop:true,
            nav:false
            },
            992:{
                items:4,
                loop:true,
                nav:false
                },
            1100:{
                items:5,
                loop:true,
                nav:false
                },
        }
        });
    });