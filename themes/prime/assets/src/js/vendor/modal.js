$(document).ready(function() {

  $(document).on('click', '._modal__close', () => {
    $('.modal').fadeOut(() => {
      $('.modal').removeClass('modal--open')
    })
  })
});