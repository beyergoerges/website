};

document.addEventListener("DOMContentLoaded", () => {

  jd_scripts();

  Barba.Pjax.start();

  Barba.Dispatcher.on("newPageReady", () => {

    jd_scripts();

  });

});
