const createTweetElement = function (tweetData) {
  const user = tweetData.user;
  const $markup = $('<article>').addClass('tweet');

  const $header = $('<header>');
  const $headerDiv = $('<div>');
  const $avatar = $('<img>').attr('src', user.avatars);
  const $name = $('<span>').text(user.name);
  $headerDiv.append($avatar).append($name);
  const $handle = $('<span>').addClass('handle').text(user.handle);
  $header.append($headerDiv).append($handle);

  const $p = $('<p>').text(tweetData.content.text);

  const $footer = $('<footer>');
  const $date = $('<span>').text(tweetData.created_at);
  const $footerDiv = $('<div>');
  $footer.append($date).append($footerDiv);

  $markup.append($header).append($p).append($footer);
  //   <header>
  //     <div>
  //       <img src="${user.avatars}">
  //       <span>${user.name}</span>
  //     </div>
  //     <span class="handle">${user.handle}</span>
  //   </header>
  //   <p>${tweetData.content.text}</p>
  //   <footer>
  //     <span>${tweetData.created_at}</span>
  //     <div></div>
  //   </footer>
  // `;
  // let $markup = $(`<article class="tweet">${markup}</article>`);
  return $markup;
};

const renderTweets = function (data) {
  for (let tweet of data) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};