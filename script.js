function downloadPDF(id) {
    const content = document.getElementById(id);
    window.print()
}


fetch('./CV/CV.html')
.then(response => response.text())
.then(data => {
  document.getElementById('CVcontainer').innerHTML = data;
})