const HEADER_AREA = document.querySelector(".appHeader");
const SCROLL_AREA = document.querySelector(".scrollArea");
const BODY = document.querySelector("body");
const TEST_CLASS = "test";
const FONT_POSITION = document.querySelector(".header__column");
const FONT_COLOR_BLACK = document.querySelector(".fontColorBlack");
const FONT_COLOR_CLOCK = document.querySelector(".status-bar__clock");
const APP_ICON = document.querySelector(".appHeaderIcon");
SCROLL_AREA.addEventListener("scroll", myFunction);

function myFunction() {
  if (SCROLL_AREA.scrollTop > 232) {
    HEADER_AREA.classList.add(TEST_CLASS);
    HEADER_AREA.style.height = "60px";
    FONT_POSITION.style.top = "5px";

    APP_ICON.style.color = "#6672ff";
    APP_ICON.style.backgroundColor = "transparent";
    APP_ICON.style.fontSize = "15px";
    APP_ICON.innerHTML = "검색";
    APP_ICON.style.marginTop = "0";

    FONT_COLOR_BLACK.style.color = "black";
    FONT_COLOR_CLOCK.style.color = "black";
  } else {
    HEADER_AREA.classList.remove(TEST_CLASS);

    APP_ICON.style.color = "rgb(104, 104, 104)";
    APP_ICON.style.backgroundColor = "rgb(223, 223, 223)";
    APP_ICON.style.fontSize = "";
    APP_ICON.innerHTML = "";

    APP_ICON.style.marginTop = "30px";
    FONT_COLOR_BLACK.style.color = "white";
    FONT_COLOR_CLOCK.style.color = "white";
  }
}
