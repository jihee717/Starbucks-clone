/* header search버튼 변화 */
// $(function () {
//   $(".btn_gnb").click(function () {
//     var value = $(".btn_gnb input[type=search]");

//     if (value.css("width") != "130px") {
//       $(".btn_gnb").css("width", "170px");
//       $(".btn_gnb a img").css("width", "90%");
//       value.css({ width: "130px", opacity: "1", visibility: "visible" });
//     }
//   });
// });

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

// window.addEventListener("load", function () {
//   let n = 0;
//   let container = document.getElementsByClassName("down_nav")[0];
//   let infoArray = [];

//   for (var i = 0; i < container.children.length; i++) {
//     if (container.children[i].tagName == "NAV") {
//       var nav = container.children[i];
//     } else {
//       infoArray.push(container.children[i]);
//     }
//   }
//   var navLi = nav.children[0].children; //li
//   console.log(navLi);
//   console.log(infoArray); //description

//   for (var i = 0; i < navLi.length; i++) {
//     navLi[i].index = i;

//     navLi[i].addEventListener("hover", function (e) {
//       e.preventDefault();
//       n = e.currentTarget.index; //n=클릭한 번호다

//       for (var j = 0; j < navLi.length; j++) {
//         if (j == n) {
//           navLi[j].classList.add("on"); //infoArray
//           infoArray[j].classList.add("active");
//         } else {
//           navLi[j].classList.remove("on");
//           infoArray[j].classList.remove("active");
//         }
//       }
//     });
//   }
// });

/* gnb 서브메뉴 */
$(".down_nav_inner > ul > li").mouseover(function () {
  $(this).children(".down_sub_wrap").stop().slideDown();
  $(this).children("a").addClass("active");
});
$(".down_nav_inner > ul > li").mouseleave(function () {
  $(this).children(".down_sub_wrap").stop().slideUp();
  $(this).children("a").removeClass("active");
});

$(".down_nav_inner > ul > li").focusin(function () {
  $(this).children(".down_sub_wrap").stop().slideDown();
  $(this).children("a").addClass("active");
});
$(".down_nav_inner > ul > li").focusout(function () {
  $(this).children(".down_sub_wrap").stop().slideUp();
  $(this).children("a").removeClass("active");
});

$(function () {
  $(".notice_right").click(function () {
    $(".promotion").stop().slideToggle("fast");
  });
});

$(function () {
  $(".footer_menu_ttl").click(function () {
    $(this).find("ul").stop().slideToggle("fast");
  });
});
