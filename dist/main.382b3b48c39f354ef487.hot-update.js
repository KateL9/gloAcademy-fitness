/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness"]("main",{

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar calculator = function calculator() {\n  var form = document.getElementById('card_order'),\n      priceTotal = document.querySelector('#price-total'),\n      promoInput = document.querySelector('input[placeholder = \"Промокод\"]'),\n      mozaika = document.querySelector('#card_leto_mozaika'),\n      schelkovo = document.querySelector('#card_leto_schelkovo'),\n      prices = {\n    mozaika: {\n      1: 1999,\n      6: 9900,\n      9: 13900,\n      12: 19900\n    },\n    schelkovo: {\n      1: 2999,\n      6: 14990,\n      9: 21990,\n      12: 24990\n    }\n  };\n  var amount = 1; // change price\n\n  form.addEventListener('change', function (event) {\n    var checked = function checked() {\n      if (schelkovo.checked) {\n        priceTotal.innerHTML = prices.schelkovo[amount];\n      } else if (mozaika.checked) {\n        priceTotal.innerHTML = prices.mozaika[amount];\n      }\n    };\n\n    var checkPromo = function checkPromo(promo) {\n      if (promoInput && promo.trim() === 'ТЕЛО2020') {\n        priceTotal.innerHTML = priceTotal.textContent - Math.floor(priceTotal.textContent * (30 / 100));\n      }\n    };\n\n    if (!event.target.closest('.time')) {\n      checked();\n\n      if (event.target.matches('input[placeholder = \"Промокод\"]')) {\n        checkPromo(event.target.value);\n      }\n    } else {\n      if (mozaika && mozaika.checked) {\n        amount = event.target.value;\n        priceTotal.innerHTML = prices.mozaika[event.target.value];\n      }\n\n      if (schelkovo && schelkovo.checked) {\n        amount = event.target.value;\n        priceTotal.innerHTML = prices.schelkovo[event.target.value];\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvY2FsY3VsYXRvci5qcz9jMmFhIl0sIm5hbWVzIjpbImNhbGN1bGF0b3IiLCJmb3JtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInByaWNlVG90YWwiLCJxdWVyeVNlbGVjdG9yIiwicHJvbW9JbnB1dCIsIm1vemFpa2EiLCJzY2hlbGtvdm8iLCJwcmljZXMiLCJhbW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjaGVja2VkIiwiaW5uZXJIVE1MIiwiY2hlY2tQcm9tbyIsInByb21vIiwidHJpbSIsInRleHRDb250ZW50IiwiTWF0aCIsImZsb29yIiwidGFyZ2V0IiwiY2xvc2VzdCIsIm1hdGNoZXMiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBYjtBQUFBLE1BQ0lDLFVBQVUsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLGNBQXZCLENBRGpCO0FBQUEsTUFFSUMsVUFBVSxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsaUNBQXZCLENBRmpCO0FBQUEsTUFHSUUsT0FBTyxHQUFHTCxRQUFRLENBQUNHLGFBQVQsQ0FBdUIsb0JBQXZCLENBSGQ7QUFBQSxNQUlJRyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixzQkFBdkIsQ0FKaEI7QUFBQSxNQUtJSSxNQUFNLEdBQUc7QUFDTEYsV0FBTyxFQUFFO0FBQ0wsU0FBRyxJQURFO0FBRUwsU0FBRyxJQUZFO0FBR0wsU0FBRyxLQUhFO0FBSUwsVUFBSTtBQUpDLEtBREo7QUFPTEMsYUFBUyxFQUFFO0FBQ1AsU0FBRyxJQURJO0FBRVAsU0FBRyxLQUZJO0FBR1AsU0FBRyxLQUhJO0FBSVAsVUFBSTtBQUpHO0FBUE4sR0FMYjtBQW9CQSxNQUFJRSxNQUFNLEdBQUcsQ0FBYixDQXJCcUIsQ0FzQnJCOztBQUNBVCxNQUFJLENBQUNVLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDLFVBQUNDLEtBQUQsRUFBVztBQUV2QyxRQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQ2xCLFVBQUlMLFNBQVMsQ0FBQ0ssT0FBZCxFQUF1QjtBQUNuQlQsa0JBQVUsQ0FBQ1UsU0FBWCxHQUF1QkwsTUFBTSxDQUFDRCxTQUFQLENBQWlCRSxNQUFqQixDQUF2QjtBQUNILE9BRkQsTUFFTyxJQUFJSCxPQUFPLENBQUNNLE9BQVosRUFBcUI7QUFDeEJULGtCQUFVLENBQUNVLFNBQVgsR0FBdUJMLE1BQU0sQ0FBQ0YsT0FBUCxDQUFlRyxNQUFmLENBQXZCO0FBQ0g7QUFDSixLQU5EOztBQVFBLFFBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLEtBQUQsRUFBVztBQUMxQixVQUFJVixVQUFVLElBQUlVLEtBQUssQ0FBQ0MsSUFBTixPQUFpQixVQUFuQyxFQUErQztBQUMzQ2Isa0JBQVUsQ0FBQ1UsU0FBWCxHQUF1QlYsVUFBVSxDQUFDYyxXQUFYLEdBQXlCQyxJQUFJLENBQUNDLEtBQUwsQ0FBV2hCLFVBQVUsQ0FBQ2MsV0FBWCxJQUEwQixLQUFLLEdBQS9CLENBQVgsQ0FBaEQ7QUFDSDtBQUNKLEtBSkQ7O0FBS0EsUUFBSSxDQUFDTixLQUFLLENBQUNTLE1BQU4sQ0FBYUMsT0FBYixDQUFxQixPQUFyQixDQUFMLEVBQW9DO0FBQ2hDVCxhQUFPOztBQUNQLFVBQUlELEtBQUssQ0FBQ1MsTUFBTixDQUFhRSxPQUFiLENBQXFCLGlDQUFyQixDQUFKLEVBQTZEO0FBQ3pEUixrQkFBVSxDQUFDSCxLQUFLLENBQUNTLE1BQU4sQ0FBYUcsS0FBZCxDQUFWO0FBQ0g7QUFDSixLQUxELE1BS087QUFDSCxVQUFJakIsT0FBTyxJQUFJQSxPQUFPLENBQUNNLE9BQXZCLEVBQWdDO0FBQzVCSCxjQUFNLEdBQUdFLEtBQUssQ0FBQ1MsTUFBTixDQUFhRyxLQUF0QjtBQUNBcEIsa0JBQVUsQ0FBQ1UsU0FBWCxHQUF1QkwsTUFBTSxDQUFDRixPQUFQLENBQWVLLEtBQUssQ0FBQ1MsTUFBTixDQUFhRyxLQUE1QixDQUF2QjtBQUNIOztBQUNELFVBQUloQixTQUFTLElBQUlBLFNBQVMsQ0FBQ0ssT0FBM0IsRUFBb0M7QUFDaENILGNBQU0sR0FBR0UsS0FBSyxDQUFDUyxNQUFOLENBQWFHLEtBQXRCO0FBQ0FwQixrQkFBVSxDQUFDVSxTQUFYLEdBQXVCTCxNQUFNLENBQUNELFNBQVAsQ0FBaUJJLEtBQUssQ0FBQ1MsTUFBTixDQUFhRyxLQUE5QixDQUF2QjtBQUNIO0FBQ0o7QUFDSixHQTlCRDtBQStCSCxDQXRERDs7QUF3REEsaUVBQWV4QixVQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvY2FsY3VsYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbGN1bGF0b3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmRfb3JkZXInKSxcclxuICAgICAgICBwcmljZVRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaWNlLXRvdGFsJyksXHJcbiAgICAgICAgcHJvbW9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3BsYWNlaG9sZGVyID0gXCLQn9GA0L7QvNC+0LrQvtC0XCJdJyksXHJcbiAgICAgICAgbW96YWlrYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkX2xldG9fbW96YWlrYScpLFxyXG4gICAgICAgIHNjaGVsa292byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJkX2xldG9fc2NoZWxrb3ZvJyksXHJcbiAgICAgICAgcHJpY2VzID0ge1xyXG4gICAgICAgICAgICBtb3phaWthOiB7XHJcbiAgICAgICAgICAgICAgICAxOiAxOTk5LFxyXG4gICAgICAgICAgICAgICAgNjogOTkwMCxcclxuICAgICAgICAgICAgICAgIDk6IDEzOTAwLFxyXG4gICAgICAgICAgICAgICAgMTI6IDE5OTAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzY2hlbGtvdm86IHtcclxuICAgICAgICAgICAgICAgIDE6IDI5OTksXHJcbiAgICAgICAgICAgICAgICA2OiAxNDk5MCxcclxuICAgICAgICAgICAgICAgIDk6IDIxOTkwLFxyXG4gICAgICAgICAgICAgICAgMTI6IDI0OTkwLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICBsZXQgYW1vdW50ID0gMTtcclxuICAgIC8vIGNoYW5nZSBwcmljZVxyXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2tlZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHNjaGVsa292by5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmljZVRvdGFsLmlubmVySFRNTCA9IHByaWNlcy5zY2hlbGtvdm9bYW1vdW50XTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb3phaWthLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaWNlVG90YWwuaW5uZXJIVE1MID0gcHJpY2VzLm1vemFpa2FbYW1vdW50XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrUHJvbW8gPSAocHJvbW8pID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb21vSW5wdXQgJiYgcHJvbW8udHJpbSgpID09PSAn0KLQldCb0J4yMDIwJykge1xyXG4gICAgICAgICAgICAgICAgcHJpY2VUb3RhbC5pbm5lckhUTUwgPSBwcmljZVRvdGFsLnRleHRDb250ZW50IC0gTWF0aC5mbG9vcihwcmljZVRvdGFsLnRleHRDb250ZW50ICogKDMwIC8gMTAwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50aW1lJykpIHtcclxuICAgICAgICAgICAgY2hlY2tlZCgpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ2lucHV0W3BsYWNlaG9sZGVyID0gXCLQn9GA0L7QvNC+0LrQvtC0XCJdJykpIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrUHJvbW8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChtb3phaWthICYmIG1vemFpa2EuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgYW1vdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcHJpY2VUb3RhbC5pbm5lckhUTUwgPSBwcmljZXMubW96YWlrYVtldmVudC50YXJnZXQudmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzY2hlbGtvdm8gJiYgc2NoZWxrb3ZvLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGFtb3VudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHByaWNlVG90YWwuaW5uZXJIVE1MID0gcHJpY2VzLnNjaGVsa292b1tldmVudC50YXJnZXQudmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FsY3VsYXRvcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/calculator.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "0b844af58801bd834ea3"
/******/ 	})();
/******/ 	
/******/ }
);