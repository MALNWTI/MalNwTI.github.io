"use strict";

function burger() {
  var burger = document.getElementById("IBurger");
  var menu = document.getElementById("menu");
  var Wburger = document.getElementById('WBurger');

  if (burger.className == 'burgerA') {
    burger.className = 'burgerD';
    menu.className = "menuA";
    Wburger.className = 'wrapBurger wrapBurgerF';
  } else {
    burger.className = 'burgerA';
    menu.className = 'menu';
    Wburger.className = 'wrapBurger wrapBurgerA';
  }
}