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
