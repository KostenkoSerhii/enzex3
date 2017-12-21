$('.js-drop-block-title').on('click', function() {
  let title = $(this),
    parent = title.parents('.js-drop-block'),
    content = parent.find('.js-drop-block-content'),
    openedDropdowns = $('.js-drop-block.is-open');

	



  if($(this).parents('.js-drop-block').hasClass('is-open')) {
    parent.removeClass('is-open');
    content.slideUp(200);
  }else{
    openedDropdowns.find('.js-drop-block-content').slideUp(150);
    openedDropdowns.removeClass('is-open');
    parent.addClass('is-open');
    content.slideDown(200);
  }




});
