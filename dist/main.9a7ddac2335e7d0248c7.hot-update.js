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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // slide.forEach((key, index) => {\n  //     key.style.display = 'none';\n  //     key.style.opacity = 0;\n  //     // slide[index].style.display = 'block';\n  //     // slide[index].style.opacity = 1;\n  //     dots[index].classList.add('slick-active');\n  // });\n\n  var inactiveSlide = function inactiveSlide(key) {\n    key.style.display = 'none';\n    key.style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var currentSlide = 0;\n\n  var activeSlide = function activeSlide(key) {\n    key.style.display = 'block';\n    key.style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    for (var i = 0; i = slide.length; i++) {\n      dot(slide[i]);\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      ;\n\n      if (i == currentSlide) {\n        activeSlide(slide[i]);\n      }\n    }\n\n    ;\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpbmFjdGl2ZVNsaWRlIiwia2V5Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFNsaWRlIiwiYWN0aXZlU2xpZGUiLCJhZGQiLCJzdGFydFNsaWRlIiwiaSIsImxlbmd0aCIsImRvdCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFBQSxNQUNJQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FEWjtBQUFBLE1BRUlDLElBQUksR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FGWCxDQURpQixDQUtqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBUztBQUMzQkEsT0FBRyxDQUFDQyxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQUYsT0FBRyxDQUFDQyxLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQUwsUUFBSSxDQUFDTSxLQUFELENBQUosQ0FBWUMsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7QUFFSCxHQUxEOztBQU1BLE1BQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDUixHQUFELEVBQVM7QUFDekJBLE9BQUcsQ0FBQ0MsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE9BQXBCO0FBQ0FGLE9BQUcsQ0FBQ0MsS0FBSixDQUFVRSxPQUFWLEdBQW9CLENBQXBCO0FBQ0FMLFFBQUksQ0FBQ00sS0FBRCxDQUFKLENBQVlDLFNBQVosQ0FBc0JJLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2YsS0FBSyxDQUFDZ0IsTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDbkNFLFNBQUcsQ0FBQ2pCLEtBQUssQ0FBQ2UsQ0FBRCxDQUFOLENBQUg7O0FBQ0EsVUFBSUosWUFBWSxJQUFJWCxLQUFLLENBQUNnQixNQUExQixFQUFrQztBQUM5Qkwsb0JBQVksR0FBRyxDQUFmO0FBQ0g7O0FBQUE7O0FBQ0QsVUFBSUksQ0FBQyxJQUFJSixZQUFULEVBQXVCO0FBQ25CQyxtQkFBVyxDQUFDWixLQUFLLENBQUNlLENBQUQsQ0FBTixDQUFYO0FBQ0g7QUFDSjs7QUFBQTtBQUNKLEdBVkQ7O0FBWUFHLGFBQVcsQ0FBQ0osVUFBRCxFQUFhLElBQWIsQ0FBWDtBQUNILENBeENEOztBQXlDQSxpRUFBZWxCLE1BQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICAvLyBzbGlkZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gICAgIC8vIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vICAgICAvLyBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAvLyAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBjb25zdCBpbmFjdGl2ZVNsaWRlID0gKGtleSkgPT4ge1xyXG4gICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICB9XHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgICBjb25zdCBhY3RpdmVTbGlkZSA9IChrZXkpID0+IHtcclxuICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpID0gc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZG90KHNsaWRlW2ldKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlmIChpID09IGN1cnJlbnRTbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUoc2xpZGVbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "6567bb736b5b7c25b50f"
/******/ 	})();
/******/ 	
/******/ }
);