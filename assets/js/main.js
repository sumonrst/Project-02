

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