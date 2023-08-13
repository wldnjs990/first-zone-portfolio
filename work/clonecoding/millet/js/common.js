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
    var swiper1 = new Swiper(".content-1", {
        loop : true,
        pagination: {
            el: ".c-1-progress",
            type : 'progressbar',
        },
        navigation: {
            nextEl: ".c-1-next",
            prevEl: ".c-1-prev",
        },
    });
    var swiper1_1 = new Swiper(".content-1", {
        pagination: {
            el: ".c-1-paging",
            type: "fraction"
        },
    });
    swiper1.controller.control = swiper1_1;
    
    var swiper2 = new Swiper(".item-wrap", {
        loop : true,
        slidesPerView: 4,
    });
    var swiper3 = new Swiper(".new-swipe", {
        loop : true,
        slidesPerView: 4,
    });
    var swiper4 = new Swiper(".commend-swipe", {
        loop : true,
        slidesPerView: 5,
    });

    /*헤더 숨기기*/
    /*--header_scroll---------------------------*/
    var action_scroll;
    var now_scroll_top=0;
    var start_position=5;
    var nav_bar_height=$('.header').outerHeight();

    //스크롤시에 사용자가 스크롤 했다는 것을 알림
    $(window).scroll(function(event) {    
            action_scroll = true;
        });

    setInterval(function(){ //setInterval : 호출함수(일정시간 간격을 두고 함수 실행)
        if(action_scroll){
        hasScrolled();
        action_scroll=false; //리셋
        }
    }, 250);  //250ms(시간단위, 1초 1000분 1)마다

    //has_scrolled()실행하고 action_scroll 상태를 재설정

    //hasScrolled 동작 구현
    function hasScrolled(){
        //헤더의 높이보다 더 스크롤이 되었을 경우
        var st = $(this).scrollTop(); //현재 스크롤의 위치를 저장
        if(Math.abs(now_scroll_top - st) <= start_position) //현재 스크롤 값 반환
        return;   //return 실행후 종료, 위치값 호출

            if(st > now_scroll_top && st > nav_bar_height){
            $('.header').removeClass('header-down').addClass('header-up');
        } else {
            if(st + $(window).height()<$(document).height()){
                $('.header').removeClass('header-up').addClass('header-down');
            }
        }
        now_scroll_top = st;
    }
    /*--//header_scroll-------------------------*/
    
    /*new-swipe 스크립트*/
    $('.new-nav > li').click(function(){
        let idx = $(this).index()
        $('.new-nav > li').removeClass('on');
        $(this).addClass('on');
        $('.new-list').removeClass('on');
        $('.new-list').eq(idx).addClass('on');
    })
    /* 스크롤 탑 메뉴 활성화 */
    $(window).scroll(function(){
        let scrollevent = $(this).scrollTop();
        if(scrollevent > 0){
            $('.go-top').addClass('on')
        } else {
            $('.go-top').removeClass('on')
        }
    });
    $('.go-top').click(function(){
        $(window).scrollTop(0);
    })
});