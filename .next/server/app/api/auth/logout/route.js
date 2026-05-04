"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/logout/route";
exports.ids = ["app/api/auth/logout/route"];
exports.modules = {

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_harke_Downloads_New_folder_New_folder_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/logout/route.ts */ \"(rsc)/./app/api/auth/logout/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/logout/route\",\n        pathname: \"/api/auth/logout\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/logout/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\harke\\\\Downloads\\\\New folder\\\\New folder\\\\app\\\\api\\\\auth\\\\logout\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_harke_Downloads_New_folder_New_folder_app_api_auth_logout_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/logout/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGbG9nb3V0JTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRmxvZ291dCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNoYXJrZSU1Q0Rvd25sb2FkcyU1Q05ldyUyMGZvbGRlciU1Q05ldyUyMGZvbGRlciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDaGFya2UlNUNEb3dubG9hZHMlNUNOZXclMjBmb2xkZXIlNUNOZXclMjBmb2xkZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3FDO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJhYy1wcm9qZWN0LW1hbmFnZW1lbnQtc3lzdGVtLz9kYzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGhhcmtlXFxcXERvd25sb2Fkc1xcXFxOZXcgZm9sZGVyXFxcXE5ldyBmb2xkZXJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ291dFxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ291dFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9sb2dvdXQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxoYXJrZVxcXFxEb3dubG9hZHNcXFxcTmV3IGZvbGRlclxcXFxOZXcgZm9sZGVyXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxsb2dvdXRcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvbG9nb3V0L3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/logout/route.ts":
/*!**************************************!*\
  !*** ./app/api/auth/logout/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/api */ \"(rsc)/./lib/api.ts\");\nconst dynamic = \"force-dynamic\";\n\n\nasync function POST() {\n    const response = (0,_lib_api__WEBPACK_IMPORTED_MODULE_1__.jsonSuccess)({}, \"Logged out successfully.\");\n    response.cookies.set(_lib_auth__WEBPACK_IMPORTED_MODULE_0__.AUTH_COOKIE_NAME, \"\", {\n        ...(0,_lib_auth__WEBPACK_IMPORTED_MODULE_0__.getAuthCookieConfig)(),\n        maxAge: 0\n    });\n    return response;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxVQUFVLGdCQUFnQjtBQUU0QjtBQUMzQjtBQUVqQyxlQUFlSTtJQUNwQixNQUFNQyxXQUFXRixxREFBV0EsQ0FBQyxDQUFDLEdBQUc7SUFDakNFLFNBQVNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTix1REFBZ0JBLEVBQUUsSUFBSTtRQUN6QyxHQUFHQyw4REFBbUJBLEVBQUU7UUFDeEJNLFFBQVE7SUFDVjtJQUVBLE9BQU9IO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYmFjLXByb2plY3QtbWFuYWdlbWVudC1zeXN0ZW0vLi9hcHAvYXBpL2F1dGgvbG9nb3V0L3JvdXRlLnRzPzliOTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjtcblxuaW1wb3J0IHsgQVVUSF9DT09LSUVfTkFNRSwgZ2V0QXV0aENvb2tpZUNvbmZpZyB9IGZyb20gXCJAL2xpYi9hdXRoXCI7XG5pbXBvcnQgeyBqc29uU3VjY2VzcyB9IGZyb20gXCJAL2xpYi9hcGlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0ganNvblN1Y2Nlc3Moe30sIFwiTG9nZ2VkIG91dCBzdWNjZXNzZnVsbHkuXCIpO1xuICByZXNwb25zZS5jb29raWVzLnNldChBVVRIX0NPT0tJRV9OQU1FLCBcIlwiLCB7XG4gICAgLi4uZ2V0QXV0aENvb2tpZUNvbmZpZygpLFxuICAgIG1heEFnZTogMFxuICB9KTtcblxuICByZXR1cm4gcmVzcG9uc2U7XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIkFVVEhfQ09PS0lFX05BTUUiLCJnZXRBdXRoQ29va2llQ29uZmlnIiwianNvblN1Y2Nlc3MiLCJQT1NUIiwicmVzcG9uc2UiLCJjb29raWVzIiwic2V0IiwibWF4QWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/logout/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/api.ts":
/*!********************!*\
  !*** ./lib/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ApiError: () => (/* binding */ ApiError),\n/* harmony export */   handleApiError: () => (/* binding */ handleApiError),\n/* harmony export */   jsonSuccess: () => (/* binding */ jsonSuccess)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/v3/ZodError.js\");\n\n\nclass ApiError extends Error {\n    constructor(statusCode, message){\n        super(message);\n        this.statusCode = statusCode;\n    }\n}\nfunction jsonSuccess(data, message, status = 200) {\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true,\n        message,\n        data\n    }, {\n        status\n    });\n}\nfunction handleApiError(error) {\n    if (error instanceof ApiError) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: error.message\n        }, {\n            status: error.statusCode\n        });\n    }\n    if (error instanceof zod__WEBPACK_IMPORTED_MODULE_1__.ZodError) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: error.issues[0]?.message ?? \"Validation failed\"\n        }, {\n            status: 400\n        });\n    }\n    console.error(error);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: false,\n        message: \"Something went wrong.\"\n    }, {\n        status: 500\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ1o7QUFFeEIsTUFBTUUsaUJBQWlCQztJQUc1QkMsWUFBWUMsVUFBa0IsRUFBRUMsT0FBZSxDQUFFO1FBQy9DLEtBQUssQ0FBQ0E7UUFDTixJQUFJLENBQUNELFVBQVUsR0FBR0E7SUFDcEI7QUFDRjtBQUVPLFNBQVNFLFlBQWVDLElBQU8sRUFBRUYsT0FBZ0IsRUFBRUcsU0FBUyxHQUFHO0lBQ3BFLE9BQU9ULHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1FBQ0VDLFNBQVM7UUFDVEw7UUFDQUU7SUFDRixHQUNBO1FBQUVDO0lBQU87QUFFYjtBQUVPLFNBQVNHLGVBQWVDLEtBQWM7SUFDM0MsSUFBSUEsaUJBQWlCWCxVQUFVO1FBQzdCLE9BQU9GLHFEQUFZQSxDQUFDVSxJQUFJLENBQ3RCO1lBQ0VDLFNBQVM7WUFDVEwsU0FBU08sTUFBTVAsT0FBTztRQUN4QixHQUNBO1lBQUVHLFFBQVFJLE1BQU1SLFVBQVU7UUFBQztJQUUvQjtJQUVBLElBQUlRLGlCQUFpQloseUNBQVFBLEVBQUU7UUFDN0IsT0FBT0QscURBQVlBLENBQUNVLElBQUksQ0FDdEI7WUFDRUMsU0FBUztZQUNUTCxTQUFTTyxNQUFNQyxNQUFNLENBQUMsRUFBRSxFQUFFUixXQUFXO1FBQ3ZDLEdBQ0E7WUFBRUcsUUFBUTtRQUFJO0lBRWxCO0lBRUFNLFFBQVFGLEtBQUssQ0FBQ0E7SUFFZCxPQUFPYixxREFBWUEsQ0FBQ1UsSUFBSSxDQUN0QjtRQUNFQyxTQUFTO1FBQ1RMLFNBQVM7SUFDWCxHQUNBO1FBQUVHLFFBQVE7SUFBSTtBQUVsQiIsInNvdXJjZXMiOlsid2VicGFjazovL3JiYWMtcHJvamVjdC1tYW5hZ2VtZW50LXN5c3RlbS8uL2xpYi9hcGkudHM/NjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IFpvZEVycm9yIH0gZnJvbSBcInpvZFwiO1xuXG5leHBvcnQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIHN0YXR1c0NvZGU6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihzdGF0dXNDb2RlOiBudW1iZXIsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuc3RhdHVzQ29kZSA9IHN0YXR1c0NvZGU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGpzb25TdWNjZXNzPFQ+KGRhdGE6IFQsIG1lc3NhZ2U/OiBzdHJpbmcsIHN0YXR1cyA9IDIwMCkge1xuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAge1xuICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkYXRhXG4gICAgfSxcbiAgICB7IHN0YXR1cyB9XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVBcGlFcnJvcihlcnJvcjogdW5rbm93bikge1xuICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBcGlFcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHtcbiAgICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogZXJyb3Iuc3RhdHVzQ29kZSB9XG4gICAgKTtcbiAgfVxuXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIFpvZEVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogZXJyb3IuaXNzdWVzWzBdPy5tZXNzYWdlID8/IFwiVmFsaWRhdGlvbiBmYWlsZWRcIlxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICk7XG4gIH1cblxuICBjb25zb2xlLmVycm9yKGVycm9yKTtcblxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAge1xuICAgICAgc3VjY2VzczogZmFsc2UsXG4gICAgICBtZXNzYWdlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiXG4gICAgfSxcbiAgICB7IHN0YXR1czogNTAwIH1cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJab2RFcnJvciIsIkFwaUVycm9yIiwiRXJyb3IiLCJjb25zdHJ1Y3RvciIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwianNvblN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJoYW5kbGVBcGlFcnJvciIsImVycm9yIiwiaXNzdWVzIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/api.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AUTH_COOKIE_NAME: () => (/* binding */ AUTH_COOKIE_NAME),\n/* harmony export */   getAuthCookieConfig: () => (/* binding */ getAuthCookieConfig),\n/* harmony export */   getUserFromCookie: () => (/* binding */ getUserFromCookie),\n/* harmony export */   signAuthToken: () => (/* binding */ signAuthToken),\n/* harmony export */   verifyAuthToken: () => (/* binding */ verifyAuthToken)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/sign.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/jwt/verify.js\");\n/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/env */ \"(rsc)/./lib/env.ts\");\n\n\n\nconst AUTH_COOKIE_NAME = \"rbac_session\";\nfunction getJwtSecret() {\n    return new TextEncoder().encode(_lib_env__WEBPACK_IMPORTED_MODULE_1__.env.jwtSecret);\n}\nasync function signAuthToken(payload) {\n    return new jose__WEBPACK_IMPORTED_MODULE_2__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setExpirationTime(_lib_env__WEBPACK_IMPORTED_MODULE_1__.env.jwtExpiresIn).sign(getJwtSecret());\n}\nasync function verifyAuthToken(token) {\n    const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_3__.jwtVerify)(token, getJwtSecret());\n    return payload;\n}\nfunction getAuthCookieConfig() {\n    return {\n        httpOnly: true,\n        sameSite: \"lax\",\n        secure: \"development\" === \"production\",\n        path: \"/\",\n        maxAge: 60 * 60 * 24 * 7\n    };\n}\nasync function getUserFromCookie() {\n    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().get(AUTH_COOKIE_NAME)?.value;\n    if (!token) {\n        return null;\n    }\n    try {\n        return await verifyAuthToken(token);\n    } catch  {\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRztBQUVWO0FBR3pCLE1BQU1JLG1CQUFtQixlQUFlO0FBRS9DLFNBQVNDO0lBQ1AsT0FBTyxJQUFJQyxjQUFjQyxNQUFNLENBQUNKLHlDQUFHQSxDQUFDSyxTQUFTO0FBQy9DO0FBRU8sZUFBZUMsY0FBY0MsT0FBeUI7SUFDM0QsT0FBTyxJQUFJVCx5Q0FBT0EsQ0FBQ1MsU0FDaEJDLGtCQUFrQixDQUFDO1FBQUVDLEtBQUs7SUFBUSxHQUNsQ0MsV0FBVyxHQUNYQyxpQkFBaUIsQ0FBQ1gseUNBQUdBLENBQUNZLFlBQVksRUFDbENDLElBQUksQ0FBQ1g7QUFDVjtBQUVPLGVBQWVZLGdCQUFnQkMsS0FBYTtJQUNqRCxNQUFNLEVBQUVSLE9BQU8sRUFBRSxHQUFHLE1BQU1SLCtDQUFTQSxDQUFtQmdCLE9BQU9iO0lBQzdELE9BQU9LO0FBQ1Q7QUFFTyxTQUFTUztJQUNkLE9BQU87UUFDTEMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVFDLGtCQUF5QjtRQUNqQ0MsTUFBTTtRQUNOQyxRQUFRLEtBQUssS0FBSyxLQUFLO0lBQ3pCO0FBQ0Y7QUFFTyxlQUFlQztJQUNwQixNQUFNUixRQUFRbEIscURBQU9BLEdBQUcyQixHQUFHLENBQUN2QixtQkFBbUJ3QjtJQUUvQyxJQUFJLENBQUNWLE9BQU87UUFDVixPQUFPO0lBQ1Q7SUFFQSxJQUFJO1FBQ0YsT0FBTyxNQUFNRCxnQkFBZ0JDO0lBQy9CLEVBQUUsT0FBTTtRQUNOLE9BQU87SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJhYy1wcm9qZWN0LW1hbmFnZW1lbnQtc3lzdGVtLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgU2lnbkpXVCwgand0VmVyaWZ5IH0gZnJvbSBcImpvc2VcIjtcblxuaW1wb3J0IHsgZW52IH0gZnJvbSBcIkAvbGliL2VudlwiO1xuaW1wb3J0IHR5cGUgeyBBdXRoVG9rZW5QYXlsb2FkIH0gZnJvbSBcIkAvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEFVVEhfQ09PS0lFX05BTUUgPSBcInJiYWNfc2Vzc2lvblwiO1xuXG5mdW5jdGlvbiBnZXRKd3RTZWNyZXQoKSB7XG4gIHJldHVybiBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUoZW52Lmp3dFNlY3JldCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduQXV0aFRva2VuKHBheWxvYWQ6IEF1dGhUb2tlblBheWxvYWQpIHtcbiAgcmV0dXJuIG5ldyBTaWduSldUKHBheWxvYWQpXG4gICAgLnNldFByb3RlY3RlZEhlYWRlcih7IGFsZzogXCJIUzI1NlwiIH0pXG4gICAgLnNldElzc3VlZEF0KClcbiAgICAuc2V0RXhwaXJhdGlvblRpbWUoZW52Lmp3dEV4cGlyZXNJbilcbiAgICAuc2lnbihnZXRKd3RTZWNyZXQoKSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB2ZXJpZnlBdXRoVG9rZW4odG9rZW46IHN0cmluZykge1xuICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeTxBdXRoVG9rZW5QYXlsb2FkPih0b2tlbiwgZ2V0Snd0U2VjcmV0KCkpO1xuICByZXR1cm4gcGF5bG9hZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhDb29raWVDb25maWcoKSB7XG4gIHJldHVybiB7XG4gICAgaHR0cE9ubHk6IHRydWUsXG4gICAgc2FtZVNpdGU6IFwibGF4XCIgYXMgY29uc3QsXG4gICAgc2VjdXJlOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiA3XG4gIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyRnJvbUNvb2tpZSgpIHtcbiAgY29uc3QgdG9rZW4gPSBjb29raWVzKCkuZ2V0KEFVVEhfQ09PS0lFX05BTUUpPy52YWx1ZTtcblxuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCB2ZXJpZnlBdXRoVG9rZW4odG9rZW4pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJTaWduSldUIiwiand0VmVyaWZ5IiwiZW52IiwiQVVUSF9DT09LSUVfTkFNRSIsImdldEp3dFNlY3JldCIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiand0U2VjcmV0Iiwic2lnbkF1dGhUb2tlbiIsInBheWxvYWQiLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldEV4cGlyYXRpb25UaW1lIiwiand0RXhwaXJlc0luIiwic2lnbiIsInZlcmlmeUF1dGhUb2tlbiIsInRva2VuIiwiZ2V0QXV0aENvb2tpZUNvbmZpZyIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJzZWN1cmUiLCJwcm9jZXNzIiwicGF0aCIsIm1heEFnZSIsImdldFVzZXJGcm9tQ29va2llIiwiZ2V0IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/env.ts":
/*!********************!*\
  !*** ./lib/env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   env: () => (/* binding */ env)\n/* harmony export */ });\nfunction readEnv(key) {\n    const value = process.env[key];\n    if (!value) {\n        throw new Error(`Missing required environment variable: ${key}`);\n    }\n    return value;\n}\nconst env = {\n    get mongodbUri () {\n        return readEnv(\"MONGODB_URI\");\n    },\n    get jwtSecret () {\n        return readEnv(\"JWT_SECRET\");\n    },\n    get jwtExpiresIn () {\n        return process.env.JWT_EXPIRES_IN ?? \"7d\";\n    },\n    get bootstrapAdminEmail () {\n        return process.env.BOOTSTRAP_ADMIN_EMAIL?.toLowerCase() ?? \"\";\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZW52LnRzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxRQUFRQyxHQUFpQztJQUNoRCxNQUFNQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNILElBQUk7SUFFOUIsSUFBSSxDQUFDQyxPQUFPO1FBQ1YsTUFBTSxJQUFJRyxNQUFNLENBQUMsdUNBQXVDLEVBQUVKLElBQUksQ0FBQztJQUNqRTtJQUVBLE9BQU9DO0FBQ1Q7QUFFTyxNQUFNRSxNQUFNO0lBQ2pCLElBQUlFLGNBQWE7UUFDZixPQUFPTixRQUFRO0lBQ2pCO0lBQ0EsSUFBSU8sYUFBWTtRQUNkLE9BQU9QLFFBQVE7SUFDakI7SUFDQSxJQUFJUSxnQkFBZTtRQUNqQixPQUFPTCxRQUFRQyxHQUFHLENBQUNLLGNBQWMsSUFBSTtJQUN2QztJQUNBLElBQUlDLHVCQUFzQjtRQUN4QixPQUFPUCxRQUFRQyxHQUFHLENBQUNPLHFCQUFxQixFQUFFQyxpQkFBaUI7SUFDN0Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmJhYy1wcm9qZWN0LW1hbmFnZW1lbnQtc3lzdGVtLy4vbGliL2Vudi50cz85M2YyIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlYWRFbnYoa2V5OiBcIk1PTkdPREJfVVJJXCIgfCBcIkpXVF9TRUNSRVRcIikge1xuICBjb25zdCB2YWx1ZSA9IHByb2Nlc3MuZW52W2tleV07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyByZXF1aXJlZCBlbnZpcm9ubWVudCB2YXJpYWJsZTogJHtrZXl9YCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBjb25zdCBlbnYgPSB7XG4gIGdldCBtb25nb2RiVXJpKCkge1xuICAgIHJldHVybiByZWFkRW52KFwiTU9OR09EQl9VUklcIik7XG4gIH0sXG4gIGdldCBqd3RTZWNyZXQoKSB7XG4gICAgcmV0dXJuIHJlYWRFbnYoXCJKV1RfU0VDUkVUXCIpO1xuICB9LFxuICBnZXQgand0RXhwaXJlc0luKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5KV1RfRVhQSVJFU19JTiA/PyBcIjdkXCI7XG4gIH0sXG4gIGdldCBib290c3RyYXBBZG1pbkVtYWlsKCkge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5CT09UU1RSQVBfQURNSU5fRU1BSUw/LnRvTG93ZXJDYXNlKCkgPz8gXCJcIjtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJyZWFkRW52Iiwia2V5IiwidmFsdWUiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJtb25nb2RiVXJpIiwiand0U2VjcmV0Iiwiand0RXhwaXJlc0luIiwiSldUX0VYUElSRVNfSU4iLCJib290c3RyYXBBZG1pbkVtYWlsIiwiQk9PVFNUUkFQX0FETUlOX0VNQUlMIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/env.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Flogout%2Froute&page=%2Fapi%2Fauth%2Flogout%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogout%2Froute.ts&appDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Charke%5CDownloads%5CNew%20folder%5CNew%20folder&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();