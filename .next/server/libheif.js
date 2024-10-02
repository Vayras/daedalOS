/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./utils/heic.worker.ts":
/*!******************************!*\
  !*** ./utils/heic.worker.ts ***!
  \******************************/
/***/ (() => {

eval("globalThis.addEventListener(\"message\", ({ data: image })=>{\n    globalThis.importScripts(\"/System/libheif/libheif-bundle.js\");\n    const { libheif } = globalThis;\n    const { HeifDecoder, ready } = libheif();\n    ready.then(()=>{\n        const [decodedImage] = new HeifDecoder().decode(image);\n        const width = decodedImage.get_width();\n        const height = decodedImage.get_height();\n        decodedImage.display({\n            data: new Uint8ClampedArray(width * height * 4),\n            height,\n            width\n        }, ({ data })=>globalThis.postMessage(new ImageData(data, width, height)));\n    });\n}, {\n    passive: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWVkYWxvcy8uL3V0aWxzL2hlaWMud29ya2VyLnRzPzNkZTIiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBMaWJIZWlmID0ge1xyXG4gIGxpYmhlaWY6ICgpID0+IHtcclxuICAgIEhlaWZEZWNvZGVyOiBuZXcgKCkgPT4ge1xyXG4gICAgICBkZWNvZGU6IChmaWxlOiBCdWZmZXIpID0+IHtcclxuICAgICAgICBkaXNwbGF5OiAoXHJcbiAgICAgICAgICBpbWFnZURhdGE6IEltYWdlRGF0YSxcclxuICAgICAgICAgIGNhbGxiYWNrOiAoZGF0YTogSW1hZ2VEYXRhKSA9PiB2b2lkXHJcbiAgICAgICAgKSA9PiB2b2lkO1xyXG4gICAgICAgIGdldF9oZWlnaHQ6ICgpID0+IG51bWJlcjtcclxuICAgICAgICBnZXRfd2lkdGg6ICgpID0+IG51bWJlcjtcclxuICAgICAgfVtdO1xyXG4gICAgfTtcclxuICAgIHJlYWR5OiBQcm9taXNlPHZvaWQ+O1xyXG4gIH07XHJcbn07XHJcblxyXG5nbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgXCJtZXNzYWdlXCIsXHJcbiAgKHsgZGF0YTogaW1hZ2UgfTogeyBkYXRhOiBCdWZmZXIgfSkgPT4ge1xyXG4gICAgZ2xvYmFsVGhpcy5pbXBvcnRTY3JpcHRzKFwiL1N5c3RlbS9saWJoZWlmL2xpYmhlaWYtYnVuZGxlLmpzXCIpO1xyXG5cclxuICAgIGNvbnN0IHsgbGliaGVpZiB9ID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHR5cGVvZiBnbG9iYWxUaGlzICYgTGliSGVpZjtcclxuICAgIGNvbnN0IHsgSGVpZkRlY29kZXIsIHJlYWR5IH0gPSBsaWJoZWlmKCk7XHJcblxyXG4gICAgcmVhZHkudGhlbigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IFtkZWNvZGVkSW1hZ2VdID0gbmV3IEhlaWZEZWNvZGVyKCkuZGVjb2RlKGltYWdlKTtcclxuICAgICAgY29uc3Qgd2lkdGggPSBkZWNvZGVkSW1hZ2UuZ2V0X3dpZHRoKCk7XHJcbiAgICAgIGNvbnN0IGhlaWdodCA9IGRlY29kZWRJbWFnZS5nZXRfaGVpZ2h0KCk7XHJcblxyXG4gICAgICBkZWNvZGVkSW1hZ2UuZGlzcGxheShcclxuICAgICAgICB7XHJcbiAgICAgICAgICBkYXRhOiBuZXcgVWludDhDbGFtcGVkQXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KSxcclxuICAgICAgICAgIGhlaWdodCxcclxuICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgIH0gYXMgSW1hZ2VEYXRhLFxyXG4gICAgICAgICh7IGRhdGEgfSkgPT4gZ2xvYmFsVGhpcy5wb3N0TWVzc2FnZShuZXcgSW1hZ2VEYXRhKGRhdGEsIHdpZHRoLCBoZWlnaHQpKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICB7IHBhc3NpdmU6IHRydWUgfVxyXG4pO1xyXG4iXSwibmFtZXMiOlsiZ2xvYmFsVGhpcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhIiwiaW1hZ2UiLCJpbXBvcnRTY3JpcHRzIiwibGliaGVpZiIsIkhlaWZEZWNvZGVyIiwicmVhZHkiLCJ0aGVuIiwiZGVjb2RlZEltYWdlIiwiZGVjb2RlIiwid2lkdGgiLCJnZXRfd2lkdGgiLCJoZWlnaHQiLCJnZXRfaGVpZ2h0IiwiZGlzcGxheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwicG9zdE1lc3NhZ2UiLCJJbWFnZURhdGEiLCJwYXNzaXZlIl0sIm1hcHBpbmdzIjoiQUFnQkFBLFdBQVdDLGdCQUFnQixDQUN6QixXQUNBLENBQUMsRUFBRUMsTUFBTUMsS0FBSyxFQUFvQjtJQUNoQ0gsV0FBV0ksYUFBYSxDQUFDO0lBRXpCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdMO0lBQ3BCLE1BQU0sRUFBRU0sV0FBVyxFQUFFQyxLQUFLLEVBQUUsR0FBR0Y7SUFFL0JFLE1BQU1DLElBQUksQ0FBQztRQUNULE1BQU0sQ0FBQ0MsYUFBYSxHQUFHLElBQUlILGNBQWNJLE1BQU0sQ0FBQ1A7UUFDaEQsTUFBTVEsUUFBUUYsYUFBYUcsU0FBUztRQUNwQyxNQUFNQyxTQUFTSixhQUFhSyxVQUFVO1FBRXRDTCxhQUFhTSxPQUFPLENBQ2xCO1lBQ0ViLE1BQU0sSUFBSWMsa0JBQWtCTCxRQUFRRSxTQUFTO1lBQzdDQTtZQUNBRjtRQUNGLEdBQ0EsQ0FBQyxFQUFFVCxJQUFJLEVBQUUsR0FBS0YsV0FBV2lCLFdBQVcsQ0FBQyxJQUFJQyxVQUFVaEIsTUFBTVMsT0FBT0U7SUFFcEU7QUFDRixHQUNBO0lBQUVNLFNBQVM7QUFBSyIsImZpbGUiOiIuL3V0aWxzL2hlaWMud29ya2VyLnRzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/heic.worker.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./utils/heic.worker.ts"]();
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;