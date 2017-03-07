$(document).ready(function() {

$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) +
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) +
     $(window).scrollLeft()) + "px"
  );
  return this;
}

$("#overlay").show();
$("#overlay-content").show().center();

//nice use of timer
setTimeout(function(){
  $("#overlay").fadeOut();
}, 10000);

//hm, I think the order in which this function is called is a bit off
//I like where you are going with it though
function checkIfComplete() {
    if (isComplete === false) {
        isComplete = true;
    } else {
        place = 'second';

    }
}
});


var sharkWidth = $('#hungryShark').width();

var raceTrackWidth = $(window).width() - sharkWidth;

var swimTime1 = Math.floor((Math.random() * 5000) + 1);
var swimTime2 = Math.floor((Math.random() * 5000) + 1);

var isComplete = false;
var place = 'first';

left: raceTrackWidth

// Shark speed
setInterval(moveShark, 35);
var keys = {}

$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});
//Arrow key movements
function moveShark() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 37) {
            $("#angryShark").animate({
                left: "-=5"
            }, 0);
            break;

        }
        if (direction == 38) {
            $("#angryShark").animate({
                top: "-=5"
            }, 0);
            break;
        }
        if (direction == 39) {
            $("#angryShark").animate({
                left: "+=5"
            }, 0);
            break;
        }
        if (direction == 40) {
            $("#angryShark").animate({
                top: "+=5"
            }, 0);
            break;
            checkIfComplete();
            $('#raceInfo1 span').text('Finished in ' + place + ' place and clocked in at ' + swimTime1 + ' Milliseconds! ');
        }
    }
}


//good - naming of vars could be better here, maybe use camelCase
var Xpos = 0; //Sets starting position left/right
var Ypos = 0; //Sets starting position up/down
var spd = 300; //Milliseconds
var dstnc = 60; //Pixels

//good logic
$(document).keydown(function(e) {
    if (e.keyCode == 87) { //W Up
        $('#hungryShark').animate({
            top: -dstnc + Ypos + 'px'
        }, spd);
        Ypos = Ypos - dstnc;

    }
    if (e.keyCode == 68) { //D Right
        $('#hungryShark').animate({
            left: dstnc + Xpos + 'px'
        }, spd);
        Xpos = Xpos + dstnc;
    }
    if (e.keyCode == 83) { //S Down
        $('#hungryShark').animate({
            top: dstnc + Ypos + 'px'
        }, spd);
        Ypos = Ypos + dstnc;
    }
    if (e.keyCode == 65) { //A Left
        $('#hungryShark').animate({
            left: -dstnc + Xpos + 'px'
        }, spd);
        Xpos = Xpos - dstnc;
    }
});
checkIfComplete();
$('#raceInfo2 span').text('Finished in ' + place + ' place and clocked in at ' + swimTime2 + ' Milliseconds! ');


var sec = 15
var timer = setInterval(function() {
    $('#hideMsg span').text(sec--);
    if (sec == -1) {
        alert("TIMES UP!!");
        window.location.reload();
    }
}, 1000);
