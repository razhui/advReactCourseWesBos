webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");

var _jsxFileName = "C:\\Users\\Aaron\\Desktop\\Coding\\wesbosCourse\\Advanced-React\\sick-fits\\frontend\\components\\Nav.js";


function Nav() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sell",
      children: "Sell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/order",
      children: "Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/account",
      children: "Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
_c = Nav;

var _c;

$RefreshReg$(_c, "Nav");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGVzL05hdlN0eWxlcy5qcyJdLCJuYW1lcyI6WyJOYXYiLCJOYXZTdHlsZXMiLCJzdHlsZWQiLCJ1bCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULEdBQWU7QUFDNUIsc0JBQ0UscUVBQUMseURBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDtLQVR1QkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QjtBQUFBO0FBQUE7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsdTNCQUFmO0FBaUVlRix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNiY2JlZGFkNjliMzM1OGNlOTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2U3R5bGVzIGZyb20gJy4vc3R5bGVzL05hdlN0eWxlcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZTdHlsZXM+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWxsXCI+U2VsbDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9vcmRlclwiPk9yZGVyczwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+QWNjb3VudDwvTGluaz5cclxuICAgIDwvTmF2U3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBOYXZTdHlsZXMgPSBzdHlsZWQudWxgXHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgYSxcclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZzogMXJlbSAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNrZXcoLTIwZGVnKTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC40cztcclxuICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigxLCAtMC42NSwgMCwgMi4zMSk7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICAgICY6aG92ZXIsXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2U3R5bGVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9