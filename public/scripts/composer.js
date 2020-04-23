$('.composer').click(function (event) {
  if ($('.new-tweet').is(':visible')) {
    $('.composer .icon').animate({
      top: '4px'
    }, 100);
    $('.new-tweet').slideToggle(100);
  } else {
    $('.composer .icon').animate({
      top: '13px'
    });
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus();
  }
});

