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
}
document.getElementById("lavenderbutton").onclick = function() {
  lavenderbutton()
}
function lavenderbutton() {
  document.getElementById("body").style.backgroundColor = "lavender";
}
document.getElementById("greenbutton").onclick = function() {
  greenbutton()
}
function greenbutton() {
  document.getElementById("body").style.backgroundColor = "chartreuse";
}
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
