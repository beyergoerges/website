//@prepros-append 01-basics/_js-wrapper-start.js
//@prepros-append 01-basics/_responsive.js
//@prepros-append 01-basics/_lazyload.js
//@prepros-append 01-basics/_animation.js
//@prepros-append 03-objects/_media.js
//@prepros-append 04-components/_menu.js
//@prepros-append 05-layout/_block.js
//@prepros-append 05-layout/_page-transitions.js
//@prepros-append 05-layout/_section.js
//@prepros-append 05-layout/_meta.js
//@prepros-append 06-templates/_craft.js
//@prepros-append 06-templates/_joda.js
//@prepros-append 06-templates/_clients.js
//@prepros-append 06-templates/_project.js
//@prepros-append 06-templates/_press.js
//@prepros-append 06-templates/_employer.js
//@prepros-append 06-templates/_job.js
//@prepros-append 06-templates/_contact.js
//@prepros-append 07-themes/_themes.js
//@prepros-append 01-basics/_js-wrapper-end.js

const jd_scripts = () => {    

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

// Breakpoints
let mq_tablet = window.matchMedia("(min-width: 600px)");
let mq_desktopS = window.matchMedia("(min-width: 990px)");
let mq_desktopM = window.matchMedia("(min-width: 1440px)");
let mq_desktopL = window.matchMedia("(min-width: 1680px)");
let mq_desktopXl = window.matchMedia("(min-width: 1921px)");

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

let bLazy = new Blazy({
  selector: ".jd-media__item:not(.jd-media__item--from-tablet)"
});

let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = (trigger, hook = .8) => new ScrollMagic.Scene({
  triggerElement: trigger,
  triggerHook: hook
})
.addTo(jd_scrollController);

let jd_mediaScene = (trigger, hook = .9) => {
  jd_scene(trigger, hook).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.to(
      trigger + " .jd-media__revealer", 2, {x: "200%", ease: SlowMo.easeIn}
    );
    jd_tl.to(
      trigger + " .jd-media__item", 0, {opacity: 1}, .5
    );
  });
}

jd_mediaScene("#joda-photo");
jd_mediaScene("#office");

// jd_mediaScene("#vfl");
// jd_mediaScene("#eintrachtde", .6);
// jd_mediaScene("#eventim-shop");
// jd_mediaScene("#tsukuyumi", .6);
// jd_mediaScene("#day-in-may");
// jd_mediaScene("#heimat", .6);

jd_mediaScene("#stores");
jd_mediaScene("#eintrachtde", .7);
jd_mediaScene("#vfl");
jd_mediaScene("#lungmuss", .7);
jd_mediaScene("#sks");
jd_mediaScene("#ihk", .7);
jd_mediaScene("#dovoba");
jd_mediaScene("#eset", .7);
jd_mediaScene("#wntt");
jd_mediaScene("#racoon", .7);
jd_mediaScene("#digitalexpert");
jd_mediaScene("#eventim-shop", .7);

// Prevent video from loading mobile
const jd_videoSources = document.querySelectorAll(".jd-media__item--from-tablet source");

if (mq_tablet.matches) {
  for(let i = 0; i < jd_videoSources.length; i++) {
    jd_videoSources[i].setAttribute("src", jd_videoSources[i].getAttribute("data-src"));
    jd_videoSources[i].parentNode.load();
  }
}

const jd_menuItems = document.querySelectorAll(".jd-menu__items")[0];

const jd_toggleMenu = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-menu__trigger, .jd-menu__trigger *")) return;

  // Don't follow the link
  //event.preventDefault();

  // Log the clicked element in the console
  //console.log(jd_menuItems);

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
}

document.addEventListener("click", jd_toggleMenu, false);

jd_scene(".jd-block--intro .jd-heading--page").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-block--intro .jd-heading--page",
    1.3, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
  );
});

jd_scene(".jd-block--intro .jd-heading--section").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-block--intro .jd-heading--section",
    1.3, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
  );
});


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

// jd_scene(".jd-footer", .99).reverse(false).on("start", event => {
//   let jd_tl = new TimelineLite();
//   jd_tl.fromTo([
//       ".jd-meta",
//       ".jd-footer"
//     ],
//     .9, {y: 64}, {y: "0", ease: Power2.easeInOut}, .1, .4
//   );
// });

const jd_legalLink = document.querySelector(".jd-footer__link--legal-notice");
const jd_privacyLink = document.querySelector(".jd-footer__link--privacy");
const jd_meta = document.querySelector(".jd-meta");
const jd_legal = document.querySelector(".jd-legal-notice");
const jd_privacy = document.querySelector(".jd-privacy");

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
    //console.log(event.target);

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
    //console.log(event.target);

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

  const jd_container = document.querySelector(".jd-wrapper");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-meta__close")) return;

  // Log the clicked element in the console
  //console.log(event.target);

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

jd_scene(".jd-joda__heading").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-joda__heading",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
  );
  jd_tl.staggerFromTo(
    ".jd-joda__text",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
  );

});

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

let jd_projectScene = (trigger, hook = 1) => {
  jd_scene(trigger + " .jd-project__title", hook).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.staggerFromTo(
      [
        trigger + " .jd-project__title",
        trigger + " .jd-project__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
    );
  });
}

// jd_projectScene("#vfl");
// jd_projectScene("#eintrachtde", .6);
// jd_projectScene("#eventim-shop");
// jd_projectScene("#tsukuyumi", .6);
// jd_projectScene("#day-in-may");
// jd_projectScene("#heimat", .6);

jd_projectScene("#stores");
jd_projectScene("#eintrachtde", .8);
jd_projectScene("#vfl");
jd_projectScene("#lungmuss", .8);
jd_projectScene("#sks");
jd_projectScene("#ihk", .8);
jd_projectScene("#dovoba");
jd_projectScene("#eset", .8);
jd_projectScene("#wntt");
jd_projectScene("#racoon", .8);
jd_projectScene("#digitalexpert");
jd_projectScene("#eventim-shop", .8);

let jd_pressScene = trigger => {
  jd_scene(trigger).reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.staggerTo(
      trigger + " .jd-press__item", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .8
    );
  });
}

jd_pressScene("#press");
jd_pressScene("#speaker");

jd_scene(".jd-employer").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  jd_tl.staggerFromTo(
    ".jd-employer__description .jd-paragraph",
    .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .2
  );

});

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

jd_jobScene("#developer");
jd_jobScene("#junior-designer");
jd_jobScene("#initiativ");

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

const jd_location = {
  latitude: 51.5055232,
  longitude: 7.4686858
}

let jd_currentDate = new Date();
let jd_sunrise = new Date().sunrise(jd_location.latitude, jd_location.longitude);
let jd_sunset = new Date().sunset(jd_location.latitude, jd_location.longitude);

let jd_currentTime = jd_currentDate.getTime();
let jd_sunriseTime = jd_sunrise.getTime();
let jd_sunsetTime = jd_sunset.getTime();

const jd_body = document.body;

if (sessionStorage.getItem("theme")) {
  let theme = sessionStorage.getItem("theme");
  jd_body.classList.remove("jd-theme--day");
  jd_body.classList.remove("jd-theme--night");
  jd_body.classList.add("jd-theme--" + theme);
} else {
  if (jd_currentDate >= jd_sunrise && jd_currentDate < jd_sunset) {
    jd_body.classList.remove("jd-theme--night");
    jd_body.classList.add("jd-theme--day");
  } else {
    jd_body.classList.remove("jd-theme--day");
    jd_body.classList.add("jd-theme--night");
  }
}

// Theme switch
const jd_themeSwitch = document.querySelector(".jd-theme-switch");

const jd_toggleTheme = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-theme-switch, .jd-theme-switch *")) return;

  if (jd_body.classList.contains("jd-theme--day")) {
    jd_body.classList.remove("jd-theme--day");
    jd_body.classList.add("jd-theme--night");
    sessionStorage.setItem("theme", "night");
  } else {
    jd_body.classList.remove("jd-theme--night");
    jd_body.classList.add("jd-theme--day");
    sessionStorage.setItem("theme", "day");
  }
}

document.addEventListener("click", jd_toggleTheme, false);

};

document.addEventListener("DOMContentLoaded", () => {

  jd_scripts();

  enquire.register("(min-width: 1024px)", {

      match: () => {

        Barba.Pjax.start();

        Barba.Dispatcher.on("transitionCompleted", () => {

          jd_scripts();

        });
      },

      deferSetup: true
  });

});


//# sourceMappingURL=main.js.map