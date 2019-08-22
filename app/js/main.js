(function(jQuery) {
  jQuery.fn.shuffle = function() {
    var allElems = this.get();

    var getRandom = function(max) {
      return Math.floor(Math.random() * max);
    };

    var shuffled = jQuery.map(allElems, function() {
      var random = getRandom(allElems.length),
        randEl = jQuery(allElems[random]).clone(true)[0];
      allElems.splice(random, 1);
      return randEl;
    });

    this.each(function(i) {
      jQuery(this).replaceWith(jQuery(shuffled[i]));
    });

    return jQuery(shuffled);
  };
})(jQuery);

$(document).ready(function() {
  $(".holder").on("click", "a", function(event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".dropdown-button label").on("click", function() {
    $(this).toggleClass("open");
  });

  function rev() {
    var quoteInfo = document.getElementById("blocks").innerHTML;
    var template = Handlebars.compile(quoteInfo);

    Handlebars.registerHelper('quantity', function(n, block) {
      var accum = '';
      for(var i = 0; i < n; ++i)
          accum += block.fn(i);
      return accum;
  });

    var quoteData = template({
      reviews: [
        {
          img: "M",
          name: "Matthew",
          stars: 10,
          title: "WOW",
          text: "Love it"
        },
        {
          img: "P",
          name: "Philip",
          stars: 5,
          title: "fantastic!",
          text:
            "One of the finest plugins available! Sound quality is fantastic and the workflow is a breeze."
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "Its cool",
          text:
            "Great plugin and I like the rent-to-own idea, great job eMastered!"
        },
        {
          img: "K",
          name: "Kenneth",
          stars: 5,
          title: "Great synth!",
          text: "too good"
        },
        {
          img: "G",
          name: "George",
          stars: 5,
          title: "Absolute monster",
          text: "Excellent value"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "good",
          text: "Superb"
        },
        {
          img: "M",
          name: "Michael",
          stars: 5,
          title: "ATOM",
          text: "im in love with this! thanks so much to the creators"
        },
        {
          img: "M",
          name: "Margaret",
          stars: 5,
          title: "Great plugin",
          text: "The best!!"
        },
        {
          img: "W",
          name: "Walter",
          stars: 5,
          title: "Good. Good!",
          text: "oohhh so good"
        },
        {
          img: "T",
          name: "Timothy",
          stars: 5,
          title: "Best VST ever",
          text:
            "Hear nothing but excellent stuff about ATOM, so it was 'must have' purchase for my workstation and I love it!!"
        },
        {
          img: "B",
          name: "Benjamin",
          stars: 5,
          title: "Simply the best",
          text: "I enjoy the plugin, very happy about renting"
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "ATOM",
          text: "The design is slick. I like this."
        },
        {
          img: "G",
          name: "George",
          stars: 5,
          title: "Review",
          text: "Fantastic! Love it!"
        },
        {
          img: "J",
          name: "Jorge",
          stars: 5,
          title: "ATOM was even better than expected",
          text: "Very good"
        },
        {
          img: "R",
          name: "Ronald",
          stars: 5,
          title: "Essential",
          text: "The included presets are usually what you need for any project"
        },
        {
          img: "G",
          name: "Gary",
          stars: 5,
          title: "Very good",
          text:
            "Fantastic synth. Loving ATOM and that eMastered provides the rent to own option."
        },
        {
          img: "S",
          name: "Steven",
          stars: 5,
          title: "ChrisХ Review",
          text:
            "I enjoy ATOM. It's very flexible and the results are really nice."
        },
        {
          img: "A",
          name: "Andre",
          stars: 5,
          title: "Great synth and payment plan!",
          text:
            "Amazing synth. Honestly infinite opportunities. Super enjoyable!!!"
        },
        {
          img: "G",
          name: "Gary",
          stars: 5,
          title: "All is all right!",
          text:
            "ATOM is undoubtedly the best software for low frequency and bass recordings!"
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "100% - Sp Worth it",
          text: "Love it"
        },
        {
          img: "R",
          name: "Richard",
          stars: 5,
          title: "Seamless Workflow",
          text: "Nice"
        },
        {
          img: "W",
          name: "Walter",
          stars: 5,
          title: "What i needed",
          text: "One of the best products for EDM"
        },
        {
          img: "T",
          name: "Travis",
          stars: 5,
          title: "So good",
          text: "What else can I ask for? ATOM works beautifully."
        },
        {
          img: "T",
          name: "Timothy",
          stars: 5,
          title: "Just like I heard- WONDERFUL",
          text:
            "ATOM has pushed my songs to a whole new dimension. It's intuition has helped me get more done quicker. One of the most creative syntheses I've ever used."
        },
        {
          img: "W",
          name: "Wayne",
          stars: 5,
          title: "Great plug",
          text: "Excellent vst"
        },
        {
          img: "G",
          name: "George",
          stars: 5,
          title: "Decent plugin",
          text: "best vst ever"
        },
        {
          img: "A",
          name: "Antonio",
          stars: 5,
          title: "This is mmm",
          text: "Very sexy sounding"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "It's ATOM",
          text: "what else?"
        },
        {
          img: "S",
          name: "Stefan",
          stars: 5,
          title: "Broad",
          text:
            "The more you interact with it, the better it sounds. This plug-in is fantastic."
        },
        {
          img: "L",
          name: "Larry",
          stars: 5,
          title: "Love it",
          text: "It's a good synth to own!"
        },
        {
          img: "D",
          name: "Darryl",
          stars: 5,
          title: "Great",
          text: "Difficult to use any other tool"
        },
        {
          img: "L",
          name: "Louis",
          stars: 5,
          title: "Great plugin",
          text: "What a fantastic instrument!"
        },
        {
          img: "R",
          name: "Ricardo",
          stars: 5,
          title: "Awesome",
          text:
            "The ability to load my files on a synth this expansive is a huge weapon in my arsenal of synth tools."
        },
        {
          img: "N",
          name: "Nelson",
          stars: 5,
          title: "Wonderful plugin",
          text:
            "ATOM is certainly one of the easiest-to-use synth-based plugins out there."
        },
        {
          img: "P",
          name: "Pedro",
          stars: 5,
          title: "Excellent value",
          text: "Super inexpensive for the value"
        },
        {
          img: "D",
          name: "Derrick",
          stars: 5,
          title: "HIGH QUALITY",
          text: "So simple to use, loads of incredible samples...К"
        },
        {
          img: "A",
          name: "Andrew",
          stars: 5,
          title: "ATOM rules",
          text: "ATOM's a must buy. Very flexible."
        },
        {
          img: "M",
          name: "Mark",
          stars: 5,
          title: "Awesome",
          text: "It's awesome, great job guys"
        },
        {
          img: "L",
          name: "Leonardo",
          stars: 5,
          title: "Amazing",
          text: "Good for hiphop"
        },
        {
          img: "D",
          name: "Don",
          stars: 5,
          title: "amazing",
          text: "Love this plug-in, so many possibilities!"
        },
        {
          img: "B",
          name: "Brett",
          stars: 5,
          title: "ATOM",
          text:
            "I still have a ton to understand about noise design but the noise and versatility of this plugin makes it really simple to use, as a first-timer!"
        },
        {
          img: "R",
          name: "Randall",
          stars: 5,
          title: "ATOM User",
          text: "Great experience using it so far"
        },
        {
          img: "P",
          name: "Peter",
          stars: 5,
          title: "The best",
          text: "It's amazing"
        },
        {
          img: "C",
          name: "Clifford",
          stars: 5,
          title: "ATOM",
          text: "Easy customization"
        },
        {
          img: "D",
          name: "Dennis",
          stars: 5,
          title: "Good",
          text: "Great and powerful synth, so many unique qualities"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "I works",
          text:
            "This synth has transformed my music's style entirely. Great sounds and an easy-to-use gui."
        },
        {
          img: "T",
          name: "Thomas",
          stars: 5,
          title: "A great tool!",
          text: "Using it all the time now for every song. It's crazy."
        },
        {
          img: "C",
          name: "Clyde",
          stars: 5,
          title: "Best synth ever",
          text: "Product is awesome. Wish it was a little less expensive."
        },
        {
          img: "R",
          name: "Richard",
          stars: 5,
          title: "ATOM!",
          text: "Fast and powerful"
        },
        {
          img: "T",
          name: "Tuan",
          stars: 5,
          title: "Stunning",
          text: "Amazing VST!К"
        },
        {
          img: "I",
          name: "Ike",
          stars: 5,
          title: "Amazin",
          text: "I love it. I look forward to using this more."
        },
        {
          img: "K",
          name: "Kenneth",
          stars: 5,
          title: "NOTHING COMPARES TO THIS!!",
          text: "Great concept!"
        },
        {
          img: "S",
          name: "Steven",
          stars: 5,
          title: "ATOM",
          text: "Good mmmm"
        },
        {
          img: "J",
          name: "Jason",
          stars: 5,
          title: "ATOM Review",
          text: "Amazing modern sounds"
        },
        {
          img: "M",
          name: "Maria",
          stars: 5,
          title: "good",
          text:
            "Great tone, strong enough to meet all my sound requirements. Fantastic!!"
        },
        {
          img: "B",
          name: "Bruce",
          stars: 5,
          title: "The Best Synth",
          text:
            "One of the most important synths for such a considerable price!КI use this synthКfor any and every production."
        },
        {
          img: "L",
          name: "Lori",
          stars: 5,
          title: "Recommended for synth lovers",
          text: "Love it."
        },
        {
          img: "M",
          name: "Melvin",
          stars: 5,
          title: "Awesome",
          text: "One word- incredible!!"
        },
        {
          img: "G",
          name: "Gerald",
          stars: 5,
          title: "Amazing value!!",
          text: "The most powerful plugin ever made"
        },
        {
          img: "H",
          name: "Harold",
          stars: 5,
          title: "ATOM",
          text: "Exactly what I needed!"
        },
        {
          img: "F",
          name: "Floyd",
          stars: 5,
          title: "It's a great deal!",
          text: "Good presets, simple design, good sound"
        },
        {
          img: "V",
          name: "Vincent",
          stars: 5,
          title: "Nice",
          text: "One of the best synths ever made"
        },
        {
          img: "J",
          name: "Jeffrey",
          stars: 5,
          title: "Insane!",
          text: "Great wavetable synth"
        },
        {
          img: "T",
          name: "Timothy",
          stars: 5,
          title: "Just brilliant!",
          text: "The hood supports you eMastered"
        },
        {
          img: "M",
          name: "Melvin",
          stars: 5,
          title: "Best synth of all",
          text: "Just a great synth!!"
        },
        {
          img: "C",
          name: "Christine",
          stars: 5,
          title: "Amazing",
          text: "good sound!"
        },
        {
          img: "J",
          name: "Jean",
          stars: 5,
          title: "awesome",
          text: "Good stuff"
        },
        {
          img: "M",
          name: "Marjorie",
          stars: 5,
          title: "Good",
          text:
            "Probably the most extensive visualКinstrument to comprehend how parameter adjustments change the sound. This is a wonderful synth."
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "very good program easy to",
          text: "Very good"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "Top Synth",
          text: "Very versatile, you can use it for making to make anything."
        },
        {
          img: "M",
          name: "Michael",
          stars: 5,
          title: "AWESOME SYNTH",
          text: "Much better than the normal daw synths"
        },
        {
          img: "J",
          name: "Justin",
          stars: 5,
          title: "Total monster",
          text: "Basically, ATOM has everything you need"
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "Great for every user",
          text: "The payment plan is very helpful"
        },
        {
          img: "D",
          name: "David",
          stars: 5,
          title: "super dope",
          text: "Great vst enjoy it"
        },
        {
          img: "A",
          name: "Andreas",
          stars: 5,
          title: "Perfect!!",
          text: "I'm still learning but loving it so far!"
        },
        {
          img: "J",
          name: "Jacob",
          stars: 5,
          title: "Perfect",
          text: "Excellent plugin, top quality."
        },
        {
          img: "R",
          name: "Ryan",
          stars: 5,
          title: "Amazing!",
          text: "Can't live without it."
        },
        {
          img: "C",
          name: "Charles",
          stars: 5,
          title: "Love this Synth",
          text: "Love it"
        },
        {
          img: "R",
          name: "Roy",
          stars: 5,
          title: "Excellent!",
          text: "too good"
        },
        {
          img: "C",
          name: "Christopher",
          stars: 5,
          title: "Very Happy",
          text: "Great product"
        },
        {
          img: "G",
          name: "Glen",
          stars: 5,
          title: "A++",
          text: "Excellent value"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Extremely customizable",
          text: "Superb"
        },
        {
          img: "G",
          name: "Gavin",
          stars: 5,
          title: "Pretty Good",
          text: "The best!!"
        },
        {
          img: "D",
          name: "Douglas",
          stars: 5,
          title: "So many possibilities...",
          text: "oohhh so good"
        },
        {
          img: "J",
          name: "Jerald",
          stars: 5,
          title: "Best Synth of all time",
          text: "I enjoy the plugin, very happy about renting"
        },
        {
          img: "B",
          name: "Bradley",
          stars: 5,
          title: "Thank You eMastered!",
          text: "The design is slick. I like this."
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "ATOM",
          text: "Fantastic! Love it!"
        },
        {
          img: "M",
          name: "Matthew",
          stars: 5,
          title: "Made for sound designers",
          text: "Very good"
        },
        {
          img: "J",
          name: "John",
          stars: 5,
          title: "Awesome",
          text: "The included presets are usually what you need for any project"
        },
        {
          img: "R",
          name: "Ramiro",
          stars: 5,
          title: "Very good",
          text:
            "Fantastic synth. Loving ATOM and that eMastered provides the rent to own option."
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "I love using ATOM",
          text:
            "I enjoy ATOM. It's very flexible and the results are really nice."
        },
        {
          img: "A",
          name: "Anthony",
          stars: 5,
          title: "AMAZING",
          text:
            "Amazing synth. Honestly infinite opportunities. Super enjoyable!!!"
        },
        {
          img: "A",
          name: "Anthony",
          stars: 5,
          title: "ATOM",
          text:
            "ATOM is undoubtedly the best software for low frequency and bass recordings!"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "Excellent",
          text: "Love it"
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "Powerful and easy to learn",
          text: "Nice"
        },
        {
          img: "A",
          name: "Arthur",
          stars: 5,
          title: "It's amazing",
          text: "One of the best products for EDM"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "The beast",
          text: "What else can I ask for? ATOM works beautifully."
        },
        {
          img: "S",
          name: "Sandra",
          stars: 5,
          title: "First time using ATOM",
          text:
            "ATOM has pushed my songs to a whole new dimension. It's intuition has helped me get more done quicker. One of the most creative syntheses I've ever used."
        },
        {
          img: "J",
          name: "John",
          stars: 5,
          title: "Amazing",
          text: "Excellent vst"
        },
        {
          img: "T",
          name: "Timothy",
          stars: 5,
          title: "Exceptional!",
          text: "best vst ever"
        },
        {
          img: "J",
          name: "Jarrett",
          stars: 5,
          title: "where it at",
          text: "Very sexy sounding"
        },
        {
          img: "D",
          name: "Donald",
          stars: 5,
          title: "Good",
          text:
            "The layout is excellent for controlling your sounds. TheКworkflow is genius!"
        },
        {
          img: "S",
          name: "Stephen",
          stars: 5,
          title: "Love it",
          text: "It's a good synth to own!"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Killer!!",
          text: "It's awesome, great job guys"
        },
        {
          img: "J",
          name: "Jesus",
          stars: 5,
          title: "BOMB",
          text: "Good for hiphop"
        },
        {
          img: "B",
          name: "Bryan",
          stars: 5,
          title: "ATOM review",
          text: "It's amazing"
        },
        {
          img: "R",
          name: "Roger",
          stars: 5,
          title: "Great",
          text: "Fast and powerful"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Must buy plug-in",
          text: "Amazing VST!К"
        },
        {
          img: "C",
          name: "Charles",
          stars: 5,
          title: "Very intuitive and powerful",
          text: "Great concept!"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "cool",
          text: "Good mmmm"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "Excellent",
          text:
            "Great tone, strong enough to meet all my sound requirements. Fantastic!!"
        },
        {
          img: "D",
          name: "Dale",
          stars: 5,
          title: "No Brainer",
          text: "Love it."
        },
        {
          img: "D",
          name: "David",
          stars: 5,
          title: "ATOM",
          text: "One word- incredible!!"
        },
        {
          img: "L",
          name: "Larry",
          stars: 5,
          title: "great purchase",
          text: "The most powerful plugin ever made"
        },
        {
          img: "H",
          name: "Humberto",
          stars: 5,
          title: "Sounds are good",
          text: "Exactly what I needed!"
        },
        {
          img: "J",
          name: "John",
          stars: 5,
          title: "Very satisfied",
          text: "Good presets, simple design, good sound"
        },
        {
          img: "S",
          name: "Stanley",
          stars: 5,
          title: "A Wavetable Synth For Modern Sound Design",
          text: "One of the best synths ever made"
        },
        {
          img: "D",
          name: "Danny",
          stars: 5,
          title: "Mmm good",
          text: "Great wavetable synth"
        },
        {
          img: "C",
          name: "Craig",
          stars: 5,
          title: "cheap for the money",
          text: "The hood supports you eMastered"
        },
        {
          img: "R",
          name: "Raymond",
          stars: 5,
          title: "Love It Love",
          text: "Just a great synth!!"
        },
        {
          img: "F",
          name: "Floyd",
          stars: 5,
          title: "Fantastic product",
          text: "good sound!"
        },
        {
          img: "R",
          name: "Reuben",
          stars: 5,
          title: "Great",
          text: "Good stuff"
        },
        {
          img: "J",
          name: "Joel",
          stars: 5,
          title: "Best modern synth",
          text:
            "Probably the most extensive visualКinstrument to comprehend how parameter adjustments change the sound. This is a wonderful synth."
        },
        {
          img: "E",
          name: "Eric",
          stars: 5,
          title: "Love it.",
          text: "Very good"
        },
        {
          img: "S",
          name: "Sterling",
          stars: 5,
          title: "Very powerful",
          text: "Very versatile, you can use it for making to make anything."
        },
        {
          img: "R",
          name: "Ray",
          stars: 5,
          title: "Best vst",
          text: "Much better than the normal daw synths"
        },
        {
          img: "P",
          name: "Paul",
          stars: 5,
          title: "Wow",
          text: "Basically, ATOM has everything you need"
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "Love it",
          text: "The payment plan is very helpful"
        },
        {
          img: "J",
          name: "Juan",
          stars: 5,
          title: "Awesome plugin",
          text: "I'm still learning but loving it so far!"
        },
        {
          img: "S",
          name: "Stephen",
          stars: 5,
          title: "Excellent",
          text: "Excellent plugin, top quality."
        },
        {
          img: "",
          name: "Daniel",
          stars: 5,
          title: "Love it",
          text: "Can't live without it."
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "A great synth!",
          text: "Love it"
        },
        {
          img: "G",
          name: "Gerald",
          stars: 5,
          title: "wonderful plugin!!",
          text: "too good"
        },
        {
          img: "A",
          name: "Angela",
          stars: 5,
          title: "Marvelous!",
          text: "Excellent value"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Initial Reaction",
          text: "Superb"
        },
        {
          img: "J",
          name: "Jerry",
          stars: 5,
          title: "It's amazing!",
          text: "The best!!"
        },
        {
          img: "C",
          name: "Clarence",
          stars: 5,
          title: "Boom",
          text: "oohhh so good"
        },
        {
          img: "C",
          name: "Charles",
          stars: 5,
          title: "ATOM is kewl",
          text:
            "Hear nothing but excellent stuff about ATOM, so it was 'must have' purchase for my workstation and I love it!!"
        },
        {
          img: "J",
          name: "Juan",
          stars: 5,
          title: "5 stars",
          text: "I enjoy the plugin, very happy about renting"
        },
        {
          img: "H",
          name: "Henry",
          stars: 5,
          title: "Lack of presets",
          text: "The design is slick. I like this."
        },
        {
          img: "T",
          name: "Troy",
          stars: 5,
          title: "Great Plugin!",
          text: "Fantastic! Love it!"
        },
        {
          img: "J",
          name: "Joseph",
          stars: 5,
          title: "Love it",
          text: "Very good"
        },
        {
          img: "H",
          name: "Hugh",
          stars: 5,
          title: "ATOM Is Sick",
          text: "The included presets are usually what you need for any project"
        },
        {
          img: "T",
          name: "Thomas",
          stars: 5,
          title: "Super inexpensive for the value",
          text:
            "Fantastic synth. Loving ATOM and that eMastered provides the rent to own option."
        },
        {
          img: "D",
          name: "Dale",
          stars: 5,
          title: "Great concept",
          text:
            "I enjoy ATOM. It's very flexible and the results are really nice."
        },
        {
          img: "R",
          name: "Richard",
          stars: 5,
          title: "I get why people love thisК",
          text:
            "Amazing synth. Honestly infinite opportunities. Super enjoyable!!!"
        },
        {
          img: "J",
          name: "Juan",
          stars: 5,
          title: "Excellent",
          text:
            "ATOM is undoubtedly the best software for low frequency and bass recordings!"
        },
        {
          img: "B",
          name: "Beth",
          stars: 5,
          title: "ATOM",
          text: "Love it"
        },
        {
          img: "J",
          name: "Joseph",
          stars: 5,
          title: "Awesome",
          text: "Nice"
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "It's the best vst Synthesizer",
          text: "One of the best products for EDM"
        },
        {
          img: "J",
          name: "James",
          stars: 5,
          title: "Bliss of Synth",
          text: "What else can I ask for? ATOM works beautifully."
        },
        {
          img: "J",
          name: "Jessica",
          stars: 5,
          title: "ATOM is AMAzing!",
          text:
            "ATOM has pushed my songs to a whole new dimension. It's intuition has helped me get more done quicker. One of the most creative syntheses I've ever used."
        },
        {
          img: "E",
          name: "Erik",
          stars: 5,
          title: "Useful",
          text: "Excellent vst"
        },
        {
          img: "D",
          name: "Darwin",
          stars: 5,
          title: "Awesome!!! It's a must!!",
          text: "best vst ever"
        },
        {
          img: "J",
          name: "Jimmy",
          stars: 5,
          title: "Graphics matter",
          text: "Very sexy sounding"
        },
        {
          img: "M",
          name: "Marion",
          stars: 5,
          title: "ATOM User",
          text: "It's a good synth to own!"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "ATOM",
          text: "It's awesome, great job guys"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Intuitive and powerful",
          text: "Good for hiphop"
        },
        {
          img: "G",
          name: "Garry",
          stars: 5,
          title: "Just the best vst out there",
          text: "It's amazing"
        },
        {
          img: "A",
          name: "Andrea",
          stars: 5,
          title: "Great plugin!",
          text: "Fast and powerful"
        },
        {
          img: "M",
          name: "Mario",
          stars: 5,
          title: "Great Fun",
          text: "Amazing VST!К"
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "Love it!",
          text: "Great concept!"
        },
        {
          img: "T",
          name: "Timothy",
          stars: 5,
          title: "amazing plugin",
          text: "Good mmmm"
        },
        {
          img: "C",
          name: "Clyde",
          stars: 5,
          title: "Usingen it for a while now",
          text:
            "Great tone, strong enough to meet all my sound requirements. Fantastic!!"
        },
        {
          img: "D",
          name: "Dustin",
          stars: 5,
          title: "It's good",
          text: "Love it."
        },
        {
          img: "G",
          name: "Gregory",
          stars: 5,
          title: "ATOM is awesome!",
          text: "One word- incredible!!"
        },
        {
          img: "A",
          name: "Andy",
          stars: 5,
          title: "Great synth",
          text: "The most powerful plugin ever made"
        },
        {
          img: "J",
          name: "Jacob",
          stars: 5,
          title: "The Best!",
          text: "Exactly what I needed!"
        },
        {
          img: "J",
          name: "Jordan",
          stars: 5,
          title: "Amazing!!",
          text: "Good presets, simple design, good sound"
        },
        {
          img: "W",
          name: "Wayne",
          stars: 5,
          title: "Great",
          text: "One of the best synths ever made"
        },
        {
          img: "B",
          name: "Bernard",
          stars: 5,
          title: "Awesome plugin!",
          text: "Great wavetable synth"
        },
        {
          img: "J",
          name: "Juan",
          stars: 5,
          title: "Very happy",
          text: "The hood supports you eMastered"
        },
        {
          img: "S",
          name: "Shannon",
          stars: 5,
          title: "Great",
          text: "Just a great synth!!"
        },
        {
          img: "K",
          name: "Kevin",
          stars: 5,
          title: "Dope af",
          text: "good sound!"
        },
        {
          img: "J",
          name: "John",
          stars: 5,
          title: "easy to control and sounds good",
          text: "Good stuff"
        },
        {
          img: "C",
          name: "Christopher",
          stars: 5,
          title: "what a vst",
          text:
            "Probably the most extensive visualКinstrument to comprehend how parameter adjustments change the sound. This is a wonderful synth."
        },
        {
          img: "O",
          name: "Ollie",
          stars: 5,
          title: "ATOM",
          text: "Very good"
        },
        {
          img: "M",
          name: "Myron",
          stars: 5,
          title: "Great low frequency",
          text: "Very versatile, you can use it for making to make anything."
        },
        {
          img: "M",
          name: "Micheal",
          stars: 5,
          title: "Lots of fun",
          text: "Much better than the normal daw synths"
        },
        {
          img: "C",
          name: "Corey",
          stars: 5,
          title: "Love it :)",
          text: "Basically, ATOM has everything you need"
        },
        {
          img: "M",
          name: "Manuel",
          stars: 5,
          title: "brilliant.",
          text: "The payment plan is very helpful"
        },
        {
          img: "T",
          name: "Thomas",
          stars: 5,
          title: "ATOM review",
          text: "Great vst enjoy it"
        },
        {
          img: "H",
          name: "Harley",
          stars: 5,
          title: "Awesome plug in",
          text: "I'm still learning but loving it so far!"
        },
        {
          img: "D",
          name: "Danny",
          stars: 5,
          title: "ATOM plugin",
          text: "Excellent plugin, top quality."
        },
        {
          img: "C",
          name: "Clyde",
          stars: 5,
          title: "FIRE!!!",
          text: "Can't live without it."
        },
        {
          img: "M",
          name: "Marcus",
          stars: 5,
          title: "A must have for dubstep",
          text: "Love it"
        },
        {
          img: "R",
          name: "Robin",
          stars: 5,
          title: "Amazing",
          text: "too good"
        },
        {
          img: "A",
          name: "Anthony",
          stars: 5,
          title: "What I needed",
          text: "Excellent value"
        },
        {
          img: "R",
          name: "Raymond",
          stars: 5,
          title: "good",
          text: "Superb"
        },
        {
          img: "G",
          name: "George",
          stars: 5,
          title: "PHatttt",
          text: "The best!!"
        },
        {
          img: "A",
          name: "Andrew",
          stars: 5,
          title: "Powerful",
          text:
            "Hear nothing but excellent stuff about ATOM, so it was 'must have' purchase for my workstation and I love it!!"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "Wow! This is awesome!",
          text: "I enjoy the plugin, very happy about renting"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "good",
          text: "The design is slick. I like this."
        },
        {
          img: "L",
          name: "Larry",
          stars: 5,
          title: "Great",
          text: "Fantastic! Love it!"
        },
        {
          img: "J",
          name: "John",
          stars: 5,
          title: "ATOM",
          text: "Very good"
        },
        {
          img: "S",
          name: "Sean",
          stars: 5,
          title: "ATOM",
          text: "The included presets are usually what you need for any project"
        },
        {
          img: "J",
          name: "Jesus",
          stars: 5,
          title: "Love it",
          text:
            "Fantastic synth. Loving ATOM and that eMastered provides the rent to own option."
        },
        {
          img: "C",
          name: "Christoper",
          stars: 5,
          title: "First plug in synth I've",
          text:
            "I enjoy ATOM. It's very flexible and the results are really nice."
        },
        {
          img: "Z",
          name: "Zachary",
          stars: 5,
          title: "Dooooppeee",
          text:
            "Amazing synth. Honestly infinite opportunities. Super enjoyable!!!"
        },
        {
          img: "K",
          name: "Kenneth",
          stars: 5,
          title: "Love it",
          text:
            "ATOM is undoubtedly the best software for low frequency and bass recordings!"
        },
        {
          img: "J",
          name: "Jackie",
          stars: 5,
          title: "Magic",
          text: "Love it"
        },
        {
          img: "D",
          name: "Derek",
          stars: 5,
          title: "Great software",
          text: "Nice"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "ATOM is the best",
          text: "One of the best products for EDM"
        },
        {
          img: "D",
          name: "Daniel",
          stars: 5,
          title: "LOVE IT!!!",
          text: "What else can I ask for? ATOM works beautifully."
        },
        {
          img: "E",
          name: "Emery",
          stars: 5,
          title: "ATOM",
          text:
            "ATOM has pushed my songs to a whole new dimension. It's intuition has helped me get more done quicker. One of the most creative syntheses I've ever used."
        },
        {
          img: "J",
          name: "Jeremy",
          stars: 5,
          title: "Love this plugin and love",
          text: "Excellent vst"
        },
        {
          img: "D",
          name: "Danny",
          stars: 5,
          title: "its pretty good",
          text: "best vst ever"
        },
        {
          img: "S",
          name: "Scot",
          stars: 5,
          title: "Noice",
          text: "Very sexy sounding"
        },
        {
          img: "B",
          name: "Bobby",
          stars: 5,
          title: "Very fantastic!",
          text: "It's a good synth to own!"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "great synth!",
          text: "It's awesome, great job guys"
        },
        {
          img: "A",
          name: "Altha",
          stars: 5,
          title: "Love it.",
          text: "Thrilled with the purchase- wished I had done so much earlier!"
        },
        {
          img: "W",
          name: "William",
          stars: 5,
          title: "good",
          text: "Good for hiphop"
        },
        {
          img: "R",
          name: "Rick",
          stars: 5,
          title: "Awsome plugin",
          text: "It's amazing"
        },
        {
          img: "K",
          name: "Kevin",
          stars: 5,
          title: "Great Plugin",
          text: "Product is awesome. Wish it was a little less expensive."
        },
        {
          img: "R",
          name: "Ronald",
          stars: 5,
          title: "Amazing synth!",
          text: "Fast and powerful"
        },
        {
          img: "P",
          name: "Phillip",
          stars: 5,
          title: "Sounds clean",
          text: "Amazing VST!К"
        },
        {
          img: "P",
          name: "Paul",
          stars: 5,
          title: "Easy to use",
          text: "Great concept!"
        },
        {
          img: "R",
          name: "Robert",
          stars: 5,
          title: "Very fantastic!",
          text: "Good mmmm"
        },
        {
          img: "D",
          name: "David",
          stars: 5,
          title: "Great wavetable",
          text: "Love it."
        },
        {
          img: "H",
          name: "Henry",
          stars: 5,
          title: "Solid Synthesizer",
          text: "One word- incredible!!"
        }
      ]
    });
    // console.log(quoteData);
    document.getElementById("reviews").innerHTML += quoteData;
  }
  rev();

  // jQuery(document).ready(function() {
  //   jQuery("#reviews .review").shuffle();
  // });

  // function multiplyNode(node, count, deep) {
  //   for (var i = 0, copy; i < count - 1; i++) {
  //     copy = node.cloneNode(deep);
  //     node.parentNode.insertBefore(copy, node);
  //   }
  // }

  // multiplyNode(document.querySelector(".review"), 1, true);

  /* when document is ready */
  $(function() {
    /* initiate plugin */
    $("div.holder").jPages({
      containerID: "reviews",
      perPage: 10
    });
  });
});
