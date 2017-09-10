document.getElementById("ueberschrift").onmouseover = function() {
  mouseOver()
};
document.getElementById("ueberschrift").onmouseout = function() {
  mouseOut()
};
function mouseOver() {
  document.getElementById("ueberschrift").style.color = "chartreuse";
}
function mouseOut() {
  document.getElementById("ueberschrift").style.color = "midnightblue";
}

document.getElementById("orangebutton").onclick = function() {
  orangebutton()
}
function orangebutton() {
  document.getElementById("body").style.backgroundColor = "orange";
  document.cookie = "backgroundcolor=orange";
}
document.getElementById("lavenderbutton").onclick = function() {
  lavenderbutton()
}
function lavenderbutton() {
  document.getElementById("body").style.backgroundColor = "lavender";
  document.cookie = "backgroundcolor=lavender";
}
document.getElementById("greenbutton").onclick = function() {
  greenbutton()
}
function greenbutton() {
  document.getElementById("body").style.backgroundColor = "chartreuse";
  document.cookie = "backgroundcolor=chartreuse";
}

var background = document.cookie;
var Wertstart = document.cookie.indexOf("=") + 1;
var Wertende = document.cookie.indexOf(";");
if (Wertende == -1) {
      Wertende = document.cookie.length;
	}
var Wert = document.cookie.substring(Wertstart, Wertende);
console.log(Wert);
document.getElementById("body").style.backgroundColor = Wert;

/*
function showTime() {
  var jetzt = new Date();
  var time = jetzt.toLocaleDateString() + ", " + jetzt.toLocaleTimeString();
  document.getElementById("uhr").textContent = time;
}
window.setInterval(showTime, 1000);
*/

/*
document.getElementsByClassName("inhaltlinks")[0].onmouseover = function() {mouseOver()};
document.getElementsByClassName("inhaltlinks")[0].onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementsByClassName("inhaltlinks")[0].style.color = "red";
}

function mouseOut() {
    document.getElementsByClassName("inhaltlinks")[0].style.color = "silver";
}
*/
