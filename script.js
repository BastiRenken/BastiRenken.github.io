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

function showTime() {
  var jetzt = new Date();
  var time = jetzt.toLocaleDateString() + ", " + jetzt.toLocaleTimeString();
  document.getElementById("uhr").textContent = time;
}
window.setInterval(showTime, 1000);

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
