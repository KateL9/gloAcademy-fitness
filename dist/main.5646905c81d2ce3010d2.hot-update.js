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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // for (let i = 1; i < slide.length; i++) {\n  //     slide[i].style.display = 'none';\n  //     slide[i].style.opacity = 0;\n  //     dots[i].classList.remove('slick-active');\n  // }\n  // let currentSlide = 0;\n  // const startSlide = () => {\n  //     slide.forEach((key, index) => {\n  //         key.style.display = 'none';\n  //         key.style.opacity = 0;\n  //         dots[index].classList.remove('slick-active');\n  //         if (index == currentSlide) {\n  //             key.style.display = 'block';\n  //             key.style.opacity = 1;\n  //             dots[currentSlide].classList.add('slick-active');\n  //         }\n  //     });\n  // }\n  // setInterval(startSlide, 2000)\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(dot, currentSlide, 'active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(dot, currentSlide, 'active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJwcmV2U2xpZGUiLCJlbGVtIiwiaW5kZXgiLCJzdHJDbGFzcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm5leHRTbGlkZSIsImFkZCIsImF1dG9QbGF5U2xpZGUiLCJjdXJyZW50U2xpZGUiLCJkb3QiLCJsZW5ndGgiLCJzdGFydFNsaWRlIiwidGltZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJzdG9wU2xpZGUiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFBQSxNQUNJQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FEWjtBQUFBLE1BRUlDLElBQUksR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FGWCxDQURpQixDQUtqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBY0MsUUFBZCxFQUEyQjtBQUN6Q0YsUUFBSSxDQUFDQyxLQUFELENBQUosQ0FBWUUsU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkJGLFFBQTdCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDTCxJQUFELEVBQU9DLEtBQVAsRUFBY0MsUUFBZCxFQUEyQjtBQUN6Q0YsUUFBSSxDQUFDQyxLQUFELENBQUosQ0FBWUUsU0FBWixDQUFzQkcsR0FBdEIsQ0FBMEJKLFFBQTFCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFFeEJSLGFBQVMsQ0FBQ0gsS0FBRCxFQUFRWSxZQUFSLEVBQXNCLFFBQXRCLENBQVQ7QUFDQVQsYUFBUyxDQUFDVSxHQUFELEVBQU1ELFlBQU4sRUFBb0IsUUFBcEIsQ0FBVDtBQUNBQSxnQkFBWTs7QUFDWixRQUFJQSxZQUFZLElBQUlaLEtBQUssQ0FBQ2MsTUFBMUIsRUFBa0M7QUFDOUJGLGtCQUFZLEdBQUcsQ0FBZjtBQUNIOztBQUNESCxhQUFTLENBQUNULEtBQUQsRUFBUVksWUFBUixFQUFzQixRQUF0QixDQUFUO0FBQ0FILGFBQVMsQ0FBQ0ksR0FBRCxFQUFNRCxZQUFOLEVBQW9CLFFBQXBCLENBQVQ7QUFDSCxHQVZEOztBQVlBLE1BQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQWlCO0FBQUEsUUFBaEJDLElBQWdCLHVFQUFULElBQVM7QUFDaENDLFlBQVEsR0FBR0MsV0FBVyxDQUFDUCxhQUFELEVBQWdCSyxJQUFoQixDQUF0QjtBQUNILEdBRkQ7O0FBR0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQkMsaUJBQWEsQ0FBQ0gsUUFBRCxDQUFiO0FBQ0gsR0FGRDtBQUdILENBckREOztBQXNEQSxpRUFBZXJCLE1BQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICBzbGlkZVtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIC8vICAgICBkb3RzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIC8vIGNvbnN0IHN0YXJ0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICAvLyAgICAgc2xpZGUuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIC8vICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIC8vICAgICAgICAgaWYgKGluZGV4ID09IGN1cnJlbnRTbGlkZSkge1xyXG4gICAgLy8gICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgLy8gICAgICAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgLy8gICAgICAgICAgICAgZG90c1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBzZXRJbnRlcnZhbChzdGFydFNsaWRlLCAyMDAwKVxyXG5cclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IChlbGVtLCBpbmRleCwgc3RyQ2xhc3MpID0+IHtcclxuICAgICAgICBlbGVtW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKHN0ckNsYXNzKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKGVsZW0sIGluZGV4LCBzdHJDbGFzcykgPT4ge1xyXG4gICAgICAgIGVsZW1baW5kZXhdLmNsYXNzTGlzdC5hZGQoc3RyQ2xhc3MpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhdXRvUGxheVNsaWRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBwcmV2U2xpZGUoc2xpZGUsIGN1cnJlbnRTbGlkZSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgIHByZXZTbGlkZShkb3QsIGN1cnJlbnRTbGlkZSwgJ2FjdGl2ZScpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShzbGlkZSwgY3VycmVudFNsaWRlLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgbmV4dFNsaWRlKGRvdCwgY3VycmVudFNsaWRlLCAnYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAodGltZSA9IDMwMDApID0+IHtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGF1dG9QbGF5U2xpZGUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3BTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "162e4e248d5c41b444fe"
/******/ 	})();
/******/ 	
/******/ }
);