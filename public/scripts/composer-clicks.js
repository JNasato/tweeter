
$('.composer').click(function () {
  if ($('.new-tweet').is(':visible')) {
    $('.composer .icon').animate({
      top: '4px'
    }, 100);
    $('.new-tweet').slideToggle(100);
  } else {
    $('.alert').slideUp(0);
    $('.composer .icon').animate({
      top: '13px'
    });
    $('.new-tweet').slideToggle();
    $('#tweet-text').focus();
  }
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

$('#tweets-container').mouseover(function () {
  $('.scroll-btn').fadeIn(600);
  $('.composer').fadeOut();
});

$('#header, .new-tweet, nav').mouseover(function () {
  $('.scroll-btn').fadeOut(200);
  $('.composer').fadeIn();
});


