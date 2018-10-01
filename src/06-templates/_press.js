let jd_pressScene = name => {
  jd_scene("#" + name).offset("-300").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.staggerTo(
      "#" + name + " .jd-press__item", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .8
    );
  });
}

jd_pressScene("press");
jd_pressScene("speaker");
