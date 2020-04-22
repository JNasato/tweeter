/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd"
//     },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

renderTweets(data);

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

  $.post('/tweets', data)
    .then(() => {
      console.log(data);
      $(self)[0].reset();
      // renderTweets(data);
    })
    .catch(err => console.log('Error: ', err))
});




