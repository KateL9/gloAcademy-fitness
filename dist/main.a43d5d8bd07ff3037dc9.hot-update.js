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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // slide.forEach((key, index) => {\n  //     key.style.display = 'none';\n  //     key.style.opacity = 0;\n  //     // slide[index].style.display = 'block';\n  //     // slide[index].style.opacity = 1;\n  //     dots[index].classList.add('slick-active');\n  // });\n\n  var inactiveSlide = function inactiveSlide(key) {\n    key.style.display = 'none';\n    key.style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var currentSlide = 0;\n\n  var activeSlide = function activeSlide(key) {\n    key.style.display = 'block';\n    key.style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    for (var i = 0; i = slide.length; i++) {\n      console.log(slide[i]);\n      inactiveSlide(slide[i]);\n\n      if (currentSlide >= slide.length) {\n        currentSlide = 0;\n      }\n\n      ;\n\n      if (i == currentSlide) {\n        activeSlide(slide[i]);\n      }\n\n      currentSlide++;\n    }\n\n    ;\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpbmFjdGl2ZVNsaWRlIiwia2V5Iiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImluZGV4IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFNsaWRlIiwiYWN0aXZlU2xpZGUiLCJhZGQiLCJzdGFydFNsaWRlIiwiaSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQUEsTUFDSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGdCQUFkLENBQStCLFFBQS9CLENBRFo7QUFBQSxNQUVJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBRlgsQ0FEaUIsQ0FLakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxHQUFELEVBQVM7QUFDM0JBLE9BQUcsQ0FBQ0MsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0FGLE9BQUcsQ0FBQ0MsS0FBSixDQUFVRSxPQUFWLEdBQW9CLENBQXBCO0FBQ0FMLFFBQUksQ0FBQ00sS0FBRCxDQUFKLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGNBQTdCO0FBRUgsR0FMRDs7QUFNQSxNQUFJQyxZQUFZLEdBQUcsQ0FBbkI7O0FBRUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ1IsR0FBRCxFQUFTO0FBQ3pCQSxPQUFHLENBQUNDLEtBQUosQ0FBVUMsT0FBVixHQUFvQixPQUFwQjtBQUNBRixPQUFHLENBQUNDLEtBQUosQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNBTCxRQUFJLENBQUNNLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCSSxHQUF0QixDQUEwQixjQUExQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdmLEtBQUssQ0FBQ2dCLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DRSxhQUFPLENBQUNDLEdBQVIsQ0FBWWxCLEtBQUssQ0FBQ2UsQ0FBRCxDQUFqQjtBQUNBWixtQkFBYSxDQUFDSCxLQUFLLENBQUNlLENBQUQsQ0FBTixDQUFiOztBQUNBLFVBQUlKLFlBQVksSUFBSVgsS0FBSyxDQUFDZ0IsTUFBMUIsRUFBa0M7QUFDOUJMLG9CQUFZLEdBQUcsQ0FBZjtBQUNIOztBQUFBOztBQUNELFVBQUlJLENBQUMsSUFBSUosWUFBVCxFQUF1QjtBQUNuQkMsbUJBQVcsQ0FBQ1osS0FBSyxDQUFDZSxDQUFELENBQU4sQ0FBWDtBQUNIOztBQUNESixrQkFBWTtBQUNmOztBQUFBO0FBQ0osR0FaRDs7QUFjQVEsYUFBVyxDQUFDTCxVQUFELEVBQWEsSUFBYixDQUFYO0FBQ0gsQ0ExQ0Q7O0FBMkNBLGlFQUFlbEIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIC8vIHNsaWRlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAvLyAgICAgLy8gc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLy8gICAgIC8vIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIC8vICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIGNvbnN0IGluYWN0aXZlU2xpZGUgPSAoa2V5KSA9PiB7XHJcbiAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgIH1cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gKGtleSkgPT4ge1xyXG4gICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPSBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzbGlkZVtpXSk7XHJcbiAgICAgICAgICAgIGluYWN0aXZlU2xpZGUoc2xpZGVbaV0pO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGkgPT0gY3VycmVudFNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZShzbGlkZVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "01ae71ca2f16262e6af8"
/******/ 	})();
/******/ 	
/******/ }
);