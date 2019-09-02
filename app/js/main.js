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
  for (let i = 0; i < audios.length; i++) {
    arrayAhref.push(audios[i]);
  }
  document.getElementById("text-audio").innerHTML = arrayAhref[Current].textContent;

  $(".button.prev").click(function() {
    if (Current == 0) {
      Current = arrayAhref.length - 1;
    } else {
      Current--;
    }
    $(".audio").removeClass("play");
    document.getElementById("text-audio").innerHTML = arrayAhref[Current].textContent;
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
    document.getElementById("text-audio").innerHTML = arrayAhref[Current].textContent;
    arrayAhref[Current].className += " play";
    audio.src = arrayAhref[Current].name;
    audio.play();
  });

//   arrayAhref.forEach(function(elem){
//       if(elem Class = 'play'){
//         var bla = elem.getAttribute('data-test');

//         switch(bla){
//             case '1':
//                 console.log('richazhki pominyat na 1 positioning');
//             break;

//             case '2':
//                 console.log('richazhki pominyat na 2 positioning');
//             break;

//             case '3':
//                 console.log('richazhki pominyat na 3 positioning');
//             break;
//         }
//       }
//   })

});

