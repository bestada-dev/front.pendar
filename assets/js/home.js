const $window = $(window);
const $product = $("#img-product-home");
const $body = $("body");
const $buttonBuy = $(".btn-buynow button");
const $product360 = $('.img-product-home')

// value widht screen
const extraLarge = 1200
const medium = 970
const small = 250

// value scroll top
const scrollTopExtraLarge = 4600
const scrollTopLarge = 3500
const scrollTopMedium = 3100
const scrollTopSmall = 380
const scrollTopExtraSmall = 250

// value left css
const leftLarge = 800
const leftMedium = 420
const leftSmall = 360

$window.scroll(function() {
    var scrollTop = $window.scrollTop();
    console.log(scrollTop,'scroll')
    console.log($(window).width(),'widht')

    if($(window).width() >= extraLarge){
        if (scrollTop >= 0 && scrollTop <= scrollTopSmall) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= scrollTopSmall && scrollTop <= scrollTopMedium){
              $product.css({left: leftMedium});    
              $product.css({top: scrollTop});    
          }else if(scrollTop >= scrollTopMedium && scrollTop <= scrollTopLarge){
              $product.css({left: leftMedium+scrollTop-scrollTopMedium});    
              $product.css({top: scrollTop});    
          }
          else if(scrollTop >= scrollTopLarge && scrollTop <= scrollTopExtraLarge-300){
              $product.css({left: leftLarge}); 
              $product.css({top: scrollTop});    
          }else{
              $product.css({top: scrollTopExtraLarge-300});    
          }
    }else if($(window).width() >= medium && $(window).width() <= extraLarge){
        if (scrollTop >= 0 && scrollTop <= scrollTopSmall-20) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= scrollTopSmall-20 && scrollTop <= scrollTopMedium){
              $product.css({left: leftSmall});    
              $product.css({top: scrollTop});    
          }else if(scrollTop >= scrollTopMedium && scrollTop <= scrollTopLarge){
              $product.css({left: leftSmall+scrollTop-scrollTopMedium});    
              $product.css({top: scrollTop});    
          }
          else if(scrollTop >= scrollTopLarge && scrollTop <= scrollTopExtraLarge+450){
            $product.css({left: leftLarge-100}); 
              $product.css({top: scrollTop});    
          }else{
              $product.css({top: scrollTopExtraLarge+450});    
          }
    }else if($(window).width() <= medium && $(window).width() >= 758){
        if (scrollTop >= 0 && scrollTop <= scrollTopExtraSmall) {
            $product.css({top: 0 + scrollTop});    
            $product.css({left: 0 + scrollTop});    
          }
          else if(scrollTop >= scrollTopExtraSmall && scrollTop <= scrollTopMedium-300){
              $product.css({left: scrollTopExtraSmall+30});    
              $product.css({top: scrollTop});    
          }
          else{
            // $product.css({left: 2500});    
              $product.css({top: scrollTopMedium-300});    
          }
    }else{
        if(scrollTop <= scrollTopExtraLarge+300){
            $product.css({top: scrollTop});    
        }else{
            $product.css({top: scrollTopExtraLarge+300});    
        }
    }

    // change background
    function updateChangeBackground($backgroundBody,$backgroundButton,$backgroundColor){
        $body.css({ 
            background : $backgroundBody,
        });
        $buttonBuy.css({ 
            background : $backgroundButton,
            color : $backgroundColor,
        }); 
        $buttonBuy.hover(function(){
            $(this).css({ 
                background : $backgroundColor,
                color : $backgroundButton,
            });
            }, function(){
            $(this).css({ 
                background : $backgroundButton,
                color : $backgroundColor,
            });
        });
    }
    if(scrollTop >= 1900 && scrollTop <= 2500){
        updateChangeBackground(
            'linear-gradient(135.32deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 75.14%), #1ECDEC',
            '#235E50',
            '#FFFFFF'
        )
    }else if(scrollTop >= 3060){
        updateChangeBackground(
            'linear-gradient(116.82deg, rgba(198, 235, 202, 0.5) 0%, rgba(198, 235, 202, 0) 100%), #235E50',
            '#FFFFFF',
            '#235E50'
        )
    }
    else{
        updateChangeBackground(
            'linear-gradient(116.82deg, rgba(198, 235, 202, 0.5) 0%, rgba(198, 235, 202, 0) 100%), #235E50',
            '#FFFFFF',
            '#235E50'
        )
    }


    // 360 product
    const product360 = scrollTop => {
        let value = parseInt(scrollTop/37) 
        if(value > 119){
            value = scrollTop%150
            if(value === 0 ){
                return 1
            }
            return value
        }
        else{
            return value
        }
    }
    $product360.attr('src',  `assets/images/product360/Bandung/${product360(scrollTop)}.png`);                                        
    // }

});