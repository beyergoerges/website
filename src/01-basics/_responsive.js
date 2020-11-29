const jd_breakpoint = {
  "phablet":        480,
  "tablet":         600,
  "desktop-s":      990,
  "desktop-m":      1440,
  "desktop-l":      1680,
  "desktop-xl":     1921
};

const jd_breakMin = name => {
  let value = jd_breakpoint[name];
  return "(min-width: " + value + "px)";
}

const jd_breakMax = name => {
  let value = jd_breakpoint[name] - 1;
  return "(max-width: " + value + "px)";
}

// Breakpoints
let mq_tablet = window.matchMedia("(min-width: 600px)");
let mq_desktopS = window.matchMedia("(min-width: 990px)");
let mq_desktopM = window.matchMedia("(min-width: 1440px)");
let mq_desktopL = window.matchMedia("(min-width: 1680px)");
let mq_desktopXl = window.matchMedia("(min-width: 1921px)");

// enquire.register(jd_breakMin("desktop-s"), {
//
//     match: () => { console.log("matched!") },
//
//     unmatch: () => {},
//
//     setup: () => {},
//
//     destroy: () => {},
//
//     deferSetup: true
// });
