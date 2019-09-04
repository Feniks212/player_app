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

    Current = this.dataset.test - 1;
  });

  for (let i = 0; i < audios.length; i++) {
    arrayAhref.push(audios[i]);
  }

  // document.getElementById("text-audio").innerHTML = arrayAhref[0].textContent;

  $(".button.prev").click(function() {
    if (Current == 1) {
      Current = arrayAhref.length - 1;
    } else if (Current == 0) {
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

      // Osc1Numbers[0].innerText = "1";


      break;
    case "2":
      changeRoundButn();
      changeActPanel();
      changeButtonEffects();
      changeSwitch();
      changeSliders();
      break;
    case "3":
      changeRoundButn();
      changeActPanel();
      changeButtonEffects();
      changeSwitch();
      changeSliders();
      break;
    case "4":
      changeRoundButn();
      changeActPanel();
      changeButtonEffects();
      changeSwitch();
      changeSliders();
      break;
    case "5":
      changeRoundButn();
      changeActPanel();
      changeButtonEffects();
      changeSwitch();
      changeSliders();
      break;
    default:
      console.log("Error");
  }
}

function changeRoundButn() {
  // Remove
  $(".round-butn").removeAttr("style");
  //
  // $(".switch-vertical").removeClass("active");
  // $(".slider").removeAttr("style");

  // Add
  var roundButns = $(".round-butn");
  for (let i = 0; i < roundButns.length; i++) {
    $(".round-butn")[i].style.transform = arguments[i];
  }
}
function changeActPanel() {
  // Remove
  $(".act-panel").removeClass("active");
  //Add
  var actPanels = $(".act-panel");
  for (let i = 0; i < actPanels.length; i++) {
    if (arguments[i] != "") {
      $(".act-panel")[i].classList.add(arguments[i]);
    } else {
      $(".act-panel")[i].classList.remove("active");
    }
  }
}
function changeButtonEffects() {
  $(".button-effects").removeClass("on");

  var buttonEffects = $(".button-effects");
  for (let i = 0; i < buttonEffects.length; i++) {
    if (arguments[i] != "") {
      $(".button-effects")[i].classList.add(arguments[i]);
    } else {
      $(".button-effects")[i].classList.remove("on");
    }
  }
}

function changeSwitch() {
  $(".switch").removeClass("active");

  var switchs = $(".switch");
  for (let i = 0; i < switchs.length; i++) {
    if (arguments[i] != "") {
      $(".switch")[i].classList.add(arguments[i]);
    } else {
      $(".switch")[i].classList.remove("active");
    }
  }
}

function changeSliders() {
  $(".slider").removeAttr("style");

  var sliders = $(".slider");
  for (let i = 0; i < sliders.length; i++) {
    $(".slider")[i].style.top = arguments[i];
  }
}

// $(".act-panel")[2].classList.add(var2);
// $(".button-effects")[0].classList.add(var3);
// $(".switch")[0].classList.add(var4);
// $(".slider")[0].style.top = var5;
// $(".slider")[1].style.top = var6;
// $(".slider")[2].style.top = var7;
// $(".slider")[3].style.top = var8;
// $(".slider")[4].style.top = var9;
// $(".slider")[5].style.top = var10;
// $(".slider")[6].style.top = var11;
// $(".slider")[7].style.top = var12;
