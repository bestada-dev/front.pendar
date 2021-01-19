// animation
const rotateAnimationHide = {
    css:{
        scale:3, 
        opacity:0, 
        rotation: 180
    }, 
    ease:Quad.easeInOut
}
const rotateAnimationShow = {
    css:{
        scale:1, 
        opacity:0.8, 
        rotation: 0
    }, 
    ease:Quad.easeInOut
}
const hideText = {
    css:{
        opacity:0, 
    }, 
    ease:Quad.easeInOut
}
const showText = {
    css:{
        opacity:1, 
    }, 
    ease:Quad.easeInOut
}
const changeBackground = color => {
    return{ 
        css:{
            backgroundColor : color
        }, 
        ease:Quad.easeInOut    
    }
}
const changeText = color => {
    return{ 
        css:{
            fontFamily : 'Cooper-Blk-BT',
            color : color
        }, 
        ease:Quad.easeInOut    
    }
}
const changeTextOutline = color => {
    return{ 
        css:{
            fontFamily : 'Cooper-Bo-BT-Light',
            color : color
        }, 
        ease:Quad.easeInOut    
    }
}
const animationTimeLineScroll = animationScrollHome => {
    animationScrollHome
    .to('body',1,changeText(colorBasic) )
    .to('body',1,changeBackground(backgroundBasic) )
    .to('#titleBandung',0.2,changeText(colorBasic) )
    .to('#titleJogja',0.2,changeTextOutline(colorBasic) )
    .to('#titleBali',0.2,changeTextOutline(colorBasic) )
    .to('#mascotBandung1',2,rotateAnimationHide )
    .to('#mascotBandung2',2,rotateAnimationHide )
    .to('#mascotBandung3',2,rotateAnimationHide )
    .to('#destinationBandung1',2,rotateAnimationHide )
    .to('#destinationBandung2',2,rotateAnimationHide )
    .to('#destinationBandung3',2,rotateAnimationHide )
    .to('.wrap-text-bandung',1,hideText )
    // .to('body',1,changeBackground(backgroundBasic) )
    // // .to('body',1,changeText(colorBasic) )
    .to('body',1,changeBackground(backgroundBandung) )
    .to('#titleBandung',0.2,changeTextOutline(colorBandung) )
    .to('#titleJogja',0.2,changeText(colorBandung) )
    .to('#titleBali',0.2,changeTextOutline(colorBandung) )
    .to('.wrap-text-jogja',1,showText )
    .to('#mascotJogja1',1,rotateAnimationHide )
    .to('#mascotJogja1',2,rotateAnimationShow )
    .to('#mascotJogja2',1,rotateAnimationHide )
    .to('#mascotJogja2',2,rotateAnimationShow )
    .to('#mascotJogja3',1,rotateAnimationHide )
    .to('#mascotJogja3',2,rotateAnimationShow )
    .to('#destinationJogja1',1,rotateAnimationHide )
    .to('#destinationJogja1',2,rotateAnimationShow )
    .to('#destinationJogja2',1,rotateAnimationHide )
    .to('#destinationJogja2',2,rotateAnimationShow )
    .to('#destinationJogja3',1,rotateAnimationHide )
    .to('#destinationJogja3',2,rotateAnimationShow )
    .to('#mascotJogja1',2,rotateAnimationHide )
    .to('#mascotJogja2',2,rotateAnimationHide )
    .to('#mascotJogja3',2,rotateAnimationHide )
    .to('#destinationJogja1',2,rotateAnimationHide )
    .to('#destinationJogja2',2,rotateAnimationHide )
    .to('#destinationJogja3',2,rotateAnimationHide )
    .to('.wrap-text-jogja',1,hideText )
    // .to('body',1,changeBackground(backgroundJogja))
    .to('#titleBandung',0.2,changeTextOutline(colorJogja) )
    .to('#titleJogja',0.2,changeTextOutline(colorJogja) )
    .to('#titleBali',0.2,changeText(colorJogja) )
    // .to('body',1,changeBackground(backgroundJogja))
    .to('.wrap-text-bali',1,showText)
    .to('#mascotBali1',1,rotateAnimationHide )
    .to('#mascotBali1',2,rotateAnimationShow )
    .to('#mascotBali2',1,rotateAnimationHide )
    .to('#mascotBali2',2,rotateAnimationShow )
    .to('#mascotBali3',1,rotateAnimationHide )
    .to('#mascotBali3',2,rotateAnimationShow )
    .to('#destinationBali1',1,rotateAnimationHide )
    .to('#destinationBali1',2,rotateAnimationShow )
    .to('#destinationBali2',1,rotateAnimationHide )
    .to('#destinationBali2',2,rotateAnimationShow )
    .to('#destinationBali3',1,rotateAnimationHide )
    .to('#destinationBali3',2,rotateAnimationShow )
    .to('#mascotBali1',2,rotateAnimationHide )
    .to('#mascotBali2',2,rotateAnimationHide )
    .to('#mascotBali3',2,rotateAnimationHide )
    .to('#destinationBali1',2,rotateAnimationHide )
    .to('#destinationBali2',2,rotateAnimationHide )
    .to('#destinationBali3',2,rotateAnimationHide )
    .to('body',0.2,changeText(colorBasic) )
    
}
const animationScrollHome = new TimelineMax() ;
animationTimeLineScroll(animationScrollHome)

const controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
    triggerElement : '#i4',
    triggerHook :0.1,
    duration : 20000
})
// .addIndicators()
.setTween(animationScrollHome)
.setPin('#i4')
.addTo(controller);

// scroll efect
$window.scroll(function() {
    let scrollTop = $window.scrollTop() > 50 ? $window.scrollTop()-50 : 0 ;
    let scrollTopMobile = $window.scrollTop() ;
    // console.log(scrollTop,'scroll')
    console.log($(window).width(),'widht')
    console.log(scrollTopMobile,'scrollTopMobile')

    if($(window).width() >= extraLarge){
          if (scrollTop >= 0 && scrollTop <= scrollTopSmall) {
            $productMobile.css({position: 'fixed'});    
            $product.css({
                left: 0 + scrollTop,
                top : 0
            });    
          }else if(scrollTop >= scrollTopSmall && scrollTop <= scrollTopMedium){
            $product.css({
                left: leftMedium,
                top : 0
            });    
            $productMobile.css({position: 'fixed'});    
          }else if(scrollTop >= scrollTopMedium && scrollTop <= scrollTopLarge){
            $product.css({
                left: leftMedium+scrollTop-scrollTopMedium,
                top : 0
            });    
            $productMobile.css({position: 'fixed'});    
          }
          else if(scrollTop >= scrollTopLarge && scrollTop <= scrollTopExtraLarge){
            $product.css({
                left: leftLarge,
                top : 0
            }); 
            $productMobile.css({position: 'fixed'});    
          }else{
            $productMobile.css({position: 'absolute'});    
            $product.css({top: scrollTopExtraLarge});    
          }
    }else if($(window).width() >= large && $(window).width() <= extraLarge){
        if (scrollTop >= 0 && scrollTop <= scrollTopSmall-20) {
                $product.css({
                    left: 0 + scrollTop,
                    top : 0
                });    
                $productMobile.css({position: 'fixed'});    
          }else if(scrollTop >= scrollTopSmall-20 && scrollTop <= scrollTopMedium){
                $product.css({
                    left: leftMedium,
                    top : 0
                });    
                $productMobile.css({position: 'fixed'});    
          }else if(scrollTop >= scrollTopMedium && scrollTop <= scrollTopLarge-150){
                $product.css({
                    left: leftMedium+scrollTop-scrollTopMedium,
                    top : 0
                });
                $productMobile.css({position: 'fixed'});        
          }
          else if(scrollTop >= scrollTopLarge-150 && scrollTop <= scrollTopExtraLarge-100){
                $product.css({
                    left: leftLarge-150,
                    top : 0
                }); 
                $productMobile.css({position: 'fixed'});    
          }else{
                $productMobile.css({position: 'absolute'});                  
                $product.css({top: scrollTopExtraLarge-100});    
          }
    }else if($(window).width() >= medium && $(window).width() <= large){
        if (scrollTop >= 0 && scrollTop <= scrollTopSmall-170) {
            $product.css({
                left: 0 + scrollTop,
                top : 0
            });      
            $productMobile.css({position: 'fixed'});          
        }else if(scrollTop >= scrollTopSmall-170 && scrollTop <= scrollTopMedium-500){
                $product.css({
                    left: leftMedium-150,
                    top : 0
                });    
                $productMobile.css({position: 'fixed'});          
        }else if(scrollTop >= scrollTopMedium-500 && scrollTop <= scrollTopLarge-800){
                $product.css({
                    left: leftMedium+scrollTop-scrollTopMedium+450,
                    top : 0
                });    
                $productMobile.css({position: 'fixed'});          
          }
          else if(scrollTop >= scrollTopLarge-800 && scrollTop <= scrollTopExtraLarge-200){
                $product.css({
                    left: leftLarge-350,
                    top : 0
                }); 
                $productMobile.css({position: 'fixed'});          
          }else{
                $product.css({top: scrollTopExtraLarge-200}); 
                $productMobile.css({position: 'absolute'});          
   
          }
    }
    else if($(window).width() <= medium && $(window).width() >= 758){
        if (scrollTop >= 0 && scrollTop <= scrollTopExtraSmall) {
            $product.css({
                left: 0 + scrollTop,
                top : 0
            });
            $productMobile.css({position: 'fixed'});               
        }
        else if(scrollTop >= scrollTopExtraSmall && scrollTop <= scrollTopMedium-300){
            $product.css({
                left: leftMedium-200,
                top : 0
            });    
            $productMobile.css({position: 'fixed'});               
        }
        else{
            $productMobile.css({position: 'absolute'});               
            $product.css({top: scrollTopMedium-300});    
        }
    }else{
        // if(scrollTop <= scrollTopExtraLarge){
            // $productMobile.css({top: 0 });  
            $productMobile.css({position: 'fixed'});                 
        // }else{
        //     $productMobile.css({position: 'absolute'});               
        //     $productMobile.css({top: scrollTopExtraLarge});    
        // }
    }

    
    // product
    const nameProduct = scrollTopMobile => {
        console.log(scrollTopMobile,'scrollTopMobile')
        if(scrollTopMobile >= 5800 && scrollTopMobile <= 14250){
            $body.css({
                backgroundColor: backgroundBandung,
                color: colorBandung
            });    
            return 'Jogja'
        }else if(scrollTopMobile >= 14250 && scrollTopMobile <= 23850){
            $body.css({
                backgroundColor: backgroundJogja,
                color: colorJogja 
            });    
            return 'Bali'
            
        }else if(scrollTopMobile >= 23850){
            $body.css({
                backgroundColor: backgroundBasic,
                color : colorBasic 
            });    
            return 'Jogja'
        }
        else{
            $body.css({
                backgroundColor: backgroundBasic,
                color : colorBasic 
            });    
            return 'Bandung'
        }
    }

    // 360 product
    const product360 = scrollTop => {
        let value = parseInt(scrollTop/37)
        if(value > 119){
            value = value%119
            if(value === 0 ){
                return 1
            }
            return value
        }
        else{
            return value
        }
    }
    $product360.attr('src',  `assets/images/product360/${nameProduct(scrollTopMobile)}/${product360(scrollTop)}.png`);                                        

});


// title button
$titleBandung.click(function() {
    $window.scrollTop(2900) ;
    $body.css({
        backgroundColor: backgroundBasic,
        color : colorBasic 
    });    

});
$titleJogja.click(function() {
    $window.scrollTop(11700) ;
    $body.css({
        backgroundColor: backgroundBasic,
        color : colorBasic 
    });    
});
$titleBali.click(function() {
    $window.scrollTop(20000) ;
    $body.css({
        backgroundColor: backgroundJogja,
        color : colorJogja 
    });    

});



