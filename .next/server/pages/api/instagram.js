"use strict";
(() => {
var exports = {};
exports.id = "pages/api/instagram";
exports.ids = ["pages/api/instagram"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);


if (false) {} else {
  if (!global.prisma) {
    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  }

  prisma = global.prisma;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ "./pages/api/instagram.js":
/*!********************************!*\
  !*** ./pages/api/instagram.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ instagram)
/* harmony export */ });
/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! instagram-web-api */ "instagram-web-api");
/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(instagram_web_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/prisma */ "./lib/prisma.js");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_4__);





async function instagram(req, res) {
  const CACHE_PATH = path__WEBPACK_IMPORTED_MODULE_3___default().resolve('insta.json');
  let cachedData = [];

  try {
    cachedData = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_3___default().join(CACHE_PATH), 'utf8'));
  } catch (error) {
    console.log('Member cache not initialized');
  }

  if (!cachedData) {// fetch data
    //write to file
    // https://flaviocopes.com/nextjs-cache-data-globally/
  }

  const images_dir = path__WEBPACK_IMPORTED_MODULE_3___default().resolve(process.env.PWD, 'public/images/instagram'); // delete all images in directory
  // fs.readdir(images_dir, (err, files) => {
  //     if (err) throw err;
  //
  //     for (const file of files) {
  //         fs.unlink(path.join(images_dir, file), err => {
  //             if (err) throw err;
  //         });
  //     }
  // });
  // save images

  async function saveImages(url, id) {
    try {
      const response = await fetch(url);
      const buffer = await response.buffer();
      fs__WEBPACK_IMPORTED_MODULE_2___default().writeFile(path__WEBPACK_IMPORTED_MODULE_3___default().resolve(images_dir, `img-${id}.jpg`), buffer, () => {
        console.log('finished downloading!');
      });
    } catch (error) {
      console.log('error fetching images', error);
    }
  }

  const getData = async () => {
    return Promise.all(cachedData.map(node => {
      saveImages(node.node.thumbnail_src, node.node.id);
    }));
  };

  getData().then(res => console.log('IMAGE SAVED!')); // let instagramPosts = []
  //
  // const client = new Instagram({
  //     username: process.env.IG_USERNAME,
  //     password: process.env.IG_PASSWORD,
  // })
  //
  //
  // let posts = []
  // try {
  //     // attempt to log in to Instagram
  //     await client.login()
  //     console.log(client);
  //     // request photos for a specific instagram user
  //     const instagram = await client.getPhotosByUsername({
  //         username: process.env.IG_USERNAME,
  //     })
  //
  //     console.log(instagram);
  //
  //     if (instagram["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
  //         // if we receive timeline data back
  //         //  update the posts to be equal
  //         // to the edges that were returned from the instagram API response
  //         posts = instagram["user"]["edge_owner_to_timeline_media"]["edges"]
  //     }
  // } catch (err) {
  //     // throw an error if login to Instagram fails
  //     console.log("Something went wrong while logging into Instagram", err)
  // }
  // const post = await prisma.post.findUnique({
  //     where: {
  //         id: 1 || -1,
  //     },
  //     include: {
  //         author: {
  //             select: { name: true },
  //         },
  //     },
  // });

  res.status(200).json(cachedData);
}

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "instagram-web-api":
/*!************************************!*\
  !*** external "instagram-web-api" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("instagram-web-api");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/instagram.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQ3pHRDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL3ByaXNtYS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5zdGFncmFtLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5zdGFncmFtLXdlYi1hcGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gICAgaWYgKCFnbG9iYWwucHJpc21hKSB7XHJcbiAgICAgICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICAgIH1cclxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTsiLCJpbXBvcnQgSW5zdGFncmFtIGZyb20gXCJpbnN0YWdyYW0td2ViLWFwaVwiXHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vbGliL3ByaXNtYSdcclxuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5zdGFncmFtKHJlcSwgcmVzKSB7XHJcbiAgICBjb25zdCBDQUNIRV9QQVRIID0gcGF0aC5yZXNvbHZlKCdpbnN0YS5qc29uJylcclxuICAgIGxldCBjYWNoZWREYXRhID0gW107XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjYWNoZWREYXRhID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKENBQ0hFX1BBVEgpLCAndXRmOCcpKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTWVtYmVyIGNhY2hlIG5vdCBpbml0aWFsaXplZCcpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFjYWNoZWREYXRhKSB7XHJcbiAgICAgICAgLy8gZmV0Y2ggZGF0YVxyXG4gICAgICAgIC8vd3JpdGUgdG8gZmlsZVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZmxhdmlvY29wZXMuY29tL25leHRqcy1jYWNoZS1kYXRhLWdsb2JhbGx5L1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW1hZ2VzX2RpciA9IHBhdGgucmVzb2x2ZShwcm9jZXNzLmVudi5QV0QsICdwdWJsaWMvaW1hZ2VzL2luc3RhZ3JhbScpO1xyXG5cclxuICAgIC8vIGRlbGV0ZSBhbGwgaW1hZ2VzIGluIGRpcmVjdG9yeVxyXG4gICAgLy8gZnMucmVhZGRpcihpbWFnZXNfZGlyLCAoZXJyLCBmaWxlcykgPT4ge1xyXG4gICAgLy8gICAgIGlmIChlcnIpIHRocm93IGVycjtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAvLyAgICAgICAgIGZzLnVubGluayhwYXRoLmpvaW4oaW1hZ2VzX2RpciwgZmlsZSksIGVyciA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC8vIHNhdmUgaW1hZ2VzXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlSW1hZ2VzKHVybCwgaWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmJ1ZmZlcigpXHJcbiAgICAgICAgICAgIGZzLndyaXRlRmlsZShwYXRoLnJlc29sdmUoaW1hZ2VzX2RpciwgYGltZy0ke2lkfS5qcGdgKSwgYnVmZmVyLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZmluaXNoZWQgZG93bmxvYWRpbmchJyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3IgZmV0Y2hpbmcgaW1hZ2VzJywgZXJyb3IpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChjYWNoZWREYXRhLm1hcChub2RlID0+IHtcclxuICAgICAgICAgICAgc2F2ZUltYWdlcyhub2RlLm5vZGUudGh1bWJuYWlsX3NyYywgbm9kZS5ub2RlLmlkKVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXREYXRhKCkudGhlbihyZXMgPT4gY29uc29sZS5sb2coJ0lNQUdFIFNBVkVEIScpKVxyXG5cclxuXHJcbiAgICAvLyBsZXQgaW5zdGFncmFtUG9zdHMgPSBbXVxyXG4gICAgLy9cclxuICAgIC8vIGNvbnN0IGNsaWVudCA9IG5ldyBJbnN0YWdyYW0oe1xyXG4gICAgLy8gICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5JR19VU0VSTkFNRSxcclxuICAgIC8vICAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuSUdfUEFTU1dPUkQsXHJcbiAgICAvLyB9KVxyXG4gICAgLy9cclxuICAgIC8vXHJcbiAgICAvLyBsZXQgcG9zdHMgPSBbXVxyXG4gICAgLy8gdHJ5IHtcclxuICAgIC8vICAgICAvLyBhdHRlbXB0IHRvIGxvZyBpbiB0byBJbnN0YWdyYW1cclxuICAgIC8vICAgICBhd2FpdCBjbGllbnQubG9naW4oKVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGNsaWVudCk7XHJcbiAgICAvLyAgICAgLy8gcmVxdWVzdCBwaG90b3MgZm9yIGEgc3BlY2lmaWMgaW5zdGFncmFtIHVzZXJcclxuICAgIC8vICAgICBjb25zdCBpbnN0YWdyYW0gPSBhd2FpdCBjbGllbnQuZ2V0UGhvdG9zQnlVc2VybmFtZSh7XHJcbiAgICAvLyAgICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5JR19VU0VSTkFNRSxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy9cclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhpbnN0YWdyYW0pO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAoaW5zdGFncmFtW1widXNlclwiXVtcImVkZ2Vfb3duZXJfdG9fdGltZWxpbmVfbWVkaWFcIl1bXCJjb3VudFwiXSA+IDApIHtcclxuICAgIC8vICAgICAgICAgLy8gaWYgd2UgcmVjZWl2ZSB0aW1lbGluZSBkYXRhIGJhY2tcclxuICAgIC8vICAgICAgICAgLy8gIHVwZGF0ZSB0aGUgcG9zdHMgdG8gYmUgZXF1YWxcclxuICAgIC8vICAgICAgICAgLy8gdG8gdGhlIGVkZ2VzIHRoYXQgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBpbnN0YWdyYW0gQVBJIHJlc3BvbnNlXHJcbiAgICAvLyAgICAgICAgIHBvc3RzID0gaW5zdGFncmFtW1widXNlclwiXVtcImVkZ2Vfb3duZXJfdG9fdGltZWxpbmVfbWVkaWFcIl1bXCJlZGdlc1wiXVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0gY2F0Y2ggKGVycikge1xyXG4gICAgLy8gICAgIC8vIHRocm93IGFuIGVycm9yIGlmIGxvZ2luIHRvIEluc3RhZ3JhbSBmYWlsc1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgbG9nZ2luZyBpbnRvIEluc3RhZ3JhbVwiLCBlcnIpXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcclxuICAgIC8vICAgICB3aGVyZToge1xyXG4gICAgLy8gICAgICAgICBpZDogMSB8fCAtMSxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gICAgIGluY2x1ZGU6IHtcclxuICAgIC8vICAgICAgICAgYXV0aG9yOiB7XHJcbiAgICAvLyAgICAgICAgICAgICBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9LFxyXG4gICAgLy8gICAgICAgICB9LFxyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihjYWNoZWREYXRhKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnN0YWdyYW0td2ViLWFwaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJJbnN0YWdyYW0iLCJmcyIsInBhdGgiLCJodHRwIiwiaW5zdGFncmFtIiwicmVxIiwicmVzIiwiQ0FDSEVfUEFUSCIsInJlc29sdmUiLCJjYWNoZWREYXRhIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwiam9pbiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImltYWdlc19kaXIiLCJwcm9jZXNzIiwiZW52IiwiUFdEIiwic2F2ZUltYWdlcyIsInVybCIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsImJ1ZmZlciIsIndyaXRlRmlsZSIsImdldERhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwibm9kZSIsInRodW1ibmFpbF9zcmMiLCJ0aGVuIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=