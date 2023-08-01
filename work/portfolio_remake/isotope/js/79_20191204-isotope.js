$("document").ready(function(){
    
    $(".item-wrap").imagesLoaded(function(){
        
        $(".item-wrap").isotope({
            itemSelector : ".item"
            
        })
    })
    $(".menu ul li").click(function(){
        
        $(".menu ul li").removeClass("active");
        $(this).addClass("active");
        var selector = $(this).attr("data-filter");
        $(".item-wrap").isotope({
            filter : selector
        })
        
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})