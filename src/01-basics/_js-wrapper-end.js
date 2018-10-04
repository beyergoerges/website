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
