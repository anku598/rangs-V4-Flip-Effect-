var swiper__left = new Swiper('.container-left', {
  pagination: false,
  paginationClickable: false,
  direction: 'horizontal',
  speed: 1400,
  loop: false,
  autoplay: false,
  effect:"cube",
  simulateTouch: false,
  mousewheelControl: true
});

var swiper__right = new Swiper('.container-right', {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  direction: 'horizontal',
  loop: false,
  speed: 1400,
  autoplay: false,
  effect:"cube",
  simulateTouch: false,
  mousewheelControl: true
});

// var mySwiper = new Swiper(".swiper-container ", {
//   pagination: ".swiper-pagination",
//   paginationClickable: true,
//   speed: 1400,
// });


swiper__left.params.control = swiper__right;
swiper__right.params.control = swiper__left;