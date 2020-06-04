function btnControlFavorite() {
  const FAV_CONTENTS = document.querySelector(".favoriteContents");
  const TEXT_FAV = document.querySelector(".hideFav");

  if (FAV_CONTENTS.style.display === "none") {
    FAV_CONTENTS.style.display = "block";
    TEXT_FAV.innerHTML = "Hide";
  } else {
    FAV_CONTENTS.style.display = "none";
    TEXT_FAV.innerHTML = "Show";
  }
}

function btnControlChannel() {
  const CHANNEL_CONTENTS = document.querySelector(".channelContents");
  const TEXT_CHANNEL = document.querySelector(".textChannel");
  if (CHANNEL_CONTENTS.style.display === "none") {
    CHANNEL_CONTENTS.style.display = "block";
    TEXT_CHANNEL.innerHTML = "Hide";
  } else {
    CHANNEL_CONTENTS.style.display = "none";
    TEXT_CHANNEL.innerHTML = "Show";
  }
}

function btnControlFriends() {
  const FRIENDS_CONTENTS = document.querySelector(".wrapperFriendsContents");
  const TEXT_FRIENDS = document.querySelector(".textFriends");

  if (FRIENDS_CONTENTS.style.display === "none") {
    FRIENDS_CONTENTS.style.display = "block";
    TEXT_FRIENDS.innerHTML = "Hide";
  } else {
    FRIENDS_CONTENTS.style.display = "none";
    TEXT_FRIENDS.innerHTML = "Show";
  }
}
