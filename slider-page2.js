var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween:15,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });