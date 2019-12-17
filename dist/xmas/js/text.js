document.addEventListener("DOMContentLoaded", event => {

    // Retrieve URL parameters
    function getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          vars[key] = value;
      });
      return vars;
    }

    let name = getUrlVars()["n"];
    let sex = getUrlVars()["s"];
    let formal = getUrlVars()["f"];
    let textName = decodeURI(name);

    // Remove hashtag from name
    let regexp = new RegExp("#([^\\s]*)","g");
    textName = textName.replace(regexp, "");

    const elSex = document.querySelector(".dynamicText--sex");
    const elSalutation = document.querySelectorAll(".dynamicText--salutation");
    const elName = document.querySelectorAll(".dynamicText--name");

    for (let i=0; i < elName.length; i++) {
      elName[i].innerHTML=textName;
    }

    if (sex == "w" && formal == 1) {
      elSex.innerHTML="Liebe&nbsp;";
      for (let i=0; i < elSalutation.length; i++) {
        elSalutation[i].innerHTML="Frau&nbsp;";
      }
    } else if (sex == "w" && formal == 0) {
      elSex.innerHTML="Liebe&nbsp;";
    } else if (sex == "m" && formal == 0) {
      elSex.innerHTML="Lieber&nbsp;";
    } else if (sex == "m" && formal == 1) {
      elSex.innerHTML="Lieber&nbsp;";
      for (let i=0; i < elSalutation.length; i++) {
        elSalutation[i].innerHTML="Herr&nbsp;";
      }
    }

    // Fotune cookies
    let fortunes = [
      'für den Optimisten ist das Leben kein Problem, sondern bereits die Lösung.',
      'wer Liebe sucht, findet sie nicht, sie überfällt uns, wenn wir sie am wenigsten erwarten.',
      'man verliert die meiste Zeit damit, dass man Zeit gewinnen will.',
      'Glück ist das einzige, was sich verdoppelt, wenn man es teilt.',
      'das Schicksal mischt die Karten, aber wir spielen.',
      'wer im Leben kein Ziel hat, verläuft sich.',
      'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
      'jede Minute, die man lacht, verlängert das Leben um eine Stunde.',
      'was uns den Weg verlegt, bringt uns voran.',
      'wer lächelt statt zu toben, ist immer der Stärkere.',
      'ein großer Mensch ist, wer sein Kinderherz nicht verliert.',
      'wer nur an die Bequemlichkeiten des Lebens denkt, kann nicht wahrhaft gebildet sein.',
      'wer sich darauf versteht, das Leben zu genießen, braucht keine Reichtümer.',
      'es ist besser, ein einziges kleines Licht anzuzünden, als die Dunkelheit zu verfluchen.',
      'wenn jemand sagt, er habe keine Zeit, bedeutet das nur, dass ihm andere Dinge wichtiger sind.',
      'handele an andere Menschen so, wie Du selbst gerne behandelt werden möchtest.',
      'die Wissenden reden nicht viel, die Redenden wissen nicht viel.',
      'die Stärke an einem Gefühl erkennt man an den Opfern, die man bereit ist dafür zu geben.',
      'Glück ist wie ein Vogel, wer es nicht ergreift, dem fliegt es davon.',
      'ich höre und vergesse. Ich sehe und erinnere. Ich tue und verstehe.',
      'lieber eine Kerze anzünden, als über die Finsternis klagen.',
      'nur die Allerklügsten und die Allerdümmsten ändern sich nie.',
      'dem anderen sein Anderssein zu vergeben, ist der Anfang von Weisheit.',
      'ein einfacher Zweig ist dem Vogel lieber, als ein goldener Käfig.',
      'Lächeln ist die charmanteste Art dem Gegner die Zähne zu zeigen.',
      'auch eine Reise von 1000 Meilen fängt mit dem ersten Schritt an.',
      'wer einen Fehler gemacht hat und ihn nicht verbessert, begeht schon den zweiten.',
      'es führen viele Wege zum Gipfel eines Berges, doch die Aussicht bleibt die gleiche.',
      'der Edle verlangt alles von sich selbst, der Primitive stellt nur Forderungen an andere.',
      'Verzeihen ist keine Narrheit, nur der Narr kann nicht verzeihen.',
      'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
      'der wahre Gelehrte schämt sich nicht, auch solche zu fragen, die unter ihm stehen.',
      'wenn Güte von uns ausgeht, werden wir auch Güte erfahren.',
      'das Glück tritt gern in ein Haus, wo gute Laune herrscht.',
      'einmal selbst sehen ist mehr wert als hundert Neuigkeiten hören.',
      'wer den Himmel im Wasser sieht, sieht die Fische auf den Bäumen.',
      'was uns den Weg verlegt, bringt uns voran.',
      'im Haus, in dem gelacht wird, kommt das Glück.',
      'wer viele Schätze anhäuft, hat viel zu verlieren.',
      'wer nicht auf den hohen Berg steigt, kennt die Ebene nicht.',
      'wahre Worte sind nicht angenehm, angenehme Worte sind nicht wahr.',
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
      'die Liebe ist das Gewürz des Lebens. Sie kann es versüßen, aber auch versalzen.',
      'indem man über andere schlecht redet, macht man sich selber nicht besser.',
      'ein Weg wird erst dann ein Weg, wenn einer ihn geht.',
      'der Geist, der allen Dingen Leben verleiht, ist die Liebe.',
      'wir leben nicht, um zu glauben, sondern um zu lernen.'
    ];

    const cookieDiv = document.querySelector(".dynamicText--cookies");

    function generateCookieText() {
      // Generate random number for cookies
      let fortuneA = Math.random()*80;
      let fortuneB = Math.floor(fortuneA);
      let randomFortune = fortunes[fortuneB];

      cookieDiv.innerHTML=randomFortune;
    }

    generateCookieText();

    // Refresh cookie
    const refreshCookie = document.querySelector(".phoneDisplay__refresh")
    refreshCookie.addEventListener("click", () => {
      cookieDiv.innerHTML="";
      setTimeout(() => {
        generateCookieText();
      }, 100);
    });
  });