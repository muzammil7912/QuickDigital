AOS.init();

var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".rightarrow",
        prevEl: ".leftarrow",
    },
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 90,
    centeredSlides: true,

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
    navigation: {
        nextEl: ".section10Button__right",
        prevEl: ".section10Button__left",
    },
});



let swiper_slidetes = $('.swiper-slidetes:nth-child(1)')
let swiper_slideteslast = $('.swiper-slidetes:last-child')
var swiper3 = new Swiper(".mySwiper3", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },


    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
});
var swiper4 = new Swiper(".mySwiper4", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiperbutton__Right",
        prevEl: ".swiperbutton__Left",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

var swiper5 = new Swiper(".section5MainSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

function ResponsiveFunction() {



}




$(".header__right-nav").click(function() {
    $(".header__right").toggleClass("active");
})
$(document).on("click", ".closeIcon", function() {
    $(".header__right").removeClass("active");
    $(".header__right li").removeClass("active");
});
$(document).on("click", ".header__right li", function() {
    $(this).addClass("active");
});



// URL se "language" parameter ko get karne ka function
function getLanguageParameter() {
    // URL ko hasil karein
    var url = new URL(window.location.href);
    // "language" parameter ko get karein
    var language = url.searchParams.get("language");
    return language;
}

// "language" parameter ko hasil karein
var language = getLanguageParameter();

// Agar "language" parameter mojud hai
if (language) {
    $("body").addClass("arabic")
} else {
    console.log("Language parameter not found in the URL.");
}

// counter
var a = 0;
$(window).scroll(function() {
    //var oTop = $('#counter').offset().top - window.innerHeight;
    // if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
    });
    a = 1;
    //}
});
// counter


// Define smooth scrolling animation using GSAP

// smooth scroll start
// $(document).ready(function() {
//     jQuery.scrollSpeed(200, 2000);
// });
// (function($) {
//     jQuery.scrollSpeed = function(step, speed, easing) {
//         var $document = $(document),
//             $window = $(window),
//             $body = $('html, body'),
//             option = easing || 'default',
//             root = 0,
//             scroll = false,
//             scrollY, scrollX, view;
//         if (window.navigator.msPointerEnabled) return false;
//         $window.on('mousewheel DOMMouseScroll', function(e) {
//             var deltaY = e.originalEvent.wheelDeltaY,
//                 detail = e.originalEvent.detail;
//             scrollY = $document.height() > $window.height();
//             scrollX = $document.width() > $window.width();
//             scroll = true;
//             if (scrollY) {
//                 view = $window.height();
//                 if (deltaY < 0 || detail > 0) root = (root + view) >= $document.height() ? root : root += step;
//                 if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : root -= step;
//                 $body.stop().animate({
//                     scrollTop: root
//                 }, speed, option, function() {
//                     scroll = false;
//                 });
//             }
//             if (scrollX) {
//                 view = $window.width();
//                 if (deltaY < 0 || detail > 0) root = (root + view) >= $document.width() ? root : root += step;
//                 if (deltaY > 0 || detail < 0) root = root <= 0 ? 0 : root -= step;
//                 $body.stop().animate({
//                     scrollLeft: root
//                 }, speed, option, function() {
//                     scroll = false;
//                 });
//             }
//             return false;
//         }).on('scroll', function() {
//             if (scrollY && !scroll) root = $window.scrollTop();
//             if (scrollX && !scroll) root = $window.scrollLeft();
//         }).on('resize', function() {
//             if (scrollY && !scroll) view = $window.height();
//             if (scrollX && !scroll) view = $window.width();
//         });
//     };
//     jQuery.easing.default = function(x, t, b, c, d) {
//         return -c * ((t = t / d - 1) * t * t * t - 1) + b;
//     };
// })(jQuery);


$(".section11_2_text_box2").click(function() {
    $(this).siblings(".section11_2_box_bottom").slideToggle();
})


$(window).on('scroll', function() {
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('go-top');
        // $('.logo_side').addClass('hide');
        // $('.logo_side_2').removeClass('hide');
    } else {
        $('.header').removeClass('go-top');
        // $('.logo_side').removeClass('hide');
        // $('.logo_side_2').addClass('hide');
    }
});