
$(document).ready(function(){
    /*-- gnb_menu ------------------------------*/
    $('.gnb_menu').delegate('li','mouseenter', function(){
      $(this).find('.drop_menu').stop().slideDown(500);
    });
    $('.gnb_menu').delegate('li','focusin', function(){
      $(this).find('.drop_menu').stop().slideDown(500);
    });
    $('.gnb_menu').delegate('li','mouseleave', function(){
      $(this).find('.drop_menu').stop().slideUp(250);
    });
    $('.gnb_menu').delegate('li','focusout', function(){
      $(this).find('.drop_menu').stop().slideUp(250);
    });
    /*-- //gnb_menu ----------------------------*/
    /*--site_map_btn---------------------------*/
    $('.sitemap_box button').click(function(){
        $('header').toggleClass('active');
        $('body').toggleClass('hidden');
    });
    /*--//site_map_btn-------------------------*/
    /*--header_scroll---------------------------*/
    var action_scroll;
    var now_scroll_top=0;
    var start_position=5;
    var nav_bar_height=$('header').outerHeight();
    
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
            $('header').removeClass('header_down').addClass('header_up');
        } else {
            if(st + $(window).height()<$(document).height()){
                $('header').removeClass('header_up').addClass('header_down');
            }
        }
        now_scroll_top = st;
    }
    /*--//header_scroll-------------------------*/
    
    /*--affiliate_box button-----------------------*/
            $('.affiliate_box button').click(function(){
                $('.affiliate_box ul').stop().fadeToggle(0);
                return false;
            });
            $(document).click(function(e){
                if(e.target.className == '.affiliate_box ul'){
                    return false;
                }
                $('.affiliate_box ul').stop().fadeOut(0);
                
            });
        });
    /*--//affiliate_box button---------------------*/