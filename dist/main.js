//@prepros-append 01-basics/_animation.js
//@prepros-append 04-components/_menu.js
//@prepros-append 05-layout/_scroll-reveal.js
//@prepros-append 05-layout/_meta.js

let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = element => new ScrollMagic.Scene({
  triggerElement: element
})
.addTo(jd_scrollController);

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
  jd_scene("#jd-section-title-" + name).offset("-200").reverse(false).on("enter", event => {
    let jd_tl = new TimelineLite();
    jd_tl.fromTo(
      "#jd-section-title-" + name + " .jd-section__title-number",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}
    );
    jd_tl.to(
      "#jd-section-title-" + name + " .jd-section__title-line", .4, {scaleX: 1, ease:Power2.easeOut}
    );
    jd_tl.fromTo(
      "#jd-section-title-" + name + " .jd-section__title-text",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .6
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

let jd_craftScene = name => {
  jd_scene("#jd-craft-" + name).offset("-100").reverse(false).on("enter", event => {
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
        "#jd-craft-" + name + " .jd-craft__heading",
        "#jd-craft-" + name + " .jd-craft__description"
      ],
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .4
    );
    jd_tl.staggerFromTo(
      "#jd-craft-" + name + " .jd-data-list__item",
      .4, {x: "-16px", opacity: 0}, {x: 0, opacity: 1}, .1, .8
    );
  });
}

jd_craftScene("strategy");
jd_craftScene("design");
jd_craftScene("technology");

const jd_openMeta = event => {

  const jd_meta = document.querySelectorAll(".jd-meta")[0];
  const jd_legal = document.querySelectorAll(".jd-legal-notice")[0];

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-footer__link--legal-notice")) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);

  jd_meta.classList.add("--is-open");
  jd_legal.classList.add("--is-open");

  TweenLite.to(window, .5, {scrollTo: "#jd-footer", ease:Power2.easeOut});
}

document.addEventListener("click", jd_openMeta, false);


//# sourceMappingURL=main.js.map