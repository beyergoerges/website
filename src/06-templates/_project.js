let jd_projectScene = (name, delay) => {
  jd_scene("#" + name + " .jd-project__title").offset("-400").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      [
        "#" + name + " .jd-project__title",
        "#" + name + " .jd-project__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, delay
    );
  });
}

jd_projectScene("eventim-shop");
jd_projectScene("tsukuyumi", .15);
jd_projectScene("day-in-may", .3);
jd_projectScene("kidsclub", .45);
jd_projectScene("dfa", .6);
jd_projectScene("heimat", .75);
