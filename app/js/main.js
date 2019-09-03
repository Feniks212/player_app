$(document).ready(function() {
  $(".hide").click(function() {
    $(".list-audio").hide();
    $(".hide").hide();
  });
  $("#open-audio").click(function() {
    $(".list-audio").show();
    $(".hide").show();
  });

  var audio = new Audio(); // Create a new item Audio
  $(".audio").click(function() {
    $(".audio").removeClass("play");
    audio.src = this.name;
    audio.play();

    $(this).addClass("play");

    var textAudioName = document.getElementById("text-audio");
    textAudioName.textContent = this.childNodes[0].textContent;
  });

  var audios = $(".audio");
  var Current = 0;
  var arrayAhref = [];
  // var arrayData = [];
  for (let i = 0; i < audios.length; i++) {
    arrayAhref.push(audios[i]);
    // arrayData.push(audios[i].getAttribute('data-test'));
  }

  document.getElementById("text-audio").innerHTML =
    arrayAhref[Current].textContent;

  $(".button.prev").click(function() {
    if (Current == 0) {
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
      Current = 0;
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

  arrayAhref.forEach(function(elem) {
    elem.addEventListener("click", function(event) {
      var target = event.target;

      if (target.classList.contains("play")) {
        var dataTest = target.getAttribute("data-test");
      } else {
        console.log("sory");
      }

      switch (dataTest) {
        case "1":
          var roundButn = $(".round-butn");
          roundButn.css({
            transform: "rotate(150deg)"
          });

          break;
        case "2":
          var roundButn = $(".round-butn");
          roundButn.css({
            transform: "rotate(50deg)"
          });
          break;
        case "3":
          var roundButn = $(".round-butn");
          roundButn.css({
            transform: "rotate(30deg)"
          });
          break;
        case "4":
          var roundButn = $(".round-butn");
          roundButn.css({
            transform: "rotate(99deg)"
          });
          break;
        case "5":
          var roundButn = $(".round-butn");
          roundButn.css({
            transform: "rotate(130deg)"
          });
          break;
        default:
          console.log("Error");
      }
    });
  });
});
