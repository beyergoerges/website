let jd_scrollController = new ScrollMagic.Controller();

let jd_scene = (trigger, hook = .8) => new ScrollMagic.Scene({
  triggerElement: trigger,
  triggerHook: hook
})
.addTo(jd_scrollController);
