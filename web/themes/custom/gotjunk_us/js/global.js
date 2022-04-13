/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.gotjunk_us = {
    attach: function (context, settings) {
      $('#block-submenu').hide();
      $('.jobs-more-menu').click(
        function(){
          $('#block-submenu').toggle();
        }
      );
      $('.read-more-expand').click(
        function(){
          $('#read-more').slideDown();
          $(this).hide();
        }
      );
      $('.read-more-collapse').click(
        function(){
          $('#read-more').slideUp();
          $('.read-more-expand').show();
        }
      );
    }
  };
  Drupal.behaviors.menuWWTWWD = {
    attach: function(context, settings) {
      if($(".node--type-wwt-home-page, .node--type-wwt-items-page, .node--type-wwd-main-page").length){
      window.onscroll = function(){
        var header = $(".block-webform-block").offset();
        // Get the offset position of the navbar
        var sticky = header.top;
  
        if ($(window).scrollTop() >= sticky) {
          $(".menu--wwt-menu").addClass("sticky");
        } else {
          $(".menu--wwt-menu").removeClass("sticky");
        }
      };
      }
    }
  }

})(jQuery, Drupal);
