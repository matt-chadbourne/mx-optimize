$(function () {
  'use strict';

  /*************************************/
  /************* SITE MENU *************/
  /*************************************/
  $('#nav-icon-wrap').on('click', function () {
    $(this).toggleClass('open');
    $('.nav-menu').toggleClass('open');
    $('.header').toggleClass('open');
    $('html, body').toggleClass('disable-scroll');
  });

  // $(window).on('resize orientationChange', function() {
  //   if($(window).width() < 1028) {
  //     $('nav').css('display', 'block');
  //   }
  // });

  $(window).on('resize orientationChange', function() {
    if($(window).width() > 959) {
      $('#nav-icon-wrap').removeClass('open');
      $('.nav-menu').removeClass('open');
      $('.header').removeClass('open');
      $('html, body').removeClass('disable-scroll');
    }
  });

  /*************************************/
  /********** PRODUCTS FEATURE *********/
  /*************************************/
  $('.products-feature .wrapper:first-child').removeClass('hidden');
  $('.prodcuts-pagination').click(function(event) {
    var showProduct = parseInt(event.target.id) + 1;
    $('.products-feature').children().addClass('hidden');
    $('.products-feature .wrapper:nth-child(' + showProduct + ')').removeClass('hidden');
  })
});
