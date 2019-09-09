"use strict";

const objectMain = new Object();
const objectbuttonEffects = new Object();
const objectActPanels = new Object();

objectMain.roundButns = $(".round-butn");
objectMain.actPanels = $(".act-panel");
objectMain.buttonEffects = $(".button-effects");
objectMain.changeButtonFilters = $(".filters");
objectMain.switchs = $(".switch");
objectMain.switchVertical = $(".switch-vertical");
objectMain.sliders = $(".slider");

let roundButns = objectMain.roundButns; // find all items "round-butn"
let actPanels = objectMain.actPanels; // find all items "act-panel"
let buttonEffects = objectMain.buttonEffects; // find all items "button-effects"
let changeButtonFilters = objectMain.changeButtonFilters; // find all items "filters"
let switchs = objectMain.switchs; // find all items "switch"
let switchVertical = objectMain.switchVertical; // find all items "switch-vertical"
let sliders = objectMain.sliders; // find all items "slider"

objectbuttonEffects.lfo1 = $(".lfo-1 .button-effects");
objectbuttonEffects.lfo2 = $(".lfo-2 .button-effects");
objectbuttonEffects.osc1 = $(".osc-1 .button-effects");
objectbuttonEffects.osc2 = $(".osc-2 .button-effects");
objectbuttonEffects.osc3 = $(".osc-3 .button-effects");

objectActPanels.firstRow = $(".first-row .act-panel");
objectActPanels.secondRow = $(".second-row .act-panel");
objectActPanels.lastRow = $(".last-row .act-panel");

$(document).ready(function() {
  $(function() {
    $(".overlapping").fadeOut();
    setInterval(() => {
      $(".overlapping")[0].style.display = "flex";
      $(".overlapping").fadeIn();
      setTimeout(() => {
        $(".overlapping").fadeOut();
      }, 3000);
    }, 11000);
});

  // function to open a block with a list of audio
  $(".hide").click(function() {
    $(".list-audio").hide();
    $(".hide").hide();
  });
  $("#open-audio").click(function() {
    $(".list-audio").show(); // to open
    $(".hide").show();
  });

  let audios = $(".audio"); // find all items "audio"
  let videos = $(".video"); // find all items "video"
  let Current = 0; // procedure
  let arrayAudio = []; // this is array element "a.audio"
  let arrayVideos = []; // this is array element "video"

  let audio = new Audio(); // Create a new item Audio

  // function launch music and change the text in the panel
  $(".audio").click(function() {
    $(".audio").removeClass("play");
    $(".video").removeClass("play");
    audio.src = this.name;
    audio.play();

    $(this).addClass("play");

    let textAudioName = document.getElementById("text-audio"); //text in the panel

    textAudioName.textContent = this.childNodes[0].textContent;
    Current = this.dataset.audio;
  });

  for (let i = 0; i < audios.length; i++) {
    arrayAudio.push(audios[i]); // create array all items "a.audio"
  }

  for (let i = 0; i < videos.length; i++) {
    arrayVideos.push(videos[i]); // create array all items "video"
  }

  let arraybutton = []; // this is array element "button prev" and "button next"
  let button = $(".list-music .button");
  for (let i = 0; i < button.length; i++) {
    arraybutton.push(button[i]); // find all items ".list-music .button"
  }
  // document.getElementById("text-audio").innerHTML = arrayAudio[0].textContent;

  // function click "button prev"
  $(".button.prev").click(function() {
    if (Current == 1 || Current == 0) {
      Current = arrayAudio.length - 1;
    } else {
      Current--;
    }
    $(".audio").removeClass("play");
    $(".video").removeClass("play");
    document.getElementById("text-audio").innerHTML =
      arrayAudio[Current].textContent;
    arrayAudio[Current].className += " play";
    arrayVideos[Current].className += " play";
    audio.src = arrayAudio[Current].name;
    audio.play();
  });

  // function click "button next"
  $(".button.next").click(function() {
    if (Current == arrayAudio.length - 1) {
      Current = 1;
    } else {
      Current++;
    }
    $(".audio").removeClass("play");
    $(".video").removeClass("play");
    document.getElementById("text-audio").innerHTML =
      arrayAudio[Current].textContent;
    arrayAudio[Current].className += " play";
    arrayVideos[Current].className += " play";
    audio.src = arrayAudio[Current].name;
    audio.play();
  });

  //iterate over all the elements from the "arraybutton"
  arraybutton.forEach(function(elem) {
    //check which button is pressed
    elem.addEventListener("click", function(event) {
      let target = event.target;
      if (target) {
        let dataButton = $(".audio.play")[0].dataset.audio;
        arrayVideos.forEach(function(elem) {
          if (elem.classList.contains("play")) {
            elem.play();
          } else {
            elem.pause();
            elem.currentTime = "0";
          }
        });
        switchFunction(dataButton);
      }
    });
  });

  //iterate over all the elements from the "arrayAudio"
  arrayAudio.forEach(function(elem) {
    //check which button is pressed
    elem.addEventListener("click", function(event) {
      let target = event.target;
      if (target.classList.contains("play")) {
        // find out which element the class belongs to "play" and say what attribute it has
        let dataAudio = target.getAttribute("data-audio");
        arrayVideos.forEach(function(elem) {
          let dataVideo = elem.getAttribute("data-video");
          if (dataAudio == dataVideo) {
            elem.classList.add("play");
            elem.play();
          } else {
            elem.pause();
            elem.currentTime = "0";
          }
        });
        switchFunction(dataAudio);
      } else {
        console.log("sory");
      }
    });
  });
});

// function switch, which sets the properties for each audio
function switchFunction(dateElement) {
  switch (dateElement) {
    case "1": // if the audion and video has a date attribute of "1"
      changeRoundButn();
      changeActPanel();
      randombuttonEffects();
      changeSwitch();
      changeSwitchVertical();
      changeSliders();
      changeButtonFilter();
      break;
    case "2": // if the audion and video has a date attribute of "2"
      changeRoundButn();
      changeActPanel();
      randombuttonEffects();
      changeSwitch();
      changeSwitchVertical();
      changeSliders();
      changeButtonFilter();
      break;
    case "3": // if the audion and video has a date attribute of "3"
      changeRoundButn();
      changeActPanel();
      randombuttonEffects();
      changeSwitch();
      changeSwitchVertical();
      changeSliders();
      changeButtonFilter();
      break;
    default:
      console.log("Error");
  }
}

// function for all elements "RoundButn" in HTML
function changeRoundButn() {
  // Remove all attribute
  roundButns.removeAttr("style");
  // Add properties
  for (let i = 0; i < roundButns.length; i++) {
    if (roundButns[i].classList.contains("round-butn")) {
      let rand = randomFunction(-150, 150); //random element "round-butn" MIN and MAX
      roundButns[i].style.transform = `rotate(${rand}deg)`;
    } else {
      return false;
    }
  }
}

function changeButtonFilter() {
  // Remove all classes
  changeButtonFilters.removeClass("on");
  //Add properties
  changeButtonFilters[
    randomFunction(0, changeButtonFilters.length)
  ].classList.add("on");
  // mainСycle(changeButtonFilters, arguments); // function start "mainСycle"
}

function changeSwitch() {
  // Remove all classes
  switchs.removeClass("active");
  //Add properties
  switchs[randomFunction(0, switchs.length)].classList.add("active");
  // mainСycle(switchs, arguments); // function start "mainСycle"
}

function changeSwitchVertical() {
  // Remove all classes
  switchVertical.removeClass("active");
  //Add properties
  switchVertical[randomFunction(0, switchVertical.length)].classList.add(
    "active"
  );
  // mainСycle(switchVertical, arguments); // function start "mainСycle"
}

function changeSliders() {
  // Remove all attribute
  sliders.removeAttr("style");
  //Add properties
  let arraySliders = [];
  for (let i = 0; i < sliders.length; i++) {
    const element = sliders[i];
    arraySliders.push(element);
  }
  arraySliders.forEach(element => {
    element.style.top = `${randomFunction(0, 76)}%`;
  });
  // mainСycle(sliders, arguments); // function start "mainСycle"
}
//function to random element "round-butn"
function randomFunction(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function randombuttonEffects() {
  // Remove all classes
  buttonEffects.removeClass("on");

  //Add properties
  let obj = Object.values(objectbuttonEffects);
  let className = "on";
  mainchange(obj, className);
}

function changeActPanel() {
  // Remove all classes
  actPanels.removeClass("active");

  //Add properties
  let obj = Object.values(objectActPanels);
  let className = "active";
  mainchange(obj, className);
}

function mainchange(object, classes) {
  let array = [];
  for (let i = 0; i < object.length; i++) {
    let element = object[i];
    array.push(element);
  }
  array.forEach(element => {
    let arrayforEach = [];
    for (let i = 0; i < element.length; i++) {
      const ros = element[i];
      ros.classList.remove(`${classes}`);
      arrayforEach.push(ros);
    }
    let quantity = arrayforEach.length;
    arrayforEach[randomFunction(0, quantity)].classList.add(`${classes}`);
  });
}
