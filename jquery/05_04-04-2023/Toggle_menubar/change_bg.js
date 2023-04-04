// code for page scroll and change color of navigation
function changebg(){
    let header_scroll = document.querySelector(".header");
    let scrolled = window.scrollY;

    if(scrolled > 0){
        header_scroll.classList.add("header-fixed");
    }else{
        header_scroll.classList.remove("header-fixed");
    }
}
window.addEventListener("scroll",changebg)