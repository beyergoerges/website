let jd_projectScene = (trigger, hook = .8) => {
  jd_scene(trigger + " .jd-project__title", hook).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.staggerFromTo(
      [
        trigger + " .jd-project__title",
        trigger + " .jd-project__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
    );
  });
}

jd_projectScene("#vfl");
jd_projectScene("#eintrachtde", .6);
jd_projectScene("#eventim-shop");
jd_projectScene("#tsukuyumi", .6);
jd_projectScene("#day-in-may");
jd_projectScene("#heimat", .6);

// jd_projectScene("#stores");
// jd_projectScene("#eintrachtde", .6);
// jd_projectScene("#vfl");
// jd_projectScene("#ihk", .6);
// jd_projectScene("#lungmuss");
// jd_projectScene("#sks", .6);
// jd_projectScene("#dovoba");
// jd_projectScene("#eset", .6);
// jd_projectScene("#wntt");
// jd_projectScene("#racoon", .6);
// jd_projectScene("#eventim-shop");
