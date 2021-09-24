"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/instagram-feed.js":
/*!**************************************!*\
  !*** ./components/instagram-feed.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InstagramFeed; }
/* harmony export */ });
/* harmony import */ var D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\instagram-feed.js",
    _s = $RefreshSig$();







function InstagramFeed() {
  _s();

  var _this = this;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      posts = _useState[0],
      setPosts = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var data, posts;
    return D_Documents_websites_cms_wordpress_app_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('/api/instagram');

          case 2:
            data = _context.sent;
            _context.next = 5;
            return data.json();

          case 5:
            posts = _context.sent;
            setPosts(posts);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h2", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
        href: "https://www.instagram.com/yourinstagramhandle/",
        children: "Follow Us on Instagram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
      children: posts.map(function (_ref2, i) {
        var node = _ref2.node;
        return (
          /*#__PURE__*/
          // let's wrap each post in an anchor tag
          // and construct the url for the post using
          // the shortcode that was returned from the API
          (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
              href: "https://www.instagram.com/p/".concat(node.shortcode),
              "aria-label": "view image on Instagram",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                src: "/instagram/img-954614431982330478.jpg",
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 30
              }, _this)
            }, i, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, _this)
          }, node.id, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, _this)
        );
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

_s(InstagramFeed, "bG8V4duoIfO0BEPgauWMVT5Qvyw=");

_c = InstagramFeed;

var _c;

$RefreshReg$(_c, "InstagramFeed");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmVjYmYxOGRhNWE3OTYxODFlZTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3BDLGtCQUEwQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT0csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFMLEVBQUFBLGdEQUFTLCtSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FNLEtBQUssQ0FBQyxnQkFBRCxDQURsQjs7QUFBQTtBQUNBQyxZQUFBQSxJQURBO0FBQUE7QUFBQSxtQkFFY0EsSUFBSSxDQUFDQyxJQUFMLEVBRmQ7O0FBQUE7QUFFQUosWUFBQUEsS0FGQTtBQUdOQyxZQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjs7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUcsWUFBSSxFQUFDLGdEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFRSTtBQUFBLGdCQUlLQSxLQUFLLENBQUNLLEdBQU4sQ0FBVSxpQkFBV0MsQ0FBWCxFQUFpQjtBQUFBLFlBQWRDLElBQWMsU0FBZEEsSUFBYztBQUN4QjtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFBQSxtQ0FDSTtBQUNJLGtCQUFJLHdDQUFpQ0EsSUFBSSxDQUFDQyxTQUF0QyxDQURSO0FBR0ksNEJBQVcseUJBSGY7QUFBQSxxQ0FPQyw4REFBQyxtREFBRDtBQUFPLG1CQUFHLEVBQUMsdUNBQVg7QUFBbUQscUJBQUssRUFBRSxHQUExRDtBQUErRCxzQkFBTSxFQUFFO0FBQXZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRCxlQUVTRixDQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixhQUFTQyxJQUFJLENBQUNFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpKO0FBMEJILE9BM0JBO0FBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUEsa0JBREo7QUE0Q0g7O0dBdER1QlY7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5zdGFncmFtLWZlZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5zdGFncmFtRmVlZCgpIHtcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJy9hcGkvaW5zdGFncmFtJylcclxuICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IGRhdGEuanNvbigpO1xyXG4gICAgICAgIHNldFBvc3RzKHBvc3RzKVxyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3lvdXJpbnN0YWdyYW1oYW5kbGUvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRm9sbG93IFVzIG9uIEluc3RhZ3JhbVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgLlxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgey8qIGxldCdzIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIG9mIHRoZVxyXG4gICAgICAgICBpbnN0YWdyYW0gcG9zdHMgdGhhdCB3ZXJlIHJldHVybmVkXHJcbiAgICAgICAgIGZyb20gdGhlIEluc3RhZ3JhbSBBUEkqL31cclxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHsgbm9kZSB9LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3Mgd3JhcCBlYWNoIHBvc3QgaW4gYW4gYW5jaG9yIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgY29uc3RydWN0IHRoZSB1cmwgZm9yIHRoZSBwb3N0IHVzaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBzaG9ydGNvZGUgdGhhdCB3YXMgcmV0dXJuZWQgZnJvbSB0aGUgQVBJXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e25vZGUuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wLyR7bm9kZS5zaG9ydGNvZGV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZpZXcgaW1hZ2Ugb24gSW5zdGFncmFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyogc2V0IHRoZSBpbWFnZSBzcmMgZXF1YWwgdG8gdGhlIGltYWdlXHJcbiAgICAgICAgICAgICAgICB1cmwgZnJvbSB0aGUgSW5zdGFncmFtIEFQSSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9Jy9pbnN0YWdyYW0vaW1nLTk1NDYxNDQzMTk4MjMzMDQ3OC5qcGcnIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgc3JjPXtub2RlLmRpc3BsYXlfdXJsfSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICBhbHQ9eyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgLy8gdGhlIGNhcHRpb24gd2l0aCBoYXNodGFncyByZW1vdmVkKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICBub2RlLmVkZ2VfbWVkaWFfdG9fY2FwdGlvbj8uZWRnZXNbMF0/Lm5vZGU/LnRleHQqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAucmVwbGFjZSgvKCNcXHcrKSsvZywgXCJcIikqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAudHJpbSgpKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIH0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyovPiovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkluc3RhZ3JhbUZlZWQiLCJwb3N0cyIsInNldFBvc3RzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIm1hcCIsImkiLCJub2RlIiwic2hvcnRjb2RlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9