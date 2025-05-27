/*const SmoothParallax = require('smooth-parallax-js');

export function initSmoothParallax() {
  console.log('smooth-parallax-js')
  const smoothParallax = new SmoothParallax({
    // Options
  });
}

initSmoothParallax();*/


function triggerNavItem(id) {
  $scroll(id)
}

function triggerMobileNavItem(id) {
  mobileMenu = false;
  this.triggerNavItem(id)
}