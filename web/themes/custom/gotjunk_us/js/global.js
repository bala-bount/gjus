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
          $('read-more-expand').show();
        }
      );
      $(".find-a-job a").replaceWith('<a class="use-ajax" data-dialog-options="{&quot;width&quot;:400}" data-dialog-type="modal" href="/find-jobs-on-indeed">Find A Job</a>');	
    }
  };

})(jQuery, Drupal);
