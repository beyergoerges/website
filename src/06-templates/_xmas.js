let jd_xmas = (name, top, bottom) => {

  if (window.location.href.indexOf(name) != -1) {
    document.querySelector(".jd-xmas__card-text--top").innerHTML = top;
    document.querySelector(".jd-xmas__card-text--bottom").innerHTML = bottom;
  }

}

jd_xmas("athletia", "Liebe Britta, lieber Lukas,", "wir wünschen Euch schöne, analoge Festtage.");

// jd_scene(".jd-xmas").reverse(false).on("enter", event => {
//
//   let jd_tl = new TimelineLite();
//
//   // jd_tl.fromTo(
//   //   ".jd-xmas__card-illustration--4 .jd-xmas__logo-triangle--2",
//   //   2, {opacity: 0}, {opacity: 1, ease: Elastic.easeOut}
//   // );
//
//   jd_tl.staggerFromTo(
//     ".jd-xmas__logo-triangle",
//     .9, {opacity: 0}, {opacity: 1, ease: Expo.easeOut}, .2
//   );
//
// });
