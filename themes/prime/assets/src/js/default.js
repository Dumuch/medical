import renderSelect from './vendor/customSelect';
import maskPhone from './vendor/mask';
import menuMobile from './vendor/menu';
import './vendor/modal';


$(document).ready(function() {
  // открываем меню при клике по кнопке, закрываем при клике вне окна
  menuMobile('._site-nav__user__item--menu', '._site-nav__list', 'mobile-menu__button--open', 'site-nav__list--open');

  // открывае/закрываем окно поиска
  $('._site-nav__user__search-button').click(function() {
    if ($(this).hasClass('site-nav__user__search-button--open')) {
      $(this).removeClass('site-nav__user__search-button--open')
      $('._site-nav_form').animate({
        opacity: 0,
      }, 500, function() {
        $('._site-nav_form').css('display', 'none')
      });
    } else {

      $(this).addClass('site-nav__user__search-button--open')
      $('._site-nav_form').css('display', 'block').animate({
        opacity: 1,
      }, 500);
    }
  })

  // при клике на обратный звонок открываем modal
  $('._site-nav__phone').click(function() {
    $('#modal_callback').fadeIn()
  })


  const ajaxLocale = (locale) => {
    $.request('onSwitchLocale', {
      data: {
        locale: locale
      }
    });
  }

  renderSelect('_form__select--1', '1', ajaxLocale);
  renderSelect('_form__select--2', '2', ajaxLocale);
  maskPhone('._mask-phone')

  $('._modal__content__form--modal').submit(function(event) {
    $(this).find('button').prop('disabled', 'true')
  });

  $('._form-callback__form').submit(function(event) {
    $(this).find('button').prop('disabled', 'true')
  });


});