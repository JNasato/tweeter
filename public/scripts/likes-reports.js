let like = 0;
let report = 0;

const $likesCounter = $('<span>').text('Likes: ' + like);
const $reportsCounter = $('<span>').text('Reports: ' + report);

$('.heart').on('click', function (event) {
  like += 1;
  console.log(event);
  $('.likes-reports').empty();
  $('.likes-reports').append($likesCounter).append($reportsCounter);
});

$('.report').click(function () {
  report += 1;
  $('.likes-reports').empty();
  $('.likes-reports').append($likesCounter).append($reportsCounter);
});

