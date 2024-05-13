const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grabCursor:true,
    slidesPerView:6,
    autoplay: {
        delay: 500,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      effect: 'flip',
      flipEffect: {
        slideShadows: false,
      },
    speed: 400,
    spaceBetween: 4,
    
});


