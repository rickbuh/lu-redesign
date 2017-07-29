// JavaScript Document

var nav = document.getElementById("navbar");
var rosterPages = document.getElementsByClassName("roster-page");
var pageNum = document.getElementsByClassName("pageNum");

document.getElementById("open-nav").onclick = function() {
  nav.style.right = '0';
};

document.getElementById("close-nav").onclick = function() {
  nav.style.right = '-50%';
};

function roster1() {
  document.getElementById("roster-1").style.display = "grid";
  document.getElementById("roster-2").style.display = "none";
  document.getElementById("roster-3").style.display = "none";
  document.getElementById("roster-4").style.display = "none";
};

function roster2() {
  document.getElementById("roster-1").style.display = "none";
  document.getElementById("roster-2").style.display = "grid";
  document.getElementById("roster-3").style.display = "none";
  document.getElementById("roster-4").style.display = "none";
};

function roster3() {
  document.getElementById("roster-1").style.display = "none";
  document.getElementById("roster-2").style.display = "none";
  document.getElementById("roster-3").style.display = "grid";
  document.getElementById("roster-4").style.display = "none";
};

function roster4() {
  document.getElementById("roster-1").style.display = "none";
  document.getElementById("roster-2").style.display = "none";
  document.getElementById("roster-3").style.display = "none";
  document.getElementById("roster-4").style.display = "grid";
};
