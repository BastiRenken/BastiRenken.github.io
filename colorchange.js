
document.getElementById("ueberschrift").onmouseover = function() {mouseOver()};
document.getElementById("ueberschrift").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("ueberschrift").style.color = "chartreuse";
}

function mouseOut() {
    document.getElementById("ueberschrift").style.color = "midnightblue";
}

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
