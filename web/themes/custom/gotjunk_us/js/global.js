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
  Drupal.behaviors.mobilenavToggle = {
    attach: function(context, settings) {
      $('.navbar-toggler', context).once('mobilenavToggle').on('click',
        function(){
          $('#block-submenu').toggle();
        }
      );
    }
  };
  Drupal.behaviors.menuWWTWWD = {
    attach: function(context, settings) {
      if($(".node--type-wwt-home-page, .node--type-wwt-items-page, .node--type-wwd-main-page, .node--type-wwd-child-page").length){
      window.onscroll = function(){
        var header = $(".block-webform-block").offset();
        // Get the offset position of the navbar
        var sticky = header.top;
  
        if ($(window).scrollTop() >= sticky) {
          $(".menu--wwt-menu").addClass("sticky");
          $(".menu--what-we-do-menu").addClass("sticky");
        } else {
          $(".menu--wwt-menu").removeClass("sticky");
          $(".menu--what-we-do-menu").removeClass("sticky");
        }
      };
      }
    }
  }
  
  Drupal.behaviors.mobileMenuWWT = {
    attach: function(context, settings) {

      $(".mobile-menu-btn").click(function() {
        $(this).find("i").toggleClass("fa-chevron-down fa-chevron-up");
      });
      // WWT/WWD Pages mobile menu title
      var wwdMain = $("body.node--type-wwd-main-page");
      var wwdChild = $("body.node--type-wwd-child-page");
      var wwtMain = $("body.node--type-wwt-home-page");
      var wwtItem = $("body.node--type-wwt-items-page");

      // Logic check for WWT Item pages, WWT Main page, WWD Child page
      if(wwtItem.length > 0) {
        var menuTitleGrandparent = $.trim($(".menu--wwt-menu .nav li.menu-item--active-trail a").html());
        var spaceChar = menuTitleGrandparent.indexOf(" ");
        var newTitle = menuTitleGrandparent.substring(0,spaceChar);
        $(".wwt-menu-title").html(newTitle);
        wwt_page_title_link();
      } else if (wwtMain.length > 0) {
        var menuTitleGrandparent = $.trim($(".menu--wwt-menu .nav li.menu-item--active-trail a").html());

        if (menuTitleGrandparent == "What We Take") {
          $(".wwt-menu-title").html(menuTitleGrandparent);
        } else if (menuTitleGrandparent == "Ce que l’on prend") {
          $(".wwt-menu-title").html(menuTitleGrandparent);
        } else {
          var spaceChar = menuTitleGrandparent.indexOf(" ");
          var newTitle = menuTitleGrandparent.substring(0,spaceChar);
          $(".wwt-menu-title").html(newTitle);
        }

        // Apply link to mobile menu.
        wwt_page_title_link();

      } 
      else if (wwdChild.length > 0) {
        var menuTitle = $.trim($(".menu--what-we-do-menu .nav li.menu-item--active-trail a").html());
        $(".wwd-menu-title").html(menuTitle);
        wwd_page_title_link();
      } else if (wwdMain.length > 0) {
        var menuTitle = $.trim($(".menu--what-we-do-menu .nav li.menu-item--active-trail a").html());
        $(".wwd-menu-title").html(menuTitle);
        wwd_page_title_link();
      } 

      // Resolve double-tap issue for WWT/WWD sticky nav
      // wwt_page_mobile_menu();
      // Run again if window size changes to check width
      // $(window).resize(function() {
      //   wwt_page_mobile_menu();
      // });

      function wwt_page_title_link() {
        $(".wwt-menu-title").wrapInner("<a></a>");
        var linkURL = $(".menu--wwt-menu .menu-item--active-trail > a").attr("href");

        $(".menu--wwt-menu  .menu-item--active-trail").addClass("hide-for-respnsive");
        $(".wwt-menu-title a").attr("href",linkURL);
      }

      function wwd_page_title_link() {
        $(".wwt-menu-title").wrapInner("<a></a>");
        var linkURL = $(".menu--what-we-do-menu .menu-item--active-trail > a").attr("href");

        $(".menu--what-we-do-menu .menu-item--active-trail").addClass("hide-for-respnsive");
        $(".wwt-menu-title a").attr("href",linkURL);
      }

      // function wwt_page_mobile_menu() {
      //   if(screen.width <= 991) {
      //     $(".menu--wwt-menu ul.menu").click(function() {
      //       window.location = $(this).find("a").attr("href");
      //       return false;
      //     });
      //     $(".menu--what-we-do-menu ul.menu").click(function() {
      //       window.location = $(this).find("a").attr("href");
      //       return false;
      //     });
      //   }
      // }
    }
  }

})(jQuery, Drupal);
