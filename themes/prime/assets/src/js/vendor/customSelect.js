// кастомный select
export default function renderSelect(selectClass, selectNumber, callback) {
  $('.' + selectClass).each(function() {
    const _this = $(this),
      selectOption = _this.find('option').not('option:disabled'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450; // длительность анимации
    _this.hide();
    _this.wrap('<div class="size__select size__select--' + selectNumber + '"></div>');
    $('<div>', {
      class: 'size__input--select',
      // text: selectOption.eq(0).text()
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.size__input--select');
    const formDiagnosticsSelect = $('.size__select--' + selectNumber);

    $('<div>', {
      class: 'size--select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.size--select__list');
    for (let i = 0; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'size--select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
    }

    const selectItem = selectList.find('.size--select__item');
    selectList.slideUp(0);
    formDiagnosticsSelect.on('click', function() {

      if (!$(this).hasClass('on')) {
        $('.size--select__list').slideUp();
        $('.size__select').removeClass('on');

        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function() {
          let chooseItem = $(this).data('value');
          $('.' + selectClass).val(chooseItem).prop('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
          callback(chooseItem);
          _this.find('option').removeAttr('selected')
          _this.find('[value="' + chooseItem + '"]').prop('selected', true);
        });
      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
}