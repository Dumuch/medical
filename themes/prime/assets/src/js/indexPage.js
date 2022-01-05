import './indexPage/map';

$(document).ready(function() {
  const video = $('._section-banner__video')[0];
  const buttonVideo = $('._section-banner__button');
  const banner = $('._wrapper__section-banner__image');
  const sectionBannerList = $('._section-banner__list');

  let buttonAnimate = true;
  let bannerView = $('[data-banner-view="false"]');

  setInterval(() => {
    if (buttonAnimate) {
      buttonVideo.removeClass('section-banner__button--animate');
      setTimeout(() => {
        buttonVideo.addClass('section-banner__button--animate');
      }, 1000)
    }
  }, 4000);

  buttonVideo.click(() => {
    if (video.paused) {
      buttonAnimate = false;
      // banner.fadeOut(1200);
      // bannerView.fadeOut(1200);
      // sectionBannerList.fadeOut(1200);
      // setTimeout(() => {
      video.play()
      // }, 1000);
      buttonVideo.removeClass('section-banner__button--play');
      buttonVideo.addClass('section-banner__button--pause');
    } else {
      // buttonAnimate = true;
      // banner.fadeIn(1200);
      // bannerView.fadeIn(1200);
      // sectionBannerList.fadeIn(1200);
      // setTimeout(() => {
      video.pause()
      // }, 1000);
      buttonVideo.addClass('section-banner__button--play');
      buttonVideo.removeClass('section-banner__button--pause');
    }
  })

  let block_show = null;

  function scrollTracking(block) {
    let wt = $(window).scrollTop();
    let wh = $(window).height();
    let et = block.offset().top;
    let eh = block.outerHeight();

    if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)) {
      if (block_show == null || block_show == false) {}
      block_show = true;
    } else {
      if (block_show == null || block_show == true) {
        banner.fadeIn(1200);
        bannerView.fadeIn(1200);
        sectionBannerList.fadeIn(1200);
        setTimeout(() => {
          video.pause()
        }, 1000);
        buttonVideo.addClass('section-banner__button--play');
        buttonVideo.removeClass('section-banner__button--pause');
      }
      block_show = false;
    }
  }

  $(window).scroll(function() {
    scrollTracking($(video));
  });

  scrollTracking($(video));

  $('._section-map__info__button').click(function() {
    $('#modal_callback').fadeIn()
  })
});