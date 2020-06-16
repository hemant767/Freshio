navbar=document.querySelector("#navbar");//onscroll states that scrolling begun.
window.onscroll = function() {scrollUp()};
function scrollUp(){
    if(document.documentElement.scrollTop>2){//scrollTop returns the number of pixels a body scrolled vertically
        navbar.style.top="0";
    }else{
        navbar.style.top="-60px";
    }
}
