$(document).ready(function(){
    slide();
});

/*--main_slide-----------------------------------------------------------------*/
function slide(){
    //1 기본설정(슬라이드)
    var vwpt = 100;
    var dot_on = 0;
    var slide_length = 0;
    var $dot = $('.dot button');
    var $scene = $('.scene');
    var $sceneli = $scene.children('li');
    /*var?*/

    //3 초기값 설정(인잇)
    function init(){
        dot_on = $('.dot button.on').index();
        slide_length = $dot.length;/*슬라이드 길이가 곧 도트 길이다(?)*/
        /*init?*/
    }
/*dot_on은 .dot 영역에 .on이라는 이름을 가진 버튼 영역의 순서(index)를 따른다.*/

    //4 이벤트 설정(슬라이드 이벤트)
    function slideEvent(){
        $dot.click(function(){
            dot_on = $(this).index();
            slideMove();
        });
        $('.prev').click(function(){
            prevChkPlay()
        });
        $('.next').click(function(){
            nextChkplay()
        });
        autoPlay();       //자동재생
        autoPlayStop();   //자동재생 멈춤
        autoPlayRestart();//자동재생 재시작
    }

/*$dot 영역을 클릭하면 dot_on이 그 클릭한(this) $dot 영역의 순서(index)로 바뀌고
slideMove한다.*/

    //2 슬라이드 설정
    function slideMove(){
        $scene.stop().css({
            'transform':'translatex('+ -vwpt * dot_on + 'vw)'
        });
        $dot.removeClass('on');
        $dot.eq(dot_on).addClass('on');
        /*eq?*/
    }
/*$dot에서 클래스명을 전부 없애고(removeClass),
dot_on의 순서번호(eq)에 'on'이라는 클래스 명을 붙인다(addClass).

slideMove는 css속성인 (transform : translateX 속성을 이용해 (-)vwpt 값에 dot_on의 순서번호를 곱한 값에
VW단위를 붙인 만큼 이동하는 옵션을 부여한다.(++ 수식 안에서만 transitionX에 계산식을 넣을 수 있음.))

$scene에 stop() <--이건 왜 들어가지?
*/

    //5.이전 버튼 클릭시 조건 검사후 슬라이드 실행 설정
function prevChkPlay() {
        if (dot_on == 0) {
           dot_on = slide_length - 1;
        } else {
            dot_on--;
        }
        slideMove();
    }

    //6.다음 버튼 클릭시 조건 검사후 슬라이드 실행 설정
function nextChkplay(){
        if(dot_on == slide_length - 1) {
            dot_on = 0;
        } else {
            dot_on++;
        }
        slideMove();
    }
    

    //7. autoPlay 자동슬라이드 설정
function autoPlay(){
    auto = setInterval(function(){ //setInterval : 일정한 시간 간격을 두고 반복해서 실행
        nextChkplay();
    }, 3000 /*1000 : 시간 간격 1초*/);
}
function autoPlayStop(){
    $sceneli.mouseenter(function(){
        clearInterval(auto);
        //clealInterval : 반복을 멈추게 하다
    });
}
function autoPlayRestart(){
    $sceneli.mouseleave(function(){
        auto = setInterval(function(){
        nextChkplay();
        }, 3000);
    });
}

/*a = 1 : a는 1이다(justify)
  a == 1 : a는 1과 동등하다(equal)
  a === 1 : a가 1과 같다면(if)*/



init();
slideEvent();
}





/*
CSS- IR 기법 (Image Replacement)
이미지를 볼 수 없는 사용자에게 적절한 대체 텍스트를 제공하는 것

마크업으로 대체 텍스트를 적용하는 경우
<img> 태그의 alt 속성 값으로 표현하기에 대체 텍스트가 너무 길 때
CSS background 속성을 사용하여 처리한 의미 있는 이미지일 때

요소 숨김 처리(대체 텍스트)
의미가 잘 전달되로록 시멘틱 마크업이 중요함
화면에서 보이지 않도록 CSS로 숨김
스크린 리더기가 읽을 수 있도록 처리해야 함

basic.css : 스타일 정의 내려져 있음

<span class="blind">네이버클라우드플랫폼</span>




<!-------------------------------------------------->



<script>
    document.querySelector('.btn1').addEventListener('click', function(){
        document.querySelector('.scene').style.transform = 'translate(0vw)';
        $(this).addClass('on');
        $('button').not($(this)).removeClass('on')
    });
    document.querySelector('.btn2').addEventListener('click', function(){
        document.querySelector('.scene').style.transform = 'translate(-100vw)';
        $(this).addClass('on');
        $('button').not($(this)).removeClass('on')
    });
    document.querySelector('.btn3').addEventListener('click', function(){
        document.querySelector('.scene').style.transform = 'translate(-200vw)';
        $(this).addClass('on');
        $('button').not($(this)).removeClass('on')
    });
    document.querySelector('.btn4').addEventListener('click', function(){
        document.querySelector('.scene').style.transform = 'translate(-300vw)';
        $(this).addClass('on');
        $('button').not($(this)).removeClass('on')
    });
    질문 선택queryselector, 이벤트 추가addeventlistner, 변수$, 추가하다addclass, 빼다removeclass*/

/*--//main_slide-----------------------------------------------------------------*/
