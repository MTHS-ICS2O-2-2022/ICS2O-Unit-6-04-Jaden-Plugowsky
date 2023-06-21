// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // This function calculates the volume of a sphere using a given radius

  const params = new URLSearchParams(document.location.search)

  // Input through Textfields or Query Strings
  const radius = params.get("radius")
  const PI = Math.PI

  // Process
  const answer = (4 / 3) * PI * radius ** 3

  // Output
  document.getElementById("radius").innerHTML =
    "The Radius you inputted (in cm) is: " + radius + "cm"
  document.getElementById("volume").innerHTML =
    "The Volume of the Sphere (in cm³) is: " + answer.toFixed(2) + "cm³"
}
