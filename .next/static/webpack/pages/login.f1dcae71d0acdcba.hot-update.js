"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/error */ \"./utils/error.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession)();\n    // Assuming you are using next-auth for authentication\n    if (session) {}\n    const submitHandler = async ()=>{\n        console.log(\"hello\");\n        try {\n            const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_6__.signIn)(\"credentials\", {\n                // redirect: false,\n                email,\n                password\n            });\n            if (result.error) {\n                console.log(result.error);\n            // toast.error(result.error);\n            } else {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"User login successful\");\n                router.push(\"/dashboard\");\n            }\n        } catch (err) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error((0,_utils_error__WEBPACK_IMPORTED_MODULE_5__.getError)(err));\n            console.log((0,_utils_error__WEBPACK_IMPORTED_MODULE_5__.getError)(err));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-sm\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-extrabold text-gray-900 text-center mb-4\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"email\",\n                                children: \"Email\"\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"email\",\n                                type: \"email\",\n                                placeholder: \"Email\",\n                                value: email,\n                                onChange: (e)=>setEmail(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-6\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 text-sm font-bold mb-2\",\n                                htmlFor: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"password\",\n                                type: \"password\",\n                                placeholder: \"Password\",\n                                value: password,\n                                onChange: (e)=>setPassword(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                // type=\"submit\"\n                                onClick: submitHandler,\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/register\",\n                                className: \"text-indigo-500 hover:underline\",\n                                children: \"Register\"\n                            }, void 0, false, {\n                                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/vyshnav/Desktop/vyshnav/todo-next/pages/login.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"OLCvKJA9bFpJvxPYtkW4U8j4owk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_6__.useSession\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUNYO0FBQ087QUFDSztBQUNZO0FBRXJELFNBQVNPOztJQUNQLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLFVBQVVDLFlBQVksR0FBR1gsK0NBQVFBLENBQUM7SUFDekMsTUFBTVksU0FBU1gsc0RBQVNBO0lBQ3hCLE1BQU1ZLFVBQVNQLDJEQUFVQTtJQUN2QixzREFBc0Q7SUFDdEQsSUFBR08sU0FBUSxDQUVYO0lBQ0EsTUFBTUMsZ0JBQWdCO1FBQ2xCQyxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJO1lBQ0YsTUFBTUMsU0FBUyxNQUFNWix1REFBTUEsQ0FBQyxlQUFlO2dCQUN6QyxtQkFBbUI7Z0JBQ25CRztnQkFDQUU7WUFDRjtZQUNBLElBQUlPLE9BQU9DLEtBQUssRUFBRTtnQkFDaEJILFFBQVFDLEdBQUcsQ0FBQ0MsT0FBT0MsS0FBSztZQUV4Qiw2QkFBNkI7WUFDL0IsT0FBSztnQkFDSGYsK0RBQWEsQ0FBQztnQkFDZFMsT0FBT1EsSUFBSSxDQUFDO1lBQ2Q7UUFDRixFQUFFLE9BQU9DLEtBQUs7WUFDWmxCLDZEQUFXLENBQUNDLHNEQUFRQSxDQUFDaUI7WUFDckJOLFFBQVFDLEdBQUcsQ0FBQ1osc0RBQVFBLENBQUNpQjtRQUN2QjtJQUNGO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXlEOzs7Ozs7a0NBQ3ZFLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFNRixXQUFVO2dDQUE2Q0csU0FBUTswQ0FBUTs7Ozs7OzBDQUc5RSw4REFBQ0M7Z0NBQ0NKLFdBQVU7Z0NBQ1ZLLElBQUc7Z0NBQ0hDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU92QjtnQ0FDUHdCLFVBQVUsQ0FBQ0MsSUFBTXhCLFNBQVN3QixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0NBQ3hDSSxRQUFROzs7Ozs7Ozs7Ozs7a0NBR1osOERBQUNiO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQU1GLFdBQVU7Z0NBQTZDRyxTQUFROzBDQUFXOzs7Ozs7MENBR2pGLDhEQUFDQztnQ0FDQ0osV0FBVTtnQ0FDVkssSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBT3JCO2dDQUNQc0IsVUFBVSxDQUFDQyxJQUFNdEIsWUFBWXNCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDM0NJLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ2I7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDYTtnQ0FDQ2IsV0FBVTtnQ0FDVixnQkFBZ0I7Z0NBQ2hCYyxTQUFTdkI7MENBQ1Y7Ozs7OzswQ0FHRCw4REFBQ1osa0RBQUlBO2dDQUFDb0MsTUFBSztnQ0FBWWYsV0FBVTswQ0FBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTL0U7R0FsRlNoQjs7UUFHUU4sa0RBQVNBO1FBQ1RLLHVEQUFVQTs7O0tBSmxCQztBQW9GVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qcz84MWIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuaW1wb3J0IHsgZ2V0RXJyb3IgfSBmcm9tICdAL3V0aWxzL2Vycm9yJztcbmltcG9ydCB7IHNpZ25JbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZXNzaW9uID11c2VTZXNzaW9uKClcbiAgICAvLyBBc3N1bWluZyB5b3UgYXJlIHVzaW5nIG5leHQtYXV0aCBmb3IgYXV0aGVudGljYXRpb25cbiAgICBpZihzZXNzaW9uKXtcbiAgICAgIFxuICAgIH1cbiAgICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzaWduSW4oJ2NyZWRlbnRpYWxzJywge1xuICAgICAgICAgICAgLy8gcmVkaXJlY3Q6IGZhbHNlLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAocmVzdWx0LmVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQuZXJyb3IpO1xuXG4gICAgICAgICAgICAvLyB0b2FzdC5lcnJvcihyZXN1bHQuZXJyb3IpO1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcygnVXNlciBsb2dpbiBzdWNjZXNzZnVsJyk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICB0b2FzdC5lcnJvcihnZXRFcnJvcihlcnIpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhnZXRFcnJvcihlcnIpKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zbVwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBzaGFkb3ctbWQgcm91bmRlZCBweC04IHB0LTYgcGItOCBtYi00XCI+XG4gICAgICAgIHsvKiA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSA+ICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHRleHQtY2VudGVyIG1iLTRcIj5Mb2dpbjwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCIgaHRtbEZvcj1cImVtYWlsXCI+XG4gICAgICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBhcHBlYXJhbmNlLW5vbmUgYm9yZGVyIHJvdW5kZWQgdy1mdWxsIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTZcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWdyYXktNzAwIHRleHQtc20gZm9udC1ib2xkIG1iLTJcIiBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93IGFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWluZGlnby01MDAgaG92ZXI6YmctaW5kaWdvLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgICAvLyB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCIgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNTAwIGhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8L2Zvcm0+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJ0b2FzdCIsImdldEVycm9yIiwic2lnbkluIiwidXNlU2Vzc2lvbiIsIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJyb3V0ZXIiLCJzZXNzaW9uIiwic3VibWl0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJlcnJvciIsInN1Y2Nlc3MiLCJwdXNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n"));

/***/ })

});