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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n  slide.forEach(function (key, index) {\n    key.style.display = 'none';\n    key.style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  });\n  var currentSlide = 0;\n\n  var startSlide = function startSlide() {\n    slide.forEach(function (key, index) {\n      key.style.display = 'none';\n      key.style.opacity = 0; // slide[index].style.display = 'block';\n      // slide[index].style.opacity = 1;\n\n      dots[index].classList.remove('slick-active');\n\n      if (index == currentSlide) {\n        key.style.display = 'block';\n        key.style.opacity = 1;\n        dots[currentSlide].classList.add('slick-active');\n      }\n    });\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFNsaWRlIiwic3RhcnRTbGlkZSIsImFkZCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFBQSxNQUNJQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FEWjtBQUFBLE1BRUlDLElBQUksR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FGWDtBQUlBRCxPQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUJELE9BQUcsQ0FBQ0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0FILE9BQUcsQ0FBQ0UsS0FBSixDQUFVRSxPQUFWLEdBQW9CLENBQXBCO0FBQ0FOLFFBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlJLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGNBQTdCO0FBQ0gsR0FKRDtBQU1BLE1BQUlDLFlBQVksR0FBRyxDQUFuQjs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3JCWixTQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUJELFNBQUcsQ0FBQ0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0FILFNBQUcsQ0FBQ0UsS0FBSixDQUFVRSxPQUFWLEdBQW9CLENBQXBCLENBRjBCLENBRzFCO0FBQ0E7O0FBQ0FOLFVBQUksQ0FBQ0csS0FBRCxDQUFKLENBQVlJLFNBQVosQ0FBc0JDLE1BQXRCLENBQTZCLGNBQTdCOztBQUNBLFVBQUlMLEtBQUssSUFBSU0sWUFBYixFQUEyQjtBQUN2QlAsV0FBRyxDQUFDRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsT0FBcEI7QUFDQUgsV0FBRyxDQUFDRSxLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQU4sWUFBSSxDQUFDUyxZQUFELENBQUosQ0FBbUJGLFNBQW5CLENBQTZCSSxHQUE3QixDQUFpQyxjQUFqQztBQUNIO0FBQ0osS0FYRDtBQWFILEdBZEQ7O0FBZ0JBQyxhQUFXLENBQUNGLFVBQUQsRUFBYSxJQUFiLENBQVg7QUFDSCxDQTlCRDs7QUErQkEsaUVBQWVoQixNQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZ2FsbGVyeVNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxyXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgc2xpZGUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2xpZGUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgICAgICAvLyBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIC8vIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSBjdXJyZW50U2xpZGUpIHtcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICAgICAgICAgIGRvdHNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "ab83076cbabdcada5c4c"
/******/ 	})();
/******/ 	
/******/ }
);