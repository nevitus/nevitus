// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "50px";
    document.getElementById("logowithtext").style.width = "120px";
    document.getElementById("logowithtext").style.paddingTop = "3px";
    document.getElementById("logowithtext").style.paddingLeft = "10px";
    document.getElementById("header").style.backgroundColor = "#333333";
    document.getElementById("header").style.borderColor = "#888888";
  } else {
    document.getElementById("header").style.height = "100px";
    document.getElementById("logowithtext").style.width = "210px";
    document.getElementById("logowithtext").style.paddingTop = "10px";
    document.getElementById("logowithtext").style.paddingLeft = "20px";
    document.getElementById("header").style.backgroundColor = "#444444";
    document.getElementById("header").style.borderColor = "white";
  }
}
