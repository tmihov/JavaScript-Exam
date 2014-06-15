"use strict";
$(document).ready(function() {
  var min = 0;
  var sec = 0;
  var goalMin = 0;
  var goalSec = 0;
  var clockID;
  /*$("#buttons").on("click", function() {
    window.clearInterval(clockID);
    min = parseInt($("#minutes").val(), 10);
    sec = parseInt($("#seconds").val(), 10);
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
  });*/
  $("#down").on("click", function() {
    window.clearInterval(clockID);
    goalMin = parseInt($("#minutes").val(), 10);
    goalSec = parseInt($("#seconds").val(), 10);
    min = parseInt($("#minutes").val(), 10);
    sec = parseInt($("#seconds").val(), 10);
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
    toSpan(min, sec);
    clockID = setInterval(function() {
      if(sec !== 0) {
        sec = sec - 1;
      } else {
        min = min - 1;
        sec = 59;
      }
      toSpan(min, sec);
      if(min === 0 && sec === 0) {
        window.clearInterval(clockID);
        alert("Done. " + goalMin + " minutes and " + goalSec + " seconds have passed.");
      }
    },
     1000);
  });
  $("#up").on("click", function() {
    window.clearInterval(clockID);
    goalMin = parseInt($("#minutes").val(), 10);
    goalSec = parseInt($("#seconds").val(), 10);
    min = 0;
    sec = 0;
    if(sec === 60) {
      sec = 0;
      min = min + 1;
    }
    toSpan(min, sec);
    clockID = setInterval(function() {
      if(sec !== 59) {
        sec = sec + 1;
      } else {
        min = min + 1;
        sec = 0;
      }
      toSpan(min, sec);
      if(min === goalMin && sec === goalSec) {
        window.clearInterval(clockID);
        alert("Done. ");
      }
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
