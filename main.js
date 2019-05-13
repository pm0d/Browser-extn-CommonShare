let cursor = 0;
const KONAMI_CODE = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
document.addEventListener("keydown", e => {
  cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
  if (cursor == KONAMI_CODE.length) alert("⬆⬆⬇⬇⬅➡⬅➡🅱🅰");
});

newFunction();

function newFunction() {
  var elem = document.getElementById("dyna_sidemarquee_content");
  elem.parentNode.removeChild(elem);
}
