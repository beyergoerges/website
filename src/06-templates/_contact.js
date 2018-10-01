let jd_contactScene = trigger => {
  jd_scene(trigger).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      trigger + " .jd-contact__heading",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .7
    );
  });
}

jd_contactScene("#email");
jd_contactScene("#phone");
