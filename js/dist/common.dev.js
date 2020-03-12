"use strict";

var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      changeActive(blockID);
      closeMenu();
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function closeMenu() {
  var burger = document.getElementById("IBurger");
  var menu = document.getElementById("menu");
  var Wburger = document.getElementById('WBurger');
  burger.className = 'burgerA';
  menu.className = 'menu';
  Wburger.className = 'wrapBurger wrapBurgerA';
}

function changeActive(currentLi) {
  var anchors = document.querySelectorAll('a[href*="#"]');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = anchors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var anchor = _step2.value;

      if (anchor.getAttribute('href').substr(1) == currentLi) {
        console.log(anchor);
        anchor.className = 'active';
      } else {
        anchor.className = '';
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}

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