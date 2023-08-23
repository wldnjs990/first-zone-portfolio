$(document).ready(function(){
    var swiper1 = new Swiper(".main-banner", {
        loop : true,
        pagination : {
            el : ".swiper-pagination",
            type : "fraction",
        }
    });

    var swiper2 = new Swiper(".special", {
        spaceBetween: 10,
        slidesPerView: 'auto',
    });

    var swiper3 = new Swiper(".new", {
        spaceBetween: 10,
        slidesPerView: 2.0,
        breakpoints: {

            500: {
              slidesPerView: 2.9,
            },

          }
        
    });

    var swiper4 = new Swiper(".video", {
        spaceBetween: 10,
        slidesPerView: 'auto',
    });
    
    
})

