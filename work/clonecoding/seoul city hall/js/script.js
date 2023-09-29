$(document).ready(function(){

    const swiper1 = new Swiper('.swipe-1', {
      loop : true,
      pagination: {
        el : ".swiper-pagination-1",
        type : "fraction",
      },
      navigation: {
        nextEl: ".next-1",
        prevEl: ".prev-1",
      },
      });
      const swiper12 = new Swiper('.swipe-1-2', {
        loop : true,
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

    /**/
    $('.nav').click(function(){
      let idx = $(this).index();
      $('.nav').removeClass('on').addClass('off')
      $(this).addClass('on').removeClass('off')
      $('.idx').removeClass('on').addClass('off')
      $('.idx').eq(idx).addClass('on').removeClass('off')
    })

    /*menu-bar*/
    $('.hide-over').hide()
    $('.menu-btn').click(function(){
      if($(this).hasClass('off')){
        $('.menu-btn').removeClass('on').addClass('off')
        $('.hide-over').show()
        $(this).removeClass('off').addClass('on')
      } else {
        $(this).removeClass('on').addClass('off')
        setTimeout(function(){
          $('.hide-over').hide()
        }, 100) 
      }
    });

    /*up-btn*/
    $(window).scroll(function(){
      if($(window).scrollTop() > 70){
        $('.up-btn').addClass('show').removeClass('hide')
      } else {
        $('.up-btn').addClass('hide').removeClass('show')
      }
    })

    $('.up-btn').click(function(){
      $(window).scrollTop(0)
    })
    
});