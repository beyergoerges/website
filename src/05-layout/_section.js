let jd_sectionTitleScene = trigger => {
  jd_scene(trigger + " .jd-section__title").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      trigger + " .jd-section__title-number",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
    );
    jd_tl.to(
      trigger + " .jd-section__title-line", .4, {scaleX: 1, ease: Power2.easeOut}
    );
    jd_tl.fromTo(
      trigger + " .jd-section__title-text",
      .4, {opacity: 0}, {opacity: 1}, .6
    );
    jd_tl.fromTo(
      trigger + " .jd-section__title-text",
      .4, {x: "-16px"}, {x: 0, ease: Power2.easeOut}, .6
    );
  });
}

jd_sectionTitleScene("#strategy");
jd_sectionTitleScene("#design");
jd_sectionTitleScene("#technology");

jd_sectionTitleScene("#projects");
jd_sectionTitleScene("#press");
jd_sectionTitleScene("#speaker");

jd_sectionTitleScene("#developer");
jd_sectionTitleScene("#junior-designer");
jd_sectionTitleScene("#initiativ");

jd_sectionTitleScene("#email");
jd_sectionTitleScene("#phone");

let jd_sectionDescriptionScene = trigger => {
  jd_scene(trigger + " .jd-section__description").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      trigger + " .jd-section__description",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .4
    );
  });
}

jd_sectionDescriptionScene("#projects");
