// header scroll code
$(document).ready(function(){
    $header_scroll = $("header");
    $(window).scroll(function(){
        $header_scroll.addClass("header-fixed")
      $current = $(this).scrollTop();
      if($current > 0){
        $header_scroll.addClass("header-fixed")
      }else{
        $header_scroll.removeClass("header-fixed")
      }
    })
  })

//   function changebg(){
//   var header_scroll = document.querySelector("header");
//   var current = window.scrollY;

//   if(current > 0){
//     header_scroll.classList.add("header-fixed")
//   }else{
//     header_scroll.classList.remove("header-fixed")
//   }
// }
// window.addEventListener("scroll",changebg)
