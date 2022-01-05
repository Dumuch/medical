//функция скрытия блока по клику вне границ блока

export default function menuMobile(...arg) {
  const [
    classForMenuButton,
    classForSiteNav,
    classmobileMenuButton,
    classwrapperSiteNav
  ] = arg;

  const mobileMenuButton = $(classForMenuButton);
  const wrapperSiteNav = $(classForSiteNav);

  const eventClickOffsetMobileMenu = (evt) => {
    if (!wrapperSiteNav.is(evt.target) && wrapperSiteNav.has(evt.target).length === 0) {
      mobileMenuButton.removeClass(classmobileMenuButton);
      wrapperSiteNav.removeClass(classwrapperSiteNav);
      $(document).off('click', eventClickOffsetMobileMenu);
    }
  }

  $(document).on('click', classForMenuButton, () => {
    if (!wrapperSiteNav.hasClass(classwrapperSiteNav)) {
      mobileMenuButton.addClass(classmobileMenuButton);
      wrapperSiteNav.addClass(classwrapperSiteNav);
      $(document).on('click', eventClickOffsetMobileMenu);
    } else {
      mobileMenuButton.removeClass(classmobileMenuButton);
      wrapperSiteNav.removeClass(classwrapperSiteNav);
    }
  });
}