let jd_mediaScene = (trigger, hook = .9) => {
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

// jd_mediaScene("#vfl");
// jd_mediaScene("#eintrachtde", .6);
// jd_mediaScene("#eventim-shop");
// jd_mediaScene("#tsukuyumi", .6);
// jd_mediaScene("#day-in-may");
// jd_mediaScene("#heimat", .6);

jd_mediaScene("#stores");
jd_mediaScene("#eintrachtde", .7);
jd_mediaScene("#vfl");
jd_mediaScene("#lungmuss", .7);
jd_mediaScene("#sks");
jd_mediaScene("#ihk", .7);
jd_mediaScene("#dovoba");
jd_mediaScene("#eset", .7);
jd_mediaScene("#wntt");
jd_mediaScene("#racoon", .7);
jd_mediaScene("#digitalexpert");
jd_mediaScene("#eventim-shop", .7);

// Prevent video from loading mobile
const jd_videoSources = document.querySelectorAll(".jd-media__item--from-tablet source");

if (mq_tablet.matches) {
  for(let i = 0; i < jd_videoSources.length; i++) {
    jd_videoSources[i].setAttribute("src", jd_videoSources[i].getAttribute("data-src"));
    jd_videoSources[i].parentNode.load();
  }
}
