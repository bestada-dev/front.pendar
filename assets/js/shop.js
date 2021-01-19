
// button indicator
const buttonIndicatorArray = [
    {
        buttonIndicator : $buttonIndicatorBandungBottom ,
        name : 'Bandung',
        background : backgroundBandung,
        color : colorBandung,
        display1 : $descriptionShopBandung,
        display2 : $descriptionShopJogja,
        display3 : $descriptionShopBali,
        addClass : $buttonIndicatorBandungBottom,
        removeClass1 : $buttonIndicatorJogjaBottom,
        removeClass2 : $buttonIndicatorBaliBottom
    },
    {
        buttonIndicator : $buttonIndicatorJogjaBottom ,
        name : 'Jogja',
        background : backgroundJogja,
        color : colorJogja,
        display1 : $descriptionShopJogja,
        display2 : $descriptionShopBandung,
        display3 : $descriptionShopBali,
        addClass : $buttonIndicatorJogjaBottom,
        removeClass1 : $buttonIndicatorBandungBottom,
        removeClass2 : $buttonIndicatorBaliBottom
    },    
    {
        buttonIndicator : $buttonIndicatorBaliBottom ,
        name : 'Bali',
        background : backgroundBali,
        color : colorBali,
        display1 : $descriptionShopBali,
        display2 : $descriptionShopBandung,
        display3 : $descriptionShopJogja,
        addClass : $buttonIndicatorBaliBottom,
        removeClass1 : $buttonIndicatorBandungBottom,
        removeClass2 : $buttonIndicatorJogjaBottom
    },    
    {
        buttonIndicator : $buttonIndicatorBandungTop ,
        name : 'Bandung',
        background : backgroundBandung,
        color : colorBandung,
        display1 : $descriptionShopBandung,
        display2 : $descriptionShopJogja,
        display3 : $descriptionShopBali,
        addClass : $buttonIndicatorBandungTop,
        removeClass1 : $buttonIndicatorJogjaTop,
        removeClass2 : $buttonIndicatorBaliTop
    },
    {
        buttonIndicator : $buttonIndicatorJogjaTop ,
        name : 'Jogja',
        background : backgroundJogja,
        color : colorJogja,
        display1 : $descriptionShopJogja,
        display2 : $descriptionShopBandung,
        display3 : $descriptionShopBali,
        addClass : $buttonIndicatorJogjaTop,
        removeClass1 : $buttonIndicatorBandungTop,
        removeClass2 : $buttonIndicatorBaliTop
    },    
    {
        buttonIndicator : $buttonIndicatorBaliTop ,
        name : 'Bali',
        background : backgroundBali,
        color : colorBali,
        display1 : $descriptionShopBali,
        display2 : $descriptionShopBandung,
        display3 : $descriptionShopJogja,
        addClass : $buttonIndicatorBaliTop,
        removeClass1 : $buttonIndicatorBandungTop,
        removeClass2 : $buttonIndicatorJogjaTop
    },    

]
buttonIndicatorArray.map( indicator => {
    indicator.buttonIndicator.click(function() {
        $productShop.attr('src',  `assets/images/product/${indicator.name}/Product.png`);                                        
        $body.css({backgroundColor: indicator.background });    
        $s1.css({color: indicator.color });    
        indicator.display1.css({display: 'block'})
        indicator.display2.css({display: 'none'})
        indicator.display3.css({display: 'none'})
        indicator.addClass.addClass('active-buttonIndicator')
        indicator.removeClass1.removeClass('active-buttonIndicator')
        indicator.removeClass2.removeClass('active-buttonIndicator')
    });
})


// scroll effect
$window.scroll(function() {
    const scrollTop = $window.scrollTop() ;
    if(scrollTop >= 1000){
        $body.css({backgroundColor: backgroundBasic });  
        $productShop.attr('src',  `assets/images/product/Bandung/Product.png`);                                          
        $body.css({color: colorBasic });    
        $descriptionShopBandung.css({display: 'block'})
        $descriptionShopJogja.css({display: 'none'})
        $descriptionShopBali.css({display: 'none'})
        $buttonIndicatorBandungBottom.addClass('active-buttonIndicator')
        $buttonIndicatorJogjaBottom.removeClass('active-buttonIndicator')
        $buttonIndicatorBaliBottom.removeClass('active-buttonIndicator')
    }else if(scrollTop <= 999 && scrollTop >= 800){
        $body.css({
            backgroundColor: backgroundBandung,
        });    
        $s1.css({color: colorBandung });    
    }
}) 

// accordion
const arrayAccordion = [
        {
            name : "product",
            idButton : "#btnAccordionProductBandung1",
            idContent : "#collapseProductBandungOne",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBandung2",
            idContent : "#collapseProductBandungTwo",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBandung3",
            idContent : "#collapseProductBandungThree",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBandung4",
            idContent : "#collapseProductBandungFour",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductJogja1",
            idContent : "#collapseProductJogjaOne",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductJogja2",
            idContent : "#collapseProductJogjaTwo",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductJogja3",
            idContent : "#collapseProductJogjaThree",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductJogja4",
            idContent : "#collapseProductJogjaFour",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBali1",
            idContent : "#collapseProductBaliOne",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBali2",
            idContent : "#collapseProductBaliTwo",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProductBali3",
            idContent : "#collapseProductBaliThree",
            firstImage : "assets/images/navigation/ArrowUp.svg",
            secondImage : "assets/images/navigation/ArrowDown.svg" 
        },

        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside1",
            idContent : "#collapseWhatInsideOne",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside2",
            idContent : "#collapseWhatInsideTwo",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },  
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside3",
            idContent : "#collapseWhatInsideThree",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },  
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside4",
            idContent : "#collapseWhatInsideFour",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside5",
            idContent : "#collapseWhatInsideFive",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside6",
            idContent : "#collapseWhatInsideSix",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq1",
            idContent : "#collapseFaqOne",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq2",
            idContent : "#collapseFaqTwo",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },            
        {
            name : "faq",
            idButton : "#btnAccordionFaq3",
            idContent : "#collapseFaqThree",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq4",
            idContent : "#collapseFaqFour",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq5",
            idContent : "#collapseFaqFive",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq6",
            idContent : "#collapseFaqSix",
            firstImage : "assets/images/navigation/PlusIcon.svg",
            secondImage : "assets/images/navigation/MinIcon.svg" 
        },    

];
arrayAccordion.map(accordion => {
    $(accordion.idButton).on('click', function(){
        if($(accordion.idButton + " img").attr('src') == accordion.firstImage){
            $(accordion.idButton + " img").attr('src',  accordion.secondImage);                                        
        }else {
            $(accordion.idButton + " img").attr('src',  accordion.firstImage);                                        
        }
        arrayAccordion.map((accordionChild,index) => {
            if(accordionChild.name === accordion.name){
                if($(accordionChild.idContent).hasClass('show')) {
                    $(accordionChild.idButton + " img").attr('src', accordionChild.firstImage);
                } 
            }
        })
    })
});