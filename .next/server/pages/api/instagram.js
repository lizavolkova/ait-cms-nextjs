"use strict";
(() => {
var exports = {};
exports.id = "pages/api/instagram";
exports.ids = ["pages/api/instagram"];
exports.modules = {

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
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);




async function instagram(req, res) {
  try {
    const images = await getImages();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json(error);
  } // const CACHE_PATH = path.resolve('insta.json')
  // let cachedData = [];
  //
  // try {
  //     cachedData = JSON.parse(fs.readFileSync(path.join(CACHE_PATH), 'utf8'))
  // } catch (error) {
  //     console.log('Member cache not initialized')
  // }
  //
  // if (!cachedData) {
  //     // fetch data
  //     //write to file
  //     // https://flaviocopes.com/nextjs-cache-data-globally/
  //
  // }
  //https://dev.to/dlw/next-js-and-aws-image-demo-part-2-pl5
  // delete all images in directory
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
  // async function saveImages(url, id) {
  //     try {
  //         const response = await fetch(url);
  //         const buffer = await response.buffer()
  //         fs.writeFile(path.resolve(images_dir, `img-${id}.jpg`), buffer, () => {
  //             console.log('finished downloading!');
  //         })
  //     } catch(error) {
  //         console.log('error fetching images', error)
  //     }
  //
  // }
  //
  // const getData = async () => {
  //     return Promise.all(cachedData.map(node => {
  //         saveImages(node.node.thumbnail_src, node.node.id)
  //     }))
  // }
  //
  //
  // getData().then(res => console.log('IMAGE SAVED!'))
  // let instagramPosts = []
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
  //res.status(200).json(cachedData)

} //https://darrenwhite.dev/blog/nextjs-aws-image-demo-part-3

const getImages = async () => {
  try {
    const options = {
      headers: {
        'X-API-KEY': process.env.API_KEY
      }
    };
    const imagesRes = await fetch('https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/images', options);
    const {
      data
    } = await imagesRes.json();
    const images = data.map(({
      Key
    }) => {
      return `https://opxxbb1zq6.execute-api.us-east-1.amazonaws.com/dev/signed-url?key=${Key}`;
    }); // map every URL to promise of the fetch

    const requests = images.map(url => fetch(url, options));
    const responses = await Promise.all(requests);
    const imagesData = [];
    await Promise.all(responses.map(async r => {
      const json = await r.json();
      imagesData.push(json);
    }));

    if (!data) {
      throw new Error('Data not found');
    }

    return imagesData;
  } catch (error) {
    throw new Error(`Error fetching images: ${error}`);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9pbnN0YWdyYW0uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW5zdGFncmFtLXdlYi1hcGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEluc3RhZ3JhbSBmcm9tIFwiaW5zdGFncmFtLXdlYi1hcGlcIlxyXG5pbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluc3RhZ3JhbShyZXEsIHJlcykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpbWFnZXMgPSBhd2FpdCBnZXRJbWFnZXMoKTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihpbWFnZXMpXHJcbiAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oZXJyb3IpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gY29uc3QgQ0FDSEVfUEFUSCA9IHBhdGgucmVzb2x2ZSgnaW5zdGEuanNvbicpXHJcbiAgICAvLyBsZXQgY2FjaGVkRGF0YSA9IFtdO1xyXG4gICAgLy9cclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgICAgY2FjaGVkRGF0YSA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihDQUNIRV9QQVRIKSwgJ3V0ZjgnKSlcclxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ01lbWJlciBjYWNoZSBub3QgaW5pdGlhbGl6ZWQnKVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGlmICghY2FjaGVkRGF0YSkge1xyXG4gICAgLy8gICAgIC8vIGZldGNoIGRhdGFcclxuICAgIC8vICAgICAvL3dyaXRlIHRvIGZpbGVcclxuICAgIC8vICAgICAvLyBodHRwczovL2ZsYXZpb2NvcGVzLmNvbS9uZXh0anMtY2FjaGUtZGF0YS1nbG9iYWxseS9cclxuICAgIC8vXHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vaHR0cHM6Ly9kZXYudG8vZGx3L25leHQtanMtYW5kLWF3cy1pbWFnZS1kZW1vLXBhcnQtMi1wbDVcclxuXHJcbiAgICAvLyBkZWxldGUgYWxsIGltYWdlcyBpbiBkaXJlY3RvcnlcclxuICAgIC8vIGZzLnJlYWRkaXIoaW1hZ2VzX2RpciwgKGVyciwgZmlsZXMpID0+IHtcclxuICAgIC8vICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xyXG4gICAgLy8gICAgICAgICBmcy51bmxpbmsocGF0aC5qb2luKGltYWdlc19kaXIsIGZpbGUpLCBlcnIgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBzYXZlIGltYWdlc1xyXG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gc2F2ZUltYWdlcyh1cmwsIGlkKSB7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCByZXNwb25zZS5idWZmZXIoKVxyXG4gICAgLy8gICAgICAgICBmcy53cml0ZUZpbGUocGF0aC5yZXNvbHZlKGltYWdlc19kaXIsIGBpbWctJHtpZH0uanBnYCksIGJ1ZmZlciwgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpbmlzaGVkIGRvd25sb2FkaW5nIScpO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGZldGNoaW5nIGltYWdlcycsIGVycm9yKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gY29uc3QgZ2V0RGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIC8vICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY2FjaGVkRGF0YS5tYXAobm9kZSA9PiB7XHJcbiAgICAvLyAgICAgICAgIHNhdmVJbWFnZXMobm9kZS5ub2RlLnRodW1ibmFpbF9zcmMsIG5vZGUubm9kZS5pZClcclxuICAgIC8vICAgICB9KSlcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0RGF0YSgpLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKCdJTUFHRSBTQVZFRCEnKSlcclxuXHJcblxyXG4gICAgLy8gbGV0IGluc3RhZ3JhbVBvc3RzID0gW11cclxuICAgIC8vXHJcbiAgICAvLyBjb25zdCBjbGllbnQgPSBuZXcgSW5zdGFncmFtKHtcclxuICAgIC8vICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuSUdfVVNFUk5BTUUsXHJcbiAgICAvLyAgICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LklHX1BBU1NXT1JELFxyXG4gICAgLy8gfSlcclxuICAgIC8vXHJcbiAgICAvL1xyXG4gICAgLy8gbGV0IHBvc3RzID0gW11cclxuICAgIC8vIHRyeSB7XHJcbiAgICAvLyAgICAgLy8gYXR0ZW1wdCB0byBsb2cgaW4gdG8gSW5zdGFncmFtXHJcbiAgICAvLyAgICAgYXdhaXQgY2xpZW50LmxvZ2luKClcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhjbGllbnQpO1xyXG4gICAgLy8gICAgIC8vIHJlcXVlc3QgcGhvdG9zIGZvciBhIHNwZWNpZmljIGluc3RhZ3JhbSB1c2VyXHJcbiAgICAvLyAgICAgY29uc3QgaW5zdGFncmFtID0gYXdhaXQgY2xpZW50LmdldFBob3Rvc0J5VXNlcm5hbWUoe1xyXG4gICAgLy8gICAgICAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuSUdfVVNFUk5BTUUsXHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vXHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5zdGFncmFtKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYgKGluc3RhZ3JhbVtcInVzZXJcIl1bXCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhXCJdW1wiY291bnRcIl0gPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIC8vIGlmIHdlIHJlY2VpdmUgdGltZWxpbmUgZGF0YSBiYWNrXHJcbiAgICAvLyAgICAgICAgIC8vICB1cGRhdGUgdGhlIHBvc3RzIHRvIGJlIGVxdWFsXHJcbiAgICAvLyAgICAgICAgIC8vIHRvIHRoZSBlZGdlcyB0aGF0IHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgaW5zdGFncmFtIEFQSSByZXNwb25zZVxyXG4gICAgLy8gICAgICAgICBwb3N0cyA9IGluc3RhZ3JhbVtcInVzZXJcIl1bXCJlZGdlX293bmVyX3RvX3RpbWVsaW5lX21lZGlhXCJdW1wiZWRnZXNcIl1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vICAgICAvLyB0aHJvdyBhbiBlcnJvciBpZiBsb2dpbiB0byBJbnN0YWdyYW0gZmFpbHNcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGxvZ2dpbmcgaW50byBJbnN0YWdyYW1cIiwgZXJyKVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyBjb25zdCBwb3N0ID0gYXdhaXQgcHJpc21hLnBvc3QuZmluZFVuaXF1ZSh7XHJcbiAgICAvLyAgICAgd2hlcmU6IHtcclxuICAgIC8vICAgICAgICAgaWQ6IDEgfHwgLTEsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBpbmNsdWRlOiB7XHJcbiAgICAvLyAgICAgICAgIGF1dGhvcjoge1xyXG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSxcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy9yZXMuc3RhdHVzKDIwMCkuanNvbihjYWNoZWREYXRhKVxyXG59XHJcblxyXG5cclxuLy9odHRwczovL2RhcnJlbndoaXRlLmRldi9ibG9nL25leHRqcy1hd3MtaW1hZ2UtZGVtby1wYXJ0LTNcclxuY29uc3QgZ2V0SW1hZ2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuQVBJX0tFWSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZXNSZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9vcHh4YmIxenE2LmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldi9pbWFnZXMnLCBvcHRpb25zKTtcclxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGltYWdlc1Jlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlcyA9IGRhdGEubWFwKCh7S2V5fSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vb3B4eGJiMXpxNi5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYvc2lnbmVkLXVybD9rZXk9JHtLZXl9YFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIG1hcCBldmVyeSBVUkwgdG8gcHJvbWlzZSBvZiB0aGUgZmV0Y2hcclxuICAgICAgICBjb25zdCByZXF1ZXN0cyA9IGltYWdlcy5tYXAoKHVybCkgPT4gZmV0Y2godXJsLCBvcHRpb25zKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHJlcXVlc3RzKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2VzRGF0YSA9IFtdO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgICAgICByZXNwb25zZXMubWFwKGFzeW5jIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgci5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXNEYXRhLnB1c2goanNvbik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YSBub3QgZm91bmQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbWFnZXNEYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGZldGNoaW5nIGltYWdlczogJHtlcnJvcn1gKTtcclxuICAgIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImluc3RhZ3JhbS13ZWItYXBpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7Il0sIm5hbWVzIjpbIkluc3RhZ3JhbSIsImZzIiwicGF0aCIsImh0dHAiLCJpbnN0YWdyYW0iLCJyZXEiLCJyZXMiLCJpbWFnZXMiLCJnZXRJbWFnZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJvcHRpb25zIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwiaW1hZ2VzUmVzIiwiZmV0Y2giLCJkYXRhIiwibWFwIiwiS2V5IiwicmVxdWVzdHMiLCJ1cmwiLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwiaW1hZ2VzRGF0YSIsInIiLCJwdXNoIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9