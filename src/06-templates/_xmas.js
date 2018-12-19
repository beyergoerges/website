let jd_xmas = (url, top, bottom, name) => {

  if (window.location.href.indexOf(url) != -1) {
    document.querySelector(".jd-xmas__text--top").innerHTML = top;
    document.querySelector(".jd-xmas__text--bottom").innerHTML = bottom;
    document.querySelector(".jd-cookies__message-name").innerHTML = name + ", ";
  }

}

jd_xmas("britta", "Liebe Britta,", "wir wünschen Dir schöne, analoge Festtage.", "Britta");
jd_xmas("lukas", "Lieber Lukas,", "wir wünschen Dir schöne, analoge Festtage.", "Lukas");

jd_scene(".jd-xmas").reverse(false).on("enter", event => {

  let jd_tl = new TimelineLite();

  // jd_tl.fromTo(
  //   ".jd-xmas__card-illustration--4 .jd-xmas__logo-triangle--2",
  //   2, {opacity: 0}, {opacity: 1, ease: Elastic.easeOut}
  // );
  //
  // jd_tl.staggerFromTo(
  //   ".jd-xmas__logo-triangle",
  //   .9, {opacity: 0}, {opacity: 1, ease: Expo.easeOut}, .2
  // );

  jd_tl.fromTo(
    ".jd-xmas-cookies__overlay",
    .6, {opacity: 0, pointerEvents: "none"}, {opacity: 1, pointerEvents: "auto", ease:Power1.easeOut}, 3
  );

  jd_tl.fromTo(
    ".jd-xmas-cookies__modal",
    .6, {scale: .8}, {scale: 1, ease:Bounce.easeOut}, 3
  );

});

const jd_cookieModal = event => {

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-xmas-cookies__modal-button, .jd-xmas-cookies__modal-button *")) return;

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-xmas-cookies__overlay",
    .4, {opacity: 1, pointerEvents: "auto"}, {opacity: 0, pointerEvents: "none", ease:Power1.easeOut}
  );

  jd_tl.fromTo(
    ".jd-xmas-cookies__card-flip",
    .4, {transform: "rotateY(0deg)"}, {transform: "rotateY(-180deg)", ease:SlowMo.easeOut}, .3
  );
}

document.addEventListener("click", jd_cookieModal, false);

let jd_fortuneA = Math.random()*102;
let jd_fortuneB = Math.floor(jd_fortuneA);

let jd_fortunes = [
  'der beste Weg, sich selbst eine Freude zu machen, ist: zu versuchen, einem andern eine Freude zu bereiten.',
  'für den Optimisten ist das Leben kein Problem, sondern bereits die Lösung.',
  'gib jedem Tag die Chance, der schönste Deines Lebens zu werden.',
  'wenn Du siebenmal hinfällst, musst Du achtmal aufstehen.',
  'wer Liebe sucht, findet sie nicht, sie überfällt uns, wenn wir sie am wenigsten erwarten.',
  'man verliert die meiste Zeit damit, dass man Zeit gewinnen will.',
  'wende Dein Gesicht der Sonne zu, dann fallen die Schatten hinter Dich.',
  'Glück ist das einzige, was sich verdoppelt, wenn man es teilt.',
  'fürchte Dich nicht, langsam zu gehen, fürchte Dich nur, stehen zu bleiben.',
  'das Schicksal mischt die Karten, aber wir spielen.',
  'wer im Leben Kein Ziel hat, verläuft sich.',
  'über Vergangenes mache Dir keine Sorge, dem Kommenden wende Dich zu.',
  'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
  'jede Minute, die man lacht, verlängert das Leben um eine Stunde.',
  'was uns den Weg verlegt, bringt uns voran.',
  'wer lächelt statt zu toben, ist immer der Stärkere.',
  'ein großer Mensch ist, wer sein Kinderherz nicht verliert.',
  'lerne zu schweigen und Du merkst, dass Du viel zu viel geredet hast.',
  'wer nur an die Bequemlichkeiten des Lebens denkt, kann nicht wahrhaft gebildet sein.',
  'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
  'die Wahrheiten, die wir am wenigsten gern hören, sind diejenigen, die wir am nötigsten kennen sollten.',
  'es ist besser, ein einziges kleines Licht anzuzünden, als die Dunkelheit zu verfluchen.',
  'gedenke der Quelle, wenn Du trinkst.',
  'wenn jemand sagt, er habe keine Zeit, bedeutet das nur, dass ihm andere Dinge wichtiger sind.',
  'handele an andere Menschen so, wie Du selbst gerne behandelt werden möchtest.',
  'die Wissenden reden nicht viel, die Redenden wissen nicht viel.',
  'bevor Du dich daran machst, die Welt zu verändern, gehe dreimal durch Dein eigenes Haus.',
  'die Stärke an einem Gefühl erkennt man an den Opfern, die man bereit ist dafür zu geben.',
  'Glück ist wie ein Vogel, wer es nicht ergreift, dem fliegt es davon.',
  'ich höre und vergesse. Ich sehe und erinnere. Ich tue und verstehe.',
  'lieber eine Kerze anzünden, als über die Finsternis klagen.',
  'nur die Allerklügsten und die Allerdümmsten ändern sich nie.',
  'dem anderen sein Anderssein zu vergeben, ist der Anfang von Weisheit.',
  'fordere viel von Dir selbst und erwarte wenig von anderen. So wird Dir viel Ärger erspart bleiben.',
  'ein einfacher Zweig ist dem Vogel lieber, als ein goldener Käfig.',
  'unsere Wünsche sind wie kleine Kinder: Je mehr man ihnen nachgibt, umso anspruchsvoller werden sie.',
  'Lächeln ist die charmanteste Art dem Gegner die Zähne zu zeigen.',
  'auch eine Reise von 1000 Meilen fängt mit dem ersten Schritt an.',
  'wer einen Fehler gemacht hat und ihn nicht verbessert, begeht schon den zweiten.',
  'es führen viele Wege zum Gipfel eines Berges, doch die Aussicht bleibt die gleiche.',
  'der Edle verlangt alles von sich selbst, der Primitive stellt nur Forderungen an andere.',
  'achte auf Deine Gedanken, sie sind der Anfang Deiner Taten.',
  'ist eine Sache geschehen, dann rede nicht darüber; es ist schwer, verschüttetes Wasser wieder zu sammeln.',
  'bist Du geduldig im Augenblick des Zorns, so wirst Du Dir hundert Tage Kummer ersparen.',
  'was Du Deinen Eltern schuldig bist, weißt Du erst, wenn Du ein Kind hast.',
  'Verzeihen ist keine Narrheit, nur der Narr kann nicht verzeihen.',
  'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
  'der wahre Gelehrte schämt sich nicht, auch solche zu fragen, die unter ihm stehen.',
  'wenn Güte von uns ausgeht, werden wir auch Güte erfahren.',
  'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
  'einmal selbst sehen ist mehr wert als hundert Neuigkeiten hören.',
  'wer den Himmel im Wasser sieht, sieht die Fische auf den Bäumen.',
  'folge der Arbeit und lasse Dich nicht von ihr verfolgen.',
  'leg Dir jeden Tag für Deine Sorgen eine halbe Stunde zurück. Und in dieser Zeit mache ein Schläfchen!',
  'was uns den Weg verlegt, bringt uns voran.',
  'im Haus, in dem gelacht wird, kommt das Glück.',
  'wer viele Schätze anhäuft, hat viel zu verlieren.',
  'wer nicht auf den hohen Berg steigt, kennt die Ebene nicht.',
  'wahre Worte sind nicht angenehm, angenehme Worte sind nicht wahr.',
  'urteile nicht über Dinge, von denen du nur Echo und Schatten kennst.',
  'nichts ist besser verkauft, als was man einem echten Freund, der es bedarf, schenkt.',
  'der Weise hat keine unumstößlichen Grundsätze. Er passt sich anderen an.',
  'Hoffnung ist wie der Zucker im Tee: Auch wenn sie klein ist, versüßt sie alles.',
  'Eheleute, die sich lieben, sagen sich tausend Dinge, ohne zu sprechen.',
  'die sicherste Tür ist die, die man offen lassen kann.',
  'durch Leichtfertigkeit verliert man die Wurzeln, durch Unruhe die Übersicht.',
  'das Leben meistert man lächelnd oder überhaupt nicht.',
  'verantwortlich ist man nicht nur für das, was man tut, sondern auch für das, was man unterlässt.',
  'je mehr Bekannte man hat, um so weniger kennt man die Leute.',
  'Dinge wahrzunehmen ist der Keim der Intelligenz.',
  'in einer friedlichen Familie kommt das Glück von selber.',
  'Lernen ist wie Rudern gegen den Strom. Hört man damit auf, treibt man zurück.',
  'welche Kraft der Ursache und Wirkung entfaltet sich in heilenden und liebevollen Worten.',
  'der Edle verneigt sich, aber beugt sich nicht.',
  'reich ist, wer keine Schulden hat, glücklich, wer ohne Krankheit lebt.',
  'friedvoll soll unsere Lebensmelodie erklingen.',
  'wer seinen Weg kennt, muss sich nicht an jeder Kreuzung neu entscheiden.',
  'nur mit den Augen der Anderen kann man seine Fehler gut sehen.',
  'die Übung der Achtsamkeit ist nichts anderes als die Übung liebevoller Zuneigung.',
  'der Mensch ist dazu geboren, Großes zu leisten, wenn er versteht, sich selbst zu besiegen.',
  'Menschen kennen nicht ihre Fehler, Ochsen nicht ihre Stärke.',
  'Fehler sind immer zu verzeihen, wenn man den Mut hat diese auch zuzugeben.',
  'die Vorstellungen sind die Quelle der Irrtümer, weil sie nicht die Wirklichkeit sind.',
  'einen Tag lang ungestört in Muße zu verleben, heißt einen Tag lang ein Unsterblicher zu sein.',
  'kein Weg als Weg, keine Grenze als Grenze.',
  'alles Geld der Welt ist nicht so viel wert wie zur rechten Stunde ein Becher besten Weines.',
  'Wissen ist nicht genug, wir müssen es anwenden. Wollen ist nicht genug, wir müssen es tun.',
  'tatsächlich ist Liebe ein anderer Name für Verstehen.',
  'eine Fähigkeit, die nicht täglich zunimmt, geht täglich ein Stück zurück.',
  'man kann nur helfen, wenn man selbst über dem Konflikt steht.',
  'der Wille gestaltet den Menschen, zum Erfolg braucht er jedoch Mut und Ausdauer.',
  'sind wir wütend, sind wir die Wut. Lieben wir, sind wir die Liebe.',
  'Verstehen und Liebe sind nicht zwei Dinge, sondern eins.',
  'die Welt ist voll von kleinen Freuden – die Kunst besteht nur darin, sie zu sehen.',
  'unsere wahre Heimat ist der gegenwärtige Augenblick.',
  'fürchte Dich nicht, langsam zu gehen, fürchte Dich nur, stehen zu bleiben.',
  'die Liebe ist das Gewürz des Lebens. Sie kann es versüßen, aber auch versalzen.',
  'jeder hat Recht auf seine eigene Meinung, aber er hat keinen Anspruch darauf, dass andere sie teilen.',
  'indem man über andere schlecht redet, macht man sich selber nicht besser.',
  'ein Weg wird erst dann ein Weg, wenn einer ihn geht.',
  'wenn Du die Absicht hast, Dich zu erneuern, tu es jeden Tag.',
  'der Geist, der allen Dingen Leben verleiht, ist die Liebe.',
  'wir leben nicht, um zu glauben, sondern um zu lernen.'
];

let jd_randomFortune = jd_fortunes[jd_fortuneB];

const jd_fortuneCookie = event => {

  const jd_cookies1 = document.querySelector(".jd-cookies__open");
  const jd_cookies2 = document.querySelector(".jd-cookies__cracked");
  const jd_cookie2 = document.querySelector(".jd-cookie--2");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__open, .jd-cookies__open *")) return;

  jd_cookies1.classList.add("--is-hidden");
  jd_cookies2.classList.add("--is-visible");
  jd_cookie2.classList.add("--is-shaking");

  document.querySelector(".jd-cookies__message-text").innerHTML = jd_randomFortune;

  let jd_tl = new TimelineLite();

  jd_tl.fromTo(
    ".jd-cookies__reload",
    .4, {opacity: 0}, {opacity: 1, ease:Power1.easeOut}, 3.4
  );

  jd_tl.fromTo(
    ".jd-cookies__reload",
    .6, {scale: .8}, {scale: 1, ease:Bounce.easeOut}, 3.4
  );
}

document.addEventListener("click", jd_fortuneCookie, false);

// Reload cookie
const jd_reloadCookie = event => {

  let jd_fortuneA = Math.random()*102;
  let jd_fortuneB = Math.floor(jd_fortuneA);
  let jd_newFortune = jd_fortunes[jd_fortuneB];

  const jd_cookie = document.querySelector(".jd-cookie--2");

  // If the clicked element doesn't have the right selector, bail
  if (!event.target.matches(".jd-cookies__cracked, .jd-cookies__cracked *")) return;
  console.log("Woo");

  jd_cookie.classList.remove("--is-shaking");
  void jd_cookie.offsetWidth;
  jd_cookie.classList.add("--is-shaking");

  document.querySelector(".jd-cookies__message-text").innerHTML = jd_newFortune;
}

document.addEventListener("click", jd_reloadCookie, false);
