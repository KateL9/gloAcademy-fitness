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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .dot')) {\n      return;\n    }\n\n    ;\n    prevSlide(currentSlide);\n\n    if (target.matches('.next')) {\n      currentSlide++;\n    } else if (target.matches('.prev')) {\n      currentSlide--;\n    } else if (target.matches('.slider-dots > li')) {\n      console.log(target);\n      dots.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(currentSlide);\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiLCJjb25zb2xlIiwibG9nIiwiZm9yRWFjaCIsImVsZW0iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYOztBQUlBLE9BQUssSUFBSUUsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsS0FBSyxDQUFDSSxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQ0gsU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlQyxPQUFmLEdBQXlCLE1BQXpCO0FBQ0FOLFNBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNFLEtBQVQsQ0FBZUUsT0FBZixHQUF5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L21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZ2FsbGVyeVNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLFxyXG4gICAgICAgIGRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlci1kb3RzID4gbGlcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzbGlkZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICAgICAgaW50ZXJ2YWw7XHJcblxyXG4gICAgY29uc3QgcHJldlNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXV0b1BsYXlTbGlkZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgcHJldlNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dFNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAodGltZSA9IDMwMDApID0+IHtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGF1dG9QbGF5U2xpZGUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3BTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcblxyXG4gICAgZ2FsbGVyeVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldC5tYXRjaGVzKCcuc2xpZGVyLWFycm93LCAuZG90JykpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHJldlNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCcubmV4dCcpKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZSsrO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5wcmV2JykpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlLS07XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnLnNsaWRlci1kb3RzID4gbGknKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gICAgICAgICAgICBkb3RzLmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBzbGlkZS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGUoY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgc3RhcnRTbGlkZSgpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "4677fa6718c9969cb9aa"
/******/ 	})();
/******/ 	
/******/ }
);