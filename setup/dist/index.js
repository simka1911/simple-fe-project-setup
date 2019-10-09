"use strict";

var _dependency = require("./dependency.js");

var bla = "Bla";
console.log(bla);

function truc(bart, dule) {
  console.log(bart === dule);
}

truc(bla, _dependency.me);