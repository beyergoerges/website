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

jd_mediaScene("#vfl");
jd_mediaScene("#eintrachtde");
jd_mediaScene("#eventim-shop");
jd_mediaScene("#tsukuyumi", .6);
jd_mediaScene("#day-in-may");
jd_mediaScene("#kidsclub", .6);
jd_mediaScene("#dfa");
jd_mediaScene("#heimat", .6);
