let jd_contactScene = name => {
  jd_scene("#" + name).offset("-100").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      "#" + name + " .jd-contact__heading",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .6
    );
  });
}

jd_contactScene("email");
jd_contactScene("phone");
