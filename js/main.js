var swiper = new Swiper(".mySwiper", {
    loop:true,
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
    loop:true,
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
  });


  $()