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

    // intersection observer for scroll effects
    const sections = [...document.querySelectorAll("section")];

    let options = {
        rootMargin: "0px",
        threshold: 0.40
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            const { target } = entry;
            console.log(entry, target)
    
            if (entry.intersectionRatio >= 0.40) {
                target.classList.add("scrolled");
            } else {
                target.classList.remove("scrolled");
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section, index) => {
        observer.observe(section);
    });

    // owl carousel
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
            768:{
            items:3,
            loop:true,
            nav:false
            },
            992:{
            items:4,
            loop:true,
            nav:false
            },
        }
        });
    });