<? include $DOCUMENT_ROOT."control.php"; ?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>안지원-NAVER</title>
    <link rel="stylesheet" type="text/css" href="<?=$url?>css/basic.css">
    <link rel="stylesheet" type="text/css" href="<?=$url?>css/common.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery.min.js"></script>
    <?=$SetCss?>
    <?=$SetJs?>
</head>
<body>

<div id="wrap">
<!----------------------------------->
<!--header--------------------------->
<header class="header_down">
    <div class="header_wrap">
        <h1><a href="http://zone.dothome.co.kr/clonecoding/navercorp/"><span class="blind">NAVER</span></a></h1>
        <nav>
            <ul class="gnb_menu">
                <li <?=$now1?>>
                    <a href="<?=$url?>naver/company">네이버</a>
                    <ul class="drop_menu">
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>naver/company"><span>NAVER</span></a></dt>
                                <dd><a href="<?=$url?>naver/company"><span>네이버 소개</span></a></dd>
                                <dd><a href=""><span>1784 소개</span></a></dd>
                                <dd><a href="<?=$url?>naver/milestones"><span>주요연혁</span></a></dd>
                                <dd><a href=""><span>수상내역</span></a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>naver/affiliates"><span>주요 관계사</span></a></dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>naver/proposalGuide"><span>제휴제안</span></a></dt>
                                <dd><a href=""><span>제휴제안 안내</span></a></dd>
                                <dd><a href=""><span>제휴제안 등록</span></a></dd>
                                <dd><a href=""><span>검토현황 조회</span></a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>naver/contact"><span>CONTACT</span></a></dt>
                            </dl>
                        </li>
                    </ul>
                </li>
                <li <?=$now2?>>
                    <a href="<?=$url?>service/featured">서비스</a>
                    <ul class="drop_menu">
                        <li>
                            <dl>
                                <dt>
                                    <a href="<?=$url?>service/featured">
                                    <span>Featured</span><br>
                                    <span>Services</span>
                                    </a>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <a href="">
                                    <span>For</span><br>
                                    <span>Business</span>
                                    </a>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <a href="">
                                    <span>For</span><br>
                                    <span>Creators</span>
                                    </a>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <a href="">
                                    <span>For</span><br>
                                    <span>Developers</span>
                                    </a>
                                </dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <a href="" class="btn_link">
                                    <span>All</span><br>
                                    <span>SERVICE</span>
                                    </a>
                                </dt>
                            </dl>
                        </li>
                    </ul>
                </li>
                <li <?=$now3?>>
                    <a href="">가치실현</a>
                    <ul class="drop_menu classify">
                    <li>
                        <dl>
                            <dt><a href=""><span>원칙</span></a></dt>
                            <dd><a href=""><span>프로젝트 꽃</span></a></dd>
                            <dd><a href=""><span>지속가능경영</span></a></dd>
                            <dd><a href=""><span>AI 윤리준칙</span></a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><a href=""><span>정책</span></a></dt>
                        </dl>
                        <dl class="depth_4">
                            <dt><a href=""><span>기업윤리</span></a></dt>
                            <dd><a href=""><span>기업윤리규범</span></a></dd>
                            <dd><a href=""><span>기업윤리 상담센터</span></a></dd>
                        </dl>
                        <dl class="depth_4">
                            <dt><a href=""><span>프라이버시센터</span></a></dt>
                            <dd><a href=""><span>네이버 리포트</span></a></dd>
                            <dd><a href=""><span>개인정보보호</span></a></dd>
                            <dd><a href=""><span>정보보호인증</span></a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt><a href=""><span>그린 임팩트</span></a></dt>
                            <dd><a href=""><span>그린 이니셔티브</span></a></dd>
                            <dd><a href=""><span>그린 커넥트</span></a></dd>
                            <dd><a href=""><span>친환경 데이터센터</span></a></dd>
                            <dd><a href=""><span>친환경 업무공간</span></a></dd>
                            <dd><a href=""><span>그린 아카이브</span></a></dd>
                        </dl>
                    </li>
                    <li>
                        <dl class="classify_nth">
                            <dt><a href=""><span>소셜 임팩트</span></a></dt>
                            <dd><a href=""><span>동반성장</span></a></dd>
                            <dd><a href=""><span>인권존중</span></a></dd>
                            <dd><a href=""><span>재단법인 해피빈</span></a></dd>
                            <dd><a href=""><span>네이버 문화재단</span></a></dd>
                            <dd><a href=""><span>네이버 커넥트 재단</span></a></dd>
                            <dd><a href=""><span>접근성</span></a></dd>
                            <dd><a href=""><span>재난 위기 대응</span></a></dd>
                            <dd><a href=""><span>네이버 라이브러리</span></a></dd>
                            <dd><a href=""><span>네이버핸즈</span></a></dd>
                        </dl>
                        <dl>
                            <dt><a href=""><span>리서치</span></a></dt>
                        </dl>
                    </li>
                    </ul>
                </li>
                <li <?=$now4?>>
                    <a href="<?=$url?>promotion/pressReleases">홍보</a>
                    <ul class="drop_menu">
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>promotion/pressReleases"><span>보도자료</span></a></dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href="<?=$url?>promotion/ads"><span>광고 영상</span></a></dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href=""><span>미디어 행사</span></a></dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href=""><span>커뮤니케이션 채널</span></a></dt>
                            </dl>
                        </li>
                    </ul>
                </li>
                <li <?=$now5?>>
                    <a href="#">투자정보</a>
                    <ul class="drop_menu">
                        <li>
                            <dl>
                                <dt><a href=""><span>기업지배구조</span></a></dt>
                                <dd><a href=""><span>주주구성</span></a></dd>
                                <dd><a href=""><span>이사회</span></a></dd>
                                <dd><a href=""><span>정관</span></a></dd>
                                <dd><a href=""><span>기타</span></a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="classify_dt">
                                <dt><a href=""><span>공시정보</span></a></dt>
                                <dt><a href=""><span>주가정보</span></a></dt>
                                <dt><a href=""><span>재무제표</span></a></dt>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href=""><span>IR일정</span></a></dt>
                                <dd><a href=""><span>IR행사</span></a></dd>
                                <dd><a href=""><span>IR MEETING</span></a></dd>
                                <dd><a href=""><span>주주총회</span></a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><a href=""><span>IR자료실</span></a></dt>
                                <dd><a href=""><span>실적발표</span></a></dd>
                                <dd><a href=""><span>감사보고서</span></a></dd>
                                <dd><a href=""><span>사업보고서</span></a></dd>
                                <dd><a href=""><span>연차보고서</span></a></dd>
                                <dd><a href=""><span>지속가능경영보고서</span></a></dd>
                                <dd><a href=""><span>FAQ</span></a></dd>
                            </dl>
                        </li>
                        <li>
                            <dl class="classify_dt">
                                <dt><a href=""><span>결산공고</span></a></dt>
                                <dt><a href=""><span>공고</span></a></dt>
                            </dl>
                        </li>
                    </ul>
                </li>
                <li <?=$now6?>>
                    <a href="#">스토리</a>
                </li>
                <li <?=$now7?>>
                    <a href="#">채용</a>
                </li>  
            </ul>

        </nav>
        <div class="header_util">
            <div class="language">
               <a href="#">KOR</a>
               <a href="#" class="off">ENG</a>
            </div>
            <div class="sitemap_box">
                <button type="button" class="btn_sitemap">
                    <span class="blind">사이트맵 열기/닫기</span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
    <div class="sitemap">
        <div class="box">
            <ul class="sitemap_list">
                <!----------------------------->
                <li>
                    <h4>네이버</h4>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>NAVER</span></strong></a></li>
                        <li><a href=""><span>네이버 소개</span></a></li>
                        <li><a href=""><span>1784 소개</span></a></li>
                        <li><a href=""><span>주요연혁</span></a></li>
                        <li><a href=""><span>수상내역</span></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>주요관계사</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>제휴제안</span></strong></a></li>
                        <li><a href=""><span>제휴제안 안내</span></a></li>
                        <li><a href=""><span>제휴제안 등록</span></a></li>
                        <li><a href=""><span>검토현황 조회</span></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>Contact</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>서비스</h4>
                    <ul class="sitemap_menu depth">
                        <li><a href=""><strong><span>FEATURED SERVICES</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu depth">
                        <li><a href=""><strong><span>FOR BUSINESS</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu depth">
                        <li><a href=""><strong><span>FOR CREATORS</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu depth">
                        <li><a href=""><strong><span>FOR DEVELOPERS</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu depth">
                        <li><a href=""><strong><span>ALL SERVICE</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>가치실현</h4>
                    <ul class="sitemap_menu depth_one">
                        <li><a href=""><strong><span>원칙</span></strong></a></li>
                        <li><a href=""><span>프로젝트 꽃</span></a></li>
                        <li><a href=""><span>지속가능경영</span></a></li>
                        <li><a href=""><span>AI 윤리준칙</span></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_one">
                        <li><a href=""><strong><span>정책</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_4">
                        <li><a href=""><strong><span>기업윤리</span></strong></a></li>
                        <li><a href=""><span>기업윤리규범</span></a></li>
                        <li><a href=""><span>기업윤리 상담센터</span></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_4">
                        <li><a href=""><strong><span>프라이버시 센터</span></strong></a></li>
                        <li><a href=""><span>네이버 리포트</span></a></li>
                        <li><a href=""><span>개인정보보호</span></a></li>
                        <li><a href=""><span>정보보호인증</span></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_one">
                        <li><a href=""><strong><span>그린 임팩트</span></strong></a></li>
                        <li><a href=""><span>그린 이니셔티브</span></a></li>
                        <li><a href=""><span>그린 커넥트</span></a></li>
                        <li><a href=""><span>친환경 데이터센터</span></a></li>
                        <li><a href=""><span>친환경 업무공간</span></a></li>
                        <li><a href=""><span>그린 아카이브</span></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_one">
                        <li><a href=""><strong><span>소셜 임팩트</span></strong></a></li>
                        <li><a href=""><span>동반성장</span></a></li>
                        <li><a href=""><span>인권존중</span></a></li>
                        <li><a href=""><span>재단법인 해피빈</span></a></li>
                        <li><a href=""><span>네이버 문화재단</span></a></li>
                        <li><a href=""><span>네이버 커넥트 재단</span></a></li>
                        <li><a href=""><span>접근성</span></a></li>
                        <li><a href=""><span>재난 위기 대응</span></a></li>
                        <li><a href=""><span>네이버 라이브러리</span></a></li>
                        <li><a href=""><span>네이버핸즈</span></a></li>
                    </ul>
                    <ul class="sitemap_menu depth_one">
                        <li><a href=""><strong><span>리서치</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>홍보</h4>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>보도자료</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>광고 영상</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>미디어행사</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>커뮤니케이션 채널</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>투자정보</h4>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>기업지배구조</span></strong></a></li>
                        <li><a href=""><span>주주구성</span></a></li>
                        <li><a href=""><span>이사회</span></a></li>
                        <li><a href=""><span>정관</span></a></li>
                        <li><a href=""><span>기타</span></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>공시정보</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>주가정보</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>재무정보</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>IR일정</span></strong></a></li>
                        <li><a href=""><span>IR 행사</span></a></li>
                        <li><a href=""><span>IR MEETING</span></a></li>
                        <li><a href=""><span>주주총회</span></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>IR자료실</span></strong></a></li>
                        <li><a href=""><span>실적발표</span></a></li>
                        <li><a href=""><span>감사보고서</span></a></li>
                        <li><a href=""><span>사업보고서</span></a></li>
                        <li><a href=""><span>연차보고서</span></a></li>
                        <li><a href=""><span>지속가능경영보고서</span></a></li>
                        <li><a href=""><span>FAQ</span></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>결산공고</span></strong></a></li>
                    </ul>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>공고</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>스토리</h4>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>스토리</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
                <li>
                    <h4>채용</h4>
                    <ul class="sitemap_menu">
                        <li><a href=""><strong><span>채용정보</span></strong></a></li>
                    </ul>
                </li>
                <!----------------------------->
            </ul>
        </div>
    </div>
</header>
<div class="sitemap_dimmed"></div>

<!--//header------------------------->

<!--container------------------------>
<div class="container">

<?
if(stristr($NowPage,"index.php")){}
else {include "../inc/sub_header.php";}
?>

