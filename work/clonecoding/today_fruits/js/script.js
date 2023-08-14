$(document).ready(function(){
    var swiper1 = new Swiper(".main-banner", {
        loop : true,
    });
    var swiper2 = new Swiper(".special", {
        spaceBetween: 10,
        slidesPerView: 1.2,
        breakpoints: {

            470: {
              slidesPerView: 2,
            },

          }
    });
    var swiper3 = new Swiper(".new", {
        spaceBetween: 10,
        slidesPerView: 2,
        breakpoints: {

            470: {
              slidesPerView: 2.9,
            },

          }
        
    });
    
})