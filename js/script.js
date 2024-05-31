$(".gnb,.logo>img:nth-child(2)").hide()
$(".search,.basket,.my").hide()

$(".menu").mouseover(function(){
    $(".gnb").stop().fadeIn()
    $(".logo>img:nth-child(1)").hide()
    $(".logo>img:nth-child(2)").show()
    $(".menu>li").css({"color": 'black'});
    $(".search2,.basket2,.my2").hide()
    $(".search,.basket,.my").show()
})

$(".close").click(function(){
    $(".gnb").stop().fadeOut()
    $(".logo>img:nth-child(2)").hide()
    $(".logo>img:nth-child(1)").show()
    $(".menu>li").css({"color": '#fff'});
    $(".search,.basket,.my").hide()
    $(".search2,.basket2,.my2").show()
})


$(".list>li").click(function(){
  $(this).addClass("active")
  $(this).siblings().removeClass("active")
})



var swiper = new Swiper(".main_slide", {
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    
});

var swiper = new Swiper(".contents_slide", {
    slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        clickable: true,
      },
    FreeMode:{enabled:true},
      breakpoints: {
        450: { slidesPerView: 1.4,},
        500: { slidesPerView: 1.5,},
        550: { slidesPerView: 1.6,},
        580: { slidesPerView: 1.8,},
        650: { slidesPerView: 2,},
        760: { slidesPerView: 2.3,},
        880: { slidesPerView: 2.7,},
        980: { slidesPerView: 3,},
        1060: { slidesPerView: 3,},
        1160: { slidesPerView: 3.5,},
        1260: { slidesPerView: 3.8,},
        1360: { slidesPerView: 4.1,},
        1480: { slidesPerView: 4.5,},
        1640: { slidesPerView: 5,},
      }
});

$(window).scroll(function(){
  
    let top=$(window).scrollTop();
    
    if(top>100){
        $(".header").css({"position": 'fixed ',"top":'0'
        ,"background-color":"#333" });
      

    }else{
      $(".header").css({"position": 'absolute'
      ,"background-color":"rgba(0,0,0,0)"
    });


    }
  })
  let lastTop=0
