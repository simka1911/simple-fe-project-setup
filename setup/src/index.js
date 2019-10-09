import {me} from "./dependency.js";
let bla = "Bla";
console.log(bla);
function truc (bart, dule) {
    console.log(bart === dule);
}
truc(bla, me);