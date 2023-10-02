var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
    slidesPerView: 1,
    spaceBetween: 20,
    },
    680: {
    slidesPerView: 2,
    spaceBetween: 40,
    },
    920: {
    slidesPerView: 3,
    spaceBetween: 40,
    },
    1240: {
    slidesPerView: 4,
    spaceBetween: 50,
    },
	}
});