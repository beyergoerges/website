let jd_craftScene = name => {
  jd_scene("#" + name).offset("-100").reverse(false).on("enter", event => {
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
        "#" + name + " .jd-craft__heading",
        "#" + name + " .jd-craft__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2, .6
    );
    jd_tl.staggerFromTo(
      "#" + name + " .jd-data-list__item",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, 1
    );
  });
}

jd_craftScene("strategy");
jd_craftScene("design");
jd_craftScene("technology");
