/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatefitness"]("main",{

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .dot')) {\n      return;\n    }\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYOztBQUlBLE9BQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0gsU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0FOLFNBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixDQUF6QjtBQUNIOztBQUVELE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUFBLE1BQ0lDLFFBREo7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCWCxTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBTixTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CRSxPQUFuQixHQUE2QixDQUE3QjtBQUNBTCxRQUFJLENBQUNTLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixjQUE3QjtBQUVILEdBTEQ7O0FBT0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsS0FBRCxFQUFXO0FBQ3pCWCxTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixPQUE3QjtBQUNBTixTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CRSxPQUFuQixHQUE2QixDQUE3QjtBQUNBTCxRQUFJLENBQUNTLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCRyxHQUF0QixDQUEwQixjQUExQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBRXhCTixhQUFTLENBQUNGLFlBQUQsQ0FBVDtBQUNBQSxnQkFBWTs7QUFDWixRQUFJQSxZQUFZLElBQUlSLEtBQUssQ0FBQ0ksTUFBMUIsRUFBa0M7QUFDOUJJLGtCQUFZLEdBQUcsQ0FBZjtBQUNIOztBQUNETSxhQUFTLENBQUNOLFlBQUQsQ0FBVDtBQUNILEdBUkQ7O0FBVUEsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBaUI7QUFBQSxRQUFoQkMsSUFBZ0IsdUVBQVQsSUFBUztBQUNoQ1QsWUFBUSxHQUFHVSxXQUFXLENBQUNILGFBQUQsRUFBZ0JFLElBQWhCLENBQXRCO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCQyxpQkFBYSxDQUFDWixRQUFELENBQWI7QUFDSCxHQUZEOztBQUlBWixlQUFhLENBQUN5QixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDL0NBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBLFFBQUlDLE1BQU0sR0FBR0YsS0FBSyxDQUFDRSxNQUFuQjs7QUFDQSxRQUFJLENBQUNBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLHFCQUFmLENBQUwsRUFBNEM7QUFDeEM7QUFDSDtBQUVKLEdBUEQ7QUFVQVQsWUFBVTtBQUNiLENBdEREOztBQXVEQSxpRUFBZXJCLE1BQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMCxcclxuICAgICAgICBpbnRlcnZhbDtcclxuXHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuZXh0U2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhdXRvUGxheVNsaWRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBwcmV2U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgICAgICBjdXJyZW50U2xpZGUrKztcclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RhcnRTbGlkZSA9ICh0aW1lID0gMzAwMCkgPT4ge1xyXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXV0b1BsYXlTbGlkZSwgdGltZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RvcFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnYWxsZXJ5U2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0Lm1hdGNoZXMoJy5zbGlkZXItYXJyb3csIC5kb3QnKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHN0YXJ0U2xpZGUoKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "3f2ab253f1e2049af18a"
/******/ 	})();
/******/ 	
/******/ }
);