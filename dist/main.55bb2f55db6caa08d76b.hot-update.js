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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval; // const startSlide = () => {\n  //     slide.forEach((key, index) => {\n  //         key.style.display = 'none';\n  //         key.style.opacity = 0;\n  //         dots[index].classList.remove('slick-active');\n  //         if (index == currentSlide) {\n  //             key.style.display = 'block';\n  //             key.style.opacity = 1;\n  //             dots[currentSlide].classList.add('slick-active');\n  //         }\n  //     });\n  // }\n  // setInterval(startSlide, 2000)\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYOztBQUlBLE9BQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0gsU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0FOLFNBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixDQUF6QjtBQUNIOztBQUVELE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUFBLE1BQ0lDLFFBREosQ0FWaUIsQ0FhakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCWCxTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBTixTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CRSxPQUFuQixHQUE2QixDQUE3QjtBQUNBTCxRQUFJLENBQUNTLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixjQUE3QjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0gsS0FBRCxFQUFXO0FBQ3pCWCxTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixPQUE3QjtBQUNBTixTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CRSxPQUFuQixHQUE2QixDQUE3QjtBQUNBTCxRQUFJLENBQUNTLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCRyxHQUF0QixDQUEwQixjQUExQjtBQUNILEdBSkQ7O0FBTUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBRXhCTixhQUFTLENBQUNGLFlBQUQsQ0FBVDtBQUNBQSxnQkFBWTs7QUFDWixRQUFJQSxZQUFZLElBQUlSLEtBQUssQ0FBQ0ksTUFBMUIsRUFBa0M7QUFDOUJJLGtCQUFZLEdBQUcsQ0FBZjtBQUNIOztBQUNETSxhQUFTLENBQUNOLFlBQUQsQ0FBVDtBQUNILEdBUkQ7O0FBVUEsTUFBTVMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBaUI7QUFBQSxRQUFoQkMsSUFBZ0IsdUVBQVQsSUFBUztBQUNoQ1QsWUFBUSxHQUFHVSxXQUFXLENBQUNILGFBQUQsRUFBZ0JFLElBQWhCLENBQXRCO0FBQ0gsR0FGRDs7QUFHQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCQyxpQkFBYSxDQUFDWixRQUFELENBQWI7QUFDSCxHQUZEOztBQUdBUSxZQUFVO0FBQ2IsQ0F6REQ7O0FBMERBLGlFQUFlckIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwLFxyXG4gICAgICAgIGludGVydmFsO1xyXG5cclxuICAgIC8vIGNvbnN0IHN0YXJ0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2xpZGUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIC8vICAgICAgICAgaWYgKGluZGV4ID09IGN1cnJlbnRTbGlkZSkge1xyXG4gICAgLy8gICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLy8gICAgICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgLy8gICAgICAgICAgICAgZG90c1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG5cclxuXHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9QbGF5U2xpZGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKHRpbWUgPSAzMDAwKSA9PiB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvUGxheVNsaWRlLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnRTbGlkZSgpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "322401aa060178b39f4a"
/******/ 	})();
/******/ 	
/******/ }
);