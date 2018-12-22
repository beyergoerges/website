//@prepros-append 01-basics/_js-wrapper-start.js
//@prepros-append 01-basics/_responsive.js
//@prepros-append 01-basics/_lazyload.js
//@prepros-append 01-basics/_animation.js
//@prepros-append 03-objects/_media.js
//@prepros-append 04-components/_menu.js
//@prepros-append 05-layout/_page-transitions.js
//@prepros-append 05-layout/_section.js
//@prepros-append 05-layout/_meta.js
//@prepros-append 06-templates/_craft.js
//@prepros-append 06-templates/_joda.js
//@prepros-append 06-templates/_clients.js
//@prepros-append 06-templates/_project.js
//@prepros-append 06-templates/_press.js
//@prepros-append 06-templates/_contact.js
//@prepros-append 06-templates/_xmas.js
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
  selector: ".jd-media__item"
});

let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = (trigger, hook = .8) => new ScrollMagic.Scene({
  triggerElement: trigger,
  triggerHook: hook
})
.addTo(jd_scrollController);

let jd_mediaScene = (trigger, hook = .8) => {
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

jd_mediaScene("#eventim-shop");
jd_mediaScene("#tsukuyumi");
jd_mediaScene("#day-in-may", .6);
jd_mediaScene("#kidsclub");
jd_mediaScene("#dfa", .6);
jd_mediaScene("#heimat");

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

let jd_projectScene = (trigger, hook = .8) => {
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

jd_projectScene("#eventim-shop");
jd_projectScene("#tsukuyumi");
jd_projectScene("#day-in-may", .6);
jd_projectScene("#kidsclub");
jd_projectScene("#dfa", .6);
jd_projectScene("#heimat");

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

let jd_xmas = (url, top, bottom, salutation, name) => {

  if (window.location.href.endsWith("#" + url)) {

    document.querySelector(".jd-cookies__text-salutation").innerHTML = salutation;
    document.querySelector(".jd-cookies__message-name").innerHTML = name + ", ";

    setTimeout(() => {
      let typeTop = new Typed(".jd-xmas__text--top", {
       strings: [top],
       typeSpeed: 30,
       showCursor: false,
       autoInsertCss: false
      });
    }, 5000);

    setTimeout(() => {
      let typeBottom = new Typed(".jd-xmas__text--bottom", {
       strings: [bottom],
       typeSpeed: 30,
       showCursor: false,
       autoInsertCss: false
      });
    }, 6000);
  }

}

jd_xmas("pipa", "Liebe Pipa,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Pipa");
jd_xmas("justus", "Lieber Justus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Justus");
jd_xmas("kathi", "Liebe Kathi,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Kathi");
jd_xmas("bea", "Liebe Bea,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Bea");
jd_xmas("richi", "Lieber Richi,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Richi");
jd_xmas("estelle", "Liebe Estelle,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Estelle");
jd_xmas("tom", "Lieber Tom,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Tom");
jd_xmas("gudrun", "Liebe Gudrun,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Gudrun");
jd_xmas("signe", "Liebe Signe,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Signe");
jd_xmas("uwe", "Lieber Uwe,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Uwe");
jd_xmas("klaus", "Lieber Klaus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Klaus");
jd_xmas("martin", "Lieber Martin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Martin");
jd_xmas("omaursel", "Liebe Oma Ursel,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Oma Ursel");
jd_xmas("marie", "Liebe Marie,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marie");
jd_xmas("johanna", "Liebe Johanna,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Johanna");
jd_xmas("barbara", "Liebe Barbara,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Barbara");
jd_xmas("joachim", "Lieber Joachim,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Joachim");

jd_xmas("jasmin", "Liebe Jasmin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jasmin");
jd_xmas("felix", "Lieber Felix,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Felix");
jd_xmas("johannes", "Lieber Jo,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jo");

jd_xmas("julian", "Lieber Julian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Julian");
jd_xmas("stefan", "Lieber Stefan,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Stefan");
jd_xmas("inga", "Liebe Inga,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Inga");

jd_xmas("alejandra", "Liebe Alejandra,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Alejandra");
jd_xmas("melanie", "Liebe Melanie,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Melanie");
jd_xmas("peter", "Lieber Peter,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Peter");
jd_xmas("dennis", "Lieber Dennis,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dennis");
jd_xmas("traian", "Lieber Traian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Traian");
jd_xmas("claas", "Lieber Claas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Claas");
jd_xmas("torsten", "Lieber Torsten,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Torsten");

jd_xmas("sebastian", "Lieber Sebastian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sebastian");
jd_xmas("sylvia", "Liebe Sylvia,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sylvia");
jd_xmas("andreas", "Lieber Andreas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Andreas");
jd_xmas("kristian", "Lieber Kristian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Kristian");

jd_xmas("meike", "Liebe Meike,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Meike");
jd_xmas("markus", "Lieber Markus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Markus");
jd_xmas("michael", "Lieber Michael,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Michael");
jd_xmas("daniel", "Lieber Daniel,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Daniel");
jd_xmas("philipp", "Lieber Philipp,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Philipp");
jd_xmas("jonathan", "Lieber Jonathan,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jonathan");
jd_xmas("dominic", "Lieber Dominic,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dominic");
jd_xmas("patrick", "Lieber Patrick,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Patrick");

jd_xmas("timm", "Lieber Timm,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Timm");

jd_xmas("katja", "Liebe Katja,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Katja");
jd_xmas("claudia", "Liebe Claudia,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Claudia");

jd_xmas("cristienczech", "Liebe Frau Czech,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Cristien Czech");
jd_xmas("larsgroehnke", "Lieber Herr Gröhnke,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Lars Gröhnke");
jd_xmas("carstenjaeger", "Lieber Herr Jäger,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Carsten Jäger");
jd_xmas("patrickpaetzel", "Lieber Herr Paetzel,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Patrick Paetzel");

jd_xmas("tobias", "Lieber Tobias,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Tobias");
jd_xmas("kevin", "Lieber Kevin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Kevin");

jd_xmas("moritz", "Lieber Moritz,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Moritz");

jd_xmas("elisa", "Liebe Elisa,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Elisa");
jd_xmas("arndt", "Lieber Arndt,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Arndt");
jd_xmas("bent", "Lieber Bent,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Bent");

jd_xmas("andreasbluhm", "Lieber Herr Bluhm,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Andreas Bluhm");
jd_xmas("peterheming", "Lieber Herr Heming,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Peter Heming");
jd_xmas("kaineuvians", "Lieber Herr Neuvians,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Kai Neuvians");
jd_xmas("britta", "Liebe Britta,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Britta");
jd_xmas("lukas", "Lieber Lukas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Lukas");

jd_xmas("dicky", "Lieber Dicky,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dicky");
jd_xmas("heiner", "Lieber Heiner,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Heiner");
jd_xmas("david", "Lieber David,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "David");
jd_xmas("bene", "Lieber Bene,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Bene");
jd_xmas("anke", "Liebe Anke,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Anke");
jd_xmas("alexandra", "Liebe Alex,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Alex");
jd_xmas("andreejosef", "Lieber Herr Josef,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Andree Josef");
jd_xmas("sebastian", "Lieber Sebastian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sebastian");
jd_xmas("uweschedlbauer", "Lieber Uwe,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Uwe");
jd_xmas("marioleo", "Lieber Mario,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Mario");
jd_xmas("svenmislintat", "Lieber Sven,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sven");
jd_xmas("stefanmennerich", "Lieber Stefan,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Stefan");
jd_xmas("lorenzberinger", "Lieber Lorenz,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Lorenz");
jd_xmas("peter", "Lieber Peter,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Peter");
jd_xmas("tobias", "Lieber Tobias,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Tobias");
jd_xmas("andreas", "Lieber Andreas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Andreas");
jd_xmas("markus", "Lieber Markus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Markus");
jd_xmas("annika", "Liebe Annika,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Annika");
jd_xmas("simon", "Lieber Simon,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Simon");
jd_xmas("svenja", "Liebe Svenja,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Svenja");
jd_xmas("marc", "Lieber Marc,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marc");
jd_xmas("reinhard", "Lieber Reinhard,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Reinhard");
jd_xmas("jens", "Lieber Jens,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jens");
jd_xmas("stefan", "Lieber Stefan,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Stefan");
jd_xmas("philipp", "Lieber Philipp,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Philipp");
jd_xmas("henning", "Lieber Henning,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Henning");
jd_xmas("christopher", "Lieber Christopher,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Christopher");
jd_xmas("christoph", "Lieber Christoph,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Christoph");
jd_xmas("henrik", "Lieber Henrik,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Henrik");
jd_xmas("carmelo", "Lieber Carmelo,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Carmelo");
jd_xmas("helge", "Lieber Helge,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Helge");
jd_xmas("maria", "Liebe Maria,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Maria");
jd_xmas("kristian", "Lieber Kristian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Kristian");
jd_xmas("thomas", "Lieber Thomas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Thomas");
jd_xmas("batta", "Lieber Batta,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Batta");
jd_xmas("jonas", "Lieber Jonas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jonas");
jd_xmas("karl", "Lieber Karl,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Karl");
jd_xmas("daniel", "Lieber Daniel,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Daniel");
jd_xmas("maurus", "Lieber Maurus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Maurus");
jd_xmas("frank", "Lieber Frank,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Frank");
jd_xmas("hanno", "Lieber Hanno,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Hanno");
jd_xmas("maurice", "Lieber Maurice,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Maurice");
jd_xmas("dominik", "Lieber Dominik,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dominik");
jd_xmas("josip", "Lieber Josip,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Josip");
jd_xmas("florian", "Lieber Florian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Florian");
jd_xmas("alex", "Lieber Alex,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Alex");
jd_xmas("michael", "Lieber Michael,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Michael");
jd_xmas("felix", "Lieber Felix,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Felix");
jd_xmas("florian", "Lieber Florian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Florian");
jd_xmas("martin", "Lieber Martin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Martin");
jd_xmas("mirco", "Lieber Mirco,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Mirco");
jd_xmas("matthias", "Lieber Matthias,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Matthias");
jd_xmas("gisbert", "Lieber Gisbert,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Gisbert");
jd_xmas("annkathrin", "Liebe Ann-Kathrin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Ann-Kathrin");
jd_xmas("janni", "Lieber Janni,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Janni");
jd_xmas("gerhardnowak", "Lieber Herr Nowak,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Gerhard Nowak");
jd_xmas("christian", "Lieber Christian,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Christian");
jd_xmas("eike", "Lieber Eike,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Eike");
jd_xmas("dirk", "Lieber Dirk,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dirk");
jd_xmas("norbert", "Lieber Norbert,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Norbert");
jd_xmas("denis", "Lieber Denis,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Denis");
jd_xmas("holger", "Lieber Holger,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Holger");
jd_xmas("kai", "Lieber Kai,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Kai");
jd_xmas("pit", "Lieber Pit,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Pit");
jd_xmas("micky", "Lieber Micky,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Micky");
jd_xmas("lucas", "Lieber Lucas,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Lucas");
jd_xmas("maik", "Lieber Maik,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Maik");
jd_xmas("nobby", "Lieber Nobby,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Nobby");
jd_xmas("peer", "Lieber Peer,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Peer");
jd_xmas("steffen", "Lieber Steffen,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Steffen");
jd_xmas("marcoklewenhagen", "Lieber Herr Klewenhagen,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Marco Klewenhagen");
jd_xmas("heiko", "Lieber Heiko,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Heiko");
jd_xmas("mircoschepp", "Lieber Herr Schepp,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Mirco Schepp");
jd_xmas("heiko", "Lieber Heiko,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Heiko");
jd_xmas("ibi", "Liebe Ibi,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Ibi");
jd_xmas("larse", "Lieber Larse,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Larse");
jd_xmas("kiwit", "Lieber Herr Kiwit,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Wolfram Kiwit");
jd_xmas("larse", "Lieber Larse,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Larse");
jd_xmas("burkhard", "Lieber Burkhard,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Burkhard");
jd_xmas("pascal", "Lieber Pascal,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Pascal");
jd_xmas("heiko", "Lieber Heiko,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Heiko");
jd_xmas("fraenze", "Liebe Fränze,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Fränze");
jd_xmas("daniela", "Liebe Daniela,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Daniela");
jd_xmas("finn", "Lieber Finn,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Finn");
jd_xmas("marvin", "Lieber Marvin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marvin");
jd_xmas("torsten", "Lieber Torsten,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Torsten");
jd_xmas("knud", "Lieber Knud,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Knud");
jd_xmas("alicia", "Liebe Alicia,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Alicia");
jd_xmas("heina", "Lieber Heina,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Heina");
jd_xmas("annchristin", "Liebe Ann-Christin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Ann-Christin");
jd_xmas("guido", "Lieber Guido,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Guido");
jd_xmas("terence", "Lieber Terence,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Terence");
jd_xmas("raphael", "Lieber Raphael,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Raphael");
jd_xmas("jana", "Liebe Jana,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jana");
jd_xmas("patrick", "Lieber Patrick,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Patrick");
jd_xmas("raphael", "Lieber Raphael,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Raphael");
jd_xmas("carsten", "Lieber Carsten,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Carsten");
jd_xmas("britta", "Liebe Britta,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Britta");
jd_xmas("janjerosch", "Lieber Herr Jerosch,", "wir wünschen Ihnen schöne, analoge Festtage.", "Dein", "Jan Jerosch");
jd_xmas("arne", "Lieber Arne,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Carsten");
jd_xmas("ralf", "Lieber Ralf,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Ralf");
jd_xmas("benjamin", "Lieber Benjamin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Benjamin");
jd_xmas("robert", "Lieber Robert,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Robert");
jd_xmas("hendrik", "Lieber Hendrik,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Hendrik");
jd_xmas("klaus", "Lieber Klaus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Klaus");
jd_xmas("josef", "Lieber Josef,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Josef");
jd_xmas("lina", "Liebe Lina,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Lina");
jd_xmas("joerg", "Lieber Jörg,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jörg");
jd_xmas("felix", "Lieber Felix,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Felix");
jd_xmas("corinna", "Liebe Corinna,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Corinna");
jd_xmas("sarah", "Liebe Sarah,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sarah");
jd_xmas("sandra", "Liebe Sandra,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sandra");
jd_xmas("boris", "Lieber Boris,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Boris");
jd_xmas("axel", "Lieber Axel,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Axel");
jd_xmas("marieke", "Liebe Marieke,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marieke");
jd_xmas("max", "Lieber Max,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Max");
jd_xmas("lars", "Lieber Lars,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Lars");
jd_xmas("priska", "Liebe Priska,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Priska");
jd_xmas("sylvia", "Liebe Sylvia,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Sylvia");
jd_xmas("christianhockenjos", "Lieber Herr Hockenjos,", "wir wünschen Ihnen schöne, analoge Festtage.", "Ihr", "Christian Hockenjos");
jd_xmas("robin", "Lieber Robin,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Robin");
jd_xmas("marco", "Lieber Marco,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marco");
jd_xmas("melanie", "Liebe Melanie,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Melanie");
jd_xmas("jennifer", "Liebe Jennifer,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jennifer");
jd_xmas("dennis", "Lieber Dennis,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Dennis");
jd_xmas("tim", "Lieber Tim,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Tim");
jd_xmas("philip", "Lieber Philip,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Philip");
jd_xmas("ariane", "Liebe Ariane,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Ariane");
jd_xmas("marcus", "Lieber Marcus,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Marcus");
jd_xmas("julia", "Liebe Julia,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Julia");
jd_xmas("selina", "Liebe Selina,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Selina");
jd_xmas("janphilip", "Lieber Jan-Philip,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Jan-Philip");
jd_xmas("volker", "Lieber Volker,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Volker");
jd_xmas("amelie", "Liebe Amelie,", "wir wünschen Dir schöne, analoge Festtage.", "Dein", "Amelie");

jd_scene(".jd-xmas").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-xmas__icon--4 .jd-xmas__logo-triangle--2",
    2, {opacity: 0}, {opacity: 1, ease: RoughEase.ease.config({points:50, strength:2, clamp:true})}
  );

  jd_tl.staggerTo(
    [".jd-xmas__icon--4 .jd-xmas__logo-triangle--1",
    ".jd-xmas__icon--4 .jd-xmas__logo-triangle--3"],
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 3
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--3 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 3.8
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--5 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 3.8
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--2 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 4.2
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--6 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 4.2
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--1 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 4.4
  );

  jd_tl.staggerTo(
    ".jd-xmas__icon--7 .jd-xmas__logo-triangle",
    .4, {opacity: 1, ease: Expo.easeOut}, .2, 4.4
  );

  jd_tl.fromTo(
    ".jd-xmas-cookies__overlay",
    .6, {opacity: 0, pointerEvents: "none"}, {opacity: 1, pointerEvents: "auto", ease:Power1.easeOut}, 10
  );

  jd_tl.fromTo(
    ".jd-xmas-cookies__modal",
    .6, {scale: .8}, {scale: 1, ease:Bounce.easeOut}, 10
  );

});

const jd_cookieModal = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-xmas-cookies__modal-button, .jd-xmas-cookies__modal-button *")) return;

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-xmas-cookies__overlay",
    .4, {opacity: 1, pointerEvents: "auto"}, {opacity: 0, pointerEvents: "none", ease:Power1.easeOut}
  );

  jd_tl.fromTo(
    ".jd-xmas-cookies__card-flip",
    .4, {transform: "rotateY(0deg)"}, {transform: "rotateY(-180deg)", ease:SlowMo.easeOut}, .3
  );
}

document.addEventListener("click", jd_cookieModal, false);

let jd_fortuneA = Math.random()*98;
let jd_fortuneB = Math.floor(jd_fortuneA);

let jd_fortunes = [
  'für den Optimisten ist das Leben kein Problem, sondern bereits die Lösung.',
  'gib jedem Tag die Chance, der schönste Deines Lebens zu werden.',
  'wenn Du siebenmal hinfällst, musst Du achtmal aufstehen.',
  'wer Liebe sucht, findet sie nicht, sie überfällt uns, wenn wir sie am wenigsten erwarten.',
  'man verliert die meiste Zeit damit, dass man Zeit gewinnen will.',
  'wende Dein Gesicht der Sonne zu, dann fallen die Schatten hinter Dich.',
  'Glück ist das einzige, was sich verdoppelt, wenn man es teilt.',
  'fürchte Dich nicht, langsam zu gehen, fürchte Dich nur, stehen zu bleiben.',
  'das Schicksal mischt die Karten, aber wir spielen.',
  'wer im Leben Kein Ziel hat, verläuft sich.',
  'über Vergangenes mache Dir keine Sorge, dem Kommenden wende Dich zu.',
  'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
  'jede Minute, die man lacht, verlängert das Leben um eine Stunde.',
  'was uns den Weg verlegt, bringt uns voran.',
  'wer lächelt statt zu toben, ist immer der Stärkere.',
  'ein großer Mensch ist, wer sein Kinderherz nicht verliert.',
  'lerne zu schweigen und Du merkst, dass Du viel zu viel geredet hast.',
  'wer nur an die Bequemlichkeiten des Lebens denkt, kann nicht wahrhaft gebildet sein.',
  'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
  'es ist besser, ein einziges kleines Licht anzuzünden, als die Dunkelheit zu verfluchen.',
  'gedenke der Quelle, wenn Du trinkst.',
  'wenn jemand sagt, er habe keine Zeit, bedeutet das nur, dass ihm andere Dinge wichtiger sind.',
  'handele an andere Menschen so, wie Du selbst gerne behandelt werden möchtest.',
  'die Wissenden reden nicht viel, die Redenden wissen nicht viel.',
  'bevor Du dich daran machst, die Welt zu verändern, gehe dreimal durch Dein eigenes Haus.',
  'die Stärke an einem Gefühl erkennt man an den Opfern, die man bereit ist dafür zu geben.',
  'Glück ist wie ein Vogel, wer es nicht ergreift, dem fliegt es davon.',
  'ich höre und vergesse. Ich sehe und erinnere. Ich tue und verstehe.',
  'lieber eine Kerze anzünden, als über die Finsternis klagen.',
  'nur die Allerklügsten und die Allerdümmsten ändern sich nie.',
  'dem anderen sein Anderssein zu vergeben, ist der Anfang von Weisheit.',
  'fordere viel von Dir selbst und erwarte wenig von anderen. So wird Dir viel Ärger erspart bleiben.',
  'ein einfacher Zweig ist dem Vogel lieber, als ein goldener Käfig.',
  'Lächeln ist die charmanteste Art dem Gegner die Zähne zu zeigen.',
  'auch eine Reise von 1000 Meilen fängt mit dem ersten Schritt an.',
  'wer einen Fehler gemacht hat und ihn nicht verbessert, begeht schon den zweiten.',
  'es führen viele Wege zum Gipfel eines Berges, doch die Aussicht bleibt die gleiche.',
  'der Edle verlangt alles von sich selbst, der Primitive stellt nur Forderungen an andere.',
  'achte auf Deine Gedanken, sie sind der Anfang Deiner Taten.',
  'bist Du geduldig im Augenblick des Zorns, so wirst Du Dir hundert Tage Kummer ersparen.',
  'was Du Deinen Eltern schuldig bist, weißt Du erst, wenn Du ein Kind hast.',
  'Verzeihen ist keine Narrheit, nur der Narr kann nicht verzeihen.',
  'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
  'der wahre Gelehrte schämt sich nicht, auch solche zu fragen, die unter ihm stehen.',
  'wenn Güte von uns ausgeht, werden wir auch Güte erfahren.',
  'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
  'einmal selbst sehen ist mehr wert als hundert Neuigkeiten hören.',
  'wer den Himmel im Wasser sieht, sieht die Fische auf den Bäumen.',
  'folge der Arbeit und lasse Dich nicht von ihr verfolgen.',
  'leg Dir jeden Tag für Deine Sorgen eine halbe Stunde zurück. Und in dieser Zeit mache ein Schläfchen!',
  'was uns den Weg verlegt, bringt uns voran.',
  'im Haus, in dem gelacht wird, kommt das Glück.',
  'wer viele Schätze anhäuft, hat viel zu verlieren.',
  'wer nicht auf den hohen Berg steigt, kennt die Ebene nicht.',
  'wahre Worte sind nicht angenehm, angenehme Worte sind nicht wahr.',
  'urteile nicht über Dinge, von denen du nur Echo und Schatten kennst.',
  'nichts ist besser verkauft, als was man einem echten Freund, der es bedarf, schenkt.',
  'der Weise hat keine unumstößlichen Grundsätze. Er passt sich anderen an.',
  'Hoffnung ist wie der Zucker im Tee: Auch wenn sie klein ist, versüßt sie alles.',
  'Eheleute, die sich lieben, sagen sich tausend Dinge, ohne zu sprechen.',
  'die sicherste Tür ist die, die man offen lassen kann.',
  'durch Leichtfertigkeit verliert man die Wurzeln, durch Unruhe die Übersicht.',
  'das Leben meistert man lächelnd oder überhaupt nicht.',
  'verantwortlich ist man nicht nur für das, was man tut, sondern auch für das, was man unterlässt.',
  'je mehr Bekannte man hat, um so weniger kennt man die Leute.',
  'Dinge wahrzunehmen ist der Keim der Intelligenz.',
  'in einer friedlichen Familie kommt das Glück von selber.',
  'Lernen ist wie Rudern gegen den Strom. Hört man damit auf, treibt man zurück.',
  'welche Kraft der Ursache und Wirkung entfaltet sich in heilenden und liebevollen Worten.',
  'der Edle verneigt sich, aber beugt sich nicht.',
  'reich ist, wer keine Schulden hat, glücklich, wer ohne Krankheit lebt.',
  'friedvoll soll unsere Lebensmelodie erklingen.',
  'wer seinen Weg kennt, muss sich nicht an jeder Kreuzung neu entscheiden.',
  'nur mit den Augen der Anderen kann man seine Fehler gut sehen.',
  'die Übung der Achtsamkeit ist nichts anderes als die Übung liebevoller Zuneigung.',
  'der Mensch ist dazu geboren, Großes zu leisten, wenn er versteht, sich selbst zu besiegen.',
  'Menschen kennen nicht ihre Fehler, Ochsen nicht ihre Stärke.',
  'Fehler sind immer zu verzeihen, wenn man den Mut hat diese auch zuzugeben.',
  'die Vorstellungen sind die Quelle der Irrtümer, weil sie nicht die Wirklichkeit sind.',
  'einen Tag lang ungestört in Muße zu verleben, heißt einen Tag lang ein Unsterblicher zu sein.',
  'kein Weg als Weg, keine Grenze als Grenze.',
  'alles Geld der Welt ist nicht so viel wert wie zur rechten Stunde ein Becher besten Weines.',
  'Wissen ist nicht genug, wir müssen es anwenden. Wollen ist nicht genug, wir müssen es tun.',
  'tatsächlich ist Liebe ein anderer Name für Verstehen.',
  'eine Fähigkeit, die nicht täglich zunimmt, geht täglich ein Stück zurück.',
  'man kann nur helfen, wenn man selbst über dem Konflikt steht.',
  'der Wille gestaltet den Menschen, zum Erfolg braucht er jedoch Mut und Ausdauer.',
  'sind wir wütend, sind wir die Wut. Lieben wir, sind wir die Liebe.',
  'Verstehen und Liebe sind nicht zwei Dinge, sondern eins.',
  'die Welt ist voll von kleinen Freuden – die Kunst besteht nur darin, sie zu sehen.',
  'unsere wahre Heimat ist der gegenwärtige Augenblick.',
  'fürchte Dich nicht, langsam zu gehen, fürchte Dich nur, stehen zu bleiben.',
  'die Liebe ist das Gewürz des Lebens. Sie kann es versüßen, aber auch versalzen.',
  'indem man über andere schlecht redet, macht man sich selber nicht besser.',
  'ein Weg wird erst dann ein Weg, wenn einer ihn geht.',
  'wenn Du die Absicht hast, Dich zu erneuern, tu es jeden Tag.',
  'der Geist, der allen Dingen Leben verleiht, ist die Liebe.',
  'wir leben nicht, um zu glauben, sondern um zu lernen.'
];

let jd_randomFortune = jd_fortunes[jd_fortuneB];

const jd_fortuneCookie = event => {

  const jd_cookies1 = document.querySelector(".jd-cookies__open");
  const jd_cookies2 = document.querySelector(".jd-cookies__cracked");
  const jd_cookie2 = document.querySelector(".jd-cookie--2");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__open, .jd-cookies__open *")) return;

  jd_cookies1.classList.add("--is-hidden");
  jd_cookies2.classList.add("--is-visible");
  jd_cookie2.classList.add("--is-shaking");

  document.querySelector(".jd-cookies__message-text").innerHTML = jd_randomFortune;

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-cookies__reload",
    .4, {opacity: 0}, {opacity: 1, ease:Power1.easeOut}, 3
  );

  jd_tl.fromTo(
    ".jd-cookies__reload",
    .6, {scale: .8}, {scale: 1, ease:Bounce.easeOut}, 3
  );
}

document.addEventListener("click", jd_fortuneCookie, false);

// Reload cookie
const jd_reloadCookie = event => {

  let jd_fortuneA = Math.random()*98;
  let jd_fortuneB = Math.floor(jd_fortuneA);
  let jd_newFortune = jd_fortunes[jd_fortuneB];

  const jd_cookie = document.querySelector(".jd-cookie--2");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__cracked, .jd-cookies__cracked *")) return;
  console.log("Woo");

  jd_cookie.classList.remove("--is-shaking");
  void jd_cookie.offsetWidth;
  jd_cookie.classList.add("--is-shaking");

  document.querySelector(".jd-cookies__message-text").innerHTML = jd_newFortune;
}

document.addEventListener("click", jd_reloadCookie, false);

// Info layer
const jd_infoIcon = document.querySelector(".jd-cookies__info-icon");
const jd_infoClose = document.querySelector(".jd-cookies__info-close");
const jd_infoLayer = document.querySelector(".jd-cookies__info-layer");

// Open info layer
const jd_openCookieInfo = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__info-icon, .jd-cookies__info-icon *")) return;

  jd_infoIcon.classList.add("--is-hidden");
  jd_infoClose.classList.add("--is-visible");
  jd_infoLayer.classList.add("--is-open");
}

document.addEventListener("click", jd_openCookieInfo, false);

// Close info layer
const jd_closeCookieInfo = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__info-close, .jd-cookies__info-close *")) return;

  jd_infoIcon.classList.remove("--is-hidden");
  jd_infoClose.classList.remove("--is-visible");
  jd_infoLayer.classList.remove("--is-open");
}

document.addEventListener("click", jd_closeCookieInfo, false);

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

// if (jd_currentDate >= jd_sunrise && jd_currentDate < jd_sunset) {
//   jd_body.classList.remove("jd-theme--night");
//   jd_body.classList.add("jd-theme--day");
// } else {
//   jd_body.classList.remove("jd-theme--day");
//   jd_body.classList.add("jd-theme--night");
// }

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