window.onload = function(){
  var navbar = document.getElementById("navbar");
  var recentImage = document.getElementById("recent-img");
}

var vertScroll = window.pageYOffset;
var grayValue = 1 - (vertScroll/500);


function openNav() {
    navbar.style.right = "0%";
}

// when close-nav is clicked reset navbar back off screen
function closeNav() {
    navbar.style.right = "-50%";
}

// when close-nav is clicked reset navbar back off screen
function roster1() {
    document.getElementById("roster-1").style.left = "0";
    document.getElementById("roster-1").style.display = "grid";
    document.getElementById("roster-2").style.right = "-100%";
    document.getElementById("roster-2").style.display = "none";
    document.getElementById("roster-3").style.right = "-100%";
    document.getElementById("roster-3").style.display = "none";
    document.getElementById("roster-4").style.right = "-100%";
    document.getElementById("roster-4").style.display = "none";
}

function roster2() {
    document.getElementById("roster-1").style.left = "-100%";
    document.getElementById("roster-1").style.display = "none";
    document.getElementById("roster-2").style.left = "0";
    document.getElementById("roster-2").style.display = "grid";
    document.getElementById("roster-3").style.right = "-100%";
    document.getElementById("roster-3").style.display = "none";
    document.getElementById("roster-4").style.right = "-100%";
    document.getElementById("roster-4").style.display = "none";
}

function roster3() {
    document.getElementById("roster-1").style.left = "-100%";
    document.getElementById("roster-1").style.display = "none";
    document.getElementById("roster-2").style.left = "-100%";
    document.getElementById("roster-2").style.display = "none";
    document.getElementById("roster-3").style.left = "0";
    document.getElementById("roster-3").style.display = "grid";
    document.getElementById("roster-4").style.right = "-100%";
    document.getElementById("roster-4").style.display = "none";
}

function roster4() {
    document.getElementById("roster-1").style.left = "-100%";
    document.getElementById("roster-1").style.display = "none";
    document.getElementById("roster-2").style.left = "-100%";
    document.getElementById("roster-2").style.display = "none";
    document.getElementById("roster-3").style.left = "-100%";
    document.getElementById("roster-3").style.display = "none";
    document.getElementById("roster-4").style.left = "0";
    document.getElementById("roster-4").style.display = "grid";
}


// remove grayscale filter from recent-img when central on page
window.addEventListener('scroll', function() {
  var vertScroll = window.pageYOffset;
  if ( vertScroll >= '75' ) {
    document.getElementById("recent-img").style.filter = 'grayscale(50%)';
  } if (vertScroll >= '150') {
    document.getElementById("recent-img").style.filter = 'grayscale(0%)';
  } if (vertScroll >= '200') {
    document.getElementById("hr1").style.width = '90%';
  };
});
