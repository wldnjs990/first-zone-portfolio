
<? include $DOCUMENT_ROOT."../inc/header.php"; ?>

<p class="content_title_info">
    제휴 및 제안은 본 시스템을 통해 접수된 건에 한하여 정식으로 검토되며<br>제안 내용 및 관련자료는 제휴 검토 목적으로만 이용됩니다.
</p>



<style>
.service_area{width: 100%; background: #f5f7f8;}
.service_area .contain{position: relative; max-width: 1120px; margin: 0 auto;}
.service_area .contain h3{font-family: "NanumSquare-EB"; font-size: 20px; padding: 27px 0;}
.btn_expanded{
    position: absolute; right: 0; top: 20px; width: 46px; height: 46px; 
    border-radius: 50px;transition: background-color 0.2s; background-color: #f5f7f8;
}
.btn_expanded::after{
    content: ''; display: block; width: 20px; height: 10px;
    background: url(../img/sprite.png) no-repeat; background-size: 474px 1500px;
    background-position: -121px -13px; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    margin-top: 1px;
}
.btn_expanded:hover{background-color: #00c73c;}
.btn_expanded:hover::after{background-position: -145px -13px;}
.btn_expanded.on::after{background-position: -121px 0; top: 20px;}
.btn_expanded.on:hover::after{background-position: -145px 0;}
/*------------------------------------------*/
.service_menu_body[aria-expanded="true"]{display: block;}
.service_menu_body[aria-expanded="false"]{display: none;}
.service_menu_body > strong{
    display: block; padding:10px 0;
    font-family: "NanumSquare-EB"; font-size: 15px;
}
.service_menu{padding-bottom: 40px;}
.service_menu::after{content: ''; display: block; clear: both;}
.service_menu > li{
    overflow: hidden; float: left; position: relative;
    width: 216px; height: 142px; background: #fff;
    margin-top: 10px;
}
.service_menu > li:nth-child(6){margin-left: 0px;}
.service_menu > li + li{margin-left: 10px;}
.service_menu > li > a{
    display: block; height: 100%; color: #555; padding-top: 30px;
    font-family: 'NanumSquare-B'; font-size: 15px; text-align: center;
}
.service_menu > li > a:hover > p{text-decoration: underline;}
.service_menu > li > a > p{position: absolute; bottom: 25px; left: 0; right: 0;}
.service_menu > li > a > p > span{display: block; font-size: 12px; line-height: 18px;}
/*---------------------------------*/
.service_menu .place_api p{font-size: 14px; letter-spacing: -.5;}
/**/
.service_menu > li > a::before{
    content: ''; display: inline-block;
    background: url(../img/sprite-1600px.png)no-repeat; background-size: 474px 1500px;
}
.service_menu .news::before{width: 56px; height: 46px; margin-top: 5px; background-position:0 -153px;}
.service_menu .ad::before{width: 56px; height: 46px; margin-top: 5px; background-position:-62px -153px;}
.service_menu .audioclip::before{width: 62px; height: 59px; background-position:-412px -976px;}
.service_menu .commerce_solution::before{width: 50px; height: 56px; background-position:-201px -737px;}
.service_menu .game::before{width: 64px; height: 50px; background-position:-201px -737px;}
</style>
<!--service_area---------------------------------------------------------------------------->
<div class="service_area">
    <div class="contain">
        <h3>주요 서비스 및 사업 제휴 및 문의</h3>
        <button type="button" class="btn_expanded on"><span class="blind">접힘/펼침 버튼</span></button>
        <div class="service_menu_body" aria-expanded="true">
            <strong>네이버 서비스 제휴</strong>
            <ul class="service_list" aria-expanded="true">
                <li><a href="" class="news"><p>뉴스검색 제휴</p></a></li>
                <li><a href="" class="ad"><p>비즈니스 플랫폼·광고</p></a></li>
                <li><a href="" class="audioclip"><p>오디오클립 제휴</p></a></li>
                <li><a href="" class="commerce_solution"><p>커머스 솔루션 제휴</p></a></li>
                <li><a href="" class="game"><p>네이버 게임</p></a></li>
                <li><a href="" class="place_api"><p>플레이스(예약/주문)제휴 · API 연동</p></a></li>
                <li><a href="" class="travel_api"><p>여행상품 제휴 · API 연동</p></a></li>
                <li><a href="" class="media"><p>크로스미디어 제휴</p></a></li>
                <li><a href="" class="person_info"><p>인물정보 제휴</p></a></li>
                <li><a href="" class="cs"><p>네이버 고객센터</p></a></li>
            </ul>
            <strong>관계사 제휴</strong>
            <ul class="service_list" aria-expanded="true">
                <li><a href="" class="cloud"><p>네이버 클라우드 제휴</p></a></li>
                <li><a href="" class="financial"><p>네이버파이낸셜 제휴</p></a></li>
                <li><a href="" class="webtoon"><p>웹툰/웹소설 사업 제휴·광고</p></a></li>
                <li><a href="" class="line"><p>라인 제휴</p></a></li>
                <li><a href="" class="snow_api"><p>스노우 제휴 · 광고 · API문의</p></a></li>
            </ul>
        </div>
    </div>
</div>
<!----------------------------------------------------->
<div class="content">
    
</div>
<!----------------------------------------------------->

<script>
$(document).ready(function(){

    $(".btn_expanded").on("click",function(e){
        if($(".service_menu_body").attr('aria-expanded') === 'true'){
            $(this).removeClass("on");
            $(".service_menu_body").attr('aria-expanded', false);
        }else {
            $(this).addClass("on");
            $(".service_menu_body").attr('aria-expanded', true);
        }
    });
});
</script>

<? include $DOCUMENT_ROOT."../inc/footer.php"; ?>