/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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
	};
	
	document.addEventListener("click", jd_toggleMenu, false);

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map