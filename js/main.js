
function enviar() {
//valores input / textArea
// definir contenedor individual y seccion de contenedores
//createTextNode input / textArea
// hijos del div
// div hijo seccion

  var inputAutor = document.getElementById('inputAutor').value;
  var generadorDeTweets = document.getElementById('generadorDeTweets').value;
  var preview = document.getElementById('preview');

  var nuevoTweet = document.createElement("div");
  var tweetAgregado = document.createTextNode(generadorDeTweets);
  var autorTweet = document.createTextNode(inputAutor);

  tweetAgregado.appendChild(nuevoTweet);
  autorTweet.appendChild(nuevoTweet);
  nuevoTweet.appendChild(preview);






  // var tweetAgregado = document.getElementById('generadorDeTweets').value;
  // var nuevoTweet = document.createElement("div");
  //
  // var listaDeTweets = document.createTextNode(tweetAgregado);//
  // nuevoTweet.appendChild(listaDeTweets);
  // // var autorTweet = document.getElementById('inputAutor').value;
  //
  // var nuevosTweets = document.getElementById('preview').appendChild(nuevoTweet);
}
