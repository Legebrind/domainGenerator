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
  let noun = ["jogger", "racoonet"];
  let extension = [".net", ".com"];
  var aImprimir = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let n = 0; n < noun.length; n++) {
        for (let y = 0; y < extension.length; y++) {
          aImprimir += pronoun[i] + adj[j] + noun[n] + extension[y] + "</br>";
        }
      }
    }
  }
  document.getElementById("mensaje").innerHTML = aImprimir;

  console.log("Hello Rigo from the console!");
};
