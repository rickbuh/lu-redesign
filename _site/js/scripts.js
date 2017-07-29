// JavaScript Document

var nav = document.getElementById("navbar");

document.getElementById("open-nav").onclick = function() {
  nav.style.right = '0';
};

document.getElementById("close-nav").onclick = function() {
  nav.style.right = '-50%';
};
