const body = document.querySelector("body");
const images = [...document.querySelectorAll("img")];
// collect all slider elements
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slider-slide");

// Custom preloader. Replace it with your own preloader or any other preloader library like imagesloaded.
// preloader load all images and add loaded class to it.
// use loaded class for show images with animation
function preloader() {
  images.forEach((image) => {
    // take image src from it attribute data-src
    image.src = image.getAttribute("data-src");
    image.decode().then(() => {
      image.classList.add("loaded");
      // call preloader progress function
      preloaderProgress();
    });
  });
}

// preloader progress
function preloaderProgress() {
  this.length += 1;
  const percent = this.length / images.length;
  //   when preloader progress is 100% then call onLoaded function
  if (percent === 1) {
    onLoaded();
  }
}

// on loaded function (all images loaded and preloader progress is 100% then call this function)
function onLoaded() {
  // add loaded class to body
  body.classList.add("loaded");
  // call slider class
  const sliderObject = new Slider({
    slider: slider, // slider
    slides: slides, // slides
    direction: "horizontal", // horizontal or vertical
    gap: 100, // gap between slides
    dom: true // true or false
  });

  //   call animate slides function
  animateSlides(sliderObject);
}

// animate slides on scroll
function animateSlides(slider) {
  gsap.to(slides, {
    rotate: slider.scroll.speed
  });

  //   request animation frame
  requestAnimationFrame(() => animateSlides(slider));
}

// call preloader function
preloader();
