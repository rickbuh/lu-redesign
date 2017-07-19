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
window.addEventListener('scroll', function(){
  var vertScroll = window.pageYOffset;
  var grayValue = 100 - (vertScroll/5);
  console.log(grayValue);
  if (vertScroll > 500) {
    var grayValue = 0;
  }
  function imageGrayscale() {
    recentImage.style.filter = "grayscale("+grayValue+"%)";
  }

})
