$(document).ready(function () {

  $('#tweet-text').on('keydown', function (event) {
    const $textArea = $(this);
    const count = 140 - ($textArea.val().length);
    const $counter = $(this).parent().find(".counter")
    $counter.val(count);
    if (count < 0) {
      $counter.addClass('negative-count');
    }
    if (count >= 0) {
      $counter.removeClass('negative-count');
    }
  });
});