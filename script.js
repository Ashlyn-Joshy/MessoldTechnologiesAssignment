document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("slider");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");

  leftButton.addEventListener("click", function () {
    scrollLeft();
  });

  rightButton.addEventListener("click", function () {
    scrollRight();
  });

  function scrollLeft() {
    slider.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    slider.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("sliderReviews");
  const leftButton = document.getElementById("left-button-review");
  const rightButton = document.getElementById("right-button-review");

  leftButton.addEventListener("click", function () {
    scrollLeft();
  });

  rightButton.addEventListener("click", function () {
    scrollRight();
  });

  function scrollLeft() {
    slider.scrollBy({
      left: -150,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    slider.scrollBy({
      left: 150,
      behavior: "smooth",
    });
  }
});
