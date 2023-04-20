$(function () {
  /* header search  btn */
  $(".search").click(function () {
    var value = $(".search input[type=search]");

    if (value.css("width") != "130px") {
      $(".search").css("width", "170px");
      $(".search a img").css("width", "90%");
      value.css({ width: "130px", opacity: "1", visibility: "visible" });
    }
  });

  /* gnb sub */
  $(".gnb-bottom > ul > li").mouseover(function () {
    $(this).children(".submenu-container").stop().slideDown();
    $(this).children("a").addClass("active");
  });
  $(".gnb-bottom > ul > li").mouseleave(function () {
    $(this).children(".submenu-container").stop().slideUp();
    $(this).children("a").removeClass("active");
  });

  $(".gnb-bottom > ul > li").focusin(function () {
    $(this).children(".submenu-container").stop().slideDown();
    $(this).children("a").addClass("active");
  });
  $(".gnb-bottom > ul > li").focusout(function () {
    $(this).children(".submenu-container").stop().slideUp();
    $(this).children("a").removeClass("active");
  });

  /* notice_section */
  $(".notice-contents").cycle({
    fx: "scrollUp",
    speed: 300,
    timeout: 2000,
  });

  /* promotion */
  var bslider1 = $(".promotion-slider").bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10,
    adaptiveHeight: true,
    auto: true,
    autoControlsCombine: true,
    autoControls: true,
    pause: 2000,
    autoHover: true,
    onSliderLoad: function (currentIndex) {
      $(".promotion-slider > div")
        .eq(currentIndex + 1)
        .addClass("active");
    },
    onSlideAfter: function ($slideElement) {
      $slideElement.addClass("active").siblings().removeClass("active");
    },
  });

  var click = 0;

  /* promotion 클릭 리로드 */
  $(".middle-inner-right > div").click(function () {
    $(".promotion-slide-layer").slideToggle();
    /* bx 클릭 리로드 */
    bslider1.reloadSlider();

    /* 클릭 카운딩 */
    function count() {
      click++;
      return click;
    }
    /* 클릭 카운트 수를 2로 나눈 나머지는 0 아니면 1이다. */
    var arrow = count() % 2;

    if (arrow === 1) {
      $(".sb-pro-arrow img").attr("src", "imges/btn_prom_up.png");
    } else {
      $(".sb-pro-arrow img").attr("src", "imges/btn_prom_down.png");
    }
  });

  var bslider2 = $(".ingcampain-slider").bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10,
    adaptiveHeight: true,
    auto: true,
    autoControlsCombine: true,
    autoControls: true,
    pause: 2000,
    autoHover: true,
    onSliderLoad: function (currentIndex) {
      $(".ingcampain-slider > div")
        .eq(currentIndex + 1)
        .addClass("acti");
    },
    onSlideAfter: function ($slideElement) {
      $slideElement.addClass("acti").siblings().removeClass("acti");
    },
  });

  $(window).scroll(function () {
    /* bean_section 스크롤 탑값 */
    var $bean = $("#bean_section").offset().top;
    /* fav_section 스크롤 탑값 */
    var $fav = $(".fav_section").offset().top;
    /* magazin_title 스크롤 탑값 */
    // var $magazine = $(".magazin_title").offset().top;
    /* store 스크롤 탑값 */
    var exp = $(".store-img, .dt-img, .bean-illur,.store-illur");
    var $exp = $(".sb-exp").offset().top;

    var $winScrollTop = $(window).scrollTop();
    var $winHeight = $(window).height() / 3;
    var $plus = $winScrollTop + $winHeight;

    // console.log($winHeight);

    if ($plus >= $bean) {
      $(".bean-img, .bean-txts").addClass("active");
    } else {
      $(".bean-img, .bean-txts").removeClass("active");
    }
    if ($plus + 400 >= $fav) {
      $(".fav-title, .fav-words").addClass("active");
    } else {
      $(".fav-title, .fav-words").removeClass("active");
    }
    // if ($plus + 500 >= $magazine) {
    //   $(".magazin_title, .magazin-btn").addClass("active");
    // } else {
    //   $(".magazin_title, .magazin-btn").removeClass("active");
    // }
    if ($plus + 300 >= $exp) {
      exp.addClass("active");
      $(".sb-exp-word01, .sb-exp-word02, #exp-btn").addClass("active");
    } else {
      exp.removeClass("active");
      $(".sb-exp-word01, .sb-exp-word02, #exp-btn").removeClass("active");
    }
  });
});

// join 동의 클릭버튼
// $('check_id > input.mem2').click(()=>{
//   $(this). css("background",'src','imges/mem_check_on_type2.png');
// });

// var mem = document.querySelector(".mem");
// mem.addEventListener("click", chMem);

// function chMem(){
//   mem.url="imges/mem_check_on_type2.png"
// }

// $(document).ready(function(){
$("input.mem").click(function () {
  function count2() {
    click++;
    return click;
  }
  var mem = count2() % 2;
  if (mem === 1) {
    $("input.mem").attr("src", "imges/mem_check_on_type2.png");
  } else {
    $("input.mem").attr("src", "imges/mem_check_off_type2.png");
  }
});
// });

// custmer 토글 버튼
$(function () {
  $(".msRnb_btn_slide").click(function () {
    $(this).find("ul").stop().slideToggle("fast");
  });
});

var click3 = 0;

$(".msRnb_btn_slide").click(function () {
  function count3() {
    click3++;
    return click3;
  }
  var arrow2 = count3() % 2;
  if (arrow2 === 1) {
    $(".sbox_arrow img").attr("src", "img/util/sbox_arrow_up.png");
  } else {
    $(".sbox_arrow img").attr("src", "imges/sbox_arrow_down.png");
  }
});

// map
// var map = new ol.Map({
//   target : "map",
//   layers : [new ol.layer.Tile ({
//     source : new ol.source.OSM()
//   })
// ],

//   view : new ol.View ({
//     // projection : "EPSG:3857",
//     center : [127.1698, 37.7617],
//     zoom : 15
//   })
//  });

var map;
setTimeout(function () {
  map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      projection: "EPSG:3857",
      center: ol.proj.fromLonLat([126.9779, 37.5663]),
      zoom: 18,
    }),
  });
}, 0);

// map 토글 버튼
$(function () {
  $(".map_layer_toggle").click(function () {
    $(".store_map_layer_cont").stop().slideToggle("fast");
  });
});
$(function () {
  $(".map_layer_toggle").click(function () {
    $(this).css("background", "url../imges/map_layer_arrow_u.png");
  });
});

//반응형 m_gnb
window.addEventListener("DOMContentLoaded", function () {
  let gnb4 = document.querySelector(".m_gnb4");
  let gnb = document.querySelector(".m_gnb");
  // let bg = document.querySelector("m_gnb_dimm");

  gnb4.addEventListener("click", function () {
    gnb.classList.add("on");
    // gnb.classList.add("bg");
  });
});

window.addEventListener("DOMContentLoaded", function () {
  let gnbClose = document.querySelector(".closebtn");
  let gnb = document.querySelector(".m_gnb");
  // let bg = document.querySelector("m_gnb_dimm");

  gnbClose.addEventListener("click", function () {
    gnb.classList.remove("on");
    // gnb.classList.remove("bg");
  });
});

//footer
$(function () {
  $(".ft-ttl").click(function () {
    $(this).find("ul").stop().slideToggle("fast");
  });
});
