jd_scene(".jd-joda__heading").offset("-300").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-joda__heading",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
  );
  jd_tl.staggerFromTo(
    ".jd-joda__text",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2, .4
  );
});
