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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // for (let i = 1; i < slide.length; i++) {\n  //     slide[i].style.display = 'none';\n  //     slide[i].style.opacity = 0;\n  //     dots[i].classList.remove('slick-active');\n  // }\n\n  var currentSlide = 0,\n      interval; // const startSlide = () => {\n  //     slide.forEach((key, index) => {\n  //         key.style.display = 'none';\n  //         key.style.opacity = 0;\n  //         dots[index].classList.remove('slick-active');\n  //         if (index == currentSlide) {\n  //             key.style.display = 'block';\n  //             key.style.opacity = 1;\n  //             dots[currentSlide].classList.add('slick-active');\n  //         }\n  //     });\n  // }\n  // setInterval(startSlide, 2000)\n\n  slide.forEach(function () {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  });\n\n  var prevSlide = function prevSlide(index) {\n    slide[index].style.display = 'none';\n    slide[index].style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  var nextSlide = function nextSlide(index) {\n    slide[index].style.display = 'block';\n    slide[index].style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(currentSlide);\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJjdXJyZW50U2xpZGUiLCJpbnRlcnZhbCIsImZvckVhY2giLCJpbmRleCIsInN0eWxlIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJwcmV2U2xpZGUiLCJuZXh0U2xpZGUiLCJhZGQiLCJhdXRvUGxheVNsaWRlIiwibGVuZ3RoIiwic3RhcnRTbGlkZSIsInRpbWUiLCJzZXRJbnRlcnZhbCIsInN0b3BTbGlkZSIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0gsYUFBYSxDQUFDSSxnQkFBZCxDQUErQixRQUEvQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNHLGdCQUFULENBQTBCLG1CQUExQixDQUZYLENBRGlCLENBS2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUUsWUFBWSxHQUFHLENBQW5CO0FBQUEsTUFDSUMsUUFESixDQVhpQixDQWNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUosT0FBSyxDQUFDSyxPQUFOLENBQWMsWUFBTTtBQUNoQkwsU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQVIsU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkUsT0FBbkIsR0FBNkIsQ0FBN0I7QUFDQVAsUUFBSSxDQUFDSSxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDSCxHQUpEOztBQUtBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNOLEtBQUQsRUFBVztBQUN6Qk4sU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsTUFBN0I7QUFDQVIsU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkUsT0FBbkIsR0FBNkIsQ0FBN0I7QUFDQVAsUUFBSSxDQUFDSSxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDSCxHQUpEOztBQU1BLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNQLEtBQUQsRUFBVztBQUN6Qk4sU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkMsT0FBbkIsR0FBNkIsT0FBN0I7QUFDQVIsU0FBSyxDQUFDTSxLQUFELENBQUwsQ0FBYUMsS0FBYixDQUFtQkUsT0FBbkIsR0FBNkIsQ0FBN0I7QUFDQVAsUUFBSSxDQUFDSSxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkksR0FBdEIsQ0FBMEIsY0FBMUI7QUFDSCxHQUpEOztBQU1BLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUV4QkgsYUFBUyxDQUFDVCxZQUFELENBQVQ7QUFDQUEsZ0JBQVk7O0FBQ1osUUFBSUEsWUFBWSxJQUFJSCxLQUFLLENBQUNnQixNQUExQixFQUFrQztBQUM5QmIsa0JBQVksR0FBRyxDQUFmO0FBQ0g7O0FBQ0RVLGFBQVMsQ0FBQ1YsWUFBRCxDQUFUO0FBQ0gsR0FSRDs7QUFVQSxNQUFNYyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFpQjtBQUFBLFFBQWhCQyxJQUFnQix1RUFBVCxJQUFTO0FBQ2hDZCxZQUFRLEdBQUdlLFdBQVcsQ0FBQ0osYUFBRCxFQUFnQkcsSUFBaEIsQ0FBdEI7QUFDSCxHQUZEOztBQUdBLE1BQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEJDLGlCQUFhLENBQUNqQixRQUFELENBQWI7QUFDSCxHQUZEOztBQUdBYSxZQUFVO0FBQ2IsQ0E5REQ7O0FBK0RBLGlFQUFlckIsTUFBZiIsImZpbGUiOiIuL3NyYy9tb2R1bGVzL3NsaWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGdhbGxlcnlTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1zbGlkZXInKSxcclxuICAgICAgICBzbGlkZSA9IGdhbGxlcnlTbGlkZXIucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItZG90cyA+IGxpXCIpO1xyXG5cclxuICAgIC8vIGZvciAobGV0IGkgPSAxOyBpIDwgc2xpZGUubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICBzbGlkZVtpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgIHNsaWRlW2ldLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gICAgIGRvdHNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGV0IGN1cnJlbnRTbGlkZSA9IDAsXHJcbiAgICAgICAgaW50ZXJ2YWw7XHJcblxyXG4gICAgLy8gY29uc3Qgc3RhcnRTbGlkZSA9ICgpID0+IHtcclxuICAgIC8vICAgICBzbGlkZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgLy8gICAgICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAvLyAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgICAgICBpZiAoaW5kZXggPT0gY3VycmVudFNsaWRlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAvLyAgICAgICAgICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3RzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIHNldEludGVydmFsKHN0YXJ0U2xpZGUsIDIwMDApXHJcblxyXG4gICAgc2xpZGUuZm9yRWFjaCgoKSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfSlcclxuICAgIGNvbnN0IHByZXZTbGlkZSA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbmV4dFNsaWRlID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHNsaWRlW2luZGV4XS5zdHlsZS5vcGFjaXR5ID0gMTtcclxuICAgICAgICBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdzbGljay1hY3RpdmUnKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXV0b1BsYXlTbGlkZSA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgcHJldlNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICAgICAgY3VycmVudFNsaWRlKys7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBzbGlkZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV4dFNsaWRlKGN1cnJlbnRTbGlkZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0U2xpZGUgPSAodGltZSA9IDMwMDApID0+IHtcclxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGF1dG9QbGF5U2xpZGUsIHRpbWUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHN0b3BTbGlkZSA9ICgpID0+IHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH07XHJcbiAgICBzdGFydFNsaWRlKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBzbGlkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "6150fe810a0a8b3824b7"
/******/ 	})();
/******/ 	
/******/ }
);