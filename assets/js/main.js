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
    console.log('work');
    $('.map_wrapper').css({'opacity': '1'})
	$('.map_wrapper').css({'z-index': '20'})
    $('.map_wrapper').css({'transition': 'all 1s ease-in-out'})
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'opacity': '0'})
	$('.map_wrapper').css({'z-index': '0'})
	$('.map_wrapper').css({'transition': 'all 1s ease-in-out'})
  }
})


$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'opacity': '0'})
	$('.map_wrapper').css({'z-index': '0'})
	$('.map_wrapper').css({'transition': 'all 1s ease-in-out'})
  }
})

var $btn = document.querySelector('.btn');

$btn.addEventListener('click', e => {
  window.requestAnimationFrame(() => {
    $btn.classList.remove('is-animating');
    
    window.requestAnimationFrame(() => {
      $btn.classList.add('is-animating');
    });
  });
});