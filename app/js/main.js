$(document).ready(function() {
  $(".hide").click(function() {
    $(".list-audio").hide();
    $(".hide").hide();
  });
  $("#open-audio").click(function() {
    $(".list-audio").show();
    $(".hide").show();
  });

  var audio = new Audio(); // Создаём новый элемент Audio
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
  var text = [];
  for (let i = 0; i < audios.length; i++) {
    text.push(audios[i]);
  }
  document.getElementById("text-audio").innerHTML = text[Current].textContent;

  $(".button.prev").click(function() {
    if (Current == 0) {
      Current = text.length - 1;
    } else {
      Current--;
    }
    $(".audio").removeClass("play");
    document.getElementById("text-audio").innerHTML = text[Current].textContent;
    text[Current].className += " play";
  });

  $(".button.next").click(function() {
    if (Current == text.length - 1) {
      Current = 0;
    } else {
      Current++;
    }
    $(".audio").removeClass("play");
    document.getElementById("text-audio").innerHTML = text[Current].textContent;
    text[Current].className += " play";
  });
});
