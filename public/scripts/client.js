/*
 * Client-side JS logic goes here
 */

function loadPosts() {
  $.getJSON('/tweets')
    .then((tweets) => {
      renderTweets(tweets);
    })
    .catch(err => console.log('Error: ', err))
}

$('.new-tweet form').submit(function (event) {
  event.preventDefault();

  const self = this;
  const data = $(this).serialize();
  const charCount = $('#tweet-text').val().length;
  console.log(charCount, data)

  if (data === 'text=') {
    $('.alert').text('⚠️ Empty tweets cannot be submitted').slideDown(600);
  } else if (charCount > 140) {
    $('.alert').text('⚠️ Your tweet must be below 140 characters').slideDown(600);
  } else {
    $('.alert').slideUp(200);
    $.post('/tweets', data)
      .then(() => {
        $(self)[0].reset();
        $('#tweets-container').empty();
        loadPosts();
      })
      .catch(err => console.log('Error: ', err))
  }
});

loadPosts();


