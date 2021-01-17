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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n    dots[i].classList.remove('slick-active');\n  }\n\n  var currentSlide = 0;\n\n  var startSlide = function startSlide() {\n    slide.forEach(function (key, index) {\n      key.style.display = 'none';\n      key.style.opacity = 0;\n      dots[index].classList.remove('slick-active');\n\n      if (index == currentSlide) {\n        key.style.display = 'block';\n        key.style.opacity = 1;\n        dots[currentSlide].classList.add('slick-active');\n      }\n    });\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImNsYXNzTGlzdCIsInJlbW92ZSIsImN1cnJlbnRTbGlkZSIsInN0YXJ0U2xpZGUiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiLCJhZGQiLCJzZXRJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQUEsTUFDSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGdCQUFkLENBQStCLFFBQS9CLENBRFo7QUFBQSxNQUVJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBRlg7O0FBSUEsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTRSxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQU4sU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FMLFFBQUksQ0FBQ0MsQ0FBRCxDQUFKLENBQVFLLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0g7O0FBRUQsTUFBSUMsWUFBWSxHQUFHLENBQW5COztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJYLFNBQUssQ0FBQ1ksT0FBTixDQUFjLFVBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMxQkQsU0FBRyxDQUFDUixLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQU8sU0FBRyxDQUFDUixLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQUwsVUFBSSxDQUFDWSxLQUFELENBQUosQ0FBWU4sU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7O0FBQ0EsVUFBSUssS0FBSyxJQUFJSixZQUFiLEVBQTJCO0FBQ3ZCRyxXQUFHLENBQUNSLEtBQUosQ0FBVUMsT0FBVixHQUFvQixPQUFwQjtBQUNBTyxXQUFHLENBQUNSLEtBQUosQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNBTCxZQUFJLENBQUNRLFlBQUQsQ0FBSixDQUFtQkYsU0FBbkIsQ0FBNkJPLEdBQTdCLENBQWlDLGNBQWpDO0FBQ0g7QUFDSixLQVREO0FBVUgsR0FYRDs7QUFZQUMsYUFBVyxDQUFDTCxVQUFELEVBQWEsSUFBYixDQUFYO0FBQ0gsQ0ExQkQ7O0FBMkJBLGlFQUFlZixNQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZ2FsbGVyeVNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxyXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSBjdXJyZW50U2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIGRvdHNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2V0SW50ZXJ2YWwoc3RhcnRTbGlkZSwgMjAwMClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "08f7b5bbde019983c808"
/******/ 	})();
/******/ 	
/******/ }
);