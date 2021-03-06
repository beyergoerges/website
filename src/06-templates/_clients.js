jd_scene(".jd-clients").reverse(false).on("enter", event => {

  enquire.register(jd_breakMax("tablet"), {

      match: () => {

        let jd_tl = new TimelineLite();
        jd_tl.staggerTo(
          ".jd-client__line-x", .1, {right: 0}, .1, .4
        );
        jd_tl.staggerTo(
          ".jd-client:nth-child(even) .jd-client__line-y", .1, {bottom: 0}, .1, .8
        );
        jd_tl.staggerTo(
          ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
        );
      },

      deferSetup: true
  });

  enquire.register(jd_breakMin("tablet"), {

      match: () => {

        let jd_tl = new TimelineLite();
        jd_tl.staggerTo(
          ".jd-client__line-x", .1, {right: 0}, .1, .4
        );
        jd_tl.staggerTo([
          ".jd-client:nth-child(2) .jd-client__line-y",
          ".jd-client:nth-child(5) .jd-client__line-y",
          ".jd-client:nth-child(8) .jd-client__line-y",
          ".jd-client:nth-child(11) .jd-client__line-y",
          ".jd-client:nth-child(14) .jd-client__line-y",
          ".jd-client:nth-child(17) .jd-client__line-y",
          ".jd-client:nth-child(3) .jd-client__line-y",
          ".jd-client:nth-child(6) .jd-client__line-y",
          ".jd-client:nth-child(9) .jd-client__line-y",
          ".jd-client:nth-child(12) .jd-client__line-y",
          ".jd-client:nth-child(15) .jd-client__line-y",
          ".jd-client:nth-child(18) .jd-client__line-y"
        ], .1, {bottom: 0}, .1, .8
        );
        jd_tl.staggerTo(
          ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
        );
      },

      deferSetup: true
  });

  enquire.register(jd_breakMin("desktop-s"), {

      match: () => {

        let jd_tl = new TimelineLite();
        jd_tl.staggerTo(
          ".jd-client__line-x", .1, {right: 0}, .1, .4
        );
        jd_tl.staggerTo([
          ".jd-client:nth-child(14) .jd-client__line-y",
          ".jd-client:nth-child(8) .jd-client__line-y",
          ".jd-client:nth-child(2) .jd-client__line-y",
          ".jd-client:nth-child(15) .jd-client__line-y",
          ".jd-client:nth-child(9) .jd-client__line-y",
          ".jd-client:nth-child(3) .jd-client__line-y",
          ".jd-client:nth-child(16) .jd-client__line-y",
          ".jd-client:nth-child(10) .jd-client__line-y",
          ".jd-client:nth-child(4) .jd-client__line-y",
          ".jd-client:nth-child(17) .jd-client__line-y",
          ".jd-client:nth-child(11) .jd-client__line-y",
          ".jd-client:nth-child(5) .jd-client__line-y",
          ".jd-client:nth-child(18) .jd-client__line-y",
          ".jd-client:nth-child(12) .jd-client__line-y",
          ".jd-client:nth-child(6) .jd-client__line-y"
        ], .1, {top: 0}, .1, .8
        );
        // jd_tl.staggerTo(
        //   ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
        // );
      },

      deferSetup: true
  });
});
