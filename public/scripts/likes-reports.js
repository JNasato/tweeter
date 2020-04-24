$('body').delegate('.heart', 'click', function () {
  $('#like').fadeIn(200);
  $('#like').fadeOut(1000);
});

$('body').delegate('.report', 'click', function () {
  $('#report').fadeIn(200);
  $('#report').fadeOut(1000);
});

