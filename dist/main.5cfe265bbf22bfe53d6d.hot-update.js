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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar slider = function slider() {\n  var gallerySlider = document.querySelector('.gallery-slider'),\n      slide = document.querySelectorAll(\".slide\"),\n      dots = document.querySelector(\".slider-dots\");\n\n  var h = function h() {\n    for (var t = document.querySelector(\".gallery-slider\"), e = t.querySelectorAll(\".slide\"), n = 1; n < e.length; n++) {\n      e[n].style.display = \"none\", e[n].style.opacity = 0;\n    }\n\n    var r = m(document.querySelector(\".slider-dots\").children);\n    r[0].classList.add(\"slick-active\");\n\n    var o,\n        i = 0,\n        c = function c(t, n, r) {\n      t[n].style.display = \"none\", e[n].style.opacity = 0, r[n].classList.remove(\"slick-active\");\n    },\n        l = function l(t, n, r) {\n      t[n].style.display = \"block\", e[n].style.opacity = 1, r[n].classList.add(\"slick-active\");\n    },\n        a = function a() {\n      c(e, i, r), ++i >= e.length && (i = 0), l(e, i, r);\n    },\n        s = function s() {\n      o = setInterval(a, 3e3);\n    };\n\n    t.addEventListener(\"click\", function (t) {\n      t.preventDefault();\n      var n = t.target;\n      n.matches(\".slider-arrow, .dot\") && (c(e, i, r), n.matches(\".next\") ? ++i >= e.length && (i = 0) : n.matches(\".prev\") ? --i < 0 && (i = e.length - 1) : n.classList.contains(\"dot\") && r.forEach(function (t, e) {\n        t === n.parentNode && (i = e);\n      }), l(e, i, r));\n    }), t.addEventListener(\"mouseover\", function (t) {\n      (t.target.matches(\".slider-arrow\") || t.target.closest(\".dot\")) && clearInterval(o);\n    }), t.addEventListener(\"mouseout\", function (t) {\n      (t.target.matches(\".slider-arrow\") || t.target.closest(\".dot\")) && s();\n    }), s();\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXRuZXNzLy4vc3JjL21vZHVsZXMvc2xpZGVyLmpzP2FhZWEiXSwibmFtZXMiOlsic2xpZGVyIiwiZ2FsbGVyeVNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlIiwicXVlcnlTZWxlY3RvckFsbCIsImRvdHMiLCJoIiwidCIsImUiLCJuIiwibGVuZ3RoIiwic3R5bGUiLCJkaXNwbGF5Iiwib3BhY2l0eSIsInIiLCJtIiwiY2hpbGRyZW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJvIiwiaSIsImMiLCJyZW1vdmUiLCJsIiwiYSIsInMiLCJzZXRJbnRlcnZhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm1hdGNoZXMiLCJjb250YWlucyIsImZvckVhY2giLCJwYXJlbnROb2RlIiwiY2xvc2VzdCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ2pCLE1BQU1DLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUFBLE1BQ0lDLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixRQUExQixDQURaO0FBQUEsTUFFSUMsSUFBSSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FGWDs7QUFJQSxNQUFJSSxDQUFDLEdBQUcsU0FBSkEsQ0FBSSxHQUFXO0FBQ2YsU0FBSyxJQUFJQyxDQUFDLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQkFBdkIsQ0FBUixFQUFtRE0sQ0FBQyxHQUFHRCxDQUFDLENBQUNILGdCQUFGLENBQW1CLFFBQW5CLENBQXZELEVBQXFGSyxDQUFDLEdBQUcsQ0FBOUYsRUFBaUdBLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxNQUF2RyxFQUErR0QsQ0FBQyxFQUFoSDtBQUNJRCxPQUFDLENBQUNDLENBQUQsQ0FBRCxD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LENBQUMsQ0FBQ29CLGdCQUFGLENBQW1CLFdBQW5CLEVBQWlDLFVBQVNwQixDQUFULEVBQVk7QUFDekMsT0FBQ0EsQ0FBQyxDQUFDc0IsTUFBRixDQUFTQyxPQUFULENBQWlCLGVBQWpCLEtBQXFDdkIsQ0FBQyxDQUFDc0IsTUFBRixDQUFTSyxPQUFULENBQWlCLE1BQWpCLENBQXRDLEtBQW1FQyxhQUFhLENBQUNoQixDQUFELENBQWhGO0FBQ0gsS0FGRCxDQVRKLEVBWUlaLENBQUMsQ0FBQ29CLGdCQUFGLENBQW1CLFVBQW5CLEVBQWdDLFVBQVNwQixDQUFULEVBQVk7QUFDeEMsT0FBQ0EsQ0FBQyxDQUFDc0IsTUFBRixDQUFTQyxPQUFULENBQWlCLGVBQWpCLEtBQXFDdkIsQ0FBQyxDQUFDc0IsTUFBRixDQUFTSyxPQUFULENBQWlCLE1BQWpCLENBQXRDLEtBQW1FVCxDQUFDLEVBQXBFO0FBQ0gsS0FGRCxDQVpKLEVBZUlBLENBQUMsRUFmTDtBQWdCSCxHQXpDRDtBQTJDSCxDQWhERDs7QUFpREEsaUVBQWUxQixNQUFmIiwiZmlsZSI6Ii4vc3JjL21vZHVsZXMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2xpZGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ2FsbGVyeVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5LXNsaWRlcicpLFxyXG4gICAgICAgIHNsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZVwiKSxcclxuICAgICAgICBkb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zbGlkZXItZG90c1wiKTtcclxuXHJcbiAgICB2YXIgaCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnktc2xpZGVyXCIpLCBlID0gdC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlXCIpLCBuID0gMTsgbiA8IGUubGVuZ3RoOyBuKyspXHJcbiAgICAgICAgICAgIGVbbl0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBlW25dLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHZhciByID0gbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1kb3RzXCIpLmNoaWxkcmVuKTtcclxuICAgICAgICByWzBdLmNsYXNzTGlzdC5hZGQoXCJzbGljay1hY3RpdmVcIik7XHJcbiAgICAgICAgdmFyIG8sIGkgPSAwLFxyXG4gICAgICAgICAgICBjID0gZnVuY3Rpb24odCwgbiwgcikge1xyXG4gICAgICAgICAgICAgICAgdFtuXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZVtuXS5zdHlsZS5vcGFjaXR5ID0gMCxcclxuICAgICAgICAgICAgICAgICAgICByW25dLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGljay1hY3RpdmVcIilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbCA9IGZ1bmN0aW9uKHQsIG4sIHIpIHtcclxuICAgICAgICAgICAgICAgIHRbbl0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBlW25dLnN0eWxlLm9wYWNpdHkgPSAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJbbl0uY2xhc3NMaXN0LmFkZChcInNsaWNrLWFjdGl2ZVwiKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjKGUsIGksIHIpLFxyXG4gICAgICAgICAgICAgICAgICAgICsraSA+PSBlLmxlbmd0aCAmJiAoaSA9IDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGwoZSwgaSwgcilcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbyA9IHNldEludGVydmFsKGEsIDNlMylcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG4gPSB0LnRhcmdldDtcclxuICAgICAgICAgICAgICAgIG4ubWF0Y2hlcyhcIi5zbGlkZXItYXJyb3csIC5kb3RcIikgJiYgKGMoZSwgaSwgciksXHJcbiAgICAgICAgICAgICAgICAgICAgbi5tYXRjaGVzKFwiLm5leHRcIikgPyArK2kgPj0gZS5sZW5ndGggJiYgKGkgPSAwKSA6IG4ubWF0Y2hlcyhcIi5wcmV2XCIpID8gLS1pIDwgMCAmJiAoaSA9IGUubGVuZ3RoIC0gMSkgOiBuLmNsYXNzTGlzdC5jb250YWlucyhcImRvdFwiKSAmJiByLmZvckVhY2goKGZ1bmN0aW9uKHQsIGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdCA9PT0gbi5wYXJlbnROb2RlICYmIChpID0gZSlcclxuICAgICAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICAgICAgbChlLCBpLCByKSlcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICB0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgICAgICh0LnRhcmdldC5tYXRjaGVzKFwiLnNsaWRlci1hcnJvd1wiKSB8fCB0LnRhcmdldC5jbG9zZXN0KFwiLmRvdFwiKSkgJiYgY2xlYXJJbnRlcnZhbChvKVxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIChmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgICAgICAodC50YXJnZXQubWF0Y2hlcyhcIi5zbGlkZXItYXJyb3dcIikgfHwgdC50YXJnZXQuY2xvc2VzdChcIi5kb3RcIikpICYmIHMoKVxyXG4gICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgIHMoKVxyXG4gICAgfTtcclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgc2xpZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/slider.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "dfe922c2517a7c47e401"
/******/ 	})();
/******/ 	
/******/ }
);