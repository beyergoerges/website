let jd_mediaScene = (name, delay) => {
  jd_scene("#" + name).offset("-200").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.to(
      "#" + name + " .jd-media__revealer", 2, {x: "200%", ease: SlowMo.easeIn}, delay
    );
    jd_tl.to(
      "#" + name + " .jd-media__item", 0, {opacity: 1}, (.5 + delay)
    );
  });
}

jd_mediaScene("joda-photo");

jd_mediaScene("eventim-shop");
jd_mediaScene("tsukuyumi", .15);
jd_mediaScene("day-in-may", .3);
jd_mediaScene("kidsclub", .45);
jd_mediaScene("dfa", .6);
jd_mediaScene("heimat", .75);
