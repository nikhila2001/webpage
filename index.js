

window.addEventListener("load", function () {
    // Hide the loader
    document.getElementById("page-loader").style.display = "none";
  });




/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    }else {
        x.className = "top-nav";
    }
}

