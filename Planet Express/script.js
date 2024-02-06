function update(selectElement) {
  var selectedText = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById('selected-text').innerText = selectedText;
}

function show(shown, hidden1, hidden2, hidden3) {
document.getElementById(shown).style.display='block';
document.getElementById(hidden1).style.display='none';
document.getElementById(hidden2).style.display='none';
document.getElementById(hidden3).style.display='none';
scrolltop();
}

function scrolltop() {window.scrollTo(0, 0);}
function updatePaddingTop() {
  document.body.style.paddingTop = 1.1 * document.getElementById('nav-bar').clientHeight + 'px';
}

function changeFont() {
  var newFont = document.getElementById('lang').value;
  document.querySelectorAll('html, input, select').forEach(function (element) {
    element.style.fontFamily = newFont;
  });
}

updatePaddingTop();
window.addEventListener('resize', updatePaddingTop);
