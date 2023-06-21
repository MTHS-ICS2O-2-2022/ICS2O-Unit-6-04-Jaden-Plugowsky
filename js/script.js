// Copyright (c) 2023 Jaden Plugowsky All rights reserved
//
// Created by: Jaden Plugowsky
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function pageOneLoaded() {
  // This function calculates the Volume of a Sphere using a given Radius

  const params = new URLSearchParams(document.location.search)

  // Input through Query Strings
  const radius = params.get("radius")
  const PI = Math.PI

  // Process
  const answer = (4 / 3) * PI * radius ** 3

  // Output
  document.getElementById("radius").innerHTML =
    "The Radius you inputted (in cm) is: " + radius + " cm"
  document.getElementById("volume").innerHTML =
    "The Volume of the Sphere (in cm³) is: " + answer.toFixed(2) + " cm³"
}

// This function is used for Page 2
// The code is taken from https://github.com/MTHS-ICS2O-2-2022/ICS2O-Unit-2-04-Jaden-Plugowsky, although it has been updated.
function pageTwoLoaded() {
  // This function calculates the Area of a Triangle using given values

  const params = new URLSearchParams(document.location.search)

  // Input through Query Strings
  const base = params.get("base")
  const height = params.get("height")

  // Process
  const area = (base * height) / 2

  // Output
  document.getElementById("base").innerHTML =
    "The Base you inputted (in cm) is: " + base + " cm"
  document.getElementById("height").innerHTML =
    "The Height you inputted (in cm) is: " + height + " cm"
  document.getElementById("area").innerHTML =
    "The Area of this Triangle is: " + area + " cm²"
}
