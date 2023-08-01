<?
$NowPage = $_SERVER['PHP_SELF'];
if( stristr($NowPage,"index.php"))
{
    $url="";
    $SetCss="<link rel='stylesheet' href='css/main.css'>";
    $SetJs="<script type='text/javascript' src='js/common.js'></script>";
} else {
    $url="../";
    $SetCss="<link rel='stylesheet' href='../css/sub.css'>";
    $SetJs="<script type='text/javascript' src='../js/common.js'></script>";
    $SetSubJs="<script type='text/javascript' src='../js/sub.js'></script>";
}
?>
<!-------------------------------------->
<?
$NowFolder = $_SERVER['PHP_SELF'];
if(stristr($NowFolder,"/naver/"))
{
    $now1="class=on";
    $loc2="<li><a href='company.php'>네이버</a></li>";
    
    if(stristr($NowFolder,"company.php")){
        $loc3="<li><a href='company.php'>NAVER</a></li>";
        $title="네이버 소개";
    }
    elseif(stristr($NowFolder,"milestones.php")){
        $loc3="<li><a href='milestones.php'>NAVER</a></li>";
        $title="연혁";
    }
    elseif(stristr($NowFolder,"proposalGuide.php")){
        $loc3="<li><a href='proposalGuide.php'>제휴제안</a></li>";
        $loc4="<li>제휴제안 안내</li>";
        $title="제휴제안";
    }
    elseif(stristr($NowFolder,"contact.php")){
        $loc3="<li><a href='contact.php'>CONTACT</a></li>";
        $title="CONTACT";
    };
}


elseif(stristr($NowFolder,"/service/"))
{
    $now2="class=on";
    $loc2="<li><a href='featured.php'>서비스</a></li>";

    if(stristr($NowFolder,"featured.php")){
        $loc3="<li><a href='featured.php'>서비스</a></li>";
        $title="FEATURDE SERVICES";
    }
}

elseif(stristr($NowFolder,"/promotion/"))
{
    $now4="class=on";
    $loc2="<li><a href='pressReleases.php'>보도자료</a></li>";

    if(stristr($NowFolder,"pressReleases.php")){
        $loc3="<li><a href='pressReleases.php'>보도자료</a></li>";
        $title="보도자료";
    }
    elseif(stristr($NowFolder,"ads.php")){
        $loc3="<li><a href='ads.php'>광고영상</a></li>";
        $title="광고영상";
    };
}
?>