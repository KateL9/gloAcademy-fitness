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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\"); // slide.forEach((key, index) => {\n  //     key.style.display = 'none';\n  //     key.style.opacity = 0;\n  //     // slide[index].style.display = 'block';\n  //     // slide[index].style.opacity = 1;\n  //     dots[index].classList.add('slick-active');\n  // });\n\n  var inactiveSlide = function inactiveSlide(key, index) {\n    key.style.display = 'none';\n    key.style.opacity = 0;\n    dots[index].classList.remove('slick-active');\n  };\n\n  inactiveSlide();\n  var currentSlide = 0;\n\n  var activeSlide = function activeSlide(key, index) {\n    key.style.display = 'block';\n    key.style.opacity = 1;\n    dots[index].classList.add('slick-active');\n  };\n\n  var startSlide = function startSlide() {\n    slide.forEach(function (key, index) {\n      key.style.display = 'none';\n      key.style.opacity = 0; // slide[index].style.display = 'block';\n      // slide[index].style.opacity = 1;\n\n      dots[index].classList.remove('slick-active');\n\n      if (index == currentSlide) {\n        key.style.display = 'block';\n        key.style.opacity = 1;\n        dots[currentSlide].classList.add('slick-active');\n      }\n    });\n  };\n\n  setInterval(startSlide, 2000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJpbmFjdGl2ZVNsaWRlIiwia2V5IiwiaW5kZXgiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY3VycmVudFNsaWRlIiwiYWN0aXZlU2xpZGUiLCJhZGQiLCJzdGFydFNsaWRlIiwiZm9yRWFjaCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFBQSxNQUNJQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FEWjtBQUFBLE1BRUlDLElBQUksR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FGWCxDQURpQixDQUtqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNsQ0QsT0FBRyxDQUFDRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQUgsT0FBRyxDQUFDRSxLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQU4sUUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDSCxHQUpEOztBQUtBUCxlQUFhO0FBQ2IsTUFBSVEsWUFBWSxHQUFHLENBQW5COztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNSLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNoQ0QsT0FBRyxDQUFDRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsT0FBcEI7QUFDQUgsT0FBRyxDQUFDRSxLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQU4sUUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkksR0FBdEIsQ0FBMEIsY0FBMUI7QUFDSCxHQUpEOztBQU1BLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJkLFNBQUssQ0FBQ2UsT0FBTixDQUFjLFVBQUNYLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUMxQkQsU0FBRyxDQUFDRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQUgsU0FBRyxDQUFDRSxLQUFKLENBQVVFLE9BQVYsR0FBb0IsQ0FBcEIsQ0FGMEIsQ0FHMUI7QUFDQTs7QUFDQU4sVUFBSSxDQUFDRyxLQUFELENBQUosQ0FBWUksU0FBWixDQUFzQkMsTUFBdEIsQ0FBNkIsY0FBN0I7O0FBQ0EsVUFBSUwsS0FBSyxJQUFJTSxZQUFiLEVBQTJCO0FBQ3ZCUCxXQUFHLENBQUNFLEtBQUosQ0FBVUMsT0FBVixHQUFvQixPQUFwQjtBQUNBSCxXQUFHLENBQUNFLEtBQUosQ0FBVUUsT0FBVixHQUFvQixDQUFwQjtBQUNBTixZQUFJLENBQUNTLFlBQUQsQ0FBSixDQUFtQkYsU0FBbkIsQ0FBNkJJLEdBQTdCLENBQWlDLGNBQWpDO0FBQ0g7QUFFSixLQVpEO0FBY0gsR0FmRDs7QUFpQkFHLGFBQVcsQ0FBQ0YsVUFBRCxFQUFhLElBQWIsQ0FBWDtBQUNILENBN0NEOztBQThDQSxpRUFBZWxCLE1BQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICAvLyBzbGlkZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAvLyAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAvLyAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgLy8gICAgIC8vIHNsaWRlW2luZGV4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vICAgICAvLyBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAvLyAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBjb25zdCBpbmFjdGl2ZVNsaWRlID0gKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZSgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBpbmFjdGl2ZVNsaWRlKClcclxuICAgIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAga2V5LnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdGFydFNsaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIHNsaWRlLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgLy8gc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICAvLyBzbGlkZVtpbmRleF0uc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgIGRvdHNbaW5kZXhdLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWNrLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gY3VycmVudFNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgICAgICBrZXkuc3R5bGUub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgICAgICAgICBkb3RzW2N1cnJlbnRTbGlkZV0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEludGVydmFsKHN0YXJ0U2xpZGUsIDIwMDApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "ff94e70f4e40de7703fe"
/******/ 	})();
/******/ 	
/******/ }
);