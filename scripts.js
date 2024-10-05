function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("leiamais");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Leia mais";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Leia menos";
      moreText.style.display = "inline";
    }
  }

  fetch('poo.html')
         .then(response => response.text())
         .then(data => {
             document.getElementById('poo').innerHTML = data;
         })
         .catch(error => console.error('Erro ao carregar o arquivo:', error));

function mostrarMais() {
var textoCompleto = document.querySelector('.texto-completo');
textoCompleto.style.display = 'block'; 
}