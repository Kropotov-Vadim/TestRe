$('.main__slider').slick({
  centerMode: true,
  slidesToShow: 5,
  speed: 150,
  dote: false,
  variableWidth: true,
  draggable: false,
  prevArrow: $('.main__slider-prev'),
  nextArrow: $('.main__slider-next')
});

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