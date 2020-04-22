/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
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
    alert('Empty tweets cannot be submitted');
  } else if (charCount > 140) {
    alert('Your tweet must be below 140 characters');
  } else {
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


