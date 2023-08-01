$(document).ready(function(){

/*------------------------------------------*/    
/*--tab_menu--------------------------------*/    
    $(".tap_menu > li").click(function(){
      var idx = $(this).index();
        $(".tap_menu > li").removeClass("on");
        $(".tap_menu > li").eq(idx).addClass("on");
        $(".tap_list > li").hide();
        $(".tap_list > li").eq(idx).show();
    })




/*------------------------------------------*/    
 });  