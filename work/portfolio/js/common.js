/*--motion------------------------------------------*/
$(document).ready(function(){
    const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
    }  
    const observer = new IntersectionObserver(entry => {
    entry.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('motion'); 
        } else {
        entry.target.classList.remove('motion');        
        }
    });
    }, options);
    const boxList = document.querySelectorAll('.sec');
    boxList.forEach(el => observer.observe(el));
});
/*--//motion----------------------------------------*/
/*--sec_nav : .on ------------------------------------------*/
$(window).scroll(function() {
    var pos = $(window).scrollTop();
    var pos2 = pos + 50;
    if (pos2 > $('#section01').offset().top) { highlightLink('section01'); }
    if (pos2 > $('#section02').offset().top) { highlightLink('section02'); }
    if (pos2 > $('#section03').offset().top) { highlightLink('section03'); }
    if (pos2 > $('#section04').offset().top) { highlightLink('section04'); }
});
function highlightLink(anchor) { 
    $('.sec_nav .on').removeClass('on');
    $(".sec_nav").find('[href="#' + anchor + '"]').addClass('on');
};
/*--//sec_nav : .on ----------------------------------------*/
/*--content_box slide animation---------------------------------------------------------*/
const options = {
    root: null,    
    rootMargin: "0px", 
    threshold: 0,     
}
const options2 = {
    root: null,         
    rootMargin: "0px", 
    threshold: .8, 
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animation');
    }
    });
}, options);
const remove = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        $('.content_box').removeClass('animation');
    }
    });
}, options2);

const boxList = document.querySelectorAll('.content_box');
boxList.forEach(el => observer.observe(el));
const removeList = document.querySelectorAll('#section01, #section03')
removeList.forEach(el => remove.observe(el));
/*--//content_box slide animation-------------------------------------------------------*/
/*--slick animation--------------------------------------------------*/
$('.slider').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed:2000,
            /*infinite: true, 무한반복
            slidesToShow: 3, 한번에 보여줄 슬라이드 갯수
            slidesToScroll: 3 한번 클릭에 넘어가는 슬라이드 갯수*/
        });
/*--//slick animation------------------------------------------------*/
/*--content2_slick animation(mobile)--------------------------------------------------*/
$('.moblie_web_wrap').slick({
    dots: true
});
/*--//slick animation------------------------------------------------*/





/*--content_box slide animation---------------------------------------------------------
const options = {
    root: null,           //타겟이 영역에 들어오고 나가는 것을 확인
    rootMargin: "0px",    //viewpor의 범위 조절
    threshold: 0,       //viewport에 0% 들어와 있어야 실행
}
const options2 = {
    root: null,           //타겟이 영역에 들어오고 나가는 것을 확인
    rootMargin: "0px",    //viewpor의 범위 조절
    threshold: .8,       //viewport에 100% 들어와 있어야 실행
}
const observer = new IntersectionObserver(entries => {  //감시중 타겟이 화면에 등장하면 코드 실행
    entries.forEach(entry => {                            //배열 요소 각각에 대해 실행
    if (entry.isIntersecting) {                         //타겟이 들어오고 나감을 확인
        entry.target.classList.add('animation');
    }
    });
}, options);    //상위의 설정된 내용을 참조하여 사실여부 확인후 처리
const remove = new IntersectionObserver(entries => {  //감시중 타겟이 화면에 등장하면 코드 실행
    entries.forEach(entry => {                            //배열 요소 각각에 대해 실행
    if (entry.isIntersecting) {                         //타겟이 들어오고 나감을 확인
        $('.content_box').removeClass('animation');
    }
    });
}, options2);    //상위의 설정된 내용을 참조하여 사실여부 확인후 처리

const boxList = document.querySelectorAll('.content_box');  //일치하는 요소 찾을때
boxList.forEach(el => observer.observe(el));        //각각에 대해 상위 내용을 실행
const removeList = document.querySelectorAll('#section01, #section03')  //일치하는 요소 찾을때
removeList.forEach(el => remove.observe(el));        //각각에 대해 상위 내용을 실행

--//content_box slide animation-------------------------------------------------------*/