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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQUEsTUFDSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGdCQUFkLENBQStCLFFBQS9CLENBRFo7QUFBQSxNQUVJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBRlg7O0FBSUEsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTRSxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQU4sU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0g7O0FBRUQsTUFBSUMsWUFBWSxHQUFHLENBQW5CO0FBQUEsTUFDSUMsUUFESjs7QUFHQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDekJYLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE1BQTdCO0FBQ0FOLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJFLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0FMLFFBQUksQ0FBQ1MsS0FBRCxDQUFKLENBQVlDLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGNBQTdCO0FBRUgsR0FMRDs7QUFPQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxLQUFELEVBQVc7QUFDekJYLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0FOLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJFLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0FMLFFBQUksQ0FBQ1MsS0FBRCxDQUFKLENBQVlDLFNBQVosQ0FBc0JHLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFFeEJOLGFBQVMsQ0FBQ0YsWUFBRCxDQUFUO0FBQ0FBLGdCQUFZOztBQUNaLFFBQUlBLFlBQVksSUFBSVIsS0FBSyxDQUFDSSxNQUExQixFQUFrQztBQUM5Qkksa0JBQVksR0FBRyxDQUFmO0FBQ0g7O0FBQ0RNLGFBQVMsQ0FBQ04sWUFBRCxDQUFUO0FBQ0gsR0FSRDs7QUFVQSxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFpQjtBQUFBLFFBQWhCQyxJQUFnQix1RUFBVCxJQUFTO0FBQ2hDVCxZQUFRLEdBQUdVLFdBQVcsQ0FBQ0gsYUFBRCxFQUFnQkUsSUFBaEIsQ0FBdEI7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLGlCQUFhLENBQUNaLFFBQUQsQ0FBYjtBQUNILEdBRkQ7O0FBSUFaLGVBQWEsQ0FBQ3lCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUNDLEtBQUQsRUFBVztBQUMvQ0EsU0FBSyxDQUFDQyxjQUFOO0FBR0gsR0FKRDtBQU9BUCxZQUFVO0FBQ2IsQ0FuREQ7O0FBb0RBLGlFQUFlckIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwLFxyXG4gICAgICAgIGludGVydmFsO1xyXG5cclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9QbGF5U2xpZGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKHRpbWUgPSAzMDAwKSA9PiB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvUGxheVNsaWRlLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdhbGxlcnlTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICBzdGFydFNsaWRlKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "4f1c1b80e6165795b784"
/******/ 	})();
/******/ 	
/******/ }
);