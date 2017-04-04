var i = 0;
var boton = document.getElementById('boton');
boton.addEventListener("click",agregarTweet);

function agregarTweet() {
  var areaTexto = document.getElementById('generadorDeTweets').value;
  var autorTweet = document.getElementById('autorTweet').value;
  var previewTweet = document.getElementById('previewTweet');
  var preview = document.getElementById('preview');
  var linea = document.createElement("hr");

  previewTweet.innerHTML += areaTexto + "<br>" + autorTweet + "<br>";
  previewTweet.appendChild(linea);
  preview.appendChild(previewTweet);

}

function contadorCaracter() {
  var contador = document.getElementById('contarCaracter');
  var texto = document.getElementById("generadorDeTweets");
  i++;
  if (i == 140) {
    alert("Te has pasado de caracteres");
  }

  contador.innerText = i + " /140";
}


// var contador = document.getElementById("generadorDeTweets")
// contador.addEventListener("onkeyup", contadorLetras);
//
// function contadorLetras() {
//   var contarCaracter = document.getElementById("contarCaracter");
//   contarCaracter.innerText = " / 140 " + incremento ++;
//   if (incremento >= 30) {
//     alert("Ya no puedes escribir");
//   }
//   console.log(incremento);
// }
//
