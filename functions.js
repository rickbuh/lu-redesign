var vertScroll = window.pageYOffset;
var navbar = document.getElementById("navbar");
var recentImage = document.getElementById("recent-img");
var grayValue = 1 - (vertScroll/500);

function openNav() {
    navbar.style.right = "0%";
}

// when close-nav is clicked reset navbar back off screen
function closeNav() {
    navbar.style.right = "-50%";
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
