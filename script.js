fetch('./CV/CV.html')
.then(response => response.text())
.then(data => {
  document.getElementById('CVcontainer').innerHTML = data;
})


function savePDF() {
  window.location.href = './CV/CV Miquel Jorquera.pdf';
}