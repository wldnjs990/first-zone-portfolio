$("document").ready(function(){
    
//메인 컨텐츠 isotope
    $(".main-content").imagesLoaded(function(){
        
        $(".main-content").isotope({
            itemSelector : ".content"
            
        })
    })
    $(".main .main-nav li").click(function(){
        
        $(".main .main-nav li").removeClass("on");
        $(this).addClass("on");
        var selector = $(this).attr("data-filter");
        $(".main-content").isotope({
            filter : selector
        })       
    })

//메인 페이지 siwper
var swiper = new Swiper(".cent", {
    allowTouchMove : false, 
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
  });

/*info창으로 넘어가고 새로고침시 info높이로 main화면이 고정되는 오류 수정 코드*/
$('.swiper-wrapper .main').prop("style").removeProperty("height");
$('.swiper-wrapper .info').css({'height':'0'})
/*info창으로 넘어가고 새로고침시 info높이로 main화면이 고정되는 오류 수정 코드*/

$('.btn-next').click(function(){
    $('.btn-wrap > button').removeClass('on')
    $(this).addClass('on')
    $('.swiper-wrapper .info').prop("style").removeProperty("height");
    $('.swiper-wrapper .main').css({'height':'0'})
});
$('.btn-prev').click(function(){
    $('.btn-wrap > button').removeClass('on')
    $(this).addClass('on')
    $('.swiper-wrapper .main').prop("style").removeProperty("height");
    $('.swiper-wrapper .info').css({'height':'0'})
});



});
