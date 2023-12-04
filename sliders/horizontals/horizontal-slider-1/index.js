const body = document.querySelector("body");

// Get slider
const slider = document.querySelector(".slider");
// Get all slides element
const slides = slider.querySelectorAll(".slider-slide");
// Get all images element
const images = [...document.querySelectorAll("img")];

// Custom preloader. Replace it with your own preloader or any other preloader library like imagesloaded.
// preloader load all images and add loaded class to it.
// use loaded class for show images with animation
function preloader() {
  images.forEach((image) => {
    // take image src from it attribute data-src
    image.src = image.getAttribute("data-src");
    image.decode().then(() => {
      image.classList.add("loaded");
      preloaderProgress();
    });
  });
}

// preloaderProgress call for every image that loaded.
// It calculates the percentage of the loaded images.
function preloaderProgress() {
  this.length += 1;
  const percent = this.length / images.length;

  //   when preloader progress is 100% (1) then call onLoaded function
  if (percent === 1) {
    onLoaded();
  }
}

// on loaded function (all images loaded and preloader progress is 100% then call this function)
function onLoaded() {
  // add loaded class to body
  body.classList.add("loaded");
  // call slider class
  new Slider({
    slider,
    slides,
    direction: "horizontal", // horizontal or vertical
    gap: 100,
    dom: true
  });
}

// call preloader function
preloader();
