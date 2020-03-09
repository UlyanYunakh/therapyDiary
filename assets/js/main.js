var isScrolling = false;
 
    window.addEventListener("scroll", throttleScroll, false);
 
    function throttleScroll(e) {
      if (isScrolling == false) {
        window.requestAnimationFrame(function() {
          scrolling(e);
          isScrolling = false;
        });
      }
      isScrolling = true;
    }
 
    document.addEventListener("DOMContentLoaded", scrolling, false);

    let animateSections = document.querySelectorAll('.main_info');
 	console.log(animateSections);
 
    function scrolling(e) {
 
      for (var i = 0; i < animateSections.length; i++) {
        var animateSection = animateSections[i];
 
        if (isPartiallyVisible(animateSection)) {
          animateSection.classList.add("animation_opacity");
          console.log(animateSection);
        } else {

        }
      }
     }
 
    function isPartiallyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
      var height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
 
      var top = elementBoundary.top;
      var bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }

let menuState = false;

$('.menu_btn').click(function () {
  menuState = !menuState;
  if (menuState) {
    $('.map_wrapper').css({'right': '0'})
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'right': '-3000px'})
  }
})


$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'right': '-3000px'})
  }
})