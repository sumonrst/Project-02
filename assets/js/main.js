

$(document).ready(function(){
    $('.banner_area').slick({
        autoplay: true,
        // infinite: true,
        // loop: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
    });
    $('.testimonial').slick({
        autoplay: true,
        slidesToShow:2,
        arrows: false,
        dots:true,
    });
  });


/* Menu scroll code here start */
$(window).scroll(function() {
    /* Menu scroll background color change start */
    if($(window).scrollTop() > 200) {
        $('.header_area').addClass('sticky');
    }else{
        $('.header_area').removeClass('sticky');
    }
    /* Menu scroll background color change end */

    /*  Menu scroll font color change start */ 
    if($(window).scrollTop() > 200) {
        $('.header_menu ul li a').addClass('fontcolor');
    }else{
        $('.header_menu ul li a').removeClass('fontcolor');
    }
    /*  Menu scroll font color change end */ 
}); 



