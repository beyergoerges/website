jd_scene("#jd-joda-photo").offset("-200").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.to(
    "#jd-joda-photo .jd-image__revealer", 2, {x: "200%", ease: SlowMo.easeIn}
  );
  jd_tl.to(
    "#jd-joda-photo .jd-image__img", 0, {opacity: 1}, .5
  );
});
