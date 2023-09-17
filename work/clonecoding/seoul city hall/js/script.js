$(document).ready(function(){

    const swiper1 = new Swiper('.swipe-1', {
        auto: true,
      });
    const swiper2 = new Swiper(".swipe-2", {
      loop : true,
      slidesPerView: 3,
      spaceBetween: 40,
      Pagination: {
        el : ".swiper-pagination",
        type : "fraction",
      },
    });
    
});