const getCreationTime = function (date) {
  let time = (Date.now() - date) / 60000;
  if (time < 60) {
    return `${Math.round(time)} minutes ago`;
  } else if (time < 1440) {
    return `${Math.round(time / 60)} hours ago`;
  } else if (time < 10080) {
    return `${Math.round(time / 1440)} days ago`;
  } else if (time < 524160) {
    return `${Math.round(time / 10080)} weeks ago`;
  } else {
    return `${Math.round(time / 524160)} years ago`;
  }
}

const createTweetElement = function (tweetData) {
  const user = tweetData.user;
  const created = getCreationTime(tweetData.created_at);

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
  const $date = $('<span>').text(created);
  const $footerDiv = $('<div class="report">⚑</div><div class="heart">♡</div>');
  $footer.append($date).append($footerDiv);

  $markup.append($header).append($p).append($footer);
  return $markup;
};

const renderTweets = function (data) {
  for (let tweet of data) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};

