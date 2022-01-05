// import { Fancybox } from "@fancyapps/ui";
// Fancybox.bind('[data-fancybox="gallery"]', {
//   caption: function (fancybox, carousel, slide) {
//     return (
//       `${slide.index + 1} / ${carousel.slides.length} <br />` + slide.caption
//     );
//   },
// });

$(document).ready(function() {
  $('._components-header__button').click(function() {
    $(this).toggleClass('active');
    $('._catalog__sidebar-products').toggleClass('open');
  })

  $('._section-product__button').click(() => {
    $('#modal_callback').fadeIn()
  })


  $('._section-product__images').removeClass('section-product__images--no-js')
  // слайдер
  const imagesList = $('._section-product__images__list li');
  const imagesPreview = $('._section-product__images__list--big li');

  imagesList.click(function() {
    imagesList.each((i, el) => {
      if (el === this) {
        $(imagesPreview).animate({
          'opacity': 0
        }, 250, function() {
          $(this).css({
            'display': 'none'
          });
          $(imagesPreview[i]).css('display', 'block').animate({
            'opacity': 1
          })
        });
      }
    });

    imagesList.removeClass('active')
    $(this).addClass('active')
  })

})