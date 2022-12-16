window.onscroll = function() {myFunction()};


var header = document.getElementById("myHeader");


var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  }
}