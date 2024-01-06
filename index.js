

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

$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
