jd_scene(".jd-clients").offset("-100").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.staggerTo(
    ".jd-client__line-x", .1, {right: 0}, .1, .4
  );
  jd_tl.staggerTo(
    ".jd-client:nth-child(n+2):nth-child(-n+6) .jd-client__line-y", .1, {top: 0}, .1, .8
  );
  jd_tl.staggerTo(
    ".jd-client:nth-child(n+8):nth-child(-n+12) .jd-client__line-y", .1, {bottom: 0}, .1, .8
  );
  jd_tl.staggerTo(
    ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
  );
});
