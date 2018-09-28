jd_scene(".jd-footer").triggerHook(.99).reverse(false).on("start", event => {
  console.log("footer!");
  let jd_tl = new TimelineLite();
  jd_tl.fromTo([
      ".jd-meta",
      ".jd-footer"
    ],
    .9, {y: 64}, {y: "0", ease: Power2.easeInOut}, .1, .4
  );
});

const jd_footerLink = document.querySelectorAll(".jd-footer__link--legal-notice")[0];
const jd_meta = document.querySelectorAll(".jd-meta")[0];
const jd_legal = document.querySelectorAll(".jd-legal-notice")[0];

const jd_openMeta = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-footer__link--legal-notice")) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);

  jd_footerLink.classList.add("--is-current");
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

  jd_footerLink.classList.remove("--is-current");

  setTimeout( () => {
    jd_meta.classList.remove("--is-open");
    jd_legal.classList.remove("--is-open");
  }, 1100);
}

document.addEventListener("click", jd_closeMeta, false);
