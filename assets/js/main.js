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
});

var contentfulClient = contentful.createClient({
  accessToken: 'zXkifYePwrdbkSDXe53-LgJl4nYg1DEiYmlkBkU0_ww',
  space: 'o43op289a74x'
})

var PRODUCT_CONTENT_TYPE_ID = 'blogPost'

var container = document.getElementById('content')

contentfulClient.getEntries({
    content_type: PRODUCT_CONTENT_TYPE_ID
  })
  .then(function(entries) {
    container.innerHTML = renderProducts(entries.items)
  })

function renderProducts(products) {
  return '<h1>Posts</h1>' +
    '<div class="products">' +
    products.map(renderSingleProduct).join('\n') +
    '</div>'
}

function renderSingleProduct(product) {
  var field = product.fields
  console.log(field)
  return '<div class="product-in-list">' +
    '<div class="product-image">' +
    renderImage(field.heroImage, field.slug) +
    '</div>' +
    '<div class="product-details">' +
    renderProductDetails(field) +
    '</div>' +
    '</div>'
}

function renderProductDetails(field) {
  return renderProductHeader(field) +
    '<p class="product-categories">' + field.title +
    '</p>' +
    '<p>' + marked(field.description) + '</p>' +
    '<p class="product-tags"><span>Tags:</span> ' + field.body + '</p>'
}

function renderProductHeader(field) {
  return '<div class="product-header">' +
    '<h2>' +
    '<a href="product/' + field.slug + '">' +
    field.title +
    '</a>' +
    '</h2>' +
    ' by ' +
    '<a href="brand/' + field.slug + '">' + field.publishDate + '</a>' +
    '</div>'
}

function renderImage(image, slug) {
  if (image && image.fields.file) {
    return '<a href="product/' + slug + '">' +
      '<img src="' + image.fields.file.url + '" width="150" height="150" />' +
      '</a>'
  } else {
    return ''
  }
}

