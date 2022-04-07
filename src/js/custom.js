// JavaScript Document


jQuery(window).on('load', function() {
	
    "use strict";
                    
    jQuery("#loader").delay(100).fadeOut();
    jQuery("#loader-wrapper").delay(100).fadeOut("fast");
            
    jQuery(window).stellar({});
    
});


jQuery(window).on('scroll', function() {
    
    "use strict";
                            
    /*----------------------------------------------------*/
    /*	Navigtion Menu Scroll
    /*----------------------------------------------------*/	
    
    var b = jQuery(window).scrollTop();
    
    if( b > 72 ){		
        jQuery(".navbar").addClass("scroll");
    } else {
        jQuery(".navbar").removeClass("scroll");
    }
            

});


jQuery(document).ready(function() {
        
    "use strict";


    /*----------------------------------------------------*/
    /*	Mobile Menu Toggle
    /*----------------------------------------------------*/
    
    jQuery('.navbar-nav li.nav-item.nl-simple').on('click', function() {				
        jQuery('#navbarSupportedContent').css("height", "1px").removeClass("in").addClass("collapse");
        jQuery('#navbarSupportedContent').removeClass("show");				
    });


    /*----------------------------------------------------*/
    /*	OnScroll Animation
    /*----------------------------------------------------*/
    
    jQuery('.animated').appear(function() {

        var elem = jQuery(this);
        var animation = elem.data('animation');

        if ( !elem.hasClass('visible') ) {
            var animationDelay = elem.data('animation-delay');
            if ( animationDelay ) {
                setTimeout(function(){
                    elem.addClass( animation + " visible" );
                }, animationDelay);

            } else {
                elem.addClass( animation + " visible" );
            }
        }
                    
    });


    /*----------------------------------------------------*/
    /*	Animated Scroll To Anchor
    /*----------------------------------------------------*/
    
    jQuery('.header a[href^="#"], .page a.btn[href^="#"], .page a.internal-link[href^="#"]').on('click', function (e) {
        
        e.preventDefault();

        var target = this.hash,
            jQuerytarget = jQuery(target);

        jQuery('html, body').stop().animate({
            'scrollTop': jQuerytarget.offset().top - 60 // - 200px (nav-height)
        }, 'slow', 'easeInSine', function () {
            window.location.hash = '1' + target;
        });
        
    });
    
    
    /*----------------------------------------------------*/
    /*	ScrollUp
    /*----------------------------------------------------*/
    
    jQuery.scrollUp = function (options) {

        // Defaults
        var defaults = {
            scrollName: 'scrollUp', // Element ID
            topDistance: 600, // Distance from top before showing element (px)
            topSpeed: 800, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '', // Text for element
            scrollImg: false, // Set true to use image
            activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        };

        var o = jQuery.extend({}, defaults, options),
            scrollId = '#' + o.scrollName;

        // Create element
        jQuery('<a/>', {
            id: o.scrollName,
            href: '#top',
            title: o.scrollText
        }).appendTo('body');
        
        // If not using an image display text
        if (!o.scrollImg) {
            jQuery(scrollId).text(o.scrollText);
        }

        // Minium CSS to make the magic happen
        jQuery(scrollId).css({'display':'none','position': 'fixed','z-index': '2147483647'});

        // Active point overlay
        if (o.activeOverlay) {
            jQuery("body").append("<div id='"+ o.scrollName +"-active'></div>");
            jQuery(scrollId+"-active").css({ 'position': 'absolute', 'top': o.topDistance+'px', 'width': '100%', 'border-top': '1px dotted '+o.activeOverlay, 'z-index': '2147483647' });
        }

        // Scroll function
        jQuery(window).on('scroll', function(){	
            switch (o.animation) {
                case "fade":
                    jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).fadeIn(o.animationInSpeed) : jQuery(scrollId).fadeOut(o.animationOutSpeed) );
                    break;
                case "slide":
                    jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).slideDown(o.animationInSpeed) : jQuery(scrollId).slideUp(o.animationOutSpeed) );
                    break;
                default:
                    jQuery( (jQuery(window).scrollTop() > o.topDistance) ? jQuery(scrollId).show(0) : jQuery(scrollId).hide(0) );
            }
        });

        // To the top
        jQuery(scrollId).on('click', function(event){
            jQuery('html, body').animate({scrollTop:0}, o.topSpeed);
            event.preventDefault();
        });

    };
    
    jQuery.scrollUp();


    /*----------------------------------------------------*/
    /*	Video Link Lightbox
    /*----------------------------------------------------*/
    
    jQuery('.video-popup').magnificPopup({
        type: 'iframe',
            
            iframe: {
                patterns: {
                    youtube: {
           
                        index: 'youtube.com',
                        src: 'https://www.youtube.com/embed/kuceVNBTJio'
            
                            }
                        }
                    }		  		  
    });


    /*----------------------------------------------------*/
    /*	Statistic Counter
    /*----------------------------------------------------*/

    jQuery('.statistic-number').each(function () {
        jQuery(this).appear(function() {
            jQuery(this).prop('Counter',0).animate({
                Counter: jQuery(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    jQuery(this).text(Math.ceil(now));
                }
            });
        },{accX: 0, accY: 0});
    });


    /*----------------------------------------------------*/
    /*	Testimonials Rotator Slick Carousel
    /*----------------------------------------------------*/
    
    jQuery('#reviews-1 .center, #reviews-2 .center').slick({
        centerMode: true,
        autoplay: true,
        centerPadding: '0px',
        speed: 800,
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3
                }
            },
            {
                breakpoint: 800,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 648,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
                }
            }
        ]
    });


    /*----------------------------------------------------*/
    /*	Screens Carousel Slick
    /*----------------------------------------------------*/
    
    jQuery('.screens-carousel').slick({
        infinite: true,
        autoplay: true,
        centerMode: true,
        dots: true,
        autoplaySpeed: 3500,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false,
                slidesToShow: 1,
                variableWidth: false,
                fade: true,
                cssEase: 'linear'
              }
            }
        ]
    });	



    /*----------------------------------------------------*/
    /*	Contact Form Validation
    /*----------------------------------------------------*/
    
    jQuery(".contact-form").validate({
        rules:{ 
                name:{
                    required: true,
                    minlength: 1,
                    maxlength: 16,
                },
                email:{
                    required: true,
                    email: true,
                },       		
                message:{
                    required: true,
                    minlength: 2,
                    }
                },
                messages:{
                        name:{
                            required: "Please enter no more than (1) characters"
                        }, 
                        email:{
                            required: "We need your email address to contact you",
                            email: "Your email address must be in the format of name@domain.com"
                        }, 
                        message:{
                            required: "Please enter no more than (2) characters"
                        }, 
                    }
    });	


    /*----------------------------------------------------*/
    /*	Comment Form Validation
    /*----------------------------------------------------*/
    
    jQuery(".comment-form").validate({
        rules:{ 
                name:{
                    required: true,
                    minlength: 1,
                    maxlength: 16,
                },
                email:{
                    required: true,
                    email: true,
                },       		
                message:{
                    required: true,
                    minlength: 2,
                    }
                },
                messages:{
                        name:{
                            required: "Please enter no more than (1) characters"
                        }, 
                        email:{
                            required: "We need your email address to contact you",
                            email: "Your email address must be in the format of name@domain.com"
                        }, 
                        message:{
                            required: "Please enter no more than (2) characters"
                        }, 
                    }
    });


    /*----------------------------------------------------*/
    /*	Bottom Quick Form
    /*----------------------------------------------------*/

    jQuery('.bottom-form-header').parent().delay(1000).animate({bottom: '-311px'}, 1000, function(){
        jQuery(this).find('.bottom-form-header').addClass('closed');
    }); 
    
    
    jQuery('.bottom-form-header').click(function(){
        if (jQuery(this).hasClass('closed')){
            jQuery(this).next('.bottom-form-holder').css({display:'block'}).parent().animate({bottom: 0}, 1000, function(){
                jQuery(this).find('.bottom-form-header').removeClass('closed');
            });
        } else {
            jQuery(this).parent().animate({bottom: '-311px'}, 1000, function(){
                jQuery(this).find('.bottom-form-header').addClass('closed');
            });
        }
        
        return false;
    });


    /*----------------------------------------------------*/
    /*	Newsletter Subscribe Form
    /*----------------------------------------------------*/

    jQuery('.newsletter-form').ajaxChimp({
    language: 'cm',
    url: 'https://dsathemes.us3.list-manage.com/subscribe/post?u=af1a6c0b23340d7b339c085b4&id=344a494a6e'
        //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    jQuery.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email address',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };	



});