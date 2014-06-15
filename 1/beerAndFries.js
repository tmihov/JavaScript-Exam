"use strict";

var beerAndFries = function(items) {
  var beer = [];
  var fries = [];
  var result = 0;
  items.forEach(function(item) {
    if(item.type === "beer") {
      beer.push(item.score);
    } else {
      fries.push(item.score);
    }
  });
  beer.sort(function(a, b) {
    return b - a;
  });
  fries.sort(function(a, b) {
    return b - a;
  });
  while(beer.length) {
    result = result + (beer.pop() * fries.pop());
  }
  return result;
};

exports.beerAndFries = beerAndFries;
