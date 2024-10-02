"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_system_Desktop_Wallpapers_ShaderToy_CoastalLandscape_index_ts";
exports.ids = ["components_system_Desktop_Wallpapers_ShaderToy_CoastalLandscape_index_ts"];
exports.modules = {

/***/ "./components/system/Desktop/Wallpapers/ShaderToy/CoastalLandscape/index.ts":
/*!**********************************************************************************!*\
  !*** ./components/system/Desktop/Wallpapers/ShaderToy/CoastalLandscape/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   libs: () => (/* binding */ libs)\n/* harmony export */ });\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/functions */ \"./utils/functions.ts\");\n\nconst libs = [\n    \"/System/ShaderToy/CoastalLandscape/piLibs.js\",\n    \"/System/ShaderToy/CoastalLandscape/effect.js\",\n    \"/System/ShaderToy/CoastalLandscape/init.js\"\n];\nconst CoastalLandscape = async (el)=>{\n    if (!el) return;\n    await (0,utils_functions__WEBPACK_IMPORTED_MODULE_0__.loadFiles)(libs);\n    const canvas = document.createElement(\"canvas\");\n    canvas.height = window.innerHeight;\n    canvas.width = window.innerWidth;\n    window.effectInit(canvas);\n    el.append(canvas);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoastalLandscape);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N5c3RlbS9EZXNrdG9wL1dhbGxwYXBlcnMvU2hhZGVyVG95L0NvYXN0YWxMYW5kc2NhcGUvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBUXJDLE1BQU1DLE9BQU87SUFDbEI7SUFDQTtJQUNBO0NBQ0QsQ0FBQztBQUVGLE1BQU1DLG1CQUFtQixPQUFPQztJQUM5QixJQUFJLENBQUNBLElBQUk7SUFFVCxNQUFNSCwwREFBU0EsQ0FBQ0M7SUFFaEIsTUFBTUcsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO0lBRXRDRixPQUFPRyxNQUFNLEdBQUdDLE9BQU9DLFdBQVc7SUFDbENMLE9BQU9NLEtBQUssR0FBR0YsT0FBT0csVUFBVTtJQUVoQ0gsT0FBT0ksVUFBVSxDQUFDUjtJQUVsQkQsR0FBR1UsTUFBTSxDQUFDVDtBQUNaO0FBRUEsaUVBQWVGLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhZWRhbG9zLy4vY29tcG9uZW50cy9zeXN0ZW0vRGVza3RvcC9XYWxscGFwZXJzL1NoYWRlclRveS9Db2FzdGFsTGFuZHNjYXBlL2luZGV4LnRzPzViYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEZpbGVzIH0gZnJvbSBcInV0aWxzL2Z1bmN0aW9uc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgZWZmZWN0SW5pdDogKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGlicyA9IFtcclxuICBcIi9TeXN0ZW0vU2hhZGVyVG95L0NvYXN0YWxMYW5kc2NhcGUvcGlMaWJzLmpzXCIsXHJcbiAgXCIvU3lzdGVtL1NoYWRlclRveS9Db2FzdGFsTGFuZHNjYXBlL2VmZmVjdC5qc1wiLFxyXG4gIFwiL1N5c3RlbS9TaGFkZXJUb3kvQ29hc3RhbExhbmRzY2FwZS9pbml0LmpzXCIsXHJcbl07XHJcblxyXG5jb25zdCBDb2FzdGFsTGFuZHNjYXBlID0gYXN5bmMgKGVsPzogSFRNTEVsZW1lbnQgfCBudWxsKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgaWYgKCFlbCkgcmV0dXJuO1xyXG5cclxuICBhd2FpdCBsb2FkRmlsZXMobGlicyk7XHJcblxyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblxyXG4gIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gIHdpbmRvdy5lZmZlY3RJbml0KGNhbnZhcyk7XHJcblxyXG4gIGVsLmFwcGVuZChjYW52YXMpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29hc3RhbExhbmRzY2FwZTtcclxuIl0sIm5hbWVzIjpbImxvYWRGaWxlcyIsImxpYnMiLCJDb2FzdGFsTGFuZHNjYXBlIiwiZWwiLCJjYW52YXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJoZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsImVmZmVjdEluaXQiLCJhcHBlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/system/Desktop/Wallpapers/ShaderToy/CoastalLandscape/index.ts\n");

/***/ })

};
;