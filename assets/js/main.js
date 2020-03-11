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
  	$('.menu_btn > span').css({'transform': 'rotate(90deg)'})
	  $('.menu_btn > span').css({'opacity': '0'})
	  $('.menu_btn > span').css({'transition': 'all 1s ease-in-out'})
	  $('.map_close > span').css({'transform': 'rotate(135deg)'})
	  $('.map_close > span').css({'transition': 'all 1s ease-in-out'})
  }
})

$('.map_close').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'opacity': '0'})
	  $('.map_wrapper').css({'z-index': '0'})
	  $('.map_wrapper').css({'transition': 'all 1s ease-in-out'})
	  $('.menu_btn > span').css({'transform': 'rotate(0deg)'})
	  $('.menu_btn > span').css({'opacity': '1'})
	  $('.menu_btn > span').css({'transition': 'all 1s ease-in-out'})
	  $('.map_close > span').css({'transform': 'rotate(45deg)'})
	  $('.map_close > span').css({'transition': 'all 1s ease-in-out'})
  }
})

$('.map_item').click(function () {
  menuState = !menuState;
  if (!menuState) {
    $('.map_wrapper').css({'opacity': '0'})
	  $('.map_wrapper').css({'z-index': '0'})
	  $('.map_wrapper').css({'transition': 'all 1s ease-in-out'})
	  $('.menu_btn > span').css({'transform': 'rotate(0deg)'})
	  $('.menu_btn > span').css({'opacity': '1'})
	  $('.menu_btn > span').css({'transition': 'all 1s ease-in-out'})
	  $('.map_close > span').css({'transform': 'rotate(45deg)'})
	  $('.map_close > span').css({'transition': 'all 1s ease-in-out'})
  }
})

$(window).on('load', function () {
	$.instagramFeed({
		'username': 'therapy.diaries', //Имя пользователя
		'container': "#instafeed", //Контейнер для изображений
		'display_profile': false, //Отображение профиля
		'display_biography': false, //Отображение биографии
		'display_gallery': true, //Отображение галереи
		'items': 9, //Количество изображений в галереи
		'items_per_row': 3, //Количество изображений в ряд
		'margin': 2 //Отступ между изображениями
	});

var $btn = document.querySelector('.btn');

$btn.addEventListener('click', e => {
  window.requestAnimationFrame(() => {
    $btn.classList.remove('is-animating');
    
    window.requestAnimationFrame(() => {
      $btn.classList.add('is-animating');
    });
  });
});