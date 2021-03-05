jd_scene(".jd-block--intro .jd-heading--page").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-block--intro .jd-heading--page",
    1.3, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
  );
});

jd_scene(".jd-block--intro .jd-heading--section").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-block--intro .jd-heading--section",
    1.3, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
  );
});
