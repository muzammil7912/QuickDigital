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
    slidesPerView: 2,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: ".swiperbutton__Right",
        prevEl: ".swiperbutton__Left",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
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
    $(".servicesMensu").removeClass("active");
});
$(document).on("click", ".header__right  i", function() {
    $(this).parent("li").toggleClass("active");
    $(".servicesMensu").toggleClass("active");

});



// URL se "language" parameter ko get karne ka function
function getLanguageParameter() {
    var url = new URL(window.location.href);

    var pathSegments = url.pathname.split('/');
    var language = pathSegments[1];

    if (language == 'ar') {
        return true;
    } else {
        return false;
    }
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