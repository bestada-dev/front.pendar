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
    .to('#mascotBandung1',2,rotateAnimationHide )
    .to('#mascotBandung2',2,rotateAnimationHide )
    .to('#mascotBandung3',2,rotateAnimationHide )
    .to('#destinationBandung1',2,rotateAnimationHide )
    .to('#destinationBandung2',2,rotateAnimationHide )
    .to('#destinationBandung3',2,rotateAnimationHide )
    .to('.wrap-text-bandung',1,hideText )
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
    .to('body',1,changeBackground(backgroundJogja))
    .to('#titleBandung',0.2,changeTextOutline(colorJogja) )
    .to('#titleJogja',0.2,changeTextOutline(colorJogja) )
    .to('#titleBali',0.2,changeText(colorJogja) )
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
    
}
const animationScrollHome = new TimelineMax() ;
animationTimeLineScroll(animationScrollHome)

const controller = new ScrollMagic.Controller();
var scene1 = new ScrollMagic.Scene({
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
          else if(scrollTop >= scrollTopLarge && scrollTop <= scrollTopExtraLarge){
            $product.css({left: leftLarge}); 
            $product.css({top: scrollTop});    
          }else{
            $product.css({top: scrollTopExtraLarge});    
          }
    }else if($(window).width() >= medium && $(window).width() <= extraLarge){
        if (scrollTop >= 0 && scrollTop <= scrollTopSmall-20) {
                $product.css({top: 0 + scrollTop});    
                $product.css({left: 0 + scrollTop});    
          }else if(scrollTop >= scrollTopSmall-20 && scrollTop <= scrollTopMedium){
                $product.css({left: leftMedium});    
                $product.css({top: scrollTop});    
          }else if(scrollTop >= scrollTopMedium && scrollTop <= scrollTopLarge){
                $product.css({left: leftMedium+scrollTop-scrollTopMedium});    
                $product.css({top: scrollTop}); 
                console.log(leftMedium+scrollTop-scrollTopMedium,'total')   
          }
          else if(scrollTop >= scrollTopLarge && scrollTop <= scrollTopExtraLarge){
                $product.css({left: leftLarge}); 
                $product.css({top: scrollTop});    
          }else{
                $product.css({top: scrollTopExtraLarge});    
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
            $productMobile.css({top: scrollTopMobile });    
        }else{
            $productMobile.css({top: scrollTopExtraLarge+300});    
        }
    }

    
    // product
    const nameProduct = scrollTopMobile => {
        console.log(scrollTopMobile,'scrollTopMobile')
        if(scrollTopMobile >= 5800 && scrollTopMobile <= 14250){
            $body.css({backgroundColor: backgroundBandung });    
            return 'Jogja'
        }else if(scrollTopMobile >= 14250 && scrollTopMobile <= 23850){
            $body.css({backgroundColor: backgroundJogja });    
            return 'Bali'
            
        }else if(scrollTopMobile >= 23850){
            $body.css({backgroundColor: backgroundBasic });    
            return 'Jogja'
        }
        else{
            $body.css({backgroundColor: backgroundBasic });    
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

