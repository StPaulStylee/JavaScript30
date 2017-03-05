// debounce takes in a function a waits 20 milliseconds before each iteration of
// the function call, typically developers want to use this on scroll
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  sliderImages.forEach(slideImage => {
    // add how much you've scrolled down (from the top) plus the height of the entire window
    // doing this will simulate dynamic position of the bottom of the window
    const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height / 2;
    console.log(slideInAt);
    // offset top is how for the top of the image is from the top of the window.
    // adding the height then tells us where the bottom of the image is relation to the window
    const imageBottom = slideImage.offsetTop + slideImage.height;
    const isHalfShown = slideInAt > slideImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      slideImage.classList.add('active');
    } else {
      slideImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
