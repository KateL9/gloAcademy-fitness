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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i <= slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n    dots[i].classList.remove('slick-active');\n  }\n\n  var currentSlide = 0;\n\n  var startSlide = function startSlide() {\n    slide.forEach(function (key, index) {\n      key.style.display = 'none';\n      key.style.opacity = 0; // slide[index].style.display = 'block';\n      // slide[index].style.opacity = 1;\n\n      dots[index].classList.remove('slick-active');\n\n      if (index == currentSlide) {\n        key.style.display = 'block';\n        key.style.opacity = 1;\n        dots[currentSlide].classList.add('slick-active');\n      }\n    });\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRTbGlkZSIsInN0YXJ0U2xpZGUiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiLCJhZGQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQUEsTUFDSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGdCQUFkLENBQStCLFFBQS9CLENBRFo7QUFBQSxNQUVJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBRlg7O0FBSUEsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJSCxLQUFLLENBQUNJLE1BQTNCLEVBQW1DRCxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTRSxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQU4sU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FMLFFBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFLLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0g7O0FBRUQsTUFBSUMsWUFBWSxHQUFHLENBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJYLFNBQUssQ0FBQ1ksT0FBTixDQUFjLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMxQkQsU0FBRyxDQUFDUixLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQU8sU0FBRyxDQUFDUixLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEIsQ0FGMEIsQ0FHMUI7QUFDQTs7QUFDQUwsVUFBSSxDQUFDWSxLQUFELENBQUosQ0FBWU4sU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7O0FBQ0EsVUFBSUssS0FBSyxJQUFJSixZQUFiLEVBQTJCO0FBQ3ZCRyxXQUFHLENBQUNSLEtBQUosQ0FBVUMsT0FBVixHQUFvQixPQUFwQjtBQUNBTyxXQUFHLENBQUNSLEtBQUosQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNBTCxZQUFJLENBQUNRLFlBQUQsQ0FBSixDQUFtQkYsU0FBbkIsQ0FBNkJPLEdBQTdCLENBQWlDLGNBQWpDO0FBQ0g7QUFDSixLQVhEO0FBYUgsR0FkRDs7QUFnQkFDLGFBQVcsQ0FBQ0wsVUFBRCxFQUFhLElBQWIsQ0FBWDtBQUNILENBOUJEOztBQStCQSxpRUFBZWYsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IHNsaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2xpZGUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAvLyBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIC8vIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSBjdXJyZW50U2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIGRvdHNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "d4876392389143a30c48"
/******/ 	})();
/******/ 	
/******/ }
);