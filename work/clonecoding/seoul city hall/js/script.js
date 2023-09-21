$(document).ready(function(){

    const swiper1 = new Swiper('.swipe-1', {
      loop : true,
      spaceBetween: 40,
      pagination: {
        el : ".swiper-pagination-1",
        type : "fraction",
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },
      });
    const swiper2 = new Swiper(".swipe-2", {
      loop : true,
      slidesPerView: 3,
      spaceBetween: 40,
      pagination: {
        el : ".swiper-pagination",
        type : "fraction",
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
    });
    
});