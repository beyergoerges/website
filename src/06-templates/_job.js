let jd_jobScene = trigger => {
  jd_scene(trigger).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();

    jd_tl.staggerFromTo(
      [
        trigger + " .jd-job__heading",
        trigger + " .jd-job__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .7, 0
    );
  });
}

jd_jobScene("#senior-designer");
//jd_jobScene("#developer");
jd_jobScene("#junior-designer");
jd_jobScene("#initiativ");
