newFunction();

function newFunction() {
	var marq1 = document.getElementById('dyna_sidemarquee_content');
	marq1.parentNode.removeChild(marq1);
}

let cursor = 0;
const KONAMI_CODE = [ 38, 38, 40, 40, 37, 39, 37, 39, 66, 65 ];
document.addEventListener('keydown', (e) => {
	cursor = e.keyCode == KONAMI_CODE[cursor] ? cursor + 1 : 0;
	if (cursor == KONAMI_CODE.length) alert('⬆⬆⬇⬇⬅➡⬅➡🅱🅰');
});
