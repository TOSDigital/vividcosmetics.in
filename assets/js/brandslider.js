// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const brandCarousel = document.querySelector(".brand-carousel");
  const brandSlides = document.querySelectorAll(".brand-slide");
  const slideCount = brandSlides.length;
  let brandCurrentIndex = 0;
  let imagesLoaded = 0;

  function brandShowSlide(index) {
    brandCarousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function brandNextSlide() {
    brandCurrentIndex = (brandCurrentIndex + 1) % slideCount;
    brandShowSlide(brandCurrentIndex);
  }

  // Function to check if all images are loaded
  function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === slideCount) {
      // All images are loaded, start the carousel
      setInterval(brandNextSlide, 2000);
    }
  }

  // Listen for load event on each image to check if all images are loaded
  brandSlides.forEach((slide) => {
    const image = slide.querySelector("img");
    image.addEventListener("load", checkImagesLoaded);
  });

  // Show the initial slide
  brandShowSlide(brandCurrentIndex);
});
