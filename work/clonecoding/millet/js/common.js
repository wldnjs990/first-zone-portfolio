$(document).ready(function(){
    //검색창 클릭시 나타나는 박스 스크립트
    $('.search').click(function(){
        $('.search-hide-box').fadeIn(200);
    });
    $(window).click(function(e){
        if(!$(e.target).hasClass('form')){
            if($('.search-hide-box').css("display") == "block"){
                setTimeout(() => {
                    $('.search-hide-box').fadeOut(200);
                }, 200) 
            }
        }
    })
    //헤더 밑줄
    $('.nav > ul > li').mouseenter(function(){
        $('.header').addClass('on')
    })
    $('.nav > ul > li').mouseleave(function(){
        $('.header').removeClass('on')
    })
    //슬라이드 메뉴
    $('.brand').mouseenter(function(){
        $('.brand-menu').stop().fadeIn(200)
    })
    $('.brand').mouseleave(function(){
        $('.brand-menu').stop().fadeOut(200)
    })

    $('.hide').mouseenter(function(){
        $(this).find('.hide-menu').addClass('on')
    })
    $('.hide').mouseleave(function(){
        $(this).find('.hide-menu').removeClass('on')
    })

    //스와이퍼
    var swiper = new Swiper(".content-1", {
        loop : true,
    });
});