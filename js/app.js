window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // condense header on page scroll when scrolling pas 100px
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("topnav").style.left= "50%";
    document.getElementById("angelcourt").style.left= "0%";
    document.getElementById("angelcourt").style.top= "-20px";
    document.getElementById("angelcourt").style.fontSize = "35px";
  } else {
    document.getElementById("topnav").style.left="25%";
    document.getElementById("angelcourt").style.left= "25%";
    document.getElementById("angelcourt").style.top= "50px";
    document.getElementById("angelcourt").style.fontSize = "50px";
  }
}
