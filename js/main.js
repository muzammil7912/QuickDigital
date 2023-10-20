var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,

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
    spaceBetween: 10,

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

function ResponsiveFunction() {
    $(".mySwiper4").addClass("swiper");
    $(".swiper-wrapper2").addClass("swiper-wrapper");
    $(".swiper-wrapp").addClass("swiper-wrapper");
    $(".swiper-slide3").addClass("swiper-slide");
    $(".swiper-slidetes").addClass("swiper-slide");


    var swiper4 = new Swiper(".mySwiper4", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

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
    $(".swiper-slidetes:nth-child(1)").remove();
    $(".swiper-slidetes:last-child").remove();
    var swiper5 = new Swiper(".section5Main", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,

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


}


if (screen.width < 979) {
    ResponsiveFunction()
}



$(".header__right-nav").click(function() {
    $(".header__right").toggleClass("active");
})
$(document).on("click", ".closeIcon", function() {
    $(".header__right").removeClass("active");
});