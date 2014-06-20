"use strict";
$(document).ready(function() {
  var min = 0;
  var sec = 0;
  var goalMin = 0;
  var goalSec = 0;
  var clockID;
  $("#down").on("click", function() {
    window.clearInterval(clockID);
    goalMin = parseInt($("#minutes").val(), 10);
    goalSec = parseInt($("#seconds").val(), 10);
    min = parseInt($("#minutes").val(), 10);
    sec = parseInt($("#seconds").val(), 10);
    if(isNaN(min)) {
      min = 0;
      goalMin = 0;
    }
    if(isNaN(sec)) {
      sec = 0;
      goalSec = 0;
    }
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
    toSpan(min, sec);
    clockID = setInterval(function() {
      if(min === 0 && sec === 0) {
        window.clearInterval(clockID);
        alert("Done. " + goalMin + " minutes and " + goalSec + " seconds have passed.");
        return 0;
      }
      if(sec !== 0) {
        sec = sec - 1;
      } else {
        min = min - 1;
        sec = 59;
      }
      toSpan(min, sec);
    },
     1000);
  });
  $("#up").on("click", function() {
    window.clearInterval(clockID);
    goalMin = parseInt($("#minutes").val(), 10);
    goalSec = parseInt($("#seconds").val(), 10);
    min = 0;
    sec = 0;
    if(isNaN(goalMin)) {
      goalMin = 0;
    }
    if(isNaN(goalSec)) {
      goalSec = 0;
    }
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
    toSpan(min, sec);
    clockID = setInterval(function() {
      if(min === goalMin && sec === goalSec) {
        window.clearInterval(clockID);
        alert("Done. ");
        return 0;
      }
      if(sec !== 59) {
        sec = sec + 1;
      } else {
        min = min + 1;
        sec = 0;
      }
      toSpan(min, sec);
    },
     1000);
  });
  $("#stopReset").on("click", function() {
    window.clearInterval(clockID);
    min = 0;
    sec = 0;
    $("#second-first-digit").text(0);
    $("#second-second-digit").text(0);
    $("#minute-first-digit").text(0);
    $("#minute-second-digit").text(0);
  });
});

var toSpan = function(minutes, seconds) {
  if(seconds < 10) {
        $("#second-first-digit").text("0");
        $("#second-second-digit").text(seconds);
      } else {
        $("#second-first-digit").text(seconds.toString().charAt(0));
        $("#second-second-digit").text(seconds.toString().charAt(1));
      }
      if(minutes < 10) {
        $("#minute-first-digit").text("0");
        $("#minute-second-digit").text(minutes);
      } else {
        $("#minute-first-digit").text(minutes.toString().charAt(0));
        $("#minute-second-digit").text(minutes.toString().charAt(1));
      }
};
