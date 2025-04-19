const swiperTop = new Swiper(".top__swiper", {
  // Optional parameters
  effect: "fade",
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".about__slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelectorAll('.accordeonn__trigger').forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('acordeon__item--active')
  })
})

