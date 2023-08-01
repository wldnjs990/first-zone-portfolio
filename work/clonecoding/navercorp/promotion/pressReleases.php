
<? include $DOCUMENT_ROOT."../inc/header.php"; ?>


<style>
.underline{
    display: block; position: absolute; left: 0; bottom: 0;
    background: #ddd; width: 100%; height: 1px;
}
.underline::before{background: #333;}
.underline::after{background: #00c73c;}
.underline::after,
.underline::before{
    content: '';
    display: block; position: absolute; left: 0; bottom: 0;
    width: 100%; height: 1px; transform-origin: left; transform: scaleX(0); transition: transform .3s;
}
/*---------------------------*/
.search_wrap{padding: 10px 0 40px; text-align: center; font-size: 0;}
.select_wrap{min-width: 150px; display: inline-block; vertical-align: top; position: relative;}
.select_wrap > button{
    position: relative; width: 100%; height: 56px;
    font-size: 15px; text-align: left; line-height: 55px;
}
.select_wrap > button::after{
    content: ''; display: block; position: absolute; top: 50%; right: 0; transform: translate(-50%, -50%);
    width: 16px; height: 7px; background: url(../img/sprite.png)no-repeat;
    background-size: 474px 1500px; background-position: -169px -39px;
}
.select_wrap > button:hover + .underline::before{transform: scale(1);}
.select_wrap > button[aria-expanded="true"] ~ .select_box{display: block;}
/*-------------------------------------*/
.select_box{
    overflow: hidden; overflow-y: auto; width: 100%; max-height: 190px;
    position: absolute; left: 0; top: 0; z-index: 10; display: none;
    border: 1px solid #00c73c; background: #fff;
}
.select_box button{
    width: 100%;
    font-size: 15px; color: #555; padding: 0 20px; line-height: 48px;
    text-align: left;
}
.select_box button:hover{
    background: #f8f8f8; color: #00c73c; font-family: "NanumSquare-B";
}
/*----------------------------------*/
.search{display: inline-block; position: relative; width: 250px; height: 56px;}
.search > input{
    width: 100%; height: 100%; border-bottom: solid 1px #ddd;
    font-size: 16px; line-height: 55px;
}
.search > button{
    position: absolute; right: 0; top: 0; display: block; margin-top: 4px;
    width: 46px; height: 46px; border-radius: 50%;
    transition: background-color .3s;
}
.search > button:hover{background-color: #00c73c;}
.search > button::before{
    content: ''; display: block; width: 20px; height: 20px;
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: url(../img/sprite.png)no-repeat; background-size: 474px 1500px;
    background-position: -169px 0;
}
.search > button:hover::before{background-position: -124px -65px;}
.search input:hover + .underline::before{transform: scale(1);}
.search input:focus + .underline::after{transform: scale(1);}
</style>
<!--search_wrap------------------------------------>
<div class="search_wrap">
    <div class="select_wrap">
        <button type="button" aria-expanded="false">전체</button>
        <span class="underline"></span>
        <ul class="select_box" aria-expanded="false">
            <li><button type="button" type="button" data-reaYear="">전체</button></li>
            <li><button type="button" type="button" data-reaYear="2023">2023년</button></li>
            <li><button type="button" type="button" data-reaYear="2022">2022년</button></li>
            <li><button type="button" type="button" data-reaYear="2021">2021년</button></li>
            <li><button type="button" type="button" data-reaYear="2020">2020년</button></li>
        </ul>
    </div>
    <div class="search">
        <input type="text" id="title" name="title" value="">
        <span class="underline"></span>
        <button type="button"><span class="blind">검색</span></button>
    </div>
</div>
<!--//search_wrap---------------------------------->

<style>
.content.promotion{max-width: 1160px;}
.report_list li{display: none; float: left; vertical-align: top; width: 33.333%; font-size: 16px; margin: 0 0 60px 0;}
.report_list li > a{display: block; width: calc(100% - 40px); margin: 0 auto; text-decoration: none;}
.report_list li > a:hover h3{text-decoration: underline;}
.report_list::after{content: ''; display: block; clear: both;}
.report_list .img_box{
    overflow: hidden; position: relative; width: 100%; margin: 0 0 19px; padding-top: 56%;
    background-size: cover; background: no-repeat 50%; 
}
/*------------------------*/
.report_list .text_box{line-height: 1.6;}
.report_list .text_box h3{
    max-height: 56px; font-family: "NanumSquare-EB"; font-size: 18px; 
    overflow: hidden; word-break: break-all; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;
    margin: 0 0 5px;
}
.report_list .text_box p{
    max-height: 70px; font-size: 15px; color: #666; margin: 0 0 9px;
    line-height: 1.6; overflow: hidden; word-break: break-all;
    display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;
}
.report_list .text_box span{font-size: 12px; color: #888;}
/*--------------------*/
.btn_area{font-size: 0; text-align: center; clear: both;}
.btn_more{
    position: relative; width: 46px; height: 46px;
    background-color: #bac2cd; border-radius: 50%; transition: background-color 0.3s;
}
.btn_more:hover{background-color: #00c73c;}
.btn_more::before{
    content: ''; display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 14px; height: 16px;
    background: url(../img/sprite.png)no-repeat; background-size: 474px 1500px;
    background-position: -194px 0;
}
/*--------------------*/
@media only screen and (max-width:1600px){
.content.promotion{max-width: 100%; padding: 0 160px;}
    
}
</style>

<!--content--------------------------------------------->
<div class="content promotion">
    <div class="content_box">
        <ul class="report_list">
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/01.jpg);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/02.png);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/03.png);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/04.jpg);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/05.jpg);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>
            <li>
                <a href="">
                    <div class="img_box" style="background-image: url(../img/promotion/06.png);">
                        <span class="blind">썸네일 이미지</span>
                    </div>
                    <div class="text_box">
                        <h3>청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대</h3>
                        <p>
                            청년창업가부터 지역 생산자까지... 네이버 쇼핑라이브, ‘상생라이브’ 지원 확대
                            - 네이버, <가치삽시다> 및 <2시 팔도유람> 상생라이브 늘리며 지역 생산자 및 청년 창업가 판로 및 성장 기회 지원
                            - 쇼핑라이브 도전 지원하는 '블루밍데이즈' SME 거래액 신장에 도움... SME 사업 스케일업 효과 공유
                        </p>
                        <span>2023.06.05</span>
                    </div>
                </a>
            </li>        
        </ul>

        <div class="btn_area">
            <button class="btn_more"></button>
        </div>
    </div>
</div>

<!--//content------------------------------------------->
<script>
$(document).ready(function(){

    /*--report_list-------------------------*/
    $(".report_list li").slice(0,3).show();
    $(".btn_more").click(function(){
        $(".report_list li:hidden").slice(0,3).show();
    });
    /*--//report_list-----------------------*/
    /*--------------------------------------*/
    var ALL_btn = $(".select_wrap > button");
    
    ALL_btn.on("click",function(){
        ALL_btn.attr("aria-expanded","true")

        $(window).on("click",function(){
            ALL_btn.attr("aria-expanded","false")
            $(window).off("click");
        });
        return false;
    });
    /*-----------------------------------*/
    $(".select_wrap button").on("click",function(){
        $(".select_wrap > button").text($(this).text());
    });
});


</script>

<? include $DOCUMENT_ROOT."../inc/footer.php"; ?>