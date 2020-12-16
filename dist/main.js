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
//@prepros-append 06-templates/_job.js
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

jd_mediaScene("#vfl");
jd_mediaScene("#eintrachtde");
jd_mediaScene("#eventim-shop");
jd_mediaScene("#tsukuyumi", .6);
jd_mediaScene("#day-in-may");
jd_mediaScene("#kidsclub", .6);
jd_mediaScene("#dfa");
jd_mediaScene("#heimat", .6);

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

jd_scene(".jd-block--intro .jd-heading--high-level").reverse(false).on("enter", event => {
  let jd_tl = new TimelineLite();
  jd_tl.fromTo(
    ".jd-block--intro .jd-heading--high-level",
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

jd_sectionTitleScene("#visual-designer");

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
          ".jd-client:nth-child(14) .jd-client__line-y",
          ".jd-client:nth-child(3) .jd-client__line-y",
          ".jd-client:nth-child(7) .jd-client__line-y",
          ".jd-client:nth-child(11) .jd-client__line-y",
          ".jd-client:nth-child(15) .jd-client__line-y",
          ".jd-client:nth-child(4) .jd-client__line-y",
          ".jd-client:nth-child(8) .jd-client__line-y",
          ".jd-client:nth-child(12) .jd-client__line-y",
          ".jd-client:nth-child(16) .jd-client__line-y"
        ], .1, {bottom: 0}, .1, .8
        );
        jd_tl.staggerTo(
          ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
        );
      },

      deferSetup: true
  });

  // enquire.register(jd_breakMin("desktop-s"), {
  //
  //     match: () => {
  //
  //       let jd_tl = new TimelineLite();
  //       jd_tl.staggerTo(
  //         ".jd-client__line-x", .1, {right: 0}, .1, .4
  //       );
  //       jd_tl.staggerTo(
  //         ".jd-client:nth-child(n+2):nth-child(-n+6) .jd-client__line-y", .1, {top: 0}, .1, .8
  //       );
  //       jd_tl.staggerTo(
  //         ".jd-client:nth-child(n+8):nth-child(-n+12) .jd-client__line-y", .1, {bottom: 0}, .1, .8
  //       );
  //       jd_tl.staggerTo(
  //         ".jd-client__logo", .4, {opacity: 1, scale: 1, ease:Back.easeOut}, .1, .6
  //       );
  //     },
  //
  //     deferSetup: true
  // });
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

jd_projectScene("#vfl");
jd_projectScene("#eintrachtde");
jd_projectScene("#eventim-shop");
jd_projectScene("#tsukuyumi", .6);
jd_projectScene("#day-in-may");
jd_projectScene("#kidsclub", .6);
jd_projectScene("#dfa");
jd_projectScene("#heimat", .6);

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

jd_jobScene("#visual-designer");

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

// Xmas scripts

(function($) {

  setTimeout(() => {
    $(".teletext-spinner__start").show();
  }, 4000);

  const tt_page = $(".teletext-page");
  const tt_intro = $(".teletext-page--intro");
  const tt_start = $(".teletext-page--start");
  const tt_cookies = $(".teletext-page--cookies");
  const tt_soccerQuotes = $(".teletext-page--quotes");
  const tt_videotext = $(".teletext-page--videotext");

  $(".js-startLink").click(function(){
    tt_page.removeClass("--is-active");
    tt_start.addClass("--is-active");
  });

  $(".js-cookiesLink").click(function(){
    tt_page.removeClass("--is-active");
    tt_cookies.addClass("--is-active");
  });

  $(".js-quotesLink").click(function(){
    tt_page.removeClass("--is-active");
    tt_soccerQuotes.addClass("--is-active");
  });

  $(".js-videotextLink").click(function(){
    tt_page.removeClass("--is-active");
    tt_videotext.addClass("--is-active");
  });

  // URL parameters

  const tt_urlEnd = window.location.search;
  console.log(tt_urlEnd);

  const tt_urlParams = new URLSearchParams(tt_urlEnd);

  const tt_sex = tt_urlParams.get("s")
  console.log("Sex: " + tt_sex);

  const tt_formal = tt_urlParams.get("f")
  console.log("Formal: " + tt_formal);

  const tt_name = tt_urlParams.get("n")
  console.log("Name: " + tt_name);

  if (tt_sex == "w" && tt_formal == "0") {
    document.querySelector(".teletext-salutation").innerHTML = "Liebe ";
  } else if (tt_sex == "w" && tt_formal == "1") {
    document.querySelector(".teletext-hero__salutation").innerHTML = "Frau ";
    document.querySelector(".teletext-salutation").innerHTML = "Liebe Frau ";
  } else if (tt_sex == "m" && tt_formal == "0") {
    document.querySelector(".teletext-salutation").innerHTML = "Lieber ";
  } else if (tt_sex == "m" && tt_formal == "1") {
    document.querySelector(".teletext-hero__salutation").innerHTML = "Herr ";
    document.querySelector(".teletext-salutation").innerHTML = "Lieber Herr ";
  }

  if (tt_formal == "1") {
    document.querySelector(".teletext-list__label-salutation").innerHTML = "Ihr ";
    document.querySelector(".teletext-title__salutation").innerHTML = "Ihr ";
    document.querySelector(".teletext-cta__label-salutation").innerHTML = "Ihnen ";
  }

  document.querySelector(".teletext-hero__name").innerHTML = tt_name;
  document.querySelector(".teletext-name").innerHTML = tt_name;

  let tt_nameLength = tt_name.length;
  console.log(tt_nameLength);

  $(".teletext-hero__name").css("font-size", 360 / tt_nameLength + "px");

  // Cookies

  let tt_fortuneA = Math.random()*97;
  let tt_fortuneB = Math.floor(tt_fortuneA);

  let tt_fortunes = [
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

  let tt_randomFortune = tt_fortunes[tt_fortuneB];

  document.querySelector(".teletext-cookie").innerHTML = tt_randomFortune;

  // Reload cookie
  const tt_reloadCookie = event => {

    let tt_fortuneA = Math.random()*97;
    let tt_fortuneB = Math.floor(tt_fortuneA);
    let tt_newFortune = tt_fortunes[tt_fortuneB];

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches(".js-cookiesLink, .js-cookiesLink *, .js-reloadCookies, .js-reloadCookies *")) return;

    document.querySelector(".teletext-cookie").innerHTML = tt_newFortune;
  }

  document.addEventListener("click", tt_reloadCookie, false);

  // Soccer quotes

  let tt_quoteA = Math.random()*89;
  let tt_quoteB = Math.floor(tt_quoteA);

  let tt_quotes = [
    '„Wäre, wäre, Fahrradkette.“ —Lothar Matthäus',
    '„Ich mache nie Voraussagen und werde dies auch niemals tun.“ —Paul Gascoigne',
    '„Ich bin körperlich und physisch topfit.“ —Thomas Häßler',
    '„Wir wollten in Bremen kein Gegentor kassieren. Das hat auch bis zum Gegentor ganz gut geklappt.“ —Thomas Häßler',
    '„Ich hatte vom Feeling her ein gutes Gefühl.“ —Andreas Möller',
    '„Wir müssen gewinnen, alles andere ist primär.“ —Hans Krankl',
    '„Es ist mir völlig egal, was es wird. Hauptsache, er ist gesund.“ —Mehmet Scholl (als werdender Vater)',
    '„Ich habe ihn nur ganz leicht retuschiert.“ —Olaf Thon',
    '„Die Ghanaer kochen – wenn überhaupt – auch nur mit Wasser.“ —Olaf Thon',
    '„Es ist wichtig, daß man neunzig Minuten mit voller Konzentration an das nächste Spiel denkt.“ —Lothar Matthäus',
    '„Die Kroaten sollen auf alles treten, was sich bewegt – da hat unser Mittelfeld ja nichts zu befürchten.“ —Berti Vogts (vor dem WM-Spiel gegen Kroatien)',
    '„Ich wage mal eine Prognose: Es könnte so oder so ausgehen.“ —Ron Atkinson',
    '„Fußball ist Ding, Dang, Dong. Es gibt nicht nur Ding.“ —Giovanni Trappatoni',
    '„Ihr Fünf spielt jetzt vier gegen drei.“ —Fritz Langner',
    '„Würden wir jede Woche so spielen, wären unsere Leistungen nicht so schwankend.“ —Bryan Robson',
    '„Wenn der Ball am Torwart vorbei geht, ist es meist ein Tor.“ —Mario Basler',
    '„Am Ergebnis wird sich nicht mehr viel ändern. Es sei denn, es schießt einer ein Tor.“ —Franz Beckenbauer',
    '„Die schönsten Tore sind diejenigen, bei denen der Ball schön flach oben rein geht.“ —Mehmet Scholl',
    '„Wir sind eine gut intrigierte Truppe.“ —Lothar Matthäus',
    '„Man sollte die Tür nie zu- oder aufmachen.“ —Hasan Salihamidzic',
    '„Das habe ich ihm dann auch verbal gesagt.“ —Mario Basler',
    '„Ich hab gleich gemerkt, das ist ein Druckschmerz, wenn man drauf drückt.“ —Lothar Matthäus',
    '„Zuerst hatten wir kein Glück, und dann kam auch noch Pech dazu.“ —Jürgen Wegmann',
    '„Ich habe viel von meinem Geld für Alkohol, Weiber und schnelle Autos ausgegeben. Den Rest habe ich einfach verprasst.“ —George Best',
    '„Ich bin immer sehr selbstkritisch, auch mir selbst gegenüber.“ —Andreas Möller',
    '„Der Jürgen Klinsmann und ich, wir sind ein gutes Trio. Ich meinte Quartett.“ —Fritz Walter jun.',
    '„Mailand oder Madrid – Hauptsache Italien!“ —Andreas Möller',
    '„Die Mannschaft erinnerte mich so ein bisschen an die SPD. Sie haben den Teamgeist heraufbeschworen, sich Mut zugesprochen und am Ende fehlten irgendwie 20 Prozent.“ —Thomas Hitzlsperger',
    '„Zwei Chancen, ein Tor – das nenne ich hundertprozentige Chancenauswertung.“ —Roland Wohlfahrt',
    '„Da geht er, ein großer Spieler. Ein Mann wie Steffi Graf.“ —Jörg Dahlmann',
    '„Sollten Sie dieses Spiel atemberaubend finden, dann haben Sie es an den Bronchien.“ —Marcel Reif',
    '„Man darf jetzt nicht alles so schlecht reden, wie es war.“ —Fredi Bobic',
    '„In letzter Konsequenz waren wir nicht konsequent genug.“ —Karl-Heinz Rummenigge',
    '„Ich glaube, dass der Tabellenerste jederzeit den Spitzenreiter schlagen kann.“ —Berti Vogts',
    '„Das wird alles von den Medien hochsterilisiert.“ —Bruno Labbadia',
    '„Jetzt müssen wir die Köpfe hochkrempeln. Und die Ärmel natürlich auch.“ —Lukas Podolski',
    '„Fußball ist einfach: Rein das Ding und ab nach Hause.“ —Lukas Podolski',
    '„Das interessiert mich wie eine geplatzte Currywurst im ostfriesischen Wattenmeer.“ —Dieter Eilts',
    '„Es muss eine Kehrtwende geben. Und die muss 360 Grad sein.“ —Eduard Geyer',
    '„Fußball ist ein Spiel von 22 Leuten, die rumlaufen, und am Ende gewinnt immer Deutschland.“ —Gary Lineker',
    '„Die Achillesferse von Bobic ist die rechte Schulter.“ —Gerd Rubenbauer',
    '„Wir können so was nicht trainieren, sondern nur üben.“ —Michael Ballack',
    '„Es steht im Augenblick 1:1, aber es hätte auch umgekehrt lauten können.“ —Heribert Faßbender',
    '„Die Polen darf man nicht unterschätzen. Diese Balkan-Kicker sind unberechenbar!“ —Heribert Faßbender',
    '„Wenn wir alle schlagen, können wir es schaffen.“ —Horst Hrubesch',
    '„Halten Sie die Luft an, und vergessen Sie das Atmen nicht.“ —Johannes B. Kerner',
    '„Die Spieler von Ghana erkennen Sie an den gelben Stutzen.“ —Marcel Reif (beim Länderspiel Deutschland-Ghana)',
    '„Zu 50 Prozent stehen wir im Viertelfinale, aber die halbe Miete ist das noch lange nicht!“ —Rudi Völler',
    '„Wenn man ein 0:2 kassiert, dann ist ein 1:1 nicht mehr möglich.“ —Aleksander Ristic',
    '„Nichts ist scheißer als Platz zwei.“ —Eric Meijer',
    '„Ich hatte noch nie Streit mit meiner Frau. Bis auf das eine Mal, als sie mit auf´s Hochzeitsfoto wollte.“ —Mehmet Scholl',
    '„Wir dürfen nicht mehr Tore kassieren, als der Gegner schießt.“ —Friedhelm Funkel',
    '„Meine Spieler könne 50-Meter-Pässe spielen, 5 m weit und 45 m hoch.“ —Uwe Klimaschewski',
    '„Man muss nicht immer die absolute Mehrheit hinter sich haben, manchmal reichen auch 51 Prozent.“ —Christph Daum',
    '„Mal verliert man und mal gewinnen die anderen.“ —Otto Rehagel',
    '„Ich sage nur ein Wort: Herzlichen Dank!“ —Horst Hrubesch',
    '„Ich habe es mir sehr genau überlegt und dann spontan zugesagt.“ —Toni Polster',
    '„Jede Seite hat zwei Medaillen!“ —Mario Basler',
    '„Da gehe ich mit Ihnen ganz chloroform.“ —Helmut Schön',
    '„Ob Felix Magath die Titanic gerettet hätte, weiß ich nicht. Aber die Überlebenden wären topfit gewesen.“ —Jan-Aage Fjörtoft',
    '„Der Trainer hatte nach den ganzen Ausfällen im Angriff nur noch die Wahl zwischen mir und dem Busfahrer. Da der Busfahrer seine Schuhe nicht dabei hatte, habe ich gespielt.“ —Jan-Aage Fjörtoft',
    '„Ich habe nie an unserer Chancenlosigkeit gezweifelt.“ —Richard Golz',
    '„Die Sanitäter haben mir sofort eine Invasion gelegt.“ —Fritz Walter jun.',
    '„Ich kann nicht mehr als schießen. Außerdem standen da 40 Leute auf der Linie.“ —Toni Polster (über eine vergebene Torchance)',
    '„In der ersten Halbzeit haben wir ganz gut gespielt, in der zweiten fehlte uns die Kontinu…, äh Kontuni…, ach scheiß Fremdwörter: Wir waren nicht beständig genug!“ —Pierre Littbarski',
    '„Das Chancenplus war ausgeglichen.“ —Lothar Matthäus',
    '„Wir müssen die Pferde im Dorf lassen.“ —Maximilian Arnold',
    '„Alles andere als die Nicht-Meisterschaft wäre eine Katastrophe gewesen.“ —Thomas Strunz',
    '„Alles hat gestimmt: Das Wetter war gut, die Stimmung war gut, der Platz war gut – nur wir waren schlecht.“ —Dariusz Wosz',
    '„Auswärts sind die Greuther stärker als in der Fremde.“ —Carsten Fuss',
    '„Bei manchen Spielern fehlt etwas, deshalb spielen sie auch bei mir und nicht in Barcelona.“ —Aleksander Ristic',
    '„Druck habe ich eigentlich nur morgens nach dem Aufstehen.“ —Horst Heldt',
    '„Bei so einem Spiel muß man die Hosen runterlassen und sein wahres Gesicht zeigen.“ —Alexander Strehmel',
    '„Bundesligaspiele sind keine russischen Wahlen, bei denen immer gewonnen wird.“ —Gyula Lorant',
    '„Das Gegentor fiel zum psychologisch ungünstigsten Zeitpunkt. Aber man muss an dieser Stelle auch einmal die Frage stellen, ob es Gegentore gibt, die zu einem psychologisch günstigen Zeitpunkt fallen.“ —Christoph Daum',
    '„Das ist eine Deprimierung.“ —Andreas Möller',
    '„Das Runde muß ins Eckige.“ —Helmut Schulte',
    '„Das Schönste an Stuttgart ist die Autobahn nach München.“ —Thomas Strunz',
    '„Das war europäische Weltklasse!“ —Felix Magath',
    '„Ich habe keine Rituale, bloß die Dinge, die man immer gleich macht.“ —Michael Ballack',
    '„Viele sehen es negativ, dass wir schlecht gespielt haben.“ —Kevin Kuranyi',
    '„Da mach‘ ich mir vom Kopf her keine Gedanken.“ —Jens Keller',
    '„Man muss nicht immer das Salz in der Suppe suchen.“ —Philipp Lahm',
    '„Ich habe das Gefühl, England ist nicht mehr das Mutterland des Fußballs, sondern eher das Großmutterland.“ —Toni Schumacher',
    '„Lucio ist kein Brasilianer, er ist ein Athlet.“ —Berti Vogts',
    '„In Spanien gibt es für eine Niederlage drei Gründe: Entweder war der Wind zu stark, die Sonne zu heiß oder die gestifteten Kerzen in der Kirche waren zu kurz.“ —Max Merkel',
    '„Fußball ist eigentlich ganz einfach. Man muss nur seine Kollegen verstehen.“ —Victor Agali',
    '„Man trifft immer nur dann ein Tor, wenn man auf die Bude schießt.“ —Werner Altegoer',
    '„Fußball auf der Bank ist Leidensgeschäft. Ich bin leidender Angestellter hier in Nürnberg.“ —Klaus Augenthaler',
    '„Wenn die Eckfahne Nutella-Fahne heißt, höre ich auf.“ —Manfred Breuckmann'
  ];

  let tt_randomQuote = tt_quotes[tt_quoteB];

  document.querySelector(".teletext-quote").innerHTML = tt_randomQuote;

  // Reload cookie
  const tt_reloadQuote = event => {

    let tt_quoteA = Math.random()*89;
    let tt_quoteB = Math.floor(tt_quoteA);
    let tt_newQuote = tt_quotes[tt_quoteB];

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches(".js-quotesLink, .js-quotesLink *, .js-reloadQuotes, .js-reloadQuotes *")) return;

    document.querySelector(".teletext-quote").innerHTML = tt_newQuote;
  }

  document.addEventListener("click", tt_reloadQuote, false);

})(jQuery);

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

if (jd_currentDate >= jd_sunrise && jd_currentDate < jd_sunset) {
  jd_body.classList.remove("jd-theme--night");
  jd_body.classList.add("jd-theme--day");
} else {
  jd_body.classList.remove("jd-theme--day");
  jd_body.classList.add("jd-theme--night");
}

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