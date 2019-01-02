const jd_location = {
  latitude: 51.5055232,
  longitude: 7.4686858
}

let jd_currentDate = new Date();
let jd_sunrise = new Date().sunrise(jd_location.latitude, jd_location.longitude);
let jd_sunset = new Date().sunset(jd_location.latitude, jd_location.longitude);

let jd_currentTime = jd_currentDate.getTime();
let jd_sunriseTime = jd_sunrise.getTime();
let jd_sunsetTime = jd_sunset.getTime();

const jd_body = document.body;

if (jd_currentDate >= jd_sunrise && jd_currentDate < jd_sunset) {
  jd_body.classList.remove("jd-theme--night");
  jd_body.classList.add("jd-theme--day");
} else {
  jd_body.classList.remove("jd-theme--day");
  jd_body.classList.add("jd-theme--night");
}
