var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5.5,
    spaceBetween: 5,
    centeredSlides: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });