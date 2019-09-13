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
  // let event = new Event("touchstart");
  let audio = new Audio(); // Create a new item Audio
  let audios = $(".audio"); // find all items "audio"
  let videos = $(".video"); // find all items "video"
  let Current = 0; // procedure
  let arrayAudio = []; // this is array element "a.audio"
  audio.autoplay = true;

  // let arrayVideos = []; // this is array element "video"

  // setTimeout(() => {
  $(".overlapping").fadeOut();
  // }, 4000);

  // let myTimer = setInterval(loopTime, 7000);
  // // $(".overlapping").fadeOut();

  let popup = document.querySelector(".open-popup");
  popup.addEventListener("click", function(event) {
    let target = event.target;
    if (target) {
      $(".overlapping")[0].style.opacity = "1";
      $(".overlapping").fadeIn(500);
      setTimeout(function() {
        $(".overlapping").fadeOut(500);
        $(".overlapping")[0].style.opacity = "0";
      }, 3000);
      // clearInterval(myTimer);
      // myTimer = setInterval(loopTime, 11000);
    }
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
    audio.onended = function() {
      videos[0].pause();
      videos[0].currentTime = "0";
    };
  });

  for (let i = 0; i < audios.length; i++) {
    arrayAudio.push(audios[i]); // create array all items "a.audio"
  }

  // for (let i = 0; i < videos.length; i++) {
  //   arrayVideos.push(videos[i]); // create array all items "video"
  // }

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
    videos[0].className += " play";

    audio.src = arrayAudio[Current].name;
    audio.play();

    audio.onended = function() {
      videos[0].pause();
      videos[0].currentTime = "0";
    };
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
    videos[0].className += " play";
    audio.src = arrayAudio[Current].name;
    audio.play();

    audio.onended = function() {
      videos[0].pause();
      videos[0].currentTime = "0";
    };
  });

  //iterate over all the elements from the "arraybutton"
  arraybutton.forEach(function(elem) {
    //check which button is pressed
    elem.addEventListener("click", function(event) {
      let target = event.target;
      if (target) {
        let dataButton = $(".audio.play")[0].dataset.audio;
        // arrayVideos.forEach(function(elem) {
        if (videos[0].className != "play") {
          videos[0].currentTime = "0";
          videos[0].classList.add("play");
          videos[0].play();
        } else {
          videos[0].pause();
          videos[0].currentTime = "0";
        }
        // });
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
        // arrayVideos.forEach(function(elem) {
        if (videos[0].className != "play") {
          videos[0].currentTime = "0";
          videos[0].classList.add("play");
          videos[0].play();
        } else {
          videos[0].pause();
          videos[0].currentTime = "0";
        }
        // });
        switchFunction(dataAudio);
        console.log(dataAudio);
      } else {
        console.log("sory");
      }
    });
  });
  const individuallyObj = new Object();
  for (let i = 1; i < arrayAudio.length; i++) {
    individuallyObj[i] = {
      actPanels: actPanels,
      buttonEffects: buttonEffects,
      changeButtonFilters: changeButtonFilters,
      roundButns: roundButns,
      sliders: sliders,
      switchVertical: switchVertical,
      switchs: switchs
    };
  }

  const settingRoundButns = new Object();
  const settingActPanels = new Object();
  const settingbuttonEffects = new Object();
  const settingchangeButtonFilters = new Object();
  const settingsliders = new Object();
  const settingswitchVertical = new Object();
  const settingswitchs = new Object();

  Object.keys(individuallyObj).forEach(element => {
    settingRoundButns[element] = new Array();
    settingActPanels[element] = new Array();
    settingbuttonEffects[element] = new Array();
    settingchangeButtonFilters[element] = new Array();
    settingsliders[element] = new Array();
    settingswitchVertical[element] = new Array();
    settingswitchs[element] = new Array();

    //roundButns
    for (let i = 0; i < individuallyObj[element].roundButns.length; i++) {
      let htmlelement = individuallyObj[element].roundButns[i];
      if (htmlelement.classList.contains("round-butn")) {
        let rand = randomFunction(-150, 150); //random element "round-butn" MIN and MAX
        let addToArray = `rotate(${rand}deg)`; //roundButns[i].style.transform =
        settingRoundButns[element].push(addToArray);
      } else {
        console.log("error");
      }
    }

    let classNameAct = "active";
    let classNameOn = "on";

    //ActPanels
    let newArrayForAct = [];
    individualSetting(
      objectActPanels,
      settingActPanels[element],
      classNameAct,
      newArrayForAct
    );
    settingActPanels[element] = [];
    settingActPanels[element].push(newArrayForAct);

    //buttonEffects
    let newArraybuttonEffects = [];
    individualSetting(
      objectbuttonEffects,
      settingbuttonEffects[element],
      classNameOn,
      newArraybuttonEffects
    );
    settingbuttonEffects[element] = [];
    settingbuttonEffects[element].push(newArraybuttonEffects);

    //ButtonFilters
    let newArrayButtonFilters = [];
    individualSettingSmall(
      individuallyObj[element].changeButtonFilters,
      settingchangeButtonFilters[element],
      classNameOn,
      newArrayButtonFilters
    );
    settingchangeButtonFilters[element] = [];
    settingchangeButtonFilters[element].push(newArrayButtonFilters);

    //switchs
    let newArrayswitchs = [];
    individualSettingSmall(
      individuallyObj[element].switchs,
      settingswitchs[element],
      classNameAct,
      newArrayswitchs
    );
    settingswitchs[element] = [];
    settingswitchs[element].push(newArrayswitchs);

    //switchsVertical
    let newArrayswitchsVertical = [];
    individualSettingSmall(
      individuallyObj[element].switchVertical,
      settingswitchVertical[element],
      classNameAct,
      newArrayswitchsVertical
    );
    settingswitchVertical[element] = [];
    settingswitchVertical[element].push(newArrayswitchsVertical);

    //Sliders
    for (let i = 0; i < individuallyObj[element].sliders.length; i++) {
      let htmlelement = individuallyObj[element].sliders[i];
      if (htmlelement.classList.contains("slider")) {
        let rand = randomFunction(0, 76); //random element "sliders" MIN and MAX
        let addToArray = `${rand}%`; //roundButns[i].style.transform =

        settingsliders[element].push(addToArray);
      } else {
        console.log("error");
      }
    }

    console.log("end");
  });

  function individualSetting(objects, arrays, classes, newArray) {
    let obj = Object.values(objects);
    for (let i = 0; i < obj.length; i++) {
      let objelement = obj[i];
      arrays.push(objelement);
    }
    arrays.forEach(element => {
      let arrayforEach = [];
      for (let i = 0; i < element.length; i++) {
        element[i] = "";
        const ros = element[i];
        arrayforEach.push(ros);
      }
      let quantity = arrayforEach.length;
      arrayforEach[randomFunction(0, quantity)] = `${classes}`;

      for (let j = 0; j < arrayforEach.length; j++) {
        const el = arrayforEach[j];
        newArray.push(el);
      }
    });
  }

  function individualSettingSmall(objects, arrays, classes, newArray) {
    for (let i = 0; i < objects.length; i++) {
      let htmlelement = objects[i];
      arrays.push(htmlelement);
    }
    for (let i = 0; i < arrays.length; i++) {
      arrays[i] = "";
      const ros = arrays[i];
      newArray.push(ros);
    }
    let quantity = newArray.length;
    newArray[randomFunction(0, quantity)] = `${classes}`;
  }

  // setTimeout(() => {
  //   readyFirstSong();
  // }, 3000);

  // function loopTime() {
  //   $(".overlapping")[0].style.opacity = "1";
  //   $(".overlapping").fadeIn(500);
  //   setTimeout(() => {
  //     $(".overlapping").fadeOut(500);
  //     $(".overlapping")[0].style.opacity = "0";
  //   }, 3000);
  // }
  // clearInterval(myTimer);
  // myTimer = setInterval(loopTime, 11000);
  console.log(settingRoundButns);
  console.log(settingActPanels);
  console.log(settingbuttonEffects);
  console.log(settingchangeButtonFilters);
  console.log(settingsliders);
  console.log(settingswitchVertical);
  console.log(settingswitchs);

  // function switch, which sets the properties for each audio
  function switchFunction(dateElement) {
    switch (dateElement) {
      case "1": // if the audion and video has a date attribute of "1"
        changeRoundButn(settingRoundButns[dateElement]);
        changeActPanel(settingActPanels[dateElement][0]);
        randombuttonEffects(settingbuttonEffects[dateElement][0]);
        changeSliders(settingsliders[dateElement]);
        changeButtonFilter(settingchangeButtonFilters[dateElement][0]);
        changeSwitch(settingswitchs[dateElement][0]);
        changeSwitchVertical(settingswitchVertical[dateElement][0]);
        break;
      case "2": // if the audion and video has a date attribute of "2"
        changeRoundButn(settingRoundButns[dateElement]);
        changeActPanel(settingActPanels[dateElement][0]);
        randombuttonEffects(settingbuttonEffects[dateElement][0]);
        changeSliders(settingsliders[dateElement]);
        changeButtonFilter(settingchangeButtonFilters[dateElement][0]);
        changeSwitch(settingswitchs[dateElement][0]);
        changeSwitchVertical(settingswitchVertical[dateElement][0]);
        break;
      case "3": // if the audion and video has a date attribute of "3"
        changeRoundButn(settingRoundButns[dateElement]);
        changeActPanel(settingActPanels[dateElement][0]);
        randombuttonEffects(settingbuttonEffects[dateElement][0]);
        changeSliders(settingsliders[dateElement]);
        changeButtonFilter(settingchangeButtonFilters[dateElement][0]);
        changeSwitch(settingswitchs[dateElement][0]);
        changeSwitchVertical(settingswitchVertical[dateElement][0]);
        break;
      default:
        console.log("Error");
    }
  }

  // function for all elements "RoundButn" in HTML
  function changeRoundButn(arrays) {
    // Remove all attribute
    roundButns.removeAttr("style");
    // Add properties
    for (let i = 0; i < roundButns.length; i++) {
      roundButns[i].style.transform = arrays[i];
    }
    // mainСycle(roundButns, arrays); // function start "mainСycle"
  }
  function changeSliders(arrays) {
    // Remove all attribute
    sliders.removeAttr("style");
    //Add properties
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].style.top = arrays[i];
    }

    // let arraySliders = [];
    // for (let i = 0; i < sliders.length; i++) {
    //   const element = sliders[i];
    //   arraySliders.push(element);
    // }
    // arraySliders.forEach(element => {
    //   element.style.top = `${randomFunction(0, 76)}%`;
    // });
    // mainСycle(sliders, arguments); // function start "mainСycle"
  }

  function changeButtonFilter(arrays) {
    // Remove all classes
    changeButtonFilters.removeClass("on");
    //Add properties

    for (let i = 0; i < changeButtonFilters.length; i++) {
      if (arrays[i] != "") {
        changeButtonFilters[i].classList.add(arrays[i]);
      } else {
        changeButtonFilters[i].classList.remove("on");
      }
    }

    // changeButtonFilters[
    //   randomFunction(0, changeButtonFilters.length)
    // ].classList.add("on");
    // mainСycle(changeButtonFilters, arguments); // function start "mainСycle"
  }

  function changeSwitch(arrays) {
    // Remove all classes
    switchs.removeClass("active");
    //Add properties
    for (let i = 0; i < switchs.length; i++) {
      if (arrays[i] != "") {
        switchs[i].classList.add(arrays[i]);
      } else {
        switchs[i].classList.remove("active");
      }
    }
    // switchs[randomFunction(0, switchs.length)].classList.add("active");
    // mainСycle(switchs, arguments); // function start "mainСycle"
  }

  function changeSwitchVertical(arrays) {
    // Remove all classes
    switchVertical.removeClass("active");
    //Add properties
    for (let i = 0; i < switchVertical.length; i++) {
      if (arrays[i] != "") {
        switchVertical[i].classList.add(arrays[i]);
      } else {
        switchVertical[i].classList.remove("active");
      }
    }
    // mainСycle(switchVertical, arguments); // function start "mainСycle"
  }

  //function to random element "round-butn"
  function randomFunction(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function randombuttonEffects(arrays) {
    // Remove all classes
    buttonEffects.removeClass("on");

    //Add properties
    for (let i = 0; i < buttonEffects.length; i++) {
      if (arrays[i] != "") {
        buttonEffects[i].classList.add(arrays[i]);
      } else {
        buttonEffects[i].classList.remove("on");
      }
    }
    // let obj = Object.values(objectbuttonEffects);
    // let className = "on";
    // mainchange(obj, className);
  }

  function changeActPanel(arrays) {
    // Remove all classes
    actPanels.removeClass("active");

    //Add properties
    for (let i = 0; i < actPanels.length; i++) {
      if (arrays[i] != "") {
        actPanels[i].classList.add(arrays[i]);
      } else {
        actPanels[i].classList.remove("active");
      }
    }
    // mainСycle(actPanels, arguments);
  }
  // function mainchange(object, classes) {
  //   let array = [];
  //   for (let i = 0; i < object.length; i++) {
  //     let element = object[i];
  //     array.push(element);
  //   }
  //   array.forEach(element => {
  //     let arrayforEach = [];
  //     for (let i = 0; i < element.length; i++) {
  //       const ros = element[i];
  //       ros.classList.remove(`${classes}`);
  //       arrayforEach.push(ros);
  //     }
  //     let quantity = arrayforEach.length;
  //     arrayforEach[randomFunction(0, quantity)].classList.add(`${classes}`);
  //   });
  // }

  // function readyFirstSong() {
  //   // audio = new Audio();

  //   let firstSong = $(".audio")[1];
  //   event = document.createEvent("HTMLEvents");
  //   console.log(event);
  //   event.initEvent("click", true, true);
  //   audio.autoplay = true;
  //   // firstSong.classList.remove("play");
  //   audio.src = firstSong.name;
  //   audio.play();
  //   let textAudioName = document.getElementById("text-audio");
  //   textAudioName.textContent = firstSong.childNodes[0].textContent;
  //   Current = firstSong.dataset.audio;
  //   switchFunction("1");

  //   firstSong.classList.add("play");
  //   videos[0].classList.add("play");
  //   videos[0].play();

  //   firstSong.dispatchEvent(event);
  //   firstSong.addEventListener(
  //     "click",
  //     function() {
  //       audio.play();
  //       videos[0].play();
  //     },
  //     false
  //   );

  //   if (firstSong !== undefined) {
  //     firstSong
  //       .catch(error => {
  //         firstSong.classList.remove("play");
  //       })
  //       .then(() => {
  //         audio.play();
  //       });
  //   }
  //   audio.onended = function() {
  //     videos[0].pause();
  //     videos[0].currentTime = "0";
  //   };
  // }

  // function mainСycle(elem, properties) {
  //   for (let i = 0; i < elem.length; i++) {
  //     if (elem[i].classList.contains("round-butn")) {
  //       let rand = randomFunction(-150, 150); //random element "round-butn" MIN and MAX
  //       let addtoarray = `rotate(${rand}deg)`; //roundButns[i].style.transform =
  //       properties.push(addtoarray);
  //       elem[i].style.transform = properties[i];
  //     } else if (
  //       elem[i].classList.contains("act-panel") ||
  //       elem[i].classList.contains("switch") ||
  //       elem[i].classList.contains("switch-vertical")
  //     ) {
  //       if (properties[i] != "") {
  //         elem[i].classList.add(properties[i]);
  //       } else {
  //         elem[i].classList.remove("active");
  //       }
  //     } else if (
  //       elem[i].classList.contains("button-effects") ||
  //       elem[i].classList.contains("filters")
  //     ) {
  //       if (properties[i] != "") {
  //         elem[i].classList.add(properties[i]);
  //         // randombuttonEffects();
  //       } else {
  //         elem[i].classList.remove("on");
  //       }
  //     } else if (elem[i].classList.contains("slider")) {
  //       elem[i].style.top = properties[i];
  //     } else {
  //       console.log("error");
  //     }
  //   }
  // }
});
