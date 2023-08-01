
$(document).ready(function(){

    $('.language').click(function(){
        $(this).find('.language-select').stop().slideToggle(300);
        return false;
    });

    // nav-hide 켜기 끄기 스크립트
    $('.nav-hide').css({'visibility' : 'hidden'})
    $('.header-nav > li').mouseenter(function(){
        $('.nav-hide').css({'visibility' : 'hidden'})
        $(this).find('.nav-hide').css({'visibility' : 'visible'})
    });
    $('.header-nav > li').mouseleave(function(){
        $('.nav-hide').css({'visibility' : 'hidden'})
    });

    $('.not-nav .btn').click(function(){
        $('.notice').removeClass('on')
        $('.not-nav .btn').removeClass('on')
        $(this).find('.notice').addClass('on')
        $(this).addClass('on')
    });




    //service 켜기 끄기 스크립트
    $('.service-wrap > li').click(function(){
        $('.service-content').removeClass('on')
        $('.service-wrap > li > h3').removeClass('on')
        $(this).find('.service-content').addClass('on')
        $(this).find('h3').addClass('on')
    });
    

        //main 스와이퍼
        var mswiper = new Swiper(".m-swiper", {
            loop : true,
            loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
            speed : 1000,
            effect : "fade",
        autoplay :{
            delay : 5000,
        },
        pagination: {
            el: ".m-count",
            type: "fraction",
        },
        navigation: {
            nextEl: ".m-next",
            prevEl: ".m-prev",
        },
        
        })
        var sw = 0;
        $('.m-stop').click(function(){
            if(sw==0){
                $('.m-stop').addClass('on');
                mswiper.autoplay.stop();
                sw = 1;
            }else{
                $('.m-stop').removeClass('on');
                mswiper.autoplay.start();
                sw = 0;
            }
        });
    
        // footer banner 스와이퍼
        var banswiper = new Swiper(".banner-swiper", {
            direction: "vertical",
            loop: true,
            speed : 1,
            allowTouchMove : false, 
            autoplay: {
                  delay: 2500,
              },
            navigation: {
                nextEl: ".ban-prev",
                prevEl: ".ban-next",
            },
          });
        var vw = 0;
        $('.ban-stop').click(function(){
            if(vw==0){
                $('.ban-stop').addClass('on');
                banswiper.autoplay.stop();
                vw = 1;
            }else{
                $('.ban-stop').removeClass('on');
                banswiper.autoplay.start();
                vw = 0;
            }
        });
        $('.ban-btn').click(function(){
            if(vw==0){
                $('.ban-stop').addClass('on');
                banswiper.autoplay.stop();
                vw = 1;
            }
        });
        

        //popup 스와이퍼
        var popswiper = new Swiper(".popup-swiper", {
            loop : true,
            loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
            speed : 1000,
        autoplay :{
            delay : 5000,
        },
        pagination: {
            el: ".popup-count",
            type: "fraction",
        },
        navigation: {
            nextEl: ".popup-next",
            prevEl: ".popup-prev",
        },
        })
        var gw = 0;
        $('.popup-stop').click(function(){
            if(gw==0){
                $('.popup-stop').addClass('on');
                popswiper.autoplay.stop();
                gw = 1;
            }else{
                $('.popup-stop').removeClass('on');
                popswiper.autoplay.start();
                gw = 0;
            }
        });


    //동구청 스크립트
    $('.agency > a').click(function() {
        if($(this).parent().find(".agency-list").css('display')=='none') {
            $(this).parent().find(".agency-list").fadeIn();
        } else {
            $(this).parent().find(".agency-list").fadeOut();
        }
        return false;
    });

    
     $(document).mouseup(function() {
         $('.agency-list').fadeOut();
     });

    //모바일 hidemenu 켜기
    $(".m-menu-btn").click(function(){
        $(".m-hidemenu").show()
    });
    //모바일 hidemenu 끄기
    $(".m-background").click(function(){
        $(".m-hidemenu").hide()
    });

    //모바일 language
    $(".m-lang > a").click(function(){
        $(".hide-lang").slideToggle(300)
    });

    //모바일 nav-menu 켜기
    $(".hide-nav .h-btn").click(function(){
        if($(this).parent().hasClass("off") === true){
            $(".nav-menu").hide()
            $(".hide-nav").removeClass("on").addClass("off")
            $(this).parent().removeClass("off").addClass("on")
            $(this).parent().find(".nav-menu").show()
        } else {
            $(".nav-menu").hide()
            $(".hide-nav").removeClass("on").addClass("off")
        }
    });
    //모바일 nav-menu-hide 켜기
    $(".wow > a").click(function(){
        if($(this).parent().hasClass("off") === true){
            $(".nav-menu-hide").hide()
            $(".wow").removeClass("on").addClass("off")
            $(this).parent().find(".nav-menu-hide").show()
            $(this).parent().removeClass("off").addClass("on")
        } else {
            $(".nav-menu-hide").hide()
            $(".wow").removeClass("on").addClass("off")
        }
    });

    //모바일 m-search-btn 켜기
    $(".m-search-btn").click(function(){
        if($(this).hasClass("off")){
            $(".m-search-wrap").show()
            $(this).removeClass("off").addClass("on")
        }else{
            $(".m-search-wrap").hide()
            $(this).removeClass("on").addClass("off")
        }
    });


});




