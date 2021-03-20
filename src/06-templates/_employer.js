jd_scene(".jd-employer").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  jd_tl.staggerFromTo(
    ".jd-employer__description .jd-heading--high-level",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
  );

});
