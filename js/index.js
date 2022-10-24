AOS.init();

let timeTimeOut = 3500;
let time = 300;

const animation_1 = () => {
   document.querySelector("#intro_logo").classList.add("d-none");
}
const animation_2 = () => {
   document.querySelector("#intro_1").classList.remove("d-none");
}
const animation_3 = () => {
   document.querySelector("#intro_1").classList.add("d-none");
   document.querySelector("#intro_2").classList.remove("d-none");
}
const animation_4 = () => {
   document.querySelector("#intro_2").classList.add("d-none");
   document.querySelector("#intro_3").classList.remove("d-none");
   time = 2600;
}
const animation_5 = () => {
   document.querySelector("#intro_3").classList.add("fade_out");
   document.querySelector("#hero").classList.remove("d-none");
   time = 600;
}
const animation_6 = () => {
   document.querySelector("#intro_3").classList.add("d-none");
   document.querySelector("#hero").classList.add("fade_in");
   document.querySelector("#img_hero_1").classList.add("img_rotate_right");
   document.querySelector("#img_hero_2").classList.add("img_rotate_left");
}
const animation_7 = () => {
   document.querySelector("#span_icon").classList.remove("d-none");
   document.querySelector("body").classList.remove("scroll-y-none");
}


document.addEventListener("DOMContentLoaded", function() {
   document.querySelector("body").classList.add("scroll-y-none");
   document.querySelector("#img_hero_1").classList.remove("img_rotate_right");
   document.querySelector("#img_hero_2").classList.remove("img_rotate_left");

   const animations = () => {
      setTimeout(() => animation_1(), timeTimeOut);
      setTimeout(() => animation_2(), timeTimeOut += time);
      setTimeout(() => animation_3(), timeTimeOut += time);
      setTimeout(() => animation_4(), timeTimeOut += time);
      setTimeout(() => animation_5(), timeTimeOut += time);
      setTimeout(() => animation_6(), timeTimeOut += time);
      setTimeout(() => animation_7(), timeTimeOut += time);
   }
   animations();
})