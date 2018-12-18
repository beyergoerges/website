let jd_xmas = (name, top, bottom) => {

  if (window.location.href.indexOf(name) != -1) {
    document.querySelector(".jd-xmas__text--top").innerHTML = top;
    document.querySelector(".jd-xmas__text--bottom").innerHTML = bottom;
  }

}

jd_xmas("britta", "Liebe Britta,", "wir wünschen Dir schöne, analoge Festtage.");
jd_xmas("lukas", "Lieber Lukas,", "wir wünschen Dir schöne, analoge Festtage.");

jd_scene(".jd-xmas").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  // jd_tl.fromTo(
  //   ".jd-xmas__card-illustration--4 .jd-xmas__logo-triangle--2",
  //   2, {opacity: 0}, {opacity: 1, ease: Elastic.easeOut}
  // );
  //
  // jd_tl.staggerFromTo(
  //   ".jd-xmas__logo-triangle",
  //   .9, {opacity: 0}, {opacity: 1, ease: Expo.easeOut}, .2
  // );

  jd_tl.fromTo(
    ".jd-xmas-cookies__card-flip, .jd-xmas-cookies__card-shadow",
    .4, {transform: "rotateY(0deg)"}, {transform: "rotateY(-180deg)", ease:SlowMo.easeOut}, 3
  );

});

let jd_fortuneA = Math.random()*10;
let jd_fortuneB = Math.floor(jd_fortuneA);

let jd_fortunes = [
  "With integrity and consistency -- your credits are piling up.",
  "Reach out your hand today to support others who need you.",
  "It is not the outside riches bit the inside ones that produce happiness.",
  "How dark is dark?, How wise is wise?",
  "We can admire all we see, but we can only pick one.",
  "The man who has no imagination has no wings.",
  "To courageously shoulder the responsibility of one's mistake is character.",
  "We can't help everyone. But everyone can help someone.",
  "You discover treasures where others see nothing unusual.",
  "Make all you can, save all you can, give all you can."
];

let jd_randomFortune = jd_fortunes[jd_fortuneB];

const jd_fortuneCookie = event => {

  const jd_cookies1 = document.querySelector(".jd-cookies__accept");
  const jd_cookies2 = document.querySelector(".jd-cookies__cracked");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__accept, .jd-cookies__accept *")) return;

  jd_cookies1.classList.add("--is-hidden");
  jd_cookies2.classList.add("--is-visible");

  document.querySelector(".jd-cookies__message").innerHTML = jd_randomFortune;
}

document.addEventListener("click", jd_fortuneCookie, false);
