function update(selectElement) {
  var selectedText = selectElement.options[selectElement.selectedIndex].value;
  document.getElementById('selected-text').innerText = selectedText;
}

function show(shown) {
document.querySelectorAll('.page').forEach((el)=> el.style.display='none');
document.getElementById(shown).style.display='block';
scrollTop();
}

function scrollTop() {window.scrollTo(0, 0);}

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
