const $window = $(window);
const $product = $("#img-product-home");
const extraLarge = 1200
const medium = 970
const small = 250
$window.scroll(function() {
    var scrollTop = $window.scrollTop();
    console.log(scrollTop,'scroll')
    console.log($(window).width(),'scroll')
    if($(window).width() >= extraLarge){
        if (scrollTop >= 0 && scrollTop <= 380) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= 380 && scrollTop <= 2200){
              $product.css({left: 380});    
              $product.css({top: scrollTop});    
          }else if(scrollTop >= 2200 && scrollTop <= 2500){
              $product.css({left: 380+scrollTop-2150});    
              $product.css({top: scrollTop});    
          }
          else if(scrollTop >= 2500 && scrollTop <= 3600){
              $product.css({left: 800}); 
              $product.css({top: scrollTop});    
          }else{
              $product.css({top: 3600});    
          }
    }else if($(window).width() >= medium && $(window).width() <= extraLarge){
        if (scrollTop >= 0 && scrollTop <= 360) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= 360 && scrollTop <= 2200){
              $product.css({left: 360});    
              $product.css({top: scrollTop});    
          }else if(scrollTop >= 2200 && scrollTop <= 2500){
              $product.css({left: 380+scrollTop-2150});    
              $product.css({top: scrollTop});    
          }
          else if(scrollTop >= 2500 && scrollTop <= 4000){
              $product.css({left: 700}); 
              $product.css({top: scrollTop});    
          }else{
              $product.css({top: 4000});    
          }
    }else if($(window).width() <= medium && $(window).width() >= 758){
        if (scrollTop >= 0 && scrollTop <= small) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= small && scrollTop <= 2200){
              $product.css({left: small});    
              $product.css({top: scrollTop});    
          }else{
              $product.css({top: 2100});    
          }
    }else{
        if(scrollTop <= 3900){
            $product.css({top: scrollTop});    
        }else{
            $product.css({top: 3900});    
        }
    }
});