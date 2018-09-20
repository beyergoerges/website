// import JD_Menu from "./04-components/_menu";
//
// const jd_menu = new JD_Menu();

const jd_toggleMenu = event => {

  const jd_menuItems = document.querySelectorAll(".jd-menu__items")[0];
  const jd_container = document.querySelectorAll(".jd-container")[0];

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-menu__trigger-icon")) return;

  // Don't follow the link
  event.preventDefault();

  // Log the clicked element in the console
  console.log(event.target);
  console.log(jd_menuItems);

  if (jd_menuItems.classList.contains("--is-open")) {
   jd_menuItems.classList.remove("--is-open");
  } else {
    jd_menuItems.classList.add("--is-open");
  }

  if (jd_container.classList.contains("--is-pushed")) {
   jd_container.classList.remove("--is-pushed");
  } else {
    jd_container.classList.add("--is-pushed");
  }

}

document.addEventListener("click", jd_toggleMenu, false);
