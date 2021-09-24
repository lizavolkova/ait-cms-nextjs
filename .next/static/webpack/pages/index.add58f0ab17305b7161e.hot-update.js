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
                src: "/instagram/img-954614431982330478.jpg"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWRkNThmMGFiMTczMDViNzE2MWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFZSxTQUFTSSxhQUFULEdBQXlCO0FBQUE7O0FBQUE7O0FBQ3BDLGtCQUEwQkYsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT0csS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUFMLEVBQUFBLGdEQUFTLCtSQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FNLEtBQUssQ0FBQyxnQkFBRCxDQURsQjs7QUFBQTtBQUNBQyxZQUFBQSxJQURBO0FBQUE7QUFBQSxtQkFFY0EsSUFBSSxDQUFDQyxJQUFMLEVBRmQ7O0FBQUE7QUFFQUosWUFBQUEsS0FGQTtBQUdOQyxZQUFBQSxRQUFRLENBQUNELEtBQUQsQ0FBUjs7QUFITTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBS04sRUFMTSxDQUFUO0FBT0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUcsWUFBSSxFQUFDLGdEQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFRSTtBQUFBLGdCQUlLQSxLQUFLLENBQUNLLEdBQU4sQ0FBVSxpQkFBV0MsQ0FBWCxFQUFpQjtBQUFBLFlBQWRDLElBQWMsU0FBZEEsSUFBYztBQUN4QjtBQUFBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFBQSxtQ0FDSTtBQUNJLGtCQUFJLHdDQUFpQ0EsSUFBSSxDQUFDQyxTQUF0QyxDQURSO0FBR0ksNEJBQVcseUJBSGY7QUFBQSxxQ0FPQyw4REFBQyxtREFBRDtBQUFPLG1CQUFHLEVBQUM7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQsZUFFU0YsQ0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosYUFBU0MsSUFBSSxDQUFDRSxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQTBCSCxPQTNCQTtBQUpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBLGtCQURKO0FBNENIOztHQXREdUJWOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luc3RhZ3JhbS1mZWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RhZ3JhbUZlZWQoKSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCcvYXBpL2luc3RhZ3JhbScpXHJcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgICAgICBzZXRQb3N0cyhwb3N0cylcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS95b3VyaW5zdGFncmFtaGFuZGxlL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvbGxvdyBVcyBvbiBJbnN0YWdyYW1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIC5cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHsvKiBsZXQncyBpdGVyYXRlIHRocm91Z2ggZWFjaCBvZiB0aGVcclxuICAgICAgICAgaW5zdGFncmFtIHBvc3RzIHRoYXQgd2VyZSByZXR1cm5lZFxyXG4gICAgICAgICBmcm9tIHRoZSBJbnN0YWdyYW0gQVBJKi99XHJcbiAgICAgICAgICAgICAgICB7cG9zdHMubWFwKCh7IG5vZGUgfSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIHdyYXAgZWFjaCBwb3N0IGluIGFuIGFuY2hvciB0YWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGNvbnN0cnVjdCB0aGUgdXJsIGZvciB0aGUgcG9zdCB1c2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgc2hvcnRjb2RlIHRoYXQgd2FzIHJldHVybmVkIGZyb20gdGhlIEFQSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtub2RlLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcC8ke25vZGUuc2hvcnRjb2RlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ2aWV3IGltYWdlIG9uIEluc3RhZ3JhbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHNldCB0aGUgaW1hZ2Ugc3JjIGVxdWFsIHRvIHRoZSBpbWFnZVxyXG4gICAgICAgICAgICAgICAgdXJsIGZyb20gdGhlIEluc3RhZ3JhbSBBUEkqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPScvaW5zdGFncmFtL2ltZy05NTQ2MTQ0MzE5ODIzMzA0NzguanBnJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgIHNyYz17bm9kZS5kaXNwbGF5X3VybH0qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgYWx0PXsqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgIC8vIHRoZSBjYXB0aW9uIHdpdGggaGFzaHRhZ3MgcmVtb3ZlZCovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgbm9kZS5lZGdlX21lZGlhX3RvX2NhcHRpb24/LmVkZ2VzWzBdPy5ub2RlPy50ZXh0Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgLnJlcGxhY2UoLygjXFx3KykrL2csIFwiXCIpKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICAgICAgLnRyaW0oKSovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAgICB9Ki99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qLz4qL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJJbnN0YWdyYW1GZWVkIiwicG9zdHMiLCJzZXRQb3N0cyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJtYXAiLCJpIiwibm9kZSIsInNob3J0Y29kZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==