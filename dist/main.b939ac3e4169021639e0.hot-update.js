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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // for (let i = 1; i < slide.length; i++) {\n  //     slide[i].style.display = 'none';\n  //     slide[i].style.opacity = 0;\n  //     dots[i].classList.remove('slick-active');\n  // }\n  // let currentSlide = 0;\n  // const startSlide = () => {\n  //     slide.forEach((key, index) => {\n  //         key.style.display = 'none';\n  //         key.style.opacity = 0;\n  //         dots[index].classList.remove('slick-active');\n  //         if (index == currentSlide) {\n  //             key.style.display = 'block';\n  //             key.style.opacity = 1;\n  //             dots[currentSlide].classList.add('slick-active');\n  //         }\n  //     });\n  // }\n  // setInterval(startSlide, 2000)\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n    dots[i].classList.remove('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slide, currentSlide, 'active');\n    prevSlide(dots, currentSlide, 'slick-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'active');\n    nextSlide(dots, currentSlide, 'slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJwcmV2U2xpZGUiLCJlbGVtIiwiaW5kZXgiLCJzdHJDbGFzcyIsImNsYXNzTGlzdCIsInJlbW92ZSIsIm5leHRTbGlkZSIsImkiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiYXV0b1BsYXlTbGlkZSIsImN1cnJlbnRTbGlkZSIsImxlbmd0aCIsInN0YXJ0U2xpZGUiLCJ0aW1lIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYLENBRGlCLENBS2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxRQUFkLEVBQTJCO0FBQ3pDRixRQUFJLENBQUNDLEtBQUQsQ0FBSixDQUFZRSxTQUFaLENBQXNCQyxNQUF0QixDQUE2QkYsUUFBN0I7QUFDSCxHQUZEOztBQUlBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNMLElBQUQsRUFBT0MsS0FBUCxFQUFjQyxRQUFkLEVBQTJCO0FBQ3pDTixTQUFLLENBQUNVLENBQUQsQ0FBTCxDQUFTQyxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQVosU0FBSyxDQUFDVSxDQUFELENBQUwsQ0FBU0MsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FBQ0FYLFFBQUksQ0FBQ1EsQ0FBRCxDQUFKLENBQVFILFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0gsR0FKRDs7QUFNQSxNQUFNTSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFFeEJYLGFBQVMsQ0FBQ0gsS0FBRCxFQUFRZSxZQUFSLEVBQXNCLFFBQXRCLENBQVQ7QUFDQVosYUFBUyxDQUFDRCxJQUFELEVBQU9hLFlBQVAsRUFBcUIsY0FBckIsQ0FBVDtBQUNBQSxnQkFBWTs7QUFDWixRQUFJQSxZQUFZLElBQUlmLEtBQUssQ0FBQ2dCLE1BQTFCLEVBQWtDO0FBQzlCRCxrQkFBWSxHQUFHLENBQWY7QUFDSDs7QUFDRE4sYUFBUyxDQUFDVCxLQUFELEVBQVFlLFlBQVIsRUFBc0IsUUFBdEIsQ0FBVDtBQUNBTixhQUFTLENBQUNQLElBQUQsRUFBT2EsWUFBUCxFQUFxQixjQUFyQixDQUFUO0FBQ0gsR0FWRDs7QUFZQSxNQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFpQjtBQUFBLFFBQWhCQyxJQUFnQix1RUFBVCxJQUFTO0FBQ2hDQyxZQUFRLEdBQUdDLFdBQVcsQ0FBQ04sYUFBRCxFQUFnQkksSUFBaEIsQ0FBdEI7QUFDSCxHQUZEOztBQUdBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLGlCQUFhLENBQUNILFFBQUQsQ0FBYjtBQUNILEdBRkQ7O0FBR0FGLFlBQVU7QUFDYixDQXhERDs7QUF5REEsaUVBQWVyQixNQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZ2FsbGVyeVNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxyXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPCBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgc2xpZGVbaV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAvLyAgICAgZG90c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgICAvLyBjb25zdCBzdGFydFNsaWRlID0gKCkgPT4ge1xyXG4gICAgLy8gICAgIHNsaWRlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgIC8vICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIC8vICAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgICAgIGlmIChpbmRleCA9PSBjdXJyZW50U2xpZGUpIHtcclxuICAgIC8vICAgICAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vICAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgIC8vICAgICAgICAgICAgIGRvdHNbY3VycmVudFNsaWRlXS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gc2V0SW50ZXJ2YWwoc3RhcnRTbGlkZSwgMjAwMClcclxuXHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoZWxlbSwgaW5kZXgsIHN0ckNsYXNzKSA9PiB7XHJcbiAgICAgICAgZWxlbVtpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShzdHJDbGFzcyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IChlbGVtLCBpbmRleCwgc3RyQ2xhc3MpID0+IHtcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9QbGF5U2xpZGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShzbGlkZSwgY3VycmVudFNsaWRlLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgcHJldlNsaWRlKGRvdHMsIGN1cnJlbnRTbGlkZSwgJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShzbGlkZSwgY3VycmVudFNsaWRlLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgbmV4dFNsaWRlKGRvdHMsIGN1cnJlbnRTbGlkZSwgJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKHRpbWUgPSAzMDAwKSA9PiB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvUGxheVNsaWRlLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgc3RhcnRTbGlkZSgpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "15f817a852ee5e2a2298"
/******/ 	})();
/******/ 	
/******/ }
);