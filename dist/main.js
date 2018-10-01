//@prepros-append 01-basics/_responsive.js
//@prepros-append 01-basics/_lazyload.js
//@prepros-append 01-basics/_animation.js
//@prepros-append 03-objects/_media.js
//@prepros-append 04-components/_menu.js
//@prepros-append 05-layout/_block.js
//@prepros-append 05-layout/_section.js
//@prepros-append 05-layout/_meta.js
//@prepros-append 06-templates/_craft.js
//@prepros-append 06-templates/_joda.js
//@prepros-append 06-templates/_clients.js
//@prepros-append 06-templates/_project.js
//@prepros-append 06-templates/_press.js
//@prepros-append 06-templates/_contact.js

const jd_breakpoint = {
  "phablet":        480,
  "tablet":         600,
  "desktop-s":      990,
  "desktop-m":      1440,
  "desktop-l":      1680,
  "desktop-xl":     1921
};

const jd_breakMin = name => {
  let value = jd_breakpoint[name];
  return "(min-width: " + value + "px)";
}

const jd_breakMax = name => {
  let value = jd_breakpoint[name] - 1;
  return "(max-width: " + value + "px)";
}

// enquire.register(jd_breakMin("desktop-s"), {
//
//     match: () => { console.log("matched!") },
//
//     unmatch: () => {},
//
//     setup: () => {},
//
//     destroy: () => {},
//
//     deferSetup: true
// });

document.addEventListener("DOMContentLoaded", event => {
  let bLazy = new Blazy({
    selector: ".jd-media__item"
  });
});

let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = element => new ScrollMagic.Scene({
  triggerElement: element
})
.addTo(jd_scrollController);

let jd_mediaScene = (name, delay) => {
  jd_scene("#" + name).offset("-200").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.to(
      "#" + name + " .jd-media__revealer", 2, {x: "200%", ease: SlowMo.easeIn}, delay
    );
    jd_tl.to(
      "#" + name + " .jd-media__item", 0, {opacity: 1}, (.5 + delay)
    );
  });
}

jd_mediaScene("joda-photo");

jd_mediaScene("eventim-shop");
jd_mediaScene("tsukuyumi", .15);
jd_mediaScene("day-in-may", .3);
jd_mediaScene("kidsclub", .45);
jd_mediaScene("dfa", .6);
jd_mediaScene("heimat", .75);

const jd_toggleMenu = event => {

  const jd_menuItems = document.querySelectorAll(".jd-menu__items")[0];
  const jd_menuItem = document.querySelectorAll(".jd-menu__items");
  const jd_container = document.querySelectorAll(".jd-container")[0];

  console.log(event.target);

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-menu__trigger, .jd-menu__trigger *")) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(jd_menuItems);

  if (jd_menuItems.classList.contains("--is-open")) {
    let jd_tl = new TimelineLite();
    jd_tl.to(".jd-menu__item", .2, {opacity: 0});
    jd_tl.to(".jd-container", .4, {y: 0, ease:Power2.easeIn});
    jd_menuItems.classList.remove("--is-open");
  } else {
    let jd_tl = new TimelineLite();
    jd_tl.to(".jd-container", .4, {y: "100vh", ease:Power2.easeIn});
    jd_tl.staggerFromTo(".jd-menu__item", .4, {opacity: 0, x: "-10vw"}, {opacity: 1, x: 0, ease:Power2.easeOut}, .1, .7);
    jd_menuItems.classList.add("--is-open");
  }

  // if (jd_container.classList.contains("--is-pushed")) {
  //   jd_container.classList.remove("--is-pushed");
  // } else {
  //   jd_container.classList.add("--is-pushed");
  // }

}

document.addEventListener("click", jd_toggleMenu, false);


let jd_sectionTitleScene = name => {
  jd_scene("#" + name + " .jd-section__title").offset("-200").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      "#" + name + " .jd-section__title-number",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
    );
    jd_tl.to(
      "#" + name + " .jd-section__title-line", .4, {scaleX: 1, ease: Power2.easeOut}
    );
    jd_tl.fromTo(
      "#" + name + " .jd-section__title-text",
      .4, {opacity: 0}, {opacity: 1}, .6
    );
    jd_tl.fromTo(
      "#" + name + " .jd-section__title-text",
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

let jd_sectionDescriptionScene = name => {
  jd_scene("#" + name + " .jd-section__description").offset("-100").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      "#" + name + " .jd-section__description",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .8
    );
  });
}

jd_sectionDescriptionScene("projects");

jd_scene(".jd-footer").triggerHook(.99).reverse(false).on("start", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo([
      ".jd-meta",
      ".jd-footer"
    ],
    .9, {y: 64}, {y: "0", ease: Power2.easeInOut}, .1, .4
  );
});

const jd_legalLink = document.querySelectorAll(".jd-footer__link--legal-notice")[0];
const jd_privacyLink = document.querySelectorAll(".jd-footer__link--privacy")[0];
const jd_meta = document.querySelectorAll(".jd-meta")[0];
const jd_metaContent = document.querySelectorAll(".jd-meta__content")[0];
const jd_legal = document.querySelectorAll(".jd-legal-notice")[0];
const jd_privacy = document.querySelectorAll(".jd-privacy")[0];

const jd_openMeta = event => {

  // If the clicked element doesn't have the right selector, bail
  if (event.target.matches(".jd-footer__link--legal-notice")) {

    jd_legalLink.classList.remove("--is-current");
    jd_privacyLink.classList.remove("--is-current");
    jd_meta.classList.remove("--is-open");
    jd_privacy.classList.remove("--is-open");

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);

    jd_legalLink.classList.add("--is-current");
    jd_meta.classList.add("--is-open");
    jd_legal.classList.add("--is-open");

    let jd_tl = new TimelineLite();
    jd_tl.to(
      window,
      .7, {scrollTo: "#jd-footer", ease:Power2.easeOut}
    );
    jd_tl.staggerFromTo(
      ".jd-legal-notice > *",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, .4
    );
    jd_tl.to(
      ".jd-meta__close", 1, {scale: 1, ease:Elastic.easeInOut}, .7
    );

  } else if (event.target.matches(".jd-footer__link--privacy")) {

    jd_legalLink.classList.remove("--is-current");
    jd_privacyLink.classList.remove("--is-current");
    jd_meta.classList.remove("--is-open");
    jd_legal.classList.remove("--is-open");

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);

    jd_privacyLink.classList.add("--is-current");
    jd_meta.classList.add("--is-open");
    jd_privacy.classList.add("--is-open");

    let jd_tl = new TimelineLite();
    jd_tl.to(
      window,
      .7, {scrollTo: "#jd-footer", ease:Power2.easeOut}
    );
    jd_tl.staggerFromTo(
      ".jd-privacy > *",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, .4
    );
    jd_tl.to(
      ".jd-meta__close", 1, {scale: 1, ease:Elastic.easeInOut}, .7
    );

  } else {
    return;
  }
}

document.addEventListener("click", jd_openMeta, false);

const jd_closeMeta = event => {

  const jd_container = document.querySelectorAll(".jd-wrapper")[0];

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-meta__close")) return;

  // Log the clicked element in the console
  console.log(event.target);

  let pageHeight = document.body.scrollHeight;
  let viewportHeight = window.innerHeight;
  let metaHeight = jd_meta.clientHeight;
  let endScrollPos = pageHeight - metaHeight + 64 - viewportHeight;

  let jd_tl = new TimelineLite();
  jd_tl.to(
    ".jd-meta__close", .4, {scale: 0}
  );
  jd_tl.to(
    window,
    .7, {scrollTo: endScrollPos, ease:Power2.easeInOut}, .1
  );

  jd_legalLink.classList.remove("--is-current");
  jd_privacyLink.classList.remove("--is-current");

  setTimeout( () => {
    jd_meta.classList.remove("--is-open");
    jd_legal.classList.remove("--is-open");
    jd_privacy.classList.remove("--is-open");
  }, 1100);
}

document.addEventListener("click", jd_closeMeta, false);

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

jd_scene(".jd-joda__heading").offset("-300").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-joda__heading",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
  );
  jd_tl.staggerFromTo(
    ".jd-joda__text",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2, .4
  );
});

jd_scene(".jd-clients").offset("-100").reverse(false).on("enter", event => {

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
          ".jd-client:nth-child(6) .jd-client__line-y",
          ".jd-client:nth-child(10) .jd-client__line-y",
          ".jd-client:nth-child(3) .jd-client__line-y",
          ".jd-client:nth-child(7) .jd-client__line-y",
          ".jd-client:nth-child(11) .jd-client__line-y",
          ".jd-client:nth-child(4) .jd-client__line-y",
          ".jd-client:nth-child(8) .jd-client__line-y",
          ".jd-client:nth-child(12) .jd-client__line-y"
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
        jd_tl.staggerTo(
          ".jd-client:nth-child(n+2):nth-child(-n+6) .jd-client__line-y", .1, {top: 0}, .1, .8
        );
        jd_tl.staggerTo(
          ".jd-client:nth-child(n+8):nth-child(-n+12) .jd-client__line-y", .1, {bottom: 0}, .1, .8
        );
        jd_tl.staggerTo(
          ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
        );
      },

      deferSetup: true
  });
});

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


//# sourceMappingURL=main.js.map