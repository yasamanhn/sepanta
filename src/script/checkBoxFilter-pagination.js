let currentPage = 1;
const itemsPerPage = 12;
const totalItems = document.querySelectorAll(".box").length;

const totalPages = Math.ceil(totalItems / itemsPerPage);

const paginateElement = document.getElementsByClassName("paginate")[0];
console.log(paginateElement);
const paginationContainer = document.createElement("div");
paginationContainer.className = "pagination";

const prevButton = document.createElement("button");
prevButton.id = "prevPage";
prevButton.innerHTML = '<i class="fa fa-arrow-left"></i> قبلی';
prevButton.onclick = goToPreviousPage;

const nextButton = document.createElement("button");
nextButton.id = "nextPage";
nextButton.innerHTML = 'بعدی <i class="fa fa-arrow-right"></i>';
nextButton.onclick = goToNextPage;

paginationContainer.appendChild(prevButton);

for (let i = 1; i <= totalPages; i++) {
  const pageButton = document.createElement("button");
  pageButton.className = "page";
  pageButton.innerText = i;
  pageButton.onclick = () => goToPage(i);
  paginationContainer.appendChild(pageButton);
}

paginationContainer.appendChild(nextButton);

paginateElement.appendChild(paginationContainer);

function goToPage(page) {
  currentPage = page;
  updateDisplay();
  // Remove "active" class from all page buttons
  const pageButtons = document.querySelectorAll(".page");
  pageButtons.forEach((button) => button.classList.remove("active"));

  // Add "active" class to the button corresponding to the current page
  const currentPageButton = document.querySelector(
    `.page:nth-child(${currentPage + 1})`
  );
  currentPageButton.classList.add("active");
}

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    updateDisplay();
  }
}

function goToNextPage() {
  if (currentPage < totalPages) {
    currentPage++;
    updateDisplay();
  }
}

function updateDisplay() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  console.log(endIndex);
  console.log(startIndex);
  const items = document.querySelectorAll(".box");
  items.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
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
