const body = document.querySelector("body");
const images = [...document.querySelectorAll("img")];

// collect all slider elements
// slider 1
const slider = document.querySelector(".slider-1");
const slides = slider.querySelectorAll(".slider-slide");

// slider 2
const slider2 = document.querySelector(".slider-2");
const slides2 = slider2.querySelectorAll(".slider-slide");

// slider 3
const slider3 = document.querySelector(".slider-3");
const slides3 = slider3.querySelectorAll(".slider-slide");

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
  //   slider 1 call
  const sliderObject = new Slider({
    slider: slider,
    slides: slides,
    direction: "horizontal", // horizontal or vertical
    gap: 100,
    dom: false,
    autoplay: true
  });

  //   slider 2 call
  const sliderObject2 = new Slider({
    slider: slider2,
    slides: slides2,
    direction: "horizontal", // horizontal or vertical
    gap: 100,
    dom: false,
    autoplay: true,
    reverse: true
  });

  //   slider 3 call
  const sliderObject3 = new Slider({
    slider: slider3,
    slides: slides3,
    direction: "horizontal", // horizontal or vertical
    gap: 100,
    dom: false,
    autoplay: true
  });
}

// call preloader function
preloader();
