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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      singleDot = document.querySelectorAll(\".dot\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .dot')) {\n      return;\n    }\n\n    ;\n    prevSlide(currentSlide);\n\n    if (target.matches('.next')) {\n      currentSlide++;\n    } else if (target.matches('.prev')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        console.log(target);\n        console.log(elem);\n\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(currentSlide);\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsInNpbmdsZURvdCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiLCJkb3QiLCJmb3JFYWNoIiwiZWxlbSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsU0FBUyxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLE1BQTFCLENBRmhCO0FBQUEsTUFHSUUsSUFBSSxHQUFHTCxRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUhYOztBQUtBLE9BQUssSUFBSUcsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0osS0FBSyxDQUFDSyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0osU0FBSyxDQUFDSSxDQUFELENBQUwsQ0FBU0UsS0FBVCxD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QUE5QjtBQUNIOztBQUNEVSxhQUFTLENBQUNOLFlBQUQsQ0FBVDtBQUVILEdBN0JEO0FBZ0NBUyxZQUFVO0FBQ2IsQ0E3RUQ7O0FBOEVBLGlFQUFldEIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBzaW5nbGVEb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdFwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwLFxyXG4gICAgICAgIGludGVydmFsO1xyXG5cclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGF1dG9QbGF5U2xpZGUgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKHRpbWUgPSAzMDAwKSA9PiB7XHJcbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhdXRvUGxheVNsaWRlLCB0aW1lKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzdG9wU2xpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGdhbGxlcnlTbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKCF0YXJnZXQubWF0Y2hlcygnLnNsaWRlci1hcnJvdywgLmRvdCcpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHByZXZTbGlkZShjdXJyZW50U2xpZGUpO1xyXG4gICAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnLm5leHQnKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUrKztcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcucHJldicpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZS0tO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5kb3QnKSkge1xyXG4gICAgICAgICAgICBkb3QuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHNsaWRlLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBzdGFydFNsaWRlKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "5dc9c7c2b73a9615470d"
/******/ 	})();
/******/ 	
/******/ }
);