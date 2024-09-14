// services navbar
document.addEventListener("DOMContentLoaded", function () {
  var dropdown = document.getElementById("dropdown");
  var dropdownContent = document.getElementById("dropdownContent");
  var dropbtn = document.getElementById("dropbtn");
  var droptext = document.getElementById("text-services");

  dropbtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
    dropbtn.classList.toggle("fa-angle-down");
    dropbtn.classList.toggle("clicked");
    droptext.classList.toggle("change-color-text");
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target) && !dropbtn.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });
});

// function scroll to top page
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
