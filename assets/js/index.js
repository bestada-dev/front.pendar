const $window = $(window);
const $product = $(".img-product");
const $productMobile = $("#img-product-home");
const $html = $("html");
const $body = $("body");
const $buttonBuy = $(".btn-buynow button");
const $product360 = $('.img-product-home')

const $titleBandung = $('#titleBandung')
const $titleJogja = $('#titleJogja')
const $titleBali = $('#titleBali')

// shop
const $buttonIndicatorBandungBottom = $("#buttonIndicatorBandungBottom");
const $buttonIndicatorJogjaBottom = $("#buttonIndicatorJogjaBottom");
const $buttonIndicatorBaliBottom = $("#buttonIndicatorBaliBottom");
const $buttonIndicatorBandungTop = $("#buttonIndicatorBandungTop");
const $buttonIndicatorJogjaTop = $("#buttonIndicatorJogjaTop");
const $buttonIndicatorBaliTop = $("#buttonIndicatorBaliTop");
const $productShop = $('.img-product-shop')
const $s1 = $("#s1");
const $descriptionShopBandung = $("#descriptionShopBandung");
const $descriptionShopJogja = $("#descriptionShopJogja");
const $descriptionShopBali = $("#descriptionShopBali");

// about
const $buttonAccordionAbout1 = $("#buttonAccordionAbout1");
const $buttonAccordionAbout2 = $("#buttonAccordionAbout2");
const $buttonAccordionAbout3 = $("#buttonAccordionAbout3");
const $buttonAccordionAbout4 = $("#buttonAccordionAbout4");
const $accordionAbout1 = $("#accordionAbout1");
const $accordionAbout2 = $("#accordionAbout2");
const $accordionAbout3 = $("#accordionAbout3");
const $accordionAbout4 = $("#accordionAbout4");

// value widht screen
const extraLarge = 1600
const large = 1200
const medium = 970
const small = 250

// value scroll top
const scrollTopExtraLarge = 25600
const scrollTopLarge = 25350
const scrollTopMedium = 24800
const scrollTopSmall = 380
const scrollTopExtraSmall = 250

// value left css
const leftLarge = 970
const leftMedium = 420
const leftSmall = 360

// color
const backgroundBasic = '#235E50'
const colorBasic = '#FFFFFF'
const backgroundBandung = '#1ECDEC'
const colorBandung = '#095A67'
const backgroundJogja = '#FFDFB6'
const colorJogja = '#854A00'
const backgroundBali = '#A37100'
const colorBali = '#615428'


// loading
var text = "Loading...";

for(var i in text) { 
  if(text[i] === " ") {
    $(".wavetext").append( $("<span>").html("&nbsp;") ); 
  } else {  
    $(".wavetext").append( $("<span>").text(text[i]) ); 
  }
}

function onReady(callback) {
    var intervalId = window.setInterval(function() {
        // load all image 
        for(let i = 0 ; i < 120 ; i++) { 
            $('.preloadImageContainer').prepend(`<img class="preloadImage" src="assets/images/product360/Bali/${i}.png" />`)
            $('.preloadImageContainer').prepend(`<img class="preloadImage" src="assets/images/product360/Bandung/${i}.png" />`)
            $('.preloadImageContainer').prepend(`<img class="preloadImage" src="assets/images/product360/Jogja/${i}.png" />`)
        }
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 3000);
  }
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.content', true);
    setVisible('.loading', false);
  });


  // reload when resize
  jQuery(function($){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
  
    $(window).resize(function() {
      if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
        location.reload();
        return;
      }
    });
  });