(function($, Drupal) {

    // It's best practice to use strict mode, can help avoid some browser issues.
    'use strict';

    var accordionContent = $('.accordion > div').hide();
    var accordionHeader = $('.accordion > h3');

    accordionHeader.on('click', function() {
        accordionContent.hide();
        if ($(this).hasClass('ui-state-active')) {
            $(this).removeClass('ui-state-active');
            $(this).next('div').slideUp('slow');
        } else {
            accordionHeader.removeClass('ui-state-active');
            $(this).addClass('ui-state-active');
            $(this).next('div').slideDown('slow');
        }
    });


    //for inner accordion
    var accordionContent1 = $('.accordion1 > div').hide();
    var accordionHeader1 = $('.accordion1 > h3');

    accordionHeader1.on('click', function() {
        accordionContent1.hide();
        if ($(this).hasClass('ui-state-active')) {
            $(this).removeClass('ui-state-active');
            $(this).next('div').slideUp('slow');
        } else {
            accordionHeader1.removeClass('ui-state-active');
            $(this).addClass('ui-state-active');
            $(this).next('div').slideDown('slow');
        }
    });
    //end inner accordion

    $(document).ready(function() {

    });

    $(".main_menu ul li, .aux_menu ul li").hover(function() {
        $(this).children("ul").fadeIn();
    }, function() {
        $(this).children("ul").hide();
    });

    $(".mobile_topbar_content ul li").click(function() {
        $(this).children("ul").slideToggle();
        $(this).toggleClass("show-child");
    });


    $(".main_menu ul li a").click(
        function() {
            if ($(this).attr("href") == "#") {
                //$(this).children("ul").slideDown();	
                return false;
            }
        }
    );

    $('nav#menu').mmenu({
        offCanvas: {
            position: "left",

        }
    });


    $(".mobile_topbar_button").click(function() {
        $(".mobile_topbar_content").slideToggle();
        $(".mobile_topbar_button i").toggleClass("fa-chevron-down");
        $(".mobile_topbar_button i").toggleClass("fa-chevron-up");
    });

    $(".header, .topbar").click(function() {
        $(".mobile_topbar_content").slideUp();
    });

    jQuery(function() {
        jQuery('#camera_wrap').camera({
            height: 'auto',
            loader: 'none',
            pagination: true,
            thumbnails: false,
            hover: false,
            playPause: false,
            fx: 'scrollRight',
            alignment: 'center',
            navigation: false
        });
    });


    $("#footer_row ul li:nth-child(2) a").click(function() {
        $(window.opera ? 'html' : 'html, body').animate({
            scrollTop: 0
        }, 'slow');

        $("#footer_row ul li:nth-child(2) a").attr("href", "#");
        //$(".share_price_topbar").css("color","red");

        setInterval(function() {
            $(".share_price_topbar").css("background-color", "#521F5D");
            $(".share_price_topbar").fadeOut("slow");
            $(".share_price_topbar").fadeIn("slow");

        }, 2000);
    });


    /**
      //For Accordion
      $( ".accordion" ).accordion({
          heightStyle: "content",
    	  collapsible: true, 
    	  active: false
        }); 
    	
    	//$('#modal-id').modal('show')


      var url = $(location).attr('href');
      if(url == 'http://www.fcmb.com/frequently-asked-questions#ui-id-17'){
      $('#ui-id-18').css('display','block');
      }



      //Former Inc-style_Scripts.html.twig
      $(".main_menu ul li, .aux_menu ul li").hover(function(){
        $(this).children("ul").fadeIn();
      },function(){
        $(this).children("ul").hide();
      });
      
      
      $(".mobile_topbar_content ul li").click(function(){
        $(this).children("ul").slideToggle();
        $(this).toggleClass("show-child");
      });
      

      $(".main_menu ul li a").click(
        function(){
          if($(this).attr("href")=="#"){
            //$(this).children("ul").slideDown();	
            return false;
          }
        }
      );
      
      $('nav#menu').mmenu({
       offCanvas: {
        position  : "left",
       
       }
      });



      //formerly in inc-footer.html.twig  
        $(".mobile_topbar_button").click(function(){
          $(".mobile_topbar_content").slideToggle();
          $(".mobile_topbar_button i").toggleClass("fa-chevron-down");
          $(".mobile_topbar_button i").toggleClass("fa-chevron-up");
        });
        
        $(".header, .topbar").click(function(){
          $(".mobile_topbar_content").slideUp();
        });
         
       jQuery(function(){
             jQuery('#camera_wrap').camera({
               height: 'auto', loader: 'none', pagination: true, thumbnails: false, hover: false, playPause:false, fx:'scrollRight', alignment:'center', navigation:false
             });  });

       //animate share price
       $("#footer_row ul li:nth-child(2) a").click(function(){
         $(window.opera ? 'html' : 'html, body').animate({
               scrollTop: 0
           }, 'slow');
         
         $("#footer_row ul li:nth-child(2) a").attr("href","#");
          //$(".share_price_topbar").css("color","red");
         
                setInterval(function(){
             $(".share_price_topbar").css("background-color","#521F5D");
               $(".share_price_topbar").fadeOut("slow");
             $(".share_price_topbar").fadeIn("slow"); 
                
               },2000);
       });
                   
      
    **/

    document.getElementById('openModal').addEventListener('click', function() {
        document.getElementById('exampleModalCenter').style.display = 'flex';
    });

    document.getElementById('closeModal').addEventListener('click', function() {
        document.getElementById('exampleModalCenter').style.display = 'none';
    });

    document.getElementById('closeModalFooter').addEventListener('click', function() {
        document.getElementById('exampleModalCenter').style.display = 'none';
    });


})(window.jQuery, window.Drupal);