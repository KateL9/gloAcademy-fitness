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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      singleDot = document.querySelectorAll(\".dot\");\n  dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .dot')) {\n      return;\n    }\n\n    ;\n    prevSlide(currentSlide);\n\n    if (target.matches('.next')) {\n      currentSlide++;\n    } else if (target.matches('.prev')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dots.forEach(function (elem, index) {\n        console.log(target);\n        console.log(elem);\n\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(currentSlide);\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsInNpbmdsZURvdCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiLCJmb3JFYWNoIiwiZWxlbSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsU0FBUyxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLE1BQTFCLENBRmhCO0FBR0FFLE1BQUksR0FBR0wsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FBUDs7QUFFQSxPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLEtBQUssQ0FBQ0ssTUFBMUIsRUFBa0NELENBQUMsRUFBbkMsRUFBdUM7QUFDbkNKLFNBQUssQ0FBQ0ksQ0FBRCxDQUFMLENBQVNFLEtBQVQsQ0FBZUMsT0FBZixH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OztBQUNEVSxhQUFTLENBQUNOLFlBQUQsQ0FBVDtBQUVILEdBN0JEO0FBZ0NBUyxZQUFVO0FBQ2IsQ0E3RUQ7O0FBOEVBLGlFQUFldEIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBzaW5nbGVEb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvdFwiKTtcclxuICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICAgICAgaW50ZXJ2YWw7XHJcblxyXG4gICAgY29uc3QgcHJldlNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXV0b1BsYXlTbGlkZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgcHJldlNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dFNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAodGltZSA9IDMwMDApID0+IHtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGF1dG9QbGF5U2xpZGUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3BTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2FsbGVyeVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldC5tYXRjaGVzKCcuc2xpZGVyLWFycm93LCAuZG90JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJldlNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcubmV4dCcpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcmV2JykpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlLS07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnLmRvdCcpKSB7XHJcbiAgICAgICAgICAgIGRvdHMuZm9yRWFjaCgoZWxlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtID09PSB0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPj0gc2xpZGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50U2xpZGUgPCAwKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSA9IHNsaWRlLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5leHRTbGlkZShjdXJyZW50U2xpZGUpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBzdGFydFNsaWRlKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "a6245afa9fb8cfd6e7c1"
/******/ 	})();
/******/ 	
/******/ }
);