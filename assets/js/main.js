$('a[href^="#"]').click(function (event) {
	event.preventDefault();
	var id  = $(this).attr('href'),
		top = $(id).offset().top - 10;
	$('body,html').animate({scrollTop: top}, 500);
});

$(window).scroll(function(e){
    var scrolled = $(window).scrollTop();
	if ( scrolled <= 540) $('.main_thans-diary-bg img:nth-child(2)').css('top', -150-(scrolled * 0.2) + 'px');
	if ( scrolled > 555 && scrolled <= 1250) $('.main_wish-diary-bg img:nth-child(2)').css('top', -100-(scrolled * 0.2) + 'px');
	if ( scrolled > 1300 && scrolled <= 2070) $('.main_action-fear-diary-bg img:nth-child(2)').css('top', 100-(scrolled * 0.2) + 'px');
	if ( scrolled > 2070) $('.main_diary-of-emotions-bg img:nth-child(2)').css('top', 200-(scrolled * 0.2) + 'px');
	
    let photos = document.querySelectorAll('.main_info');
	for (var i = 0; i < animateSections.length; i++) {
        var photo = photos[i];
		var child = photo.querySelector('img:nth-child(1)');
		console.log(photo);
		if (isPartiallyVisible(photo)) {
		}
	}
});

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
    function scrolling(e) {
      for (var i = 0; i < animateSections.length; i++) {
        var animateSection = animateSections[i];
        if (isPartiallyVisible(animateSection)) {
			    animateSection.classList.add("animation_opacity");
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
	$('.map_wrapper').css({'z-index': '-1'})
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
	$('.map_wrapper').css({'z-index': '-1'})
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
});