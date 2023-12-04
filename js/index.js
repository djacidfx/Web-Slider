const body = document.querySelector("body");
const images = [...document.querySelectorAll("img")];

// create preloader
function preloader() {
  // get preloader element from html
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

  // create smooth scroll
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// call preloader function
preloader();
