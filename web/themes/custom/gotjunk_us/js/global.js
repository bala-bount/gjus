/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.gotjunk_us = {
    attach: function (context, settings) {
      jQuery('#block-submenu').hide();
      jQuery('.jobs-more-menu').click(
        function(){
          jQuery('#block-submenu').toggle();
        }
      );
      jQuery('.read-more-expand').click(
        function(){
          jQuery('#read-more').slideDown();
        }
      );
      jQuery('.read-more-collapse').click(
        function(){
          jQuery('#read-more').slideUp();
        }
      );
    jQuery(".find-a-job a").replaceWith('<a class="use-ajax" data-dialog-options="{&quot;width&quot;:400}" data-dialog-type="modal" href="/find-jobs-on-indeed">Find A Job</a>');	
    }
  };

})(jQuery, Drupal);
