/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let what = ["eat", "pissed", "crushed", "broked"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  document.querySelector("h2").innerHTML = `${arrAleatorio(who)} ${arrAleatorio(
    what
  )} 
  ${arrAleatorio(when)}`;
};

function arrAleatorio(arr) {
  let lugarArreglo = Math.floor(Math.random() * arr.length);
  return arr[lugarArreglo];
}
