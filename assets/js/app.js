// Owl Carousel
$(".owl-carousel").owlCarousel({
  // Basic
  loop: true,
  margin: 24,
  nav: false,
  smartSpeed: 1000,
  dots: false,
  // Autoplay
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  // Responsive
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
