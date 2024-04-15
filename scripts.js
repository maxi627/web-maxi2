window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("barra-navegacion").style.padding = "10px 0";
  } else {
    document.getElementById("barra-navegacion").style.padding = "20px 0";
  }
}

