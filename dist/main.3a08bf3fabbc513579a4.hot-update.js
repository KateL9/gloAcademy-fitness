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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n\n  for (var i = 1; i < slide.length; i++) {\n    slide[i].style.display = 'none';\n    slide[i].style.opacity = 0;\n  }\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  gallerySlider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.slider-arrow, .dot')) {\n      return;\n    }\n\n    ;\n    prevSlide(currentSlide);\n\n    if (target.matches('.next')) {\n      currentSlide++;\n    } else if (target.matches('.prev')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (elem, index) {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      });\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n  });\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsImN1cnJlbnRTbGlkZSIsImludGVydmFsIiwicHJldlNsaWRlIiwiaW5kZXgiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiLCJkb3QiLCJmb3JFYWNoIiwiZWxlbSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFDakIsTUFBTUMsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXRCO0FBQUEsTUFDSUMsS0FBSyxHQUFHSCxhQUFhLENBQUNJLGdCQUFkLENBQStCLFFBQS9CLENBRFo7QUFBQSxNQUVJQyxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBRlg7O0FBSUEsT0FBSyxJQUFJRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLE1BQTFCLEVBQWtDRCxDQUFDLEVBQW5DLEVBQXVDO0FBQ25DSCxTQUFLLENBQUNHLENBQUQsQ0FBTCxDQUFTRSxLQUFULENBQWVDLE9BQWYsR0FBeUIsTUFBekI7QUFDQU4sU0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0UsS0FBVCxDQUFlRSxPQUFmLEdBQXlCLENBQXpCO0FB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LCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNsaWRlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpXS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgY3VycmVudFNsaWRlID0gMCxcclxuICAgICAgICBpbnRlcnZhbDtcclxuXHJcbiAgICBjb25zdCBwcmV2U2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBuZXh0U2xpZGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzbGlkZVtpbmRleF0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBhdXRvUGxheVNsaWRlID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBwcmV2U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgICAgICBjdXJyZW50U2xpZGUrKztcclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RhcnRTbGlkZSA9ICh0aW1lID0gMzAwMCkgPT4ge1xyXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoYXV0b1BsYXlTbGlkZSwgdGltZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc3RvcFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnYWxsZXJ5U2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICghdGFyZ2V0Lm1hdGNoZXMoJy5zbGlkZXItYXJyb3csIC5kb3QnKSkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBwcmV2U2xpZGUoY3VycmVudFNsaWRlKTtcclxuICAgICAgICBpZiAodGFyZ2V0Lm1hdGNoZXMoJy5uZXh0JykpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQubWF0Y2hlcygnLnByZXYnKSkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUtLTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5tYXRjaGVzKCcuZG90JykpIHtcclxuICAgICAgICAgICAgZG90LmZvckVhY2goKGVsZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNsaWRlID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlID49IHNsaWRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBjdXJyZW50U2xpZGUgPSBzbGlkZS5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGUoc2xpZGUsIGN1cnJlbnRTbGlkZSwgJ3BvcnRmb2xpby1pdGVtLWFjdGl2ZScpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBzdGFydFNsaWRlKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "b0b6ff7a5d5da3be89ac"
/******/ 	})();
/******/ 	
/******/ }
);