$(function(){
    const arrayAccordion = [
        {
            name : "product",
            idButton : "#btnAccordionProduct1",
            idContent : "#collapseProductOne",
            firstImage : "assets/images/ArrowUp.svg",
            secondImage : "assets/images/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProduct2",
            idContent : "#collapseProductTwo",
            firstImage : "assets/images/ArrowUp.svg",
            secondImage : "assets/images/ArrowDown.svg" 
        },
        {
            name : "product",
            idButton : "#btnAccordionProduct3",
            idContent : "#collapseProductThree",
            firstImage : "assets/images/ArrowUp.svg",
            secondImage : "assets/images/ArrowDown.svg" 
        },
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside1",
            idContent : "#collapseWhatInsideOne",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside2",
            idContent : "#collapseWhatInsideTwo",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },  
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside3",
            idContent : "#collapseWhatInsideThree",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },  
        {
            name : "whatInside",
            idButton : "#btnAccordionWhatInside4",
            idContent : "#collapseWhatInsideFour",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq1",
            idContent : "#collapseFaqOne",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq2",
            idContent : "#collapseFaqTwo",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },            
        {
            name : "faq",
            idButton : "#btnAccordionFaq3",
            idContent : "#collapseFaqThree",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
        },    
        {
            name : "faq",
            idButton : "#btnAccordionFaq4",
            idContent : "#collapseFaqFour",
            firstImage : "assets/images/PlusIcon.svg",
            secondImage : "assets/images/MinIcon.svg" 
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
})


