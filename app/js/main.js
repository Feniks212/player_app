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
      changeHu(
        "rotate(35deg)",
        "active",
        "on",
        "active",
        "65%",
        "calc(100% - 15px)",
        "0",
        "55%",
        "65%",
        "calc(100% - 15px)",
        "0",
        "55%"
      );

      // Osc1ActPanel.addClass("active");
      // Osc1ButtonEffectsSin.addClass("on");

      // Osc1roundButn1.css({
      //   transform: "rotate(-35deg)"
      // });
      // Osc1roundButn4.css({
      //   transform: "rotate(150deg)"
      // });
      // Osc1Numbers[0].innerText = "1";

      // Osc1roundButn5.css({
      //   transform: "rotate(220deg)"
      // });
      // Osc1roundButn6.css({
      //   transform: "rotate(220deg)"
      // });
      // Osc1roundButn7.css({
      //   transform: "rotate(220deg)"
      // });

      // Osc1roundButnDown1.css({
      //   transform: "rotate(-50deg)"
      // });
      // Osc1roundButnDown2.css({
      //   transform: "rotate(220deg)"
      // });
      // Osc1roundButnDown3.css({
      //   transform: "rotate(140deg)"
      // });
      // Osc1roundButnDown4.css({
      //   transform: "rotate(50deg)"
      // });

      break;
    case "2":
      changeHu();
      break;
    case "3":
      changeHu();
      break;
    case "4":
      changeHu();
      break;
    case "5":
      changeHu();
      break;
    default:
      console.log("Error");
  }
}

function changeHu(var0,
var1,
var2,
var3,
var4,
var5,
var6,
var7,
var8,
var9,
var10,) {
  // Remove
  $(".round-butn").removeAttr("style");
  // $(".act-panel").removeClass("active");
  // $(".button-effects").removeClass("on");
  // $(".switch").removeClass("active");
  // $(".switch-vertical").removeClass("active");
  // $(".slider").removeAttr("style");

  // Add
  var RoundButns = $(".round-butn");
  for (let i = 0; i < 11; i++) {
    var x = "var" + i;
    var httt = $(".round-butn")[i].style.transform = x;
    
    console.log(var0);
  }

  // $(".round-butn")[0].style.transform = var1;
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
}
