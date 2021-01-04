$buttonAccordionAbout1.addClass('active-buttonIndicator')

// acourdion
const arrayAccordion = [
    // button one
    {
        name : "faq",
        idButton : "#btnAccordionFaq1ButtonOne",
        idContent : "#collapseFaqOneButtonOne",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq2ButtonOne",
        idContent : "#collapseFaqTwoButtonOne",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },            
    {
        name : "faq",
        idButton : "#btnAccordionFaq3ButtonOne",
        idContent : "#collapseFaqThreeButtonOne",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq4ButtonOne",
        idContent : "#collapseFaqFourButtonOne",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    // button two
    {
        name : "faq",
        idButton : "#btnAccordionFaq1ButtonTwo",
        idContent : "#collapseFaqOneButtonTwo",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq2ButtonTwo",
        idContent : "#collapseFaqTwoButtonTwo",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },            
    {
        name : "faq",
        idButton : "#btnAccordionFaq3ButtonTwo",
        idContent : "#collapseFaqThreeButtonTwo",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq4ButtonTwo",
        idContent : "#collapseFaqFourButtonTwo",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    }, 
    // button three    
    {
        name : "faq",
        idButton : "#btnAccordionFaq1ButtonThree",
        idContent : "#collapseFaqOneButtonThree",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq2ButtonThree",
        idContent : "#collapseFaqTwoButtonThree",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },            
    {
        name : "faq",
        idButton : "#btnAccordionFaq3ButtonThree",
        idContent : "#collapseFaqThreeButtonThree",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq4ButtonThree",
        idContent : "#collapseFaqFourButtonThree",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },   
    // button four     
    {
        name : "faq",
        idButton : "#btnAccordionFaq1ButtonFour",
        idContent : "#collapseFaqOneButtonFour",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq2ButtonFour",
        idContent : "#collapseFaqTwoButtonFour",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },            
    {
        name : "faq",
        idButton : "#btnAccordionFaq3ButtonFour",
        idContent : "#collapseFaqThreeButtonFour",
        firstImage : "assets/images/navigation/PlusIcon.svg",
        secondImage : "assets/images/navigation/MinIcon.svg" 
    },    
    {
        name : "faq",
        idButton : "#btnAccordionFaq4ButtonFour",
        idContent : "#collapseFaqFourButtonFour",
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

// buttonAccordion
const buttonAccordionArray = [
    {
        buttonName : $buttonAccordionAbout1,
        buttonRemove1 : $buttonAccordionAbout2,
        buttonRemove2 : $buttonAccordionAbout3,
        buttonRemove3 : $buttonAccordionAbout4,
        accordionAbout1 : $accordionAbout1,
        accordionAbout2 : $accordionAbout2,
        accordionAbout3 : $accordionAbout3,
        accordionAbout4 : $accordionAbout4,
    },
    {
        buttonName : $buttonAccordionAbout2,
        buttonRemove1 : $buttonAccordionAbout1,
        buttonRemove2 : $buttonAccordionAbout3,
        buttonRemove3 : $buttonAccordionAbout4,
        accordionAbout1 : $accordionAbout2,
        accordionAbout2 : $accordionAbout1,
        accordionAbout3 : $accordionAbout3,
        accordionAbout4 : $accordionAbout4,
    },
    {
        buttonName : $buttonAccordionAbout3,
        buttonRemove1 : $buttonAccordionAbout2,
        buttonRemove2 : $buttonAccordionAbout1,
        buttonRemove3 : $buttonAccordionAbout4,
        accordionAbout1 : $accordionAbout3,
        accordionAbout2 : $accordionAbout2,
        accordionAbout3 : $accordionAbout1,
        accordionAbout4 : $accordionAbout4,
    },
    {
        buttonName : $buttonAccordionAbout4,
        buttonRemove1 : $buttonAccordionAbout2,
        buttonRemove2 : $buttonAccordionAbout3,
        buttonRemove3 : $buttonAccordionAbout1,
        accordionAbout1 : $accordionAbout4,
        accordionAbout2 : $accordionAbout2,
        accordionAbout3 : $accordionAbout3,
        accordionAbout4 : $accordionAbout1,
    },
]
const loadAccordion = accordionArray => {
    console.log(accordionArray,'accordionArray')
    accordionArray.map(accordion => {
        if($(accordion.idContent).hasClass('show')) {
            $(accordion.idButton + " img").attr('src', accordion.secondImage);
        } 
    })

}
buttonAccordionArray.map(button => {
    button.buttonName.on('click', function(){
        button.buttonName.addClass('active-button-faq-about')
        button.buttonName.removeClass('bg-transparent')
        button.buttonName.removeClass('text-white')
        button.buttonRemove1.removeClass('active-button-faq-about')
        button.buttonRemove1.addClass('bg-transparent')
        button.buttonRemove1.addClass('text-white')
        button.buttonRemove2.removeClass('active-button-faq-about')
        button.buttonRemove2.addClass('bg-transparent')
        button.buttonRemove2.addClass('text-white')
        button.buttonRemove3.removeClass('active-button-faq-about')
        button.buttonRemove3.addClass('bg-transparent')
        button.buttonRemove3.addClass('text-white')
        button.accordionAbout1.css({display: 'block'})
        button.accordionAbout2.css({display: 'none'})
        button.accordionAbout3.css({display: 'none'})
        button.accordionAbout4.css({display: 'none'})
        loadAccordion(arrayAccordion)
    })    
})
