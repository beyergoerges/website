var box = document.getElementById("jd-claim");
var animationDurationInSeconds = 1.5;

TweenMax.to(box, animationDurationInSeconds, {
  letterSpacing: "-.05em",
  ease: "Elastic.easeOut"
});
