let jd_sectionTitleScene = name => {
  jd_scene("#jd-section-title-" + name).offset("-200").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      "#jd-section-title-" + name + " .jd-section__title-number",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
    );
    jd_tl.to(
      "#jd-section-title-" + name + " .jd-section__title-line", .4, {scaleX: 1, ease: Power2.easeOut}
    );
    jd_tl.fromTo(
      "#jd-section-title-" + name + " .jd-section__title-text",
      .4, {opacity: 0}, {opacity: 1}, .6
    );
    jd_tl.fromTo(
      "#jd-section-title-" + name + " .jd-section__title-text",
      .4, {x: "-16px"}, {x: 0, ease: Power2.easeOut}, .6
    );
  });
}

jd_sectionTitleScene("strategy");
jd_sectionTitleScene("design");
jd_sectionTitleScene("technology");

jd_sectionTitleScene("projects");
jd_sectionTitleScene("press");
jd_sectionTitleScene("speaker");

jd_sectionTitleScene("email");
jd_sectionTitleScene("phone");

let jd_craftScene = name => {
  jd_scene("#jd-craft-" + name).offset("-100").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    // jd_tl.fromTo(
    //   "#jd-craft-" + name + " .jd-section__title-number",
    //   .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
    // );
    // jd_tl.to(
    //   "#jd-craft-" + name + " .jd-section__title-line",
    //   .4, {scaleX: 1, ease:Power2.easeOut}
    // );
    jd_tl.staggerFromTo(
      [
        // "#jd-craft-" + name + " .jd-section__title-text",
        "#jd-craft-" + name + " .jd-craft__heading",
        "#jd-craft-" + name + " .jd-craft__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .4
    );
    jd_tl.staggerFromTo(
      "#jd-craft-" + name + " .jd-data-list__item",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, .8
    );
  });
}

jd_craftScene("strategy");
jd_craftScene("design");
jd_craftScene("technology");

jd_scene("#jd-joda-photo").offset("-200").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.to(
    "#jd-joda-photo .jd-image__revealer", 2, {x: "200%", ease: SlowMo.easeIn}
  );
  jd_tl.to(
    "#jd-joda-photo .jd-image__img", 0, {opacity: 1}, .5
  );
});
