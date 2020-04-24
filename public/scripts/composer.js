
$('.composer').click(function () {
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

$('#tweets-container').mouseover(function () {
  $('.scroll-btn').fadeIn(600);
  $('.composer').fadeOut();
});

$('#header, .new-tweet, nav').mouseover(function () {
  $('.scroll-btn').fadeOut(200);
  $('.composer').fadeIn();
});

$('.scroll-btn').click(function () {
  $('.new-tweet').slideDown();
  $('#tweet-text').focus();
  $(window).scrollTop(0);
  $('.scroll-btn').fadeOut(200);
  $('.composer').fadeIn(100);
  $('.composer .icon').animate({
    top: '13px'
  });
});
