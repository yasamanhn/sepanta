var thumbnails = document.getElementById("thumbnails");
var imgs = thumbnails.getElementsByTagName("img");
var main = document.getElementById("main");
var prevBtn = document.getElementById("prevBtn");
var nextBtn = document.getElementById("nextBtn");
var counter = 0;

for (let i = 0; i < imgs.length; i++) {
  let img = imgs[i];

  img.addEventListener("click", function () {
    main.src = this.src;
  });
}

prevBtn.addEventListener("click", function () {
  if (counter > 0) {
    counter--;
    main.src = imgs[counter].src;
  }
});

nextBtn.addEventListener("click", function () {
  if (counter < imgs.length - 1) {
    counter++;
    main.src = imgs[counter].src;
  }
});

// pagination

var imageContainer = document.getElementById("image-container");
var prevPageBtn = document.getElementById("prevPageBtn");
var nextPageBtn = document.getElementById("nextPageBtn");
var boxes = document.querySelectorAll(".box-sameProjects");

// Initialize variables
var currentPage = 1;
var imagesPerPage = 3;

// Event listener for previous page button
prevPageBtn.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
});

// Event listener for next page button
nextPageBtn.addEventListener("click", function () {
  var totalPages = Math.ceil(boxes.length / imagesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    updatePagination();
  }
});

// Function to update displayed images based on current page
function updatePagination() {
  var startIndex = (currentPage - 1) * imagesPerPage;
  var endIndex = startIndex + imagesPerPage;

  // Hide all images
  boxes.forEach(function (box) {
    box.style.display = "none";
  });

  // Show images for current page
  for (var i = startIndex; i < endIndex && i < boxes.length; i++) {
    boxes[i].style.display = "block";
  }
}

// Initial pagination setup
updatePagination();

// changing navbar on scroll
window.addEventListener("scroll", function () {
  var section3 = document.getElementById("section3");
  var section4 = document.getElementById("section4");
  var navbar = document.getElementById("navbar");

  // Calculate the distance of section3 from the top of the document
  var section3Rect = section3.getBoundingClientRect().top;

  if (section3Rect <= 0 && section4.getBoundingClientRect().top > 0) {
    // Change navbar color when scrolling within section 3
    navbar.style.backgroundColor = "rgba(223, 223, 223, 1)";
  } else {
    // Revert to initial background color when not within section 3
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.50)";
  }
});

//  function scroll to top page
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
