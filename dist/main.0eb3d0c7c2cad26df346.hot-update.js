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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = gallerySlider.querySelectorAll(\".slide\"),\n      dots = document.querySelectorAll(\".slider-dots > li\");\n  slide.forEach(function (key, index) {\n    key.style.display = 'none';\n    slide[index].style.display = 'block';\n    key.style.opacity = 0;\n    slide[index].opacity = 1;\n    dots[index].classList.add('slick-active');\n  });\n\n  var displayDots = function displayDots() {\n    gallerySlider;\n  };\n\n  var h = function h() {\n    // for (var t = document.querySelector(\".gallery-slider\"), e = t.querySelectorAll(\".slide\"), n = 1; n < e.length; n++)\n    //     e[n].style.display = \"none\",\n    //     e[n].style.opacity = 0;\n    // var r = m(document.querySelector(\".slider-dots\").children);\n    // r[0].classList.add(\"slick-active\");\n    // var o, i = 0,\n    c = function c(t, n, r) {\n      t[n].style.display = \"none\", e[n].style.opacity = 0, r[n].classList.remove(\"slick-active\");\n    }, l = function l(t, n, r) {\n      t[n].style.display = \"block\", e[n].style.opacity = 1, r[n].classList.add(\"slick-active\");\n    }, a = function a() {\n      c(e, i, r), ++i >= e.length && (i = 0), l(e, i, r);\n    }, s = function s() {\n      o = setInterval(a, 3e3);\n    };\n    t.addEventListener(\"click\", function (t) {\n      t.preventDefault();\n      var n = t.target;\n      n.matches(\".slider-arrow, .dot\") && (c(e, i, r), n.matches(\".next\") ? ++i >= e.length && (i = 0) : n.matches(\".prev\") ? --i < 0 && (i = e.length - 1) : n.classList.contains(\"dot\") && r.forEach(function (t, e) {\n        t === n.parentNode && (i = e);\n      }), l(e, i, r));\n    }), t.addEventListener(\"mouseover\", function (t) {\n      (t.target.matches(\".slider-arrow\") || t.target.closest(\".dot\")) && clearInterval(o);\n    }), t.addEventListener(\"mouseout\", function (t) {\n      (t.target.matches(\".slider-arrow\") || t.target.closest(\".dot\")) && s();\n    }), s();\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJmb3JFYWNoIiwia2V5IiwiaW5kZXgiLCJzdHlsZSIsImRpc3BsYXkiLCJvcGFjaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheURvdHMiLCJoIiwiYyIsInQiLCJuIiwiciIsImUiLCJyZW1vdmUiLCJsIiwiYSIsImkiLCJsZW5ndGgiLCJzIiwibyIsInNldEludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwibWF0Y2hlcyIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNsb3Nlc3QiLCJjbGVhckludGVydmFsIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUNqQixNQUFNQyxhQUFhLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBdEI7QUFBQSxNQUNJQyxLQUFLLEdBQUdILGFBQWEsQ0FBQ0ksZ0JBQWQsQ0FBK0IsUUFBL0IsQ0FEWjtBQUFBLE1BRUlDLElBQUksR0FBR0osUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixtQkFBMUIsQ0FGWDtBQUlBRCxPQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDMUJELE9BQUcsQ0FBQ0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0FQLFNBQUssQ0FBQ0ssS0FBRCxDQUFMLENBQWFDLEtBQWIsQ0FBbUJDLE9BQW5CLEdBQTZCLE9BQTdCO0FBQ0FILE9BQUcsQ0FBQ0UsS0FBSixDQUFVRSxPQUFWLEdBQW9CLENBQXBCO0FBQ0FSLFNBQUssQ0FBQ0ssS0FBRCxDQUFMLENBQWFH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aUIsTUFBakIsQ0FBdEMsS0FBbUVDLGFBQWEsQ0FBQ1QsQ0FBRCxDQUFoRjtBQUNILEtBRkQsQ0FUSixFQVlJVixDQUFDLENBQUNZLGdCQUFGLENBQW1CLFVBQW5CLEVBQWdDLFVBQVNaLENBQVQsRUFBWTtBQUN4QyxPQUFDQSxDQUFDLENBQUNjLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQixlQUFqQixLQUFxQ2YsQ0FBQyxDQUFDYyxNQUFGLENBQVNJLE9BQVQsQ0FBaUIsTUFBakIsQ0FBdEMsS0FBbUVULENBQUMsRUFBcEU7QUFDSCxLQUZELENBWkosRUFlSUEsQ0FBQyxFQWZMO0FBZ0JILEdBekNEO0FBMkNILENBN0REOztBQThEQSxpRUFBZTNCLE1BQWYiLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9zbGlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBnYWxsZXJ5U2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnktc2xpZGVyJyksXHJcbiAgICAgICAgc2xpZGUgPSBnYWxsZXJ5U2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksXHJcbiAgICAgICAgZG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVyLWRvdHMgPiBsaVwiKTtcclxuXHJcbiAgICBzbGlkZS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgICAga2V5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc2xpZGVbaW5kZXhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGtleS5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICBzbGlkZVtpbmRleF0ub3BhY2l0eSA9IDE7XHJcbiAgICAgICAgZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZCgnc2xpY2stYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkaXNwbGF5RG90cyA9ICgpID0+IHtcclxuICAgICAgICBnYWxsZXJ5U2xpZGVyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHZhciBoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gZm9yICh2YXIgdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeS1zbGlkZXJcIiksIGUgPSB0LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIiksIG4gPSAxOyBuIDwgZS5sZW5ndGg7IG4rKylcclxuICAgICAgICAvLyAgICAgZVtuXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgLy8gICAgIGVbbl0uc3R5bGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgLy8gdmFyIHIgPSBtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2xpZGVyLWRvdHNcIikuY2hpbGRyZW4pO1xyXG4gICAgICAgIC8vIHJbMF0uY2xhc3NMaXN0LmFkZChcInNsaWNrLWFjdGl2ZVwiKTtcclxuICAgICAgICAvLyB2YXIgbywgaSA9IDAsXHJcbiAgICAgICAgYyA9IGZ1bmN0aW9uKHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHRbbl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGVbbl0uc3R5bGUub3BhY2l0eSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcltuXS5jbGFzc0xpc3QucmVtb3ZlKFwic2xpY2stYWN0aXZlXCIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGwgPSBmdW5jdGlvbih0LCBuLCByKSB7XHJcbiAgICAgICAgICAgICAgICB0W25dLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZVtuXS5zdHlsZS5vcGFjaXR5ID0gMSxcclxuICAgICAgICAgICAgICAgICAgICByW25dLmNsYXNzTGlzdC5hZGQoXCJzbGljay1hY3RpdmVcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYyhlLCBpLCByKSxcclxuICAgICAgICAgICAgICAgICAgICArK2kgPj0gZS5sZW5ndGggJiYgKGkgPSAwKSxcclxuICAgICAgICAgICAgICAgICAgICBsKGUsIGksIHIpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIG8gPSBzZXRJbnRlcnZhbChhLCAzZTMpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBuID0gdC50YXJnZXQ7XHJcbiAgICAgICAgICAgICAgICBuLm1hdGNoZXMoXCIuc2xpZGVyLWFycm93LCAuZG90XCIpICYmIChjKGUsIGksIHIpLFxyXG4gICAgICAgICAgICAgICAgICAgIG4ubWF0Y2hlcyhcIi5uZXh0XCIpID8gKytpID49IGUubGVuZ3RoICYmIChpID0gMCkgOiBuLm1hdGNoZXMoXCIucHJldlwiKSA/IC0taSA8IDAgJiYgKGkgPSBlLmxlbmd0aCAtIDEpIDogbi5jbGFzc0xpc3QuY29udGFpbnMoXCJkb3RcIikgJiYgci5mb3JFYWNoKChmdW5jdGlvbih0LCBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPT09IG4ucGFyZW50Tm9kZSAmJiAoaSA9IGUpXHJcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIGwoZSwgaSwgcikpXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAodC50YXJnZXQubWF0Y2hlcyhcIi5zbGlkZXItYXJyb3dcIikgfHwgdC50YXJnZXQuY2xvc2VzdChcIi5kb3RcIikpICYmIGNsZWFySW50ZXJ2YWwobylcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgKHQudGFyZ2V0Lm1hdGNoZXMoXCIuc2xpZGVyLWFycm93XCIpIHx8IHQudGFyZ2V0LmNsb3Nlc3QoXCIuZG90XCIpKSAmJiBzKClcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICBzKClcclxuICAgIH07XHJcblxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHNsaWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "8043e401ed24d3651098"
/******/ 	})();
/******/ 	
/******/ }
);