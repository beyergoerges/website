let jd_mediaScene = (trigger, hook = .8) => {
  jd_scene(trigger, hook).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.to(
      trigger + " .jd-media__revealer", 2, {x: "200%", ease: SlowMo.easeIn}
    );
    jd_tl.to(
      trigger + " .jd-media__item", 0, {opacity: 1}, .5
    );
  });
}

jd_mediaScene("#joda-photo");

jd_mediaScene("#eventim-shop");
jd_mediaScene("#tsukuyumi");
jd_mediaScene("#day-in-may", .6);
jd_mediaScene("#kidsclub");
jd_mediaScene("#dfa", .6);
jd_mediaScene("#heimat");
