$(document).ready(function() {
  $(".hide").click(function() {
    $(".list-audio").hide();
    $(".hide").hide();
  });
  $("#open-audio").click(function() {
    $(".list-audio").show();
    $(".hide").show();
  });

  var audios = $(".audio");
  var Current = 0;
  var arrayAhref = [];

  var audio = new Audio(); // Create a new item Audio
  $(".audio").click(function() {
    $(".audio").removeClass("play");
    audio.src = this.name;
    audio.play();

    $(this).addClass("play");

    var textAudioName = document.getElementById("text-audio");

    textAudioName.textContent = this.childNodes[0].textContent;
    Current = this.dataset.test;
    
  });

  for (let i = 0; i < audios.length; i++) {
    arrayAhref.push(audios[i]);
  }

  // document.getElementById("text-audio").innerHTML = arrayAhref[0].textContent;

  $(".button.prev").click(function() {
    if (Current == 1 || Current == 0) {
      Current = arrayAhref.length - 1;
    } else {
      Current--;
    }
    $(".audio").removeClass("play");
    document.getElementById("text-audio").innerHTML =
      arrayAhref[Current].textContent;
    arrayAhref[Current].className += " play";
    audio.src = arrayAhref[Current].name;
    audio.play();
  });

  $(".button.next").click(function() {
    if (Current == arrayAhref.length - 1) {
      Current = 1;
    } else {
      Current++;
    }
    $(".audio").removeClass("play");
    document.getElementById("text-audio").innerHTML =
      arrayAhref[Current].textContent;
    arrayAhref[Current].className += " play";
    audio.src = arrayAhref[Current].name;
    audio.play();
  });

  var arraybutton = [];
  var button = $(".list-music .button");
  for (let i = 0; i < button.length; i++) {
    arraybutton.push(button[i]);
  }

  arraybutton.forEach(function(elem) {
    elem.addEventListener("click", function(event) {
      var target = event.target;
      if (target) {
        var dataTest = $(".audio.play")[0].dataset.test;
      }
      switchtest(dataTest);
    });
  });

  arrayAhref.forEach(function(elem) {
    elem.addEventListener("click", function(event) {
      var target = event.target;
      if (target.classList.contains("play")) {
        var dataTest = target.getAttribute("data-test");
      } else {
        console.log("sory");
      }
      switchtest(dataTest);
    });
  });
});

console.log($(".slider"));

function switchtest(varEl) {
  switch (varEl) {
    case "1":
      changeRoundButn(
        "rotate(35deg)",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "rotate(-35deg)",
        "",
        "",
        "rotate(150deg)",
        "rotate(220deg)",
        "rotate(220deg)",
        "rotate(220deg)",
        "rotate(-50deg)",
        "rotate(220deg)",
        "rotate(140deg)",
        "rotate(50deg)",
        "rotate(-50deg)",
        "rotate(45deg)",
        "",
        "rotate(-90deg)",
        "rotate(-100deg)",
        "rotate(150deg)",
        "rotate(-120deg)",
        "rotate(-55deg)",
        "rotate(-35deg)",
        "rotate(135deg)",
        "rotate(45deg)",
        "",
        "",
        "",
        "rotate(145deg)",
        "rotate(-30deg)",
        "rotate(145deg)",
        "rotate(-145deg)",
        "rotate(-85deg)",
        "rotate(220deg)",
        "rotate(160deg)",
        "rotate(-60deg)",
        "rotate(85deg)",
        "rotate(-110deg)",
        "rotate(-90deg)",
        "rotate(160deg)",
        "rotate(-160deg)",
        "rotate(-160deg)",
        "rotate(100deg)",
        "rotate(100deg)",
        "rotate(-160deg)",
        "rotate(-110deg)",
        "rotate(-100deg)",
        "rotate(160deg)",
        "rotate(-50deg)",
        "rotate(160deg)",
        "",
        "rotate(-160deg)",
        "rotate(-40deg)"
      );

      changeActPanel(
        "",
        "",
        "active",
        "",
        "active",
        "active",
        "",
        "active",
        "",
        "",
        "active"
      );
      changeButtonEffects(
        "on",
        "",
        "",
        "",
        "on",
        "",
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "",
        "",
        "on",
        "",
        "",
        "on"
      );
      changeSwitch("active", "active", "", "active");
      changeSwitchVartical();
      changeSliders(
        "65%",
        "calc(100% - 15px)",
        "0",
        "55%",
        "65%",
        "calc(100% - 15px)",
        "0",
        "55%"
      );
      changeButtonFilter("on", "", "", "");

      // Osc1Numbers[0].innerText = "1";

      break;
    case "2":
      changeRoundButn(
        "rotate(75deg)",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "rotate(-55deg)",
        "",
        "",
        "rotate(150deg)",
        "rotate(-220deg)",
        "rotate(-220deg)",
        "rotate(-220deg)",
        "rotate(50deg)",
        "rotate(220deg)",
        "rotate(140deg)",
        "rotate(-50deg)",
        "rotate(50deg)",
        "rotate(45deg)",
        "",
        "rotate(90deg)",
        "rotate(100deg)",
        "rotate(150deg)",
        "rotate(-120deg)",
        "rotate(-55deg)",
        "rotate(-35deg)",
        "rotate(135deg)",
        "rotate(45deg)",
        "",
        "",
        "",
        "rotate(145deg)",
        "rotate(30deg)",
        "rotate(145deg)",
        "rotate(145deg)",
        "rotate(-85deg)",
        "rotate(-220deg)",
        "rotate(160deg)",
        "rotate(-60deg)",
        "rotate(85deg)",
        "rotate(110deg)",
        "rotate(-90deg)",
        "rotate(160deg)",
        "rotate(-160deg)",
        "rotate(-160deg)",
        "rotate(100deg)",
        "rotate(100deg)",
        "rotate(-160deg)",
        "rotate(-110deg)",
        "rotate(-100deg)",
        "rotate(160deg)",
        "rotate(-50deg)",
        "rotate(160deg)",
        "",
        "rotate(160deg)",
        "rotate(40deg)"
      );

      changeActPanel(
        "",
        "active",
        "active",
        "",
        "",
        "",
        "",
        "",
        "active",
        "active",
        ""
      );
      changeButtonEffects(
        "",
        "",
        "on",
        "on",
        "",
        "",
        "on",
        "",
        "",
        "on",
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "",
        "on"
      );
      changeSwitch("", "active", "", "active");
      changeSwitchVartical();
      changeSliders(
        "55%",
        "calc(100% - 15px)",
        "10%",
        "35%",
        "55%",
        "calc(100% - 15px)",
        "10%",
        "35%"
      );
      changeButtonFilter("", "on", "on", "");
      break;
    case "3":
      changeRoundButn(
        "rotate(75deg)",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "rotate(-55deg)",
        "",
        "",
        "rotate(150deg)",
        "rotate(220deg)",
        "rotate(-220deg)",
        "rotate(-220deg)",
        "rotate(50deg)",
        "rotate(220deg)",
        "rotate(-140deg)",
        "rotate(-50deg)",
        "rotate(50deg)",
        "rotate(45deg)",
        "",
        "rotate(-90deg)",
        "rotate(100deg)",
        "rotate(150deg)",
        "rotate(-120deg)",
        "rotate(-55deg)",
        "rotate(35deg)",
        "rotate(-135deg)",
        "rotate(45deg)",
        "",
        "",
        "",
        "rotate(-145deg)",
        "rotate(30deg)",
        "rotate(-145deg)",
        "rotate(145deg)",
        "rotate(-85deg)",
        "rotate(220deg)",
        "rotate(160deg)",
        "rotate(60deg)",
        "rotate(-85deg)",
        "rotate(110deg)",
        "rotate(90deg)",
        "rotate(-160deg)",
        "rotate(160deg)",
        "rotate(160deg)",
        "rotate(-100deg)",
        "rotate(-100deg)",
        "rotate(160deg)",
        "rotate(-110deg)",
        "rotate(-100deg)",
        "rotate(160deg)",
        "rotate(50deg)",
        "rotate(160deg)",
        "",
        "rotate(160deg)",
        "rotate(40deg)"
      );

      changeActPanel(
        "",
        "active",
        "",
        "",
        "",
        "",
        "active",
        "",
        "active",
        "",
        ""
      );
      changeButtonEffects(
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "",
        "on",
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "on",
        "",
        ""
      );
      changeSwitch("active", "", "", "active");
      changeSwitchVartical();
      changeSliders(
        "55%",
        "calc(80% - 15px)",
        "20%",
        "35%",
        "55%",
        "calc(70% - 15px)",
        "0",
        "45%"
      );
      changeButtonFilter("", "", "", "on");
      break;
    case "4":
      changeRoundButn(
        "rotate(75deg)",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "rotate(155deg)",
        "",
        "",
        "rotate(150deg)",
        "rotate(220deg)",
        "rotate(-220deg)",
        "rotate(220deg)",
        "rotate(50deg)",
        "rotate(220deg)",
        "rotate(140deg)",
        "rotate(-50deg)",
        "rotate(50deg)",
        "rotate(45deg)",
        "",
        "rotate(90deg)",
        "rotate(-100deg)",
        "rotate(150deg)",
        "rotate(120deg)",
        "rotate(-55deg)",
        "rotate(35deg)",
        "rotate(135deg)",
        "rotate(-45deg)",
        "",
        "",
        "",
        "rotate(-145deg)",
        "rotate(30deg)",
        "rotate(145deg)",
        "rotate(145deg)",
        "rotate(-85deg)",
        "rotate(220deg)",
        "rotate(-160deg)",
        "rotate(60deg)",
        "rotate(85deg)",
        "rotate(-110deg)",
        "rotate(90deg)",
        "rotate(160deg)",
        "rotate(-160deg)",
        "rotate(160deg)",
        "rotate(100deg)",
        "rotate(100deg)",
        "rotate(-160deg)",
        "rotate(110deg)",
        "rotate(100deg)",
        "rotate(-160deg)",
        "rotate(-50deg)",
        "rotate(-160deg)",
        "",
        "rotate(160deg)",
        "rotate(40deg)"
      );

      changeActPanel(
        "",
        "active",
        "",
        "active",
        "",
        "",
        "",
        "",
        "",
        "active",
        ""
      );
      changeButtonEffects(
        "",
        "",
        "on",
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "",
        "on",
        "",
        "",
        "",
        "",
        "on",
        "",
        ""
      );
      changeSwitch("active", "", "active", "");
      changeSwitchVartical("active");
      changeSliders(
        "15%",
        "calc(80% - 15px)",
        "60%",
        "55%",
        "15%",
        "calc(70% - 15px)",
        "0",
        "75%"
      );
      changeButtonFilter("on", "", "", "on");
      break;
    default:
      console.log("Error");
  }
}

function changeRoundButn() {
  // Remove
  $(".round-butn").removeAttr("style");
  // Add
  var roundButns = $(".round-butn");
  mainСycle(roundButns, arguments);
}

function changeActPanel() {
  // Remove
  $(".act-panel").removeClass("active");
  //Add
  var actPanels = $(".act-panel");
  mainСycle(actPanels, arguments);
}

function changeButtonEffects() {
  $(".button-effects").removeClass("on");
  var buttonEffects = $(".button-effects");
  mainСycle(buttonEffects, arguments);
}
function changeButtonFilter() {
  $(".filters").removeClass("on");
  var changeButtonFilter = $(".filters");
  mainСycle(changeButtonFilter, arguments);
}

function changeSwitch() {
  $(".switch").removeClass("active");
  var switchs = $(".switch");
  mainСycle(switchs, arguments);
}

function changeSwitchVartical() {
  $(".switch-vertical").removeClass("active");
  var switchVertical = $(".switch-vertical");
  mainСycle(switchVertical, arguments);
}

function changeSliders() {
  $(".slider").removeAttr("style");
  var sliders = $(".slider");
  mainСycle(sliders, arguments);
}

function mainСycle(elem, x) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("round-butn")) {
      elem[i].style.transform = x[i];
    } else if (
      elem[i].classList.contains("act-panel") ||
      elem[i].classList.contains("switch") ||
      elem[i].classList.contains("switch-vertical")
    ) {
      if (x[i] != "") {
        elem[i].classList.add(x[i]);
      } else {
        elem[i].classList.remove("active");
      }
    } else if (
      elem[i].classList.contains("button-effects") ||
      elem[i].classList.contains("filters")
    ) {
      if (x[i] != "") {
        elem[i].classList.add(x[i]);
      } else {
        elem[i].classList.remove("on");
      }
    } else if (elem[i].classList.contains("slider")) {
      elem[i].style.top = x[i];
    } else {
      console.log("error");
    }
  }
}
