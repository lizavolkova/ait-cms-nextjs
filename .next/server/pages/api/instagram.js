"use strict";
(() => {
var exports = {};
exports.id = "pages/api/instagram";
exports.ids = ["pages/api/instagram"];
exports.modules = {

/***/ "./pages/api/instagram/getOneImage.js":
/*!********************************************!*\
  !*** ./pages/api/instagram/getOneImage.js ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const getOneImage = async Key => {
  try {
    const options = {
      headers: {
        'x-api-key': process.env.API_KEY,
        'Content-Type': 'application/json'
      }
    };
    const url = `https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/signed-url?key=${Key}`;
    return await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__.default)(url, options);
  } catch (error) {
    throw new Error(`Error fetching images: ${error}`);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOneImage);
});

/***/ }),

/***/ "./pages/api/instagram/index.js":
/*!**************************************!*\
  !*** ./pages/api/instagram/index.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! instagram-web-api */ "instagram-web-api");
/* harmony import */ var instagram_web_api__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(instagram_web_api__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ "fs/promises");
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _saveImages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveImages */ "./pages/api/instagram/saveImages.js");
/* harmony import */ var _getOneImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getOneImage */ "./pages/api/instagram/getOneImage.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_saveImages__WEBPACK_IMPORTED_MODULE_3__, _getOneImage__WEBPACK_IMPORTED_MODULE_4__]);
([_saveImages__WEBPACK_IMPORTED_MODULE_3__, _getOneImage__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const CACHE_PATH = path__WEBPACK_IMPORTED_MODULE_2___default().resolve('insta.json');
async function index(req, res) {
  let cachedData; // TODO: wrap in try/catch
  // TODO: check for file time stamp

  try {
    const cachedDataRaw = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().readFile(CACHE_PATH, 'utf8');
    cachedData = await JSON.parse(cachedDataRaw);
    console.log('Found Cached Data');
  } catch (error) {
    // TODO: throwing error breaks loop, find a better way
    console.log(error);
    console.error('Member cache not initialized', error);
  } // if no cache or cache has expired


  if (!cachedData) {
    cachedData = await fetchAndCacheData();
  }

  const data = cachedData.map(({
    node: {
      thumbnail_src,
      display_url,
      id,
      shortcode
    }
  }) => {
    return {
      id,
      display_url,
      thumbnail_src,
      shortcode
    };
  });
  console.log('Requesting images from S3');
  const promises = await data.map(async image => {
    const test = await (0,_getOneImage__WEBPACK_IMPORTED_MODULE_4__.default)(`${image.id}.jpg`);
    const s3_url = await test.json();
    return _objectSpread(_objectSpread({}, image), {}, {
      s3_url
    });
  });
  const done = await Promise.all(promises);
  res.status(200).json(done);
}
/**
 * Fetch data from IG and save to cache
 * Upload new images to S3
 * @returns {Promise<*|*[]>}
 */

const fetchAndCacheData = async () => {
  try {
    console.log('No cached data, fetching...'); // https://flaviocopes.com/nextjs-cache-data-globally/

    const cachedData = await getInstagramData();
    console.log('data fetched from instagram');
    const imagesToSave = cachedData.map(({
      node
    }) => {
      return {
        Key: `${node.id}.jpg`,
        url: node.thumbnail_src
      };
    });
    await (0,_saveImages__WEBPACK_IMPORTED_MODULE_3__.default)(imagesToSave);
    console.log('Images uploaded to S3 ');
    return cachedData;
  } catch (err) {
    // throw an error if login to Instagram fails
    console.error("Something went wrong while trying to update the cache", err);
    throw new Error(err);
  }
};
/**
 * Login and fetch data from Instagram
 * @returns {Promise<*|*[]>}
 */


const getInstagramData = async () => {
  // Create Instagram client
  const client = new (instagram_web_api__WEBPACK_IMPORTED_MODULE_0___default())({
    username: process.env.IG_USERNAME,
    password: process.env.IG_PASSWORD
  });
  let posts = [];

  try {
    // attempt to log in to Instagram
    await client.login();
    console.log('Logged into Instagram'); // request photos for a specific index user

    const index = await client.getPhotosByUsername({
      username: process.env.IG_USERNAME,
      first: 8
    });
    console.log('Got posts from Instagram');

    if (index["user"]["edge_owner_to_timeline_media"]["count"] > 0) {
      // if we receive timeline data back
      //  update the posts to be equal
      // to the edges that were returned from the index API response
      posts = index["user"]["edge_owner_to_timeline_media"]["edges"];
      await fs_promises__WEBPACK_IMPORTED_MODULE_1___default().writeFile(CACHE_PATH, JSON.stringify(posts));
      return posts;
    }
  } catch (err) {
    // throw an error if login to Instagram fails
    console.error("Something went wrong while logging into Instagram", err);
    throw new Error(err);
  }
};
});

/***/ }),

/***/ "./pages/api/instagram/saveImages.js":
/*!*******************************************!*\
  !*** ./pages/api/instagram/saveImages.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "node-fetch");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([node_fetch__WEBPACK_IMPORTED_MODULE_0__]);
node_fetch__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


const saveImages = async data => {
  try {
    // const body = [
    //     {
    //         Key: 'red-leaves.jpg',
    //         url: 'https://images.pexels.com/photos/2388865/pexels-photo-2388865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    //     },
    //     {
    //         Key: 'autumn-leaves.jpg',
    //         url: 'https://images.pexels.com/photos/1590551/pexels-photo-1590551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    //     },
    //     {
    //         Key: 'pumpkins.jpg',
    //         url: 'https://images.pexels.com/photos/619418/pexels-photo-619418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    //     }
    // ]
    const res = await (0,node_fetch__WEBPACK_IMPORTED_MODULE_0__.default)('https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/uploadImages', {
      method: 'POST',
      headers: {
        'x-api-key': process.env.API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await res.json();
  } catch (error) {
    throw new Error(`Error saving images: ${error}`);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveImages);
});

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "instagram-web-api":
/*!************************************!*\
  !*** external "instagram-web-api" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("instagram-web-api");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("node-fetch");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/instagram/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFcEMsSUFBSSxDQUFDa0MsU0FBTCxDQUFlN0IsSUFBZjtBQU55RixLQUE1RSxDQUF2QjtBQVFBLFdBQU8sTUFBTVQsR0FBRyxDQUFDb0IsSUFBSixFQUFiO0FBQ0gsR0ExQkQsQ0EwQkUsT0FBTTlCLEtBQU4sRUFBYTtBQUNYLFVBQU0sSUFBSUMsS0FBSixDQUFXLHdCQUF1QkQsS0FBTSxFQUF4QyxDQUFOO0FBQ0g7QUFFSixDQS9CRDs7QUFpQ0EsaUVBQWVLLFVBQWY7Ozs7Ozs7Ozs7O0FDbkNBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2luc3RhZ3JhbS9nZXRPbmVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5zdGFncmFtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9pbnN0YWdyYW0vc2F2ZUltYWdlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImluc3RhZ3JhbS13ZWItYXBpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcclxuXHJcbmNvbnN0IGdldE9uZUltYWdlID0gYXN5bmMgKEtleSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAneC1hcGkta2V5JzogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9vcHh4YmIxenE2LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9zaWduZWQtdXJsP2tleT0ke0tleX1gO1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGltYWdlczogJHtlcnJvcn1gKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0T25lSW1hZ2U7IiwiaW1wb3J0IEluc3RhZ3JhbSBmcm9tIFwiaW5zdGFncmFtLXdlYi1hcGlcIlxyXG5pbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBzYXZlSW1hZ2VzIGZyb20gJy4vc2F2ZUltYWdlcydcclxuaW1wb3J0IGdldE9uZUltYWdlIGZyb20gJy4vZ2V0T25lSW1hZ2UnXHJcblxyXG5jb25zdCBDQUNIRV9QQVRIID0gcGF0aC5yZXNvbHZlKCdpbnN0YS5qc29uJyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbmRleChyZXEsIHJlcykge1xyXG4gICAgbGV0IGNhY2hlZERhdGE7XHJcblxyXG4gICAgLy8gVE9ETzogd3JhcCBpbiB0cnkvY2F0Y2hcclxuICAgIC8vIFRPRE86IGNoZWNrIGZvciBmaWxlIHRpbWUgc3RhbXBcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZERhdGFSYXcgPSBhd2FpdCBmcy5yZWFkRmlsZShDQUNIRV9QQVRILCAndXRmOCcpO1xyXG4gICAgICAgIGNhY2hlZERhdGEgPSBhd2FpdCBKU09OLnBhcnNlKGNhY2hlZERhdGFSYXcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3VuZCBDYWNoZWQgRGF0YScpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vIFRPRE86IHRocm93aW5nIGVycm9yIGJyZWFrcyBsb29wLCBmaW5kIGEgYmV0dGVyIHdheVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ01lbWJlciBjYWNoZSBub3QgaW5pdGlhbGl6ZWQnLCBlcnJvcilcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiBubyBjYWNoZSBvciBjYWNoZSBoYXMgZXhwaXJlZFxyXG4gICAgaWYgKCFjYWNoZWREYXRhKSB7XHJcbiAgICAgICAgY2FjaGVkRGF0YSA9IGF3YWl0IGZldGNoQW5kQ2FjaGVEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IGNhY2hlZERhdGEubWFwKCAoeyBub2RlOiB7IHRodW1ibmFpbF9zcmMsIGRpc3BsYXlfdXJsLCBpZCwgc2hvcnRjb2RlfSB9KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgIGRpc3BsYXlfdXJsLFxyXG4gICAgICAgICAgICB0aHVtYm5haWxfc3JjLFxyXG4gICAgICAgICAgICBzaG9ydGNvZGVcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnUmVxdWVzdGluZyBpbWFnZXMgZnJvbSBTMycpXHJcbiAgICBjb25zdCBwcm9taXNlcyA9IGF3YWl0IGRhdGEubWFwKGFzeW5jIGltYWdlID0+IHtcclxuICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgZ2V0T25lSW1hZ2UoYCR7aW1hZ2UuaWR9LmpwZ2ApO1xyXG4gICAgICAgIGNvbnN0IHMzX3VybCA9IGF3YWl0IHRlc3QuanNvbigpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLmltYWdlLFxyXG4gICAgICAgICAgICBzM191cmxcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBkb25lID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRvbmUpXHJcblxyXG59XHJcblxyXG4vKipcclxuICogRmV0Y2ggZGF0YSBmcm9tIElHIGFuZCBzYXZlIHRvIGNhY2hlXHJcbiAqIFVwbG9hZCBuZXcgaW1hZ2VzIHRvIFMzXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPCp8KltdPn1cclxuICovXHJcbmNvbnN0IGZldGNoQW5kQ2FjaGVEYXRhID0gYXN5bmMoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBjYWNoZWQgZGF0YSwgZmV0Y2hpbmcuLi4nKVxyXG4gICAgICAgIC8vIGh0dHBzOi8vZmxhdmlvY29wZXMuY29tL25leHRqcy1jYWNoZS1kYXRhLWdsb2JhbGx5L1xyXG5cclxuICAgICAgICBjb25zdCBjYWNoZWREYXRhID0gYXdhaXQgZ2V0SW5zdGFncmFtRGF0YSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhIGZldGNoZWQgZnJvbSBpbnN0YWdyYW0nKVxyXG4gICAgICAgIGNvbnN0IGltYWdlc1RvU2F2ZSA9IGNhY2hlZERhdGEubWFwKCAoe25vZGV9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBLZXk6IGAke25vZGUuaWR9LmpwZ2AsXHJcbiAgICAgICAgICAgICAgICB1cmw6IG5vZGUudGh1bWJuYWlsX3NyY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgc2F2ZUltYWdlcyhpbWFnZXNUb1NhdmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbWFnZXMgdXBsb2FkZWQgdG8gUzMgJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjYWNoZWREYXRhXHJcbiAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIC8vIHRocm93IGFuIGVycm9yIGlmIGxvZ2luIHRvIEluc3RhZ3JhbSBmYWlsc1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTb21ldGhpbmcgd2VudCB3cm9uZyB3aGlsZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBjYWNoZVwiLCBlcnIpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2dpbiBhbmQgZmV0Y2ggZGF0YSBmcm9tIEluc3RhZ3JhbVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTwqfCpbXT59XHJcbiAqL1xyXG5jb25zdCBnZXRJbnN0YWdyYW1EYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgIC8vIENyZWF0ZSBJbnN0YWdyYW0gY2xpZW50XHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgSW5zdGFncmFtKHtcclxuICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuSUdfVVNFUk5BTUUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LklHX1BBU1NXT1JELFxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgcG9zdHMgPSBbXVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gYXR0ZW1wdCB0byBsb2cgaW4gdG8gSW5zdGFncmFtXHJcbiAgICAgICAgYXdhaXQgY2xpZW50LmxvZ2luKClcclxuICAgICAgICBjb25zb2xlLmxvZygnTG9nZ2VkIGludG8gSW5zdGFncmFtJylcclxuICAgICAgICAvLyByZXF1ZXN0IHBob3RvcyBmb3IgYSBzcGVjaWZpYyBpbmRleCB1c2VyXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBhd2FpdCBjbGllbnQuZ2V0UGhvdG9zQnlVc2VybmFtZSh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5JR19VU0VSTkFNRSxcclxuICAgICAgICAgICAgZmlyc3Q6IDhcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb3QgcG9zdHMgZnJvbSBJbnN0YWdyYW0nKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4W1widXNlclwiXVtcImVkZ2Vfb3duZXJfdG9fdGltZWxpbmVfbWVkaWFcIl1bXCJjb3VudFwiXSA+IDApIHtcclxuICAgICAgICAgICAgLy8gaWYgd2UgcmVjZWl2ZSB0aW1lbGluZSBkYXRhIGJhY2tcclxuICAgICAgICAgICAgLy8gIHVwZGF0ZSB0aGUgcG9zdHMgdG8gYmUgZXF1YWxcclxuICAgICAgICAgICAgLy8gdG8gdGhlIGVkZ2VzIHRoYXQgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBpbmRleCBBUEkgcmVzcG9uc2VcclxuICAgICAgICAgICAgcG9zdHMgPSBpbmRleFtcInVzZXJcIl1bXCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhXCJdW1wiZWRnZXNcIl1cclxuICAgICAgICAgICAgYXdhaXQgZnMud3JpdGVGaWxlKENBQ0hFX1BBVEgsIEpTT04uc3RyaW5naWZ5KHBvc3RzKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3N0cztcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBsb2dpbiB0byBJbnN0YWdyYW0gZmFpbHNcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgbG9nZ2luZyBpbnRvIEluc3RhZ3JhbVwiLCBlcnIpXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycilcclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIiwiaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XHJcblxyXG5jb25zdCBzYXZlSW1hZ2VzID0gYXN5bmMgKGRhdGEpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IGJvZHkgPSBbXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIEtleTogJ3JlZC1sZWF2ZXMuanBnJyxcclxuICAgICAgICAvLyAgICAgICAgIHVybDogJ2h0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzIzODg4NjUvcGV4ZWxzLXBob3RvLTIzODg4NjUuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MCdcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgS2V5OiAnYXV0dW1uLWxlYXZlcy5qcGcnLFxyXG4gICAgICAgIC8vICAgICAgICAgdXJsOiAnaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTU5MDU1MS9wZXhlbHMtcGhvdG8tMTU5MDU1MS5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDAnXHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIEtleTogJ3B1bXBraW5zLmpwZycsXHJcbiAgICAgICAgLy8gICAgICAgICB1cmw6ICdodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy82MTk0MTgvcGV4ZWxzLXBob3RvLTYxOTQxOC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD02NTAmdz05NDAnXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyBdXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL29weHhiYjF6cTYuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2L3VwbG9hZEltYWdlcycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICd4LWFwaS1rZXknOiBwcm9jZXNzLmVudi5BUElfS0VZLFxyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBzYXZpbmcgaW1hZ2VzOiAke2Vycm9yfWApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2F2ZUltYWdlczsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnN0YWdyYW0td2ViLWFwaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IGltcG9ydChcIm5vZGUtZmV0Y2hcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm5hbWVzIjpbImZldGNoIiwiZ2V0T25lSW1hZ2UiLCJLZXkiLCJvcHRpb25zIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwidXJsIiwiZXJyb3IiLCJFcnJvciIsIkluc3RhZ3JhbSIsImZzIiwicGF0aCIsInNhdmVJbWFnZXMiLCJDQUNIRV9QQVRIIiwicmVzb2x2ZSIsImluZGV4IiwicmVxIiwicmVzIiwiY2FjaGVkRGF0YSIsImNhY2hlZERhdGFSYXciLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEFuZENhY2hlRGF0YSIsImRhdGEiLCJtYXAiLCJub2RlIiwidGh1bWJuYWlsX3NyYyIsImRpc3BsYXlfdXJsIiwiaWQiLCJzaG9ydGNvZGUiLCJwcm9taXNlcyIsImltYWdlIiwidGVzdCIsInMzX3VybCIsImpzb24iLCJkb25lIiwiUHJvbWlzZSIsImFsbCIsInN0YXR1cyIsImdldEluc3RhZ3JhbURhdGEiLCJpbWFnZXNUb1NhdmUiLCJlcnIiLCJjbGllbnQiLCJ1c2VybmFtZSIsIklHX1VTRVJOQU1FIiwicGFzc3dvcmQiLCJJR19QQVNTV09SRCIsInBvc3RzIiwibG9naW4iLCJnZXRQaG90b3NCeVVzZXJuYW1lIiwiZmlyc3QiLCJ3cml0ZUZpbGUiLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==