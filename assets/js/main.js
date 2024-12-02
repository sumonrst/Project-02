

$(document).ready(function(){
    $('.banner_area').slick({
        // infinite: true,
        // loop: true,
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-right"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-arrow-left"></i></button>',
        autoplay: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
              }
            }

          ]
        
    });
    $('.testimonial').slick({
        autoplay: true,
        slidesToShow:2,
        arrows: false,
        dots:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
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



