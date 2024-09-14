let slideIndex = 1;
showSlides(slideIndex);

function autoPlaySlides() {
  plusSlides(1);
}

// Start auto-play on page load
let autoPlayInterval = setInterval(autoPlaySlides, 2000); // Change 2000 to the desired interval in milliseconds

// Stop auto-play when user interacts with the slides
document.querySelectorAll(".modal-hero").forEach(function (slide) {
  slide.addEventListener("click", function () {
    clearInterval(autoPlayInterval);
  });
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("modal-hero");
  if (n > slides.length) {
    slideIndex = 1; // Reset to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// changing navbar on scroll
window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  var section1 = document.getElementById("section1");
  var section2 = document.getElementById("section2");
  var section3 = document.getElementById("section3");
  var section4 = document.getElementById("section4");

  var section1Top = section1.getBoundingClientRect().top;
  var section2Top = section2.getBoundingClientRect().top;
  var section3Top = section3.getBoundingClientRect().top;
  var section4Top = section4.getBoundingClientRect().top;

  if (section2Top > 0) {
    navbar.style.backgroundColor = ""; //section 1
  } else if (section2Top < 0 && section3Top > 0) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 1)"; //white section 2
  } else if (section3Top < 0 && section4Top > 0) {
    navbar.style.backgroundColor = "rgba(223, 223, 223, 1)"; //gray section 3
  } else {
    navbar.style.backgroundColor = "rgba(212, 192, 160, 1)";
  }
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
function changeColor(element) {
  // یافتن عنصر داخلی که می‌خواهیم رنگ آن تغییر کند
  var textWrapper = element.querySelector(".text-wrapper-30");

  textWrapper.style.color = "#rgba(245, 145, 21, 1)";
}

/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    // Add show-menu class to nav menu
    nav.classList.toggle("show-menu");
    // Add show-icon to show and hide menu icon
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll(".dropdown__item");

// 1. Select each dropdown item
dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");

  // 2. Select each button click
  dropdownButton.addEventListener("click", () => {
    // 7. Select the current show-dropdown class
    const showDropdown = document.querySelector(".show-dropdown");

    // 5. Call the toggleItem function
    toggleItem(item);

    // 8. Remove the show-dropdown class from other items
    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });
});

// 3. Create a function to display the dropdown
const toggleItem = (item) => {
  // 3.1. Select each dropdown content
  const dropdownContainer = item.querySelector(".dropdown__container");

  // 6. If the same item contains the show-dropdown class, remove
  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    // 4. Add the maximum height to the dropdown content and add the show-dropdown class
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

// Function to remove dropdown styles in mobile mode when browser resizes
const removeStyle = () => {
  // Validate if the media query reaches 1118px
  if (mediaQuery.matches) {
    // Remove the dropdown container height style
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });

    // Remove the show-dropdown class from dropdown item
    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};

addEventListener("resize", removeStyle);
