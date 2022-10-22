AOS.init();

let timeTimeOut = 4100;
let time = 300;

const animation_1 = () => {
   document.querySelector("#intro_logo").classList.add("d-none");
   setTimeout(() => {}, 100)
}
const animation_2 = async() => {
   document.querySelector("#intro_1").classList.remove("d-none");
   setTimeout(() => {}, time)
}
const animation_3 = async() => {
   document.querySelector("#intro_1").classList.add("d-none");
   document.querySelector("#intro_2").classList.remove("d-none");
   setTimeout(() => {}, time)
}
const animation_4 = async() => {
   document.querySelector("#intro_2").classList.add("d-none");
   document.querySelector("#intro_3").classList.remove("d-none");
   time = 2600;
   setTimeout(() => {}, time)
}
const animation_5 = async() => {
   document.querySelector("#intro_3").classList.add("fade_out");
   document.querySelector("#hero").classList.remove("d-none");
   time = 600;
   setTimeout(() => {}, time)
}
const animation_6 = async() => {
   document.querySelector("#intro_3").classList.add("d-none");
   document.querySelector("#hero").classList.add("fade_in");
   setTimeout(() => {}, time)
}
// const animations = async() => {
//    await animation_1();
//    await animation_2();
//    await animation_3();
//    await animation_4();
//    await animation_5();
//    await animation_6();
// }

document.addEventListener("DOMContentLoaded", function() {
   const animations = () => {
      setTimeout(() => animation_1(), timeTimeOut);
      setTimeout(() => animation_2(), timeTimeOut += time);
      setTimeout(() => animation_3(), timeTimeOut += time);
      setTimeout(() => animation_4(), timeTimeOut += time);
      setTimeout(() => animation_5(), timeTimeOut += time);
      setTimeout(() => animation_6(), timeTimeOut += time);
   }
   animations();
})