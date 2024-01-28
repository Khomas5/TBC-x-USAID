///////////////////////////// Burger menu //////////////////////////////////////////////////////////////

function toggleMenu() {
  var menuList = document.querySelector(".main-nav_list");
  menuList.classList.toggle("show");
  document.body.classList.add("no-scroll");
}
// scroll function is disabled when burger menu is open
function lockScroll() {
  document.body.classList.toggle("lock-scroll");
}

/////////////////////////////////////////////// fixed header //////////////////////////////////////////////

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var headers = document.getElementsByClassName("header");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.opacity = "0.95";
    }
  } else {
    for (var i = 0; i < headers.length; i++) {
      headers[i].style.opacity = "1";
    }
  }
}


//////////////////////////////////////////////// Partniors slider /////////////////////////////////////////////////////////

var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");
var dotsContainer = document.querySelector(".dots-container");
var slideInterval = setInterval(nextSlide, 4000); // Change page every 4 seconds

function setupDots() {
  var numberOfDots = Math.ceil(slides.length / 3);
  for (let i = 0; i < numberOfDots; i++) {
    var dot = document.createElement("span");
    dot.classList.add("dot");
    dot.addEventListener("click", function () {
      currentSlide(i * 3);
    });
    dotsContainer.appendChild(dot);
  }
}

setupDots();
var dots = document.getElementsByClassName("dot");

function nextSlide() {
  showSlides((slideIndex += 3));
}

function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex += n));
  slideInterval = setInterval(nextSlide, 3000);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides((slideIndex = n));
  slideInterval = setInterval(nextSlide, 3000);
}

function showSlides(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = 0;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  var start = slideIndex;
  var end = start + 3; // Show up to 3 slides at a time
  for (var i = start; i < end && i < slides.length; i++) {
    slides[i].style.display = "inline-flex";
    slides[i].style.opacity = "1";
  }
  updateDots();
}

function updateDots() {
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  // Activate the dot corresponding to the current "page" of slides
  if (dots[Math.floor(slideIndex / 3)]) {
    dots[Math.floor(slideIndex / 3)].className += " active";
  }
}

// Initial call to show the first set of slides
showSlides(slideIndex);


/////////////////////////////////////////////////////// FAQ questions /////////////////////////////////////////////////////////

var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
