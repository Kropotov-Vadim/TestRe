// $('.main__slider').slick({
//   centerMode: true,
//   slidesToShow: 5,
//   speed: 150,
//   dote: false,
//   variableWidth: true,
//   draggable: false,
//   prevArrow: $('.main__slider-prev'),
//   nextArrow: $('.main__slider-next')
// });

let cSlide = false

let mSlider = new Swiper('.main__wrap', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  roundLengths: true,
  centeredSlidesBounds: true,
  navigation: {
    nextEl: '.main__slider-next',
    prevEl: '.main__slider-prev',
  },
  on: {
    init: function(swiper) {
      swiper.slides[swiper.activeIndex].classList.add('active')
      if(!cSlide) {
        cSlide = swiper.slides[swiper.activeIndex]
      }
      swiper.resize.resizeHandler()
    }
  }
})


mSlider.on('slideChange', ()=> {
  mSlider.resize.resizeHandler()
  mSlider.slides[mSlider.activeIndex].classList.add('active')
  if(!cSlide) {
    cSlide = mSlider.slides[mSlider.activeIndex]
  } else {
    cSlide.classList.remove('active')
    cSlide = mSlider.slides[mSlider.activeIndex]
  }
  
})

$('.course__select').on('click', () => {
  $('.course__select').toggleClass('active')
  $('.course__select-drop').slideToggle()
})

$('.nav__mobile').on('click', () => {
  $('.nav__mobile').toggleClass('active')
  $('body').toggleClass('active')
  $('.nav__menu').slideToggle()
})

$('.faq__ask').on('click', function() {
  $(this).toggleClass('active')
  $(this).find($('.faq__ask-answ')).slideToggle()
})