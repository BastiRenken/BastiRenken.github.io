//Funktionen
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ }
}

//alert("Diese Webseite verwendet JavaScript. Durch die Benutzung dieser Webseite erklären sie sich damit einverstanden.");

//document.getElementsByTagName("p")[0].innerHTML = "Text ersetzt durch JavaScript";
//document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';

var button_startseite = document.getElementById("startseite");
var button_uebermich = document.getElementById("uebermich");
var button_blog = document.getElementById("blog");
var button_fotos = document.getElementById("fotos");
var button_kontakt = document.getElementById("kontakt");
var button_impressum = document.getElementById("impressum");

button_startseite.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "Herzlich Willkommen! <br> Das ist Sebastian Renkens persönliche Webseite.";
}
button_uebermich.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "Das bin ich";
}
button_blog.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "Das mache ich";
}
button_fotos.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "Fotos"
}
button_kontakt.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "sebastian-renken@t-online.de";
}
button_impressum.onclick = function(){
  document.getElementsByTagName("p")[0].innerHTML = "Niemand haftet für die Inhalte auf dieser Webseite.";
}
