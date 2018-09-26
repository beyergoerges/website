// let jd_craftReveal = name => {
//   new TweenLite.to(".jd-craft-" + name, 1.5, { backgroundColor: "red" })
// };

//let jd_craftTechnologyTween = new TweenLite.to(".jd-craft-technology", 1.5, { backgroundColor: "red" });

let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = element => new ScrollMagic.Scene({
  triggerElement: element
})
.addTo(jd_scrollController);

let jd_craftTween = name => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    "#jd-craft-" + name + " .jd-section__title-number",
    .4,
    {x: "-16px", opacity: 0},
    {x: 0, opacity: 1}
  );
  jd_tl.to(
    "#jd-craft-" + name + " .jd-section__title-line",
    .4,
    {scaleX: 1, ease:Power2.easeOut}
  );
  jd_tl.staggerFromTo(
    [
      "#jd-craft-" + name + " .jd-section__title-text",
      "#jd-craft-" + name + " .jd-craft__heading",
      "#jd-craft-" + name + " .jd-craft__description"
    ],
    .4,
    {x: "-16px", opacity: 0},
    {x: 0, opacity: 1},
    .2,
    .8
  );
  jd_tl.staggerFromTo(
    "#jd-craft-" + name + " .jd-data-list__item",
    .4, {x: "-16px", opacity: 0},
    {x: 0, opacity: 1},
    .1,
    1.6);
}

jd_scene("#jd-craft-strategy").offset("-100").reverse(false).on("enter", event => {
  jd_craftTween("strategy");
});

jd_scene("#jd-craft-design").offset("-100").reverse(false).on("enter", event => {
  jd_craftTween("design");
});

jd_scene("#jd-craft-technology").offset("-100").reverse(false).on("enter", event => {
  jd_craftTween("technology");
});

// let jd_craftReveal = (name) => {
//   let jd_craftScene = new ScrollMagic.Scene({
//     triggerElement: "#jd-craft-" + name
//   })
//   .setTween(TweenLite.to("#jd-craft-" + name, 1.5, { backgroundColor: "red" }))
//   .addTo(jd_scrollController);
// };
//
// jd_craftReveal("strategy");
// jd_craftReveal("design");
// jd_craftReveal("technology");
