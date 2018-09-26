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
