document.addEventListener("DOMContentLoaded", function () {
  // ایجاد و مقداردهی Swiper
  var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: false,
    centerSlide: true,
    grabCursor: false,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
  });

  // ایجاد و مدیریت نوار پیشرفت
  var progressPagination = document.createElement("div");
  progressPagination.className = "swiper-pagination-progress";
  swiper.el.append(progressPagination);

  var progressBar = document.createElement("div");
  progressBar.className = "swiper-pagination-progress-bar";
  progressPagination.append(progressBar);

  var updateProgressBar = function () {
    var progress = (swiper.activeIndex / (swiper.slides.length - 3)) * 100;
    progressBar.style.width = progress + "%";
  };

  swiper.on("slideChange", updateProgressBar);
  updateProgressBar();
});
  