/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let nombre = ["Mi gato", "Mi mama", "Andres", "Mi papa"];
  let verbo = ["Corrio", "Escapo", "Se durmio", "Se fue"];
  let predicado = [
    "En el hospital",
    "En la escuela",
    "En la casa",
    "En la calle"
  ];

  let nombreIndex = Math.floor(Math.random() * nombre.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let predicadoIndex = Math.floor(Math.random() * predicado.length);

  document.querySelector("#excuse").innerHTML =
    nombre[nombreIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    predicado[predicadoIndex];
};
