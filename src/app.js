/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function aleatorio(base) {
    return Math.floor(Math.random() * base);
  }
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  var aImprimir =
    pronoun[aleatorio(2)] + adj[aleatorio(2)] + noun[aleatorio(2)] + ".com";
  document.getElementById("mensaje").innerHTML = aImprimir;

  console.log("Hello Rigo from the console!");
};
