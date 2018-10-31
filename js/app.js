$(document).ready(function() {

// ANIMATION WOW js
// new WOW().init();

/*********ZOOM IMAGE*************/
$('[data-fancybox]').fancybox({
    loop: true,
    toolbar: false,
    thumbs: false
});
/*********ZOOM IMAGE*************/ 

/********LOGO SCROLL*********/
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.navbar__logo').show();
    } else {
        $('.navbar__logo').hide();
    }
}); 
if ($(window).scrollTop() > 100) {
    $('.navbar__logo').show();
} else {
    $('.navbar__logo').hide();
}
/********LOGO SCROLL*********/ 

/*************BANKRUPTCY CAROUSEL****************/ 
  $(".bankruptcy-carousel").owlCarousel({
  	  loop: true,
  	  margin: 30,
  	  dots: true,
      nav: true,
      autoplay: false,
      // navRewind: true,
  	  // responsiveClass: true,
      // smartSpeed:400,
      // rewindNav: true,
      // scrollPerPage: false,
      items: 1,
      navText: ["<img src='img/bp-arrow-left.png'>","<img src='img/bp-arrow-right.png'>"],
  	  // responsive:{
     //    0:{
     //        items:1,
     //        nav:false,
     //        slideBy: 1
     //    },
     //    767: {
     //        items: 2,
     //        nav: true,
     //        slideBy: 2
     //    },
     //    991:{
     //        items:3,
     //        nav: true,
     //        slideBy: 3
     //    },
     //    1200:{
     //        items:4,
     //        loop: true,
     //        slideBy: 4,
     //        dotsBy: 4
     //    }
  });


  // $(".jobs-carousel").owlCarousel({
  //     loop: true,
  //     margin: 30,
  //     dots: false,
  //     nav: true,
  //     autoplay: false,
  //     navText: ["<img src='img/jobs-slider-arrow-left.png'>","<img src='img/jobs-slider-arrow-right.png'>"],
  //     responsive:{
  //       0:{
  //           items:1,
  //           nav:false,
  //           slideBy: 1
  //       },
  //       767: {
  //           items: 2,
  //           nav: true,
  //           slideBy: 2
  //       },
  //       991:{
  //           items:3,
  //           slideBy: 3
  //       },
  //       1200:{
  //           items: 4,
  //           nav: true,
  //           slideBy: 4
  //       }
  //  }

  // });

  
/*************BANKRUPTCY CAROUSEL****************/ 

/******************JOBS CAROUSEL*****************************/ 
$('.jobs-carousel').flickity({
  cellAlign: 'left',
  contain: true,
  draggable: true,
  groupCells: 4,
  pageDots: false,
  freeScroll: true,
  wrapAround: true,
  autoPlay: false
});
/******************JOBS CAROUSEL*****************************/ 
     
/*************OUR TEAM CAROUSEL*************************/

$('.team-carousel').flickity({
	sync: '.team-carousel-nav',
	cellAlign: 'left',
	contain: true,
	draggable: true,
	groupCells: 1,
	freeScroll: false,
	prevNextButtons: false,
	pageDots: false,
	wrapAround: true,
	autoPlay: false
});

if($('div').is('.team-carousel-nav')) {

  var flicktyNav = new Flickity('.team-carousel-nav', {
    asNavFor: '.team-carousel',
    contain: true,
    cellAlign: 'left',
    pageDots: false,
    groupCells: 1,
    draggable: false,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false
});

}
/*************OUR TEAM CAROUSEL*************************/ 

/********ACCORDION***********/ 
$('.answers-section .accordion .card-header .btn').click(function() {
	  $('.answers-section .accordion .card').removeClass('active');
	  // console.log($(this).attr('aria-expanded'));

	  ($(this).attr('aria-expanded') == 'true') 
	  ? $(this).closest('.card').removeClass('active')
	  : $(this).closest('.card').addClass('active');
});
/********ACCORDION***********/ 

/**********CALLBACK FORM MODAL******************/ 
$('.call-modal__btn').click(function() {
	  $('.call-modal__btn').removeClass('active');
	  $(this).addClass('active');
});
/**********CALLBACK FORM MODAL******************/ 

});

/***********MAP**************/
ymaps.ready(function () {


    if($('#YMapsID').length > 0) {
      
          var myMap = new ymaps.Map('YMapsID', {
                center: [51.536582,46.021285],
                zoom: 16,
                controls: ['zoomControl','geolocationControl']
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Создаём макет содержимого.
         var myPlacemark = new ymaps.Placemark([51.536582,46.021285], {
                balloonContent: 'Саратов, ул. Московская, 117 Б, оф. 91',
            }, 
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/placemark.png',
                // Размеры метки.
                // iconImageSize: [35, 38]
                iconImageSize: [35, 35]
             
            });

       
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('multiTouch'); 
        ($(window).width() < 991) ?  myMap.behaviors.disable('drag') : myMap.behaviors.Drag;
       
        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
    }
      
        
});
/***********MAP**************/ 