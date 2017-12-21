import {isResp991} from './global.js';
export	default function popupsInit() {
  $('.js-popup-link').on('click', function(e) {
    e.preventDefault();

    let $this = $(this),
      target = $this.attr('data-target'),
      popup = $(`.js-popup[data-popup=${target}]`);

    $('.js-popup').not(popup).fadeOut(100);

    $('body').addClass('is-hidden');
    popup.fadeIn(200);

  });

  $('.js-popup-overlay, .js-popup-close').on('click', function() {
    $('body').removeClass('is-hidden');
    $(this).parents('.js-popup').fadeOut(200);
  });
  $('.js-popup-content').on('click', function(e) {
    e.stopPropagation();
  });



// end
};
