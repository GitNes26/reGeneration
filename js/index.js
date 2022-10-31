AOS.init();

let timeTimeOut = 3500;
let time = 300;

const animation_1 = () => {
   document.querySelector("#intro_logo").classList.add("d-none");
   // document.querySelector("#hero").classList.remove("d-none");
}
const animation_2 = () => {
   document.querySelector("#hero").classList.add("fade_in");
   document.querySelector("#img_hero_1").classList.add("img_left_right");
   document.querySelector("#img_hero_2").classList.add("img_right_left");
}
const animation_3 = () => {
   document.querySelector("#span_icon").classList.remove("d-none");
   document.querySelector("body").classList.remove("scroll-y-none");
}


document.addEventListener("DOMContentLoaded", function() {
   document.querySelector("body").classList.add("scroll-y-none");
   document.querySelector("#img_hero_1").classList.remove("img_rotate_right");
   // document.querySelector("#img_hero_2").classList.remove("img_rotate_left");

   const animations = () => {
      setTimeout(() => animation_1(), timeTimeOut);
      setTimeout(() => animation_2(), timeTimeOut += time);
      setTimeout(() => animation_3(), timeTimeOut += time + 2500);
   }
   animations();
})