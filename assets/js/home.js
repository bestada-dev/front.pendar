const $window = $(window);
const $product = $("#img-product-home");

$window.scroll(function() {
    var scrollTop = $window.scrollTop();
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
    else if(scrollTop >= 2500 && scrollTop <= 3550){
        $product.css({left: 800}); 
        $product.css({top: scrollTop});    
    }else{
        $product.css({top: 3550});    
    }
});