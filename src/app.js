/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["the dog", "my granma", "his turtle", "my bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right in time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  document.querySelector("h2").innerHTML = `${arrAleatorio(who)} ${arrAleatorio(
    action
  )} ${arrAleatorio(what)} 
  ${arrAleatorio(when)}`;
};

function arrAleatorio(arr) {
  let lugarArreglo = Math.floor(Math.random() * arr.length);
  return arr[lugarArreglo];
}
