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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var _styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_4__]);\nreact_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n // Import your authentication provider\n // Import your session provider\n // Import your Tailwind CSS styles\n // Import global styles\n\n\nfunction MyApp({ Component, pageProps: { session, ...pageProps } }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_4__.Toaster, {\n                position: \"top-right\",\n                toastOptions: {\n                    style: {\n                        marginTop: \"60px\"\n                    }\n                },\n                reverseOrder: false\n            }, void 0, false, {\n                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {\n                session: session,\n                children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n                    lineNumber: 19,\n                    columnNumber: 5\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n                    lineNumber: 21,\n                    columnNumber: 23\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\nfunction Auth({ children }) {\n    // if `{ required: true }` is supplied, `status` can only be \"loading\" or \"authenticated\"\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const { status, data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            // router.push('/common/unauthorized?message=login required');\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Login to continue\");\n            router.push(\"/login\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/_app.js\",\n            lineNumber: 43,\n            columnNumber: 12\n        }, this);\n    }\n    return children;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUQsQ0FBQyxzQ0FBc0M7QUFDNUMsQ0FBQywrQkFBK0I7QUFDbEQsQ0FBQyxrQ0FBa0M7QUFDcEMsQ0FBQyx1QkFBdUI7QUFDTjtBQUNUO0FBRXhDLFNBQVNNLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRSxHQUFHRCxXQUFXLEVBQUc7SUFDakUscUJBQ0U7OzBCQUNFLDhEQUFDSixvREFBT0E7Z0JBQUVNLFVBQVM7Z0JBQVlDLGNBQWM7b0JBQy9DQyxPQUFPO3dCQUNMQyxXQUFXO29CQUNiO2dCQUNGO2dCQUFHQyxjQUFjOzs7Ozs7MEJBQ2YsOERBQUNaLDREQUFlQTtnQkFBQ08sU0FBU0E7MEJBQ3pCRixVQUFVUSxJQUFJLGlCQUVmLDhEQUFDQzs4QkFDQyw0RUFBQ1Q7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozt5Q0FDUiw4REFBQ0Q7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUs5QztBQUVBLGlFQUFlRixLQUFLQSxFQUFDO0FBQ3JCLFNBQVNVLEtBQUssRUFBRUMsUUFBUSxFQUFFO0lBQ3hCLHlGQUF5RjtJQUN6RixNQUFNQyxTQUFTYixzREFBU0E7SUFFeEIsTUFBTSxFQUFFYyxNQUFNLEVBQUVDLE1BQU1YLE9BQU8sRUFBRSxHQUFHUiwyREFBVUEsQ0FBQztRQUMzQ29CLFVBQVU7UUFDVkM7WUFDRSw4REFBOEQ7WUFDOURuQiw2REFBVyxDQUFDO1lBQ1plLE9BQU9NLElBQUksQ0FBQztRQUVkO0lBQ0Y7SUFDQSxJQUFJTCxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNNO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLE9BQU9SO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2FwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7IC8vIEltcG9ydCB5b3VyIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnOyAvLyBJbXBvcnQgeW91ciBzZXNzaW9uIHByb3ZpZGVyXG5pbXBvcnQgJy4uL3N0eWxlcy90YWlsd2luZC5jc3MnOyAvLyBJbXBvcnQgeW91ciBUYWlsd2luZCBDU1Mgc3R5bGVzXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7IC8vIEltcG9ydCBnbG9iYWwgc3R5bGVzXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvYXN0ZXIgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCIgdG9hc3RPcHRpb25zPXt7XG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpblRvcDogJzYwcHgnLFxuICAgIH0sXG4gIH19IHJldmVyc2VPcmRlcj17ZmFsc2V9Lz5cbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgIHtDb21wb25lbnQuYXV0aCA/IChcblxuICAgIDxBdXRoID5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQXV0aD4pOiggICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4pfVxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgLy8gaWYgYHsgcmVxdWlyZWQ6IHRydWUgfWAgaXMgc3VwcGxpZWQsIGBzdGF0dXNgIGNhbiBvbmx5IGJlIFwibG9hZGluZ1wiIG9yIFwiYXV0aGVudGljYXRlZFwiXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgc3RhdHVzLCBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcbiAgICAgIC8vIHJvdXRlci5wdXNoKCcvY29tbW9uL3VuYXV0aG9yaXplZD9tZXNzYWdlPWxvZ2luIHJlcXVpcmVkJyk7XG4gICAgICB0b2FzdC5lcnJvcignTG9naW4gdG8gY29udGludWUnKVxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgICBcbiAgICB9LFxuICB9KTtcbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW5cbn1cbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInVzZVNlc3Npb24iLCJTZXNzaW9uUHJvdmlkZXIiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJwb3NpdGlvbiIsInRvYXN0T3B0aW9ucyIsInN0eWxlIiwibWFyZ2luVG9wIiwicmV2ZXJzZU9yZGVyIiwiYXV0aCIsIkF1dGgiLCJjaGlsZHJlbiIsInJvdXRlciIsInN0YXR1cyIsImRhdGEiLCJyZXF1aXJlZCIsIm9uVW5hdXRoZW50aWNhdGVkIiwiZXJyb3IiLCJwdXNoIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/tailwind.css":
/*!*****************************!*\
  !*** ./styles/tailwind.css ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();