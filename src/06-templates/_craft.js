let jd_craftScene = trigger => {
  jd_scene(trigger).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();

    jd_tl.staggerFromTo(
      [
        trigger + " .jd-craft__heading",
        trigger + " .jd-craft__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2, .7
    );
    jd_tl.staggerFromTo(
      trigger + " .jd-data-list__item",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, 1.1
    );
  });
}

jd_craftScene("#strategy");
jd_craftScene("#design");
jd_craftScene("#technology");
