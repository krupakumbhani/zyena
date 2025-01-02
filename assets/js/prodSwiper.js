
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        
        1200:{
          slidesPerView: 4,
          spaceBetween: 30,
        }
      },
      freeMode: true,
      keyboard: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
