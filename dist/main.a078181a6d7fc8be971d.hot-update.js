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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n\n    if (index != 0) {\n      dots[index].classList.remove('slick-active');\n    }\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYOztBQUlBLE9BQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0gsU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0FOLFNBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLEtBQVQsQ0FBZUUsT0FBZixHQUF5QixDQUF6QjtBQUNIOztBQUVELE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUFBLE1BQ0lDLFFBREo7O0FBR0EsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQ3pCWCxTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CQyxPQUFuQixHQUE2QixNQUE3QjtBQUNBTixTQUFLLENBQUNXLEtBQUQsQ0FBTCxDQUFhTixLQUFiLENBQW1CRSxPQUFuQixHQUE2QixDQUE3Qjs7QUFDQSxRQUFJSSxLQUFLLElBQUksQ0FBYixFQUFnQjtBQUNaVCxVQUFJLENBQUNTLEtBQUQsQ0FBSixDQUFZQyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixjQUE3QjtBQUNIO0FBRUosR0FQRDs7QUFTQSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDSCxLQUFELEVBQVc7QUFDekJYLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0FOLFNBQUssQ0FBQ1csS0FBRCxDQUFMLENBQWFOLEtBQWIsQ0FBbUJFLE9BQW5CLEdBQTZCLENBQTdCO0FBQ0FMLFFBQUksQ0FBQ1MsS0FBRCxDQUFKLENBQVlDLFNBQVosQ0FBc0JHLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0gsR0FKRDs7QUFNQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFFeEJOLGFBQVMsQ0FBQ0YsWUFBRCxDQUFUO0FBQ0FBLGdCQUFZOztBQUNaLFFBQUlBLFlBQVksSUFBSVIsS0FBSyxDQUFDSSxNQUExQixFQUFrQztBQUM5Qkksa0JBQVksR0FBRyxDQUFmO0FBQ0g7O0FBQ0RNLGFBQVMsQ0FBQ04sWUFBRCxDQUFUO0FBQ0gsR0FSRDs7QUFVQSxNQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFpQjtBQUFBLFFBQWhCQyxJQUFnQix1RUFBVCxJQUFTO0FBQ2hDVCxZQUFRLEdBQUdVLFdBQVcsQ0FBQ0gsYUFBRCxFQUFnQkUsSUFBaEIsQ0FBdEI7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLGlCQUFhLENBQUNaLFFBQUQsQ0FBYjtBQUNILEdBRkQ7O0FBR0FRLFlBQVU7QUFDYixDQTdDRDs7QUE4Q0EsaUVBQWVyQixNQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZ2FsbGVyeVNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxyXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICAgICAgaW50ZXJ2YWw7XHJcblxyXG4gICAgY29uc3QgcHJldlNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGlmIChpbmRleCAhPSAwKSB7XHJcbiAgICAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9QbGF5U2xpZGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKHRpbWUgPSAzMDAwKSA9PiB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvUGxheVNsaWRlLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnRTbGlkZSgpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "dc2f368d1ce0518eef4c"
/******/ 	})();
/******/ 	
/******/ }
);