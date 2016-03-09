$(function () {
  'use strict';

  /*************************************/
  /************* SITE MENU *************/
  /*************************************/
  $('#nav-icon-wrap').on('click', function () {
    $(this).toggleClass('open');
    // $('.nav-menu').toggleClass('open');
    $('.hs-menu-wrapper').toggleClass('open');
    // $('.header').toggleClass('open');
    $('.header-container-wrapper').toggleClass('open');
    // $('html, body').toggleClass('disable-scroll');
  });

  $(window).on('resize orientationChange', function() {
    if($(window).width() > 959) {
      $('#nav-icon-wrap').removeClass('open');
      // $('.nav-menu').removeClass('open');
      $('.hs-menu-wrapper').removeClass('open');
      // $('.header').removeClass('open');
      $('.header-container-wrapper').removeClass('open');
      // $('html, body').removeClass('disable-scroll');
    }
  });

  /*************************************/
  /********** PRODUCTS FEATURE *********/
  /*************************************/
  // $('.products-feature .wrapper:first-child').removeClass('hidden');
  // $('.prodcuts-pagination').click(function(event) {
  //   var showProduct = parseInt(event.target.id) + 1;
  //   $('.products-feature').children().addClass('hidden');
  //   $('.products-feature .wrapper:nth-child(' + showProduct + ')').removeClass('hidden');
  // })

    /*************************************/
  /************* SITE MENU *************/
  /*************************************/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
          // target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
      return false;
      }
    }
  });

// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       scrollToHash(this.hash);
//     }
//   });

//   if (window.location.hash) {
//     scrollToHash(window.location.hash);
//   }

//   function scrollToHash(hash) {
//     var $target = $(hash);

//     $target = $target.length ? $target : $('[name=' + this.hash.slice(1) +']');
//     if ($target.length) {
//       $('html,body').animate({
//         scrollTop: $target.offset().top - 58
//       }, 1500);
//       return false;
//     }
//   }
});
