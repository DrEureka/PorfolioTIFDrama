var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true, 
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
