"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "utils_sheetjs_ts";
exports.ids = ["utils_sheetjs_ts"];
exports.modules = {

/***/ "./utils/sheetjs.ts":
/*!**************************!*\
  !*** ./utils/sheetjs.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertSheet: () => (/* binding */ convertSheet)\n/* harmony export */ });\n/* harmony import */ var utils_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/functions */ \"./utils/functions.ts\");\n\nconst getSheetJs = async ()=>{\n    if (!window.XLSX) {\n        await (0,utils_functions__WEBPACK_IMPORTED_MODULE_0__.loadFiles)([\n            \"/Program Files/SheetJS/xlsx.full.min.js\"\n        ]);\n    }\n    return window.XLSX;\n};\nconst convertSheet = async (fileData, extension)=>{\n    const sheetJs = await getSheetJs();\n    let numbers;\n    if (extension === \"numbers\") {\n        await (0,utils_functions__WEBPACK_IMPORTED_MODULE_0__.loadFiles)([\n            \"/Program Files/SheetJS/xlsx.zahl.js\"\n        ]);\n        if (!window.XLSX_ZAHL_PAYLOAD) return Buffer.from(\"\");\n        numbers = window.XLSX_ZAHL_PAYLOAD;\n    }\n    return sheetJs.write(sheetJs.read(fileData), {\n        bookType: extension,\n        numbers,\n        type: \"buffer\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zaGVldGpzLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQzRDO0FBUzVDLE1BQU1DLGFBQWE7SUFDakIsSUFBSSxDQUFDQyxPQUFPQyxJQUFJLEVBQUU7UUFDaEIsTUFBTUgsMERBQVNBLENBQUM7WUFBQztTQUEwQztJQUM3RDtJQUVBLE9BQU9FLE9BQU9DLElBQUk7QUFDcEI7QUFFTyxNQUFNQyxlQUFlLE9BQzFCQyxVQUNBQztJQUVBLE1BQU1DLFVBQVUsTUFBTU47SUFDdEIsSUFBSU87SUFFSixJQUFJRixjQUFjLFdBQVc7UUFDM0IsTUFBTU4sMERBQVNBLENBQUM7WUFBQztTQUFzQztRQUV2RCxJQUFJLENBQUNFLE9BQU9PLGlCQUFpQixFQUFFLE9BQU9DLE9BQU9DLElBQUksQ0FBQztRQUVsREgsVUFBVU4sT0FBT08saUJBQWlCO0lBQ3BDO0lBRUEsT0FBT0YsUUFBUUssS0FBSyxDQUFDTCxRQUFRTSxJQUFJLENBQUNSLFdBQVc7UUFDM0NTLFVBQVVSO1FBQ1ZFO1FBQ0FPLE1BQU07SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWVkYWxvcy8uL3V0aWxzL3NoZWV0anMudHM/NTQ1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSAqIGFzIFhMU1ggZnJvbSBcInhsc3hcIjtcclxuaW1wb3J0IHsgbG9hZEZpbGVzIH0gZnJvbSBcInV0aWxzL2Z1bmN0aW9uc1wiO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgWExTWDogdHlwZW9mIFhMU1g7XHJcbiAgICBYTFNYX1pBSExfUEFZTE9BRD86IHN0cmluZztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdldFNoZWV0SnMgPSBhc3luYyAoKTogUHJvbWlzZTx0eXBlb2YgWExTWD4gPT4ge1xyXG4gIGlmICghd2luZG93LlhMU1gpIHtcclxuICAgIGF3YWl0IGxvYWRGaWxlcyhbXCIvUHJvZ3JhbSBGaWxlcy9TaGVldEpTL3hsc3guZnVsbC5taW4uanNcIl0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHdpbmRvdy5YTFNYO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRTaGVldCA9IGFzeW5jIChcclxuICBmaWxlRGF0YTogQnVmZmVyLFxyXG4gIGV4dGVuc2lvbjogc3RyaW5nXHJcbik6IFByb21pc2U8VWludDhBcnJheT4gPT4ge1xyXG4gIGNvbnN0IHNoZWV0SnMgPSBhd2FpdCBnZXRTaGVldEpzKCk7XHJcbiAgbGV0IG51bWJlcnM6IHN0cmluZyB8IHVuZGVmaW5lZDtcclxuXHJcbiAgaWYgKGV4dGVuc2lvbiA9PT0gXCJudW1iZXJzXCIpIHtcclxuICAgIGF3YWl0IGxvYWRGaWxlcyhbXCIvUHJvZ3JhbSBGaWxlcy9TaGVldEpTL3hsc3guemFobC5qc1wiXSk7XHJcblxyXG4gICAgaWYgKCF3aW5kb3cuWExTWF9aQUhMX1BBWUxPQUQpIHJldHVybiBCdWZmZXIuZnJvbShcIlwiKTtcclxuXHJcbiAgICBudW1iZXJzID0gd2luZG93LlhMU1hfWkFITF9QQVlMT0FEO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNoZWV0SnMud3JpdGUoc2hlZXRKcy5yZWFkKGZpbGVEYXRhKSwge1xyXG4gICAgYm9va1R5cGU6IGV4dGVuc2lvbiBhcyBYTFNYLkJvb2tUeXBlLFxyXG4gICAgbnVtYmVycyxcclxuICAgIHR5cGU6IFwiYnVmZmVyXCIsXHJcbiAgfSkgYXMgVWludDhBcnJheTtcclxufTtcclxuIl0sIm5hbWVzIjpbImxvYWRGaWxlcyIsImdldFNoZWV0SnMiLCJ3aW5kb3ciLCJYTFNYIiwiY29udmVydFNoZWV0IiwiZmlsZURhdGEiLCJleHRlbnNpb24iLCJzaGVldEpzIiwibnVtYmVycyIsIlhMU1hfWkFITF9QQVlMT0FEIiwiQnVmZmVyIiwiZnJvbSIsIndyaXRlIiwicmVhZCIsImJvb2tUeXBlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/sheetjs.ts\n");

/***/ })

};
;