// header effect
    $(document).ready(function() {
        var textWrapper = document.querySelector('.ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: false})
            .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1500,
            delay: (el, i) => 100 * (i+1)
            });
    });
      // zoom effect

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
            1100:{
            items:5,
            loop:true,
            nav:false
            }
        }
        });
    });
      /* cards section floating h3 */
      var leftOffset = parseInt($("#p").css('left')); //Grab the left position
        $(window).scroll(function(){
            $('#p').css({
            'left': $(this).scrollLeft() + leftOffset //Use it later
        });