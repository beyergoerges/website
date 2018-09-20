export default class JD_Menu {
	constructor() {
    this.init();
	}
	init() {
    const menuTrigger = document.getElementsByClassName("jd-menu__trigger");
    const menuItems = document.getElementsByClassName("jd-menu__items");

    document.addEventListener("click", function(event) {

    	// If the clicked element doesn't have the right selector, bail
    	if (!event.target.matches(".jd-menu__trigger")) return;

    	// Don't follow the link
    	event.preventDefault();

    	// Log the clicked element in the console
    	console.log(event.target);

    }, false);
	}
}
