(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/container.js":
/*!*********************************!*\
  !*** ./components/container.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\container.js";

function Container({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container mx-auto px-5 md:max-w-screen-xl",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/instagram-feed.js":
/*!**************************************!*\
  !*** ./components/instagram-feed.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InstagramFeed)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\instagram-feed.js";





function InstagramFeed() {
  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async () => {
    try {
      setLoading(true);
      const data = await fetch('/api/instagram');

      if (!data.ok) {
        throw new Error(data.statusText);
      }

      const posts = await data.json();
      setPosts(posts);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('api error');
      setError(true);
    }
  }, []);

  if (loading) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: " "
    }, void 0, false);
  }

  if (!posts || error) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: "There was a problem connecting to Instagram"
    }, void 0, false);
  }

  console.log(posts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        href: "https://www.instagram.com/yourinstagramhandle/",
        children: "Follow Us on Instagram"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("ul", {
        className: "flex flex-wrap justify-center",
        children: posts.map((post, i) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("li", {
            className: "m-2",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              href: `https://www.instagram.com/p/${post.shortcode}`,
              target: "_blank",
              rel: "noreferrer",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: post.s3_url,
                width: 100,
                height: 100
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 33
            }, this)
          }, i, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this)
  }, void 0, false);
} // <ul>
//     {/* let's iterate through each of the
//          index posts that were returned
//          from the Instagram API*/}
//     {posts.map(({ node }, i) => {
//         return (
//             // let's wrap each post in an anchor tag
//             // and construct the url for the post using
//             // the shortcode that was returned from the API
//             <li key={node.id}>
//                 <a
//                     href={`https://www.instagram.com/p/${node.shortcode}`}
//                     key={i}
//                     aria-label="view image on Instagram"
//                 >
//                     {/* set the image src equal to the image
//                 url from the Instagram API*/}
//                     <Image src='/index/img-954614431982330478.jpg' width={100} height={100}/>
//
//                     {/*<img*/}
//                     {/*    src={node.display_url}*/}
//                     {/*    alt={*/}
//                     {/*        // the caption with hashtags removed*/}
//                     {/*        node.edge_media_to_caption?.edges[0]?.node?.text*/}
//                     {/*            .replace(/(#\w+)+/g, "")*/}
//                     {/*            .trim()*/}
//                     {/*    }*/}
//                     {/*/>*/}
//                 </a>
//             </li>
//         )
//     })}
// </ul>

/***/ }),

/***/ "./components/layout/footer.js":
/*!*************************************!*\
  !*** ./components/layout/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/constants */ "./lib/constants.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\footer.js";



function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("footer", {
    className: "bg-accent-1 border-t border-accent-2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "py-28 flex flex-col lg:flex-row items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          className: "text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2",
          children: "Statically Generated with Next.js."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: "flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: "https://nextjs.org/docs/basic-features/pages",
            className: "mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0",
            children: "Read Documentation"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("a", {
            href: `https://github.com/vercel/next.js/tree/canary/examples/${_lib_constants__WEBPACK_IMPORTED_MODULE_1__.EXAMPLE_PATH}`,
            className: "mx-3 font-bold hover:underline",
            children: "View on GitHub"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout/header.js":
/*!*************************************!*\
  !*** ./components/layout/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_use_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/use-site */ "./context/use-site.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\header.js";




function Header({
  element
}) {
  const siteSettings = (0,_context_use_site__WEBPACK_IMPORTED_MODULE_2__.useSiteContext)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    ref: element,
    className: "flex mb-4 md:mb-10 mt-8 justify-center items-center ",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        className: "w-2/3 sm:w-80",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          width: 2000,
          height: 440,
          src: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.siteLogo.sourceUrl,
          alt: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.generalSettings.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout/home-layout.js":
/*!******************************************!*\
  !*** ./components/layout/home-layout.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomeLayout)
/* harmony export */ });
/* harmony import */ var _post_components_more_stories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post-components/more-stories */ "./components/post-components/more-stories.js");
/* harmony import */ var _post_components_post_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-components/post-preview */ "./components/post-components/post-preview.js");
/* harmony import */ var _post_components_blog_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../post-components/blog-loading */ "./components/post-components/blog-loading.js");
/* harmony import */ var _post_components_posts_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../post-components/posts-transition */ "./components/post-components/posts-transition.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\home-layout.js";






function HomeLayout({
  loading,
  searchQuery,
  posts
}) {
  var _posts$, _heroPost$featuredIma, _heroPost$author;

  if (loading && searchQuery) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: ["SEARCH CALLED: ", searchQuery]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_blog_loading__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  if (searchQuery) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        children: ["SEARCH CALLED: ", searchQuery]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_posts_transition__WEBPACK_IMPORTED_MODULE_3__.default, {
        appear: true,
        show: !loading,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_more_stories__WEBPACK_IMPORTED_MODULE_0__.default, {
          posts: posts.edges
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)]
    }, void 0, true);
  }

  const heroPost = (_posts$ = posts[0]) === null || _posts$ === void 0 ? void 0 : _posts$.node;
  const morePosts = posts.slice(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_posts_transition__WEBPACK_IMPORTED_MODULE_3__.default, {
    appear: true,
    show: !searchQuery,
    children: [heroPost && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_post_preview__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: heroPost.title,
      coverImage: (_heroPost$featuredIma = heroPost.featuredImage) === null || _heroPost$featuredIma === void 0 ? void 0 : _heroPost$featuredIma.node,
      date: heroPost.date,
      author: (_heroPost$author = heroPost.author) === null || _heroPost$author === void 0 ? void 0 : _heroPost$author.node,
      slug: heroPost.slug,
      excerpt: heroPost.excerpt,
      categories: heroPost.categories
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }, this), morePosts.length > 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_post_components_more_stories__WEBPACK_IMPORTED_MODULE_0__.default, {
      posts: morePosts
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 32
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout/layout-sidebar.js":
/*!*********************************************!*\
  !*** ./components/layout/layout-sidebar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LayoutSideBar)
/* harmony export */ });
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar */ "./components/layout/sidebar.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\layout-sidebar.js";


function LayoutSideBar({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex flex-row flex-wrap py-4",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "w-full lg:w-2/3 pt-1 px-0 md: px-2",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "w-full lg:w-1/3 px-0 md: px-2",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_sidebar__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./components/layout/menu.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./components/layout/footer.js");
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../meta */ "./components/meta.js");
/* harmony import */ var _hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useSticky */ "./hooks/useSticky.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ "./components/layout/header.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\layout.js";
// import Alert from '../components/alert'







function Layout({
  preview,
  children
}) {
  const {
    isSticky,
    element
  } = (0,_hooks_useSticky__WEBPACK_IMPORTED_MODULE_3__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_meta__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "min-h-screen",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_menu__WEBPACK_IMPORTED_MODULE_0__.default, {
        sticky: isSticky
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
        ref: element,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./components/layout/menu.js":
/*!***********************************!*\
  !*** ./components/layout/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container */ "./components/container.js");
/* harmony import */ var _context_use_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/use-site */ "./context/use-site.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search */ "./components/search.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\menu.js";






function Menu({
  sticky
}) {
  const siteSettings = (0,_context_use_site__WEBPACK_IMPORTED_MODULE_1__.useSiteContext)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "border-b bg-accent-1 border-accent-2 lg:sticky top-0 z-10",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_0__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("nav", {
        className: "flex items-center justify-center flex-wrap py-3",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-52 transition-opacity duration-400 hidden lg:block', sticky ? 'opacity-1' : 'opacity-0'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
            className: "w-2/3 sm:w-40",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
              width: 2000,
              height: 440,
              src: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.siteLogo.sourceUrl,
              alt: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.generalSettings.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: "flex flex-grow justify-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("ul", {
            className: "w-80 flex justify-center",
            children: siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.menu.menuItems.nodes.map(item => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("li", {
                className: "mx-1 text-center",
                children: item.label
              }, item.id, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 19
              }, this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-52 transition-opacity duration-400 hidden lg:block', sticky ? 'opacity-1' : 'opacity-0'),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/layout/sidebar.js":
/*!**************************************!*\
  !*** ./components/layout/sidebar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var _context_use_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/use-site */ "./context/use-site.js");
/* harmony import */ var _post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post-components/sidebar-card */ "./components/post-components/sidebar-card.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tag_cloud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tag-cloud */ "./components/tag-cloud.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../search */ "./components/search.js");
/* harmony import */ var _instagram_feed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../instagram-feed */ "./components/instagram-feed.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\layout\\sidebar.js";







function SideBar() {
  var _siteSettings$categor;

  const siteSettings = (0,_context_use_site__WEBPACK_IMPORTED_MODULE_0__.useSiteContext)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "border-b border-accent-2 md:sticky top-20 ",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "About Me",
      children: "some text here"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Instagram",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_instagram_feed__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Search",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_search__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Browse by category",
      children: siteSettings === null || siteSettings === void 0 ? void 0 : (_siteSettings$categor = siteSettings.categories) === null || _siteSettings$categor === void 0 ? void 0 : _siteSettings$categor.edges.map(category => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: "text-center",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: category.node.uri,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("a", {
              className: "hover:underline",
              children: category.node.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this)
        }, category.node.id, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 13
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_post_components_sidebar_card__WEBPACK_IMPORTED_MODULE_1__.default, {
      title: "Tags",
      children: (siteSettings === null || siteSettings === void 0 ? void 0 : siteSettings.tags) && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_tag_cloud__WEBPACK_IMPORTED_MODULE_3__.default, {
        tags: siteSettings.tags,
        minFont: 9,
        maxFont: 22
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/meta.js":
/*!****************************!*\
  !*** ./components/meta.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Meta)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/constants */ "./lib/constants.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\meta.js";



function Meta() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "manifest",
      href: "/favicon/site.webmanifest"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "shortcut icon",
      href: "/favicon/favicon.ico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
      name: "msapplication-TileColor",
      content: "#000000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
      name: "msapplication-config",
      content: "/favicon/browserconfig.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
      name: "theme-color",
      content: "#000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
      rel: "alternate",
      type: "application/rss+xml",
      href: "/feed.xml"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
      name: "description",
      content: `A statically generated blog example using Next.js and ${_lib_constants__WEBPACK_IMPORTED_MODULE_1__.CMS_NAME}.`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
      property: "og:image",
      content: _lib_constants__WEBPACK_IMPORTED_MODULE_1__.HOME_OG_IMAGE_URL
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/avatar.js":
/*!**********************************************!*\
  !*** ./components/post-components/avatar.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\avatar.js";


function Avatar({
  author
}) {
  const name = author ? author.firstName && author.lastName ? `${author.firstName} ${author.lastName}` : author.name : null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "w-12 h-12 relative mr-4",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: author.avatar.url,
        layout: "fill",
        className: "rounded-full",
        alt: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-xl font-bold",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/blog-loading.js":
/*!****************************************************!*\
  !*** ./components/post-components/blog-loading.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\blog-loading.js";

function BlogLoading({
  sticky
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "animate-pulse grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-0 md:mb-32",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "m-4 p-0 md:p-2 bg-gray-100 h-80 rounded-md"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "m-4 p-0 md:p-2 bg-gray-100 h-80 rounded-md"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/categories.js":
/*!**************************************************!*\
  !*** ./components/post-components/categories.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Categories)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\categories.js";

function Categories({
  categories
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    className: "ml-1",
    children: categories.edges.length > 0 ? categories.edges.map((category, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "ml-1",
      children: category.node.name
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }, this)) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "ml-1",
      children: categories.edges.node.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/cover-image.js":
/*!***************************************************!*\
  !*** ./components/post-components/cover-image.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CoverImage)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\cover-image.js";





function CoverImage({
  title,
  coverImage,
  slug
}) {
  var _coverImage$mediaDeta2, _coverImage$mediaDeta3, _coverImage$mediaDeta4, _coverImage$mediaDeta5;

  const anchorRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  const {
    0: loaded,
    1: setLoaded
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: dominantColor,
    1: setDominantColor
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('#CCCCFF');
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    var _coverImage$mediaDeta;

    // Check if there is a small placeholder
    const sizes = (_coverImage$mediaDeta = coverImage.mediaDetails) === null || _coverImage$mediaDeta === void 0 ? void 0 : _coverImage$mediaDeta.sizes;
    let small_image;

    if (sizes) {
      const test = sizes.reduce((prev, curr) => {
        return prev.fileSize < curr.fileSize ? prev : curr;
      });
      small_image = test.sourceUrl; //fetch dominant color from image

      fetch(`/api/color`, {
        method: 'POST',
        body: JSON.stringify({
          url: small_image
        })
      }).then(res => res.json()).then(color => {
        setDominantColor(color.hex); // next/image doesn't support dynamic style tag
        // tailwind doesn't support dynamic colors at runtime
        // facepalm have to resort to refs for the placeholder dominant color image

        const imageTag = anchorRef.current.getElementsByTagName('img')[0];
        imageTag.style.backgroundColor = color.hex;
      });
    }
  }, []);

  const image = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    width: (_coverImage$mediaDeta2 = coverImage === null || coverImage === void 0 ? void 0 : (_coverImage$mediaDeta3 = coverImage.mediaDetails) === null || _coverImage$mediaDeta3 === void 0 ? void 0 : _coverImage$mediaDeta3.width) !== null && _coverImage$mediaDeta2 !== void 0 ? _coverImage$mediaDeta2 : 2000,
    height: (_coverImage$mediaDeta4 = coverImage === null || coverImage === void 0 ? void 0 : (_coverImage$mediaDeta5 = coverImage.mediaDetails) === null || _coverImage$mediaDeta5 === void 0 ? void 0 : _coverImage$mediaDeta5.height) !== null && _coverImage$mediaDeta4 !== void 0 ? _coverImage$mediaDeta4 : 1000,
    alt: `Cover Image for ${title}`,
    src: coverImage === null || coverImage === void 0 ? void 0 : coverImage.sourceUrl,
    placeholder: "empty",
    onLoadingComplete: () => setLoaded(true),
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(`filter shadow-small rounded-sm`, {
      'hover:shadow-medium transition-shadow duration-200': slug,
      'unblur': loaded
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "sm:mx-0",
    children: slug ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: `/posts/${slug}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("a", {
        "aria-label": title,
        className: "cover-image",
        ref: anchorRef,
        children: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }, this) : image
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/date.js":
/*!********************************************!*\
  !*** ./components/post-components/date.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Date)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\date.js";


function Date({
  dateString
}) {
  const date = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.parseISO)(dateString);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("time", {
    dateTime: dateString,
    children: (0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(date, 'LLLL	d, yyyy')
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./components/post-components/more-stories.js":
/*!****************************************************!*\
  !*** ./components/post-components/more-stories.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MoreStories)
/* harmony export */ });
/* harmony import */ var _post_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-preview */ "./components/post-components/post-preview.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\more-stories.js";


function MoreStories({
  posts,
  showHeader
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    children: [showHeader && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
      className: "mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight",
      children: "More Stories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-0 md:mb-32",
      children: posts.map(({
        node
      }) => {
        var _node$featuredImage, _node$author;

        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_post_preview__WEBPACK_IMPORTED_MODULE_0__.default, {
          title: node.title,
          coverImage: (_node$featuredImage = node.featuredImage) === null || _node$featuredImage === void 0 ? void 0 : _node$featuredImage.node,
          date: node.date,
          author: (_node$author = node.author) === null || _node$author === void 0 ? void 0 : _node$author.node,
          slug: node.slug,
          excerpt: node.excerpt,
          categories: node.categories
        }, node.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/post-preview.js":
/*!****************************************************!*\
  !*** ./components/post-components/post-preview.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPreview)
/* harmony export */ });
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar */ "./components/post-components/avatar.js");
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date */ "./components/post-components/date.js");
/* harmony import */ var _cover_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover-image */ "./components/post-components/cover-image.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories */ "./components/post-components/categories.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\post-preview.js";






function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: "mb-4 p-0 md:p-2",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h3", {
      className: "text-2xl md:text-3xl mb-3 leading-snug text-center",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: `/posts/${slug}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
          className: "text-black",
          dangerouslySetInnerHTML: {
            __html: title
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "text-lg date-tags text-center mb-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_date__WEBPACK_IMPORTED_MODULE_1__.default, {
        dateString: date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_categories__WEBPACK_IMPORTED_MODULE_4__.default, {
        categories: categories
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      children: coverImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_cover_image__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: title,
        coverImage: coverImage,
        slug: slug
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: "text-lg leading-relaxed mb-4",
      dangerouslySetInnerHTML: {
        __html: excerpt
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/posts-transition.js":
/*!********************************************************!*\
  !*** ./components/post-components/posts-transition.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostTransition)
/* harmony export */ });
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @headlessui/react */ "@headlessui/react");
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\posts-transition.js";


function PostTransition({
  children,
  show = false,
  appear
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_0__.Transition, {
    appear: appear,
    show: show,
    enter: "transition-opacity duration-400",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-400",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/post-components/sidebar-card.js":
/*!****************************************************!*\
  !*** ./components/post-components/sidebar-card.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideBarCard)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\post-components\\sidebar-card.js";

function SideBarCard({
  title,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-accent-1 border-grey-100 border p-8 mx-0 my-5 sm:mx-5",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
      className: "uppercase mb-5 border-b text-xl",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/search.js":
/*!******************************!*\
  !*** ./components/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\search.js";


function Search() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  const handleSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    router.push(`/?s=${searchQuery}`);
    e.target.reset();
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
    onSubmit: e => handleSearchSubmit(e),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "shadow flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
        className: "w-full rounded p-2",
        type: "text",
        placeholder: "Search...",
        name: "search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        className: "bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
          className: "material-icons text-mainPink",
          children: "search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/tag-cloud.js":
/*!*********************************!*\
  !*** ./components/tag-cloud.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TagCloud)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\components\\tag-cloud.js";



function TagCloud({
  tags,
  minFont,
  maxFont
}) {
  const normalize = (val, min, max) => {
    return (val - min) / (max - min) * (maxFont - minFont) + minFont;
  };

  const counts = tags.edges.map(tag => tag.node.count);
  const countMin = Math.min(...counts);
  const countMax = Math.max(...counts);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: tags.edges.map(tag => {
      const size = normalize(tag.node.count, countMin, countMax);
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: tag.node.uri,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          className: "hover:underline inline-block",
          style: {
            fontSize: `${size}pt`
          },
          children: [tag.node.name, "\xA0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 13
        }, this)
      }, tag.node.id, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this);
    })
  }, void 0, false);
}

/***/ }),

/***/ "./context/use-site.js":
/*!*****************************!*\
  !*** ./context/use-site.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteContext": () => (/* binding */ SiteContext),
/* harmony export */   "useSiteContext": () => (/* binding */ useSiteContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SiteContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
function useSiteContext() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(SiteContext);
}

/***/ }),

/***/ "./hooks/useSticky.js":
/*!****************************!*\
  !*** ./hooks/useSticky.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
//https://www.ibrahima-ndaw.com/blog/build-a-sticky-nav-with-react/


function useSticky() {
  const {
    0: isSticky,
    1: setSticky
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const element = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleScroll = () => {
    window.scrollY > 250 ? setSticky(true) : setSticky(false);
  }; // This function handles the scroll performance issue


  const debounce = (func, wait = 15, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
          args = arguments;

      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };

      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('scroll', debounce(handleScroll));
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [debounce, handleScroll]);
  return {
    isSticky,
    element
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSticky);

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPreviewPost": () => (/* binding */ getPreviewPost),
/* harmony export */   "getBlogSettings": () => (/* binding */ getBlogSettings),
/* harmony export */   "getAllPostsWithSlug": () => (/* binding */ getAllPostsWithSlug),
/* harmony export */   "getAllCategories": () => (/* binding */ getAllCategories),
/* harmony export */   "getAllTags": () => (/* binding */ getAllTags),
/* harmony export */   "getAllPostsByCategory": () => (/* binding */ getAllPostsByCategory),
/* harmony export */   "getAllPostsByTag": () => (/* binding */ getAllPostsByTag),
/* harmony export */   "getSearchPosts": () => (/* binding */ getSearchPosts),
/* harmony export */   "getAllPostsForHome": () => (/* binding */ getAllPostsForHome),
/* harmony export */   "getPostAndMorePosts": () => (/* binding */ getPostAndMorePosts)
/* harmony export */ });
const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, {
  variables
} = {}) {
  const headers = {
    'Content-Type': 'application/json'
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers['Authorization'] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(`
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`, {
    variables: {
      id,
      idType
    }
  });
  return data.post;
}
async function getBlogSettings() {
  const data = await fetchAPI(`
    {
      siteLogo {
        sourceUrl
      }
      generalSettings {
        title
        url
        description
      }
      menu(id: "main", idType: NAME) {
        id
          menuItems {
            nodes {
              id
              databaseId      
              url
              label
            }
          }
      }
      tags(where: {hideEmpty: true}, first: 100) {
        edges {
          node {
            id
            name
            count
            uri
          }
        }
      }
      categories(where: {hideEmpty: true}) {
        edges {
          node {
            id
            name
            uri
          }
        }
      }
    }
  `);
  return data;
}
async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllCategories() {
  const data = await fetchAPI(`
      {
        categories(where: {hideEmpty: true}) {
          edges {
            node {
              id
              name
              uri
              slug
            }
          }
        }
      }
  `);
  return data === null || data === void 0 ? void 0 : data.categories;
}
async function getAllTags() {
  const data = await fetchAPI(`
      {
       tags(where: {hideEmpty: true}, first: 100) {
        edges {
          node {
            id
            name
            count
            uri
            slug
          }
        }
      }
      }
  `);
  return data === null || data === void 0 ? void 0 : data.tags;
}
async function getAllPostsByCategory(preview, category) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}, categoryName: "${category}"}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                  sizes {
                    fileSize
                    sourceUrl
                  }
                }
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                  uri
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `, {
    variables: {
      onlyEnabled: !preview,
      preview
    }
  });
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllPostsByTag(preview, tag) {
  const data = await fetchAPI(`
    query AllPosts {
  posts(first: 20, where: {orderby: {field: DATE, order: DESC}, tag: "${tag}"}) {
    edges {
      node {
        title
        excerpt
        slug
        date
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
              sizes {
                fileSize
                sourceUrl
              }
            }
          }
        }
        categories {
          edges {
            node {
              id
              name
              slug
              uri
            }
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
  }
}
  `, {
    variables: {
      onlyEnabled: !preview,
      preview
    }
  });
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getSearchPosts(search) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}, search: "${search}"}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                  sizes {
                    fileSize
                    sourceUrl
                  }
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                  uri
                }
              }
            }
          }
        }
      }
    }

  `);
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getAllPostsForHome(preview) {
  const data = await fetchAPI(`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
                mediaDetails {
                  height
                  width
                  sizes {
                    fileSize
                    sourceUrl
                  }
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                  slug
                  uri
                }
              }
            }
          }
        }
      }
    }
  `, {
    variables: {
      onlyEnabled: !preview,
      preview
    }
  });
  return data === null || data === void 0 ? void 0 : data.posts;
}
async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && (previewData === null || previewData === void 0 ? void 0 : previewData.post); // The slug may be the id of an unpublished post

  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId ? Number(slug) === postPreview.id : slug === postPreview.slug;
  const isDraft = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'draft';
  const isRevision = isSamePost && (postPreview === null || postPreview === void 0 ? void 0 : postPreview.status) === 'publish';
  const data = await fetchAPI(`
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
            sizes {
              fileSize
              sourceUrl
            }
          }
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${// Only some of the fields of a revision are considered as there are some inconsistencies
  isRevision ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        ` : ''}
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `, {
    variables: {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? 'DATABASE_ID' : 'SLUG'
    }
  }); // Draft posts may not have an slug

  if (isDraft) data.post.slug = postPreview.id; // Apply a revision (changes in a published post)

  if (isRevision && data.post.revisions) {
    var _data$post$revisions$;

    const revision = (_data$post$revisions$ = data.post.revisions.edges[0]) === null || _data$post$revisions$ === void 0 ? void 0 : _data$post$revisions$.node;
    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  } // Filter out the main post


  data.posts.edges = data.posts.edges.filter(({
    node
  }) => node.slug !== slug); // If there are still 3 posts, remove the last one

  if (data.posts.edges.length > 2) data.posts.edges.pop();
  return data;
}

/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EXAMPLE_PATH": () => (/* binding */ EXAMPLE_PATH),
/* harmony export */   "CMS_NAME": () => (/* binding */ CMS_NAME),
/* harmony export */   "CMS_URL": () => (/* binding */ CMS_URL),
/* harmony export */   "HOME_OG_IMAGE_URL": () => (/* binding */ HOME_OG_IMAGE_URL)
/* harmony export */ });
const EXAMPLE_PATH = 'cms-wordpress';
const CMS_NAME = 'WordPress';
const CMS_URL = 'https://wordpress.org';
const HOME_OG_IMAGE_URL = 'https://og-image.vercel.app/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E';

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["1.gravatar.com","www.adventuresintimeart.com","dev-aws-ait-project.s3.amazonaws.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/api */ "./lib/api.js");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container */ "./components/container.js");
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout/layout */ "./components/layout/layout.js");
/* harmony import */ var _components_layout_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/layout-sidebar */ "./components/layout/layout-sidebar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_layout_home_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/home-layout */ "./components/layout/home-layout.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Documents\\websites\\cms-wordpress-app\\pages\\index.js";









function Index({
  allPosts: {
    edges
  },
  preview,
  settings
}) {
  var _router$query;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: searchPosts,
    1: setSearchPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
    edges: []
  });
  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const searchQuery = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.s;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    // if you're on the home page, but performing search
    if (searchQuery) {
      setIsLoading(true);

      async function getSearchPosts() {
        setSearchPosts({
          edges: []
        });
        const posts = await fetch(`/api/search?query=${searchQuery}`);
        const postsJSON = await posts.json();
        setSearchPosts(postsJSON);
        setIsLoading(false);
      }

      getSearchPosts();
    }
  }, [searchQuery]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      preview: preview,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_container__WEBPACK_IMPORTED_MODULE_1__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout_layout_sidebar__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout_home_layout__WEBPACK_IMPORTED_MODULE_6__.default, {
            loading: isLoading,
            searchQuery: searchQuery,
            posts: searchQuery ? searchPosts : edges
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
async function getStaticProps({
  preview = false
}) {
  const settings = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.getBlogSettings)();
  const allPosts = await (0,_lib_api__WEBPACK_IMPORTED_MODULE_0__.getAllPostsForHome)(preview);
  return {
    props: {
      allPosts,
      preview,
      settings
    }
  };
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@headlessui/react":
/*!************************************!*\
  !*** external "@headlessui/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5zdGFncmFtLWZlZWQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9ob21lLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQtc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlYmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QtY29tcG9uZW50cy9hdmF0YXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LWNvbXBvbmVudHMvYmxvZy1sb2FkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC1jb21wb25lbnRzL2NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LWNvbXBvbmVudHMvY292ZXItaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LWNvbXBvbmVudHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QtY29tcG9uZW50cy9tb3JlLXN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LWNvbXBvbmVudHMvcG9zdC1wcmV2aWV3LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcG9zdC1jb21wb25lbnRzL3Bvc3RzLXRyYW5zaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wb3N0LWNvbXBvbmVudHMvc2lkZWJhci1jYXJkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFnLWNsb3VkLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvdXNlLXNpdGUuanMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlU3RpY2t5LmpzIiwid2VicGFjazovLy8uL2xpYi9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGhlYWRsZXNzdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9pZ25vcmVkfEQ6XFxEb2N1bWVudHNcXHdlYnNpdGVzXFxjbXMtd29yZHByZXNzLWFwcFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNSBtZDptYXgtdy1zY3JlZW4teGxcIj57Y2hpbGRyZW59PC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluc3RhZ3JhbUZlZWQoKSB7XHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKCcvYXBpL2luc3RhZ3JhbScpXHJcbiAgICAgICAgICAgIGlmICghZGF0YS5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFBvc3RzKHBvc3RzKVxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcGkgZXJyb3InKVxyXG4gICAgICAgICAgICBzZXRFcnJvcih0cnVlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4gPD4gPC8+XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFwb3N0cyB8fCBlcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICBUaGVyZSB3YXMgYSBwcm9ibGVtIGNvbm5lY3RpbmcgdG8gSW5zdGFncmFtXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwb3N0cylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20veW91cmluc3RhZ3JhbWhhbmRsZS9cIj5cclxuICAgICAgICAgICAgICAgICAgICBGb2xsb3cgVXMgb24gSW5zdGFncmFtXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJtLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wLyR7cG9zdC5zaG9ydGNvZGV9YH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwb3N0LnMzX3VybH0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxMDB9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLy8gPHVsPlxyXG4vLyAgICAgey8qIGxldCdzIGl0ZXJhdGUgdGhyb3VnaCBlYWNoIG9mIHRoZVxyXG4vLyAgICAgICAgICBpbmRleCBwb3N0cyB0aGF0IHdlcmUgcmV0dXJuZWRcclxuLy8gICAgICAgICAgZnJvbSB0aGUgSW5zdGFncmFtIEFQSSovfVxyXG4vLyAgICAge3Bvc3RzLm1hcCgoeyBub2RlIH0sIGkpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgICAvLyBsZXQncyB3cmFwIGVhY2ggcG9zdCBpbiBhbiBhbmNob3IgdGFnXHJcbi8vICAgICAgICAgICAgIC8vIGFuZCBjb25zdHJ1Y3QgdGhlIHVybCBmb3IgdGhlIHBvc3QgdXNpbmdcclxuLy8gICAgICAgICAgICAgLy8gdGhlIHNob3J0Y29kZSB0aGF0IHdhcyByZXR1cm5lZCBmcm9tIHRoZSBBUElcclxuLy8gICAgICAgICAgICAgPGxpIGtleT17bm9kZS5pZH0+XHJcbi8vICAgICAgICAgICAgICAgICA8YVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3AvJHtub2RlLnNob3J0Y29kZX1gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuLy8gICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidmlldyBpbWFnZSBvbiBJbnN0YWdyYW1cIlxyXG4vLyAgICAgICAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiBzZXQgdGhlIGltYWdlIHNyYyBlcXVhbCB0byB0aGUgaW1hZ2VcclxuLy8gICAgICAgICAgICAgICAgIHVybCBmcm9tIHRoZSBJbnN0YWdyYW0gQVBJKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz0nL2luZGV4L2ltZy05NTQ2MTQ0MzE5ODIzMzA0NzguanBnJyB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKjxpbWcqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogICAgc3JjPXtub2RlLmRpc3BsYXlfdXJsfSovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiAgICBhbHQ9eyovfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHsvKiAgICAgICAgLy8gdGhlIGNhcHRpb24gd2l0aCBoYXNodGFncyByZW1vdmVkKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgey8qICAgICAgICBub2RlLmVkZ2VfbWVkaWFfdG9fY2FwdGlvbj8uZWRnZXNbMF0/Lm5vZGU/LnRleHQqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAucmVwbGFjZSgvKCNcXHcrKSsvZywgXCJcIikqL31cclxuLy8gICAgICAgICAgICAgICAgICAgICB7LyogICAgICAgICAgICAudHJpbSgpKi99XHJcbi8vICAgICAgICAgICAgICAgICAgICAgey8qICAgIH0qL31cclxuLy8gICAgICAgICAgICAgICAgICAgICB7LyovPiovfVxyXG4vLyAgICAgICAgICAgICAgICAgPC9hPlxyXG4vLyAgICAgICAgICAgICA8L2xpPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH0pfVxyXG4vLyA8L3VsPiIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgeyBFWEFNUExFX1BBVEggfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnRzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLWFjY2VudC0xIGJvcmRlci10IGJvcmRlci1hY2NlbnQtMlwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMjggZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBsZzp0ZXh0LTV4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0IHRleHQtY2VudGVyIGxnOnRleHQtbGVmdCBtYi0xMCBsZzptYi0wIGxnOnByLTQgbGc6dy0xLzJcIj5cclxuICAgICAgICAgICAgU3RhdGljYWxseSBHZW5lcmF0ZWQgd2l0aCBOZXh0LmpzLlxyXG4gICAgICAgICAgPC9oMz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6cGwtNCBsZzp3LTEvMlwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvZG9jcy9iYXNpYy1mZWF0dXJlcy9wYWdlc1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMyBiZy1ibGFjayBob3ZlcjpiZy13aGl0ZSBob3Zlcjp0ZXh0LWJsYWNrIGJvcmRlciBib3JkZXItYmxhY2sgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC0xMiBsZzpweC04IGR1cmF0aW9uLTIwMCB0cmFuc2l0aW9uLWNvbG9ycyBtYi02IGxnOm1iLTBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgUmVhZCBEb2N1bWVudGF0aW9uXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzLyR7RVhBTVBMRV9QQVRIfWB9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtMyBmb250LWJvbGQgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFZpZXcgb24gR2l0SHViXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZm9vdGVyPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VTaXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlLXNpdGUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBlbGVtZW50IH0pIHtcclxuICBjb25zdCBzaXRlU2V0dGluZ3MgPSB1c2VTaXRlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17ZWxlbWVudH1cclxuICAgICAgY2xhc3NOYW1lPVwiZmxleCBtYi00IG1kOm1iLTEwIG10LTgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIFwiXHJcbiAgICA+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwidy0yLzMgc206dy04MFwiPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezQ0MH1cclxuICAgICAgICAgICAgc3JjPXtzaXRlU2V0dGluZ3M/LnNpdGVMb2dvLnNvdXJjZVVybH1cclxuICAgICAgICAgICAgYWx0PXtzaXRlU2V0dGluZ3M/LmdlbmVyYWxTZXR0aW5ncy50aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IE1vcmVTdG9yaWVzIGZyb20gJy4uL3Bvc3QtY29tcG9uZW50cy9tb3JlLXN0b3JpZXMnXHJcbmltcG9ydCBQb3N0UHJldmlldyBmcm9tICcuLi9wb3N0LWNvbXBvbmVudHMvcG9zdC1wcmV2aWV3J1xyXG5pbXBvcnQgQmxvZ0xvYWRpbmcgZnJvbSAnLi4vcG9zdC1jb21wb25lbnRzL2Jsb2ctbG9hZGluZydcclxuaW1wb3J0IFBvc3RUcmFuc2l0aW9uIGZyb20gJy4uL3Bvc3QtY29tcG9uZW50cy9wb3N0cy10cmFuc2l0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZUxheW91dCh7IGxvYWRpbmcsIHNlYXJjaFF1ZXJ5LCBwb3N0cyB9KSB7XHJcbiAgaWYgKGxvYWRpbmcgJiYgc2VhcmNoUXVlcnkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdj5TRUFSQ0ggQ0FMTEVEOiB7c2VhcmNoUXVlcnl9PC9kaXY+XHJcbiAgICAgICAgPEJsb2dMb2FkaW5nIC8+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgaWYgKHNlYXJjaFF1ZXJ5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXY+U0VBUkNIIENBTExFRDoge3NlYXJjaFF1ZXJ5fTwvZGl2PlxyXG4gICAgICAgIDxQb3N0VHJhbnNpdGlvbiBhcHBlYXI9e3RydWV9IHNob3c9eyFsb2FkaW5nfT5cclxuICAgICAgICAgIDxNb3JlU3RvcmllcyBwb3N0cz17cG9zdHMuZWRnZXN9IC8+XHJcbiAgICAgICAgPC9Qb3N0VHJhbnNpdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBjb25zdCBoZXJvUG9zdCA9IHBvc3RzWzBdPy5ub2RlXHJcbiAgY29uc3QgbW9yZVBvc3RzID0gcG9zdHMuc2xpY2UoMSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQb3N0VHJhbnNpdGlvbiBhcHBlYXI9e3RydWV9IHNob3c9eyFzZWFyY2hRdWVyeX0+XHJcbiAgICAgIHtoZXJvUG9zdCAmJiAoXHJcbiAgICAgICAgPFBvc3RQcmV2aWV3XHJcbiAgICAgICAgICB0aXRsZT17aGVyb1Bvc3QudGl0bGV9XHJcbiAgICAgICAgICBjb3ZlckltYWdlPXtoZXJvUG9zdC5mZWF0dXJlZEltYWdlPy5ub2RlfVxyXG4gICAgICAgICAgZGF0ZT17aGVyb1Bvc3QuZGF0ZX1cclxuICAgICAgICAgIGF1dGhvcj17aGVyb1Bvc3QuYXV0aG9yPy5ub2RlfVxyXG4gICAgICAgICAgc2x1Zz17aGVyb1Bvc3Quc2x1Z31cclxuICAgICAgICAgIGV4Y2VycHQ9e2hlcm9Qb3N0LmV4Y2VycHR9XHJcbiAgICAgICAgICBjYXRlZ29yaWVzPXtoZXJvUG9zdC5jYXRlZ29yaWVzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHttb3JlUG9zdHMubGVuZ3RoID4gMCAmJiA8TW9yZVN0b3JpZXMgcG9zdHM9e21vcmVQb3N0c30gLz59XHJcbiAgICA8L1Bvc3RUcmFuc2l0aW9uPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgU2lkZUJhciBmcm9tICcuL3NpZGViYXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRTaWRlQmFyKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZmxleC13cmFwIHB5LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy0yLzMgcHQtMSBweC0wIG1kOiBweC0yXCI+e2NoaWxkcmVufTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTEvMyBweC0wIG1kOiBweC0yXCI+XHJcbiAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiLy8gaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnXHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0IE1ldGEgZnJvbSAnLi4vbWV0YSdcclxuaW1wb3J0IHVzZVN0aWNreSBmcm9tICcuLi8uLi9ob29rcy91c2VTdGlja3knXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBwcmV2aWV3LCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgeyBpc1N0aWNreSwgZWxlbWVudCB9ID0gdXNlU3RpY2t5KClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxNZXRhIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XHJcbiAgICAgICAgey8qPEFsZXJ0IHByZXZpZXc9e3ByZXZpZXd9IC8+Ki99XHJcbiAgICAgICAgPE1lbnUgc3RpY2t5PXtpc1N0aWNreX0gLz5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPG1haW4gcmVmPXtlbGVtZW50fT57Y2hpbGRyZW59PC9tYWluPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVyJ1xyXG5pbXBvcnQgeyB1c2VTaXRlQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvdXNlLXNpdGUnXHJcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zZWFyY2gnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHsgc3RpY2t5IH0pIHtcclxuICBjb25zdCBzaXRlU2V0dGluZ3MgPSB1c2VTaXRlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJnLWFjY2VudC0xIGJvcmRlci1hY2NlbnQtMiBsZzpzdGlja3kgdG9wLTAgei0xMFwiPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZmxleC13cmFwIHB5LTNcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAndy01MiB0cmFuc2l0aW9uLW9wYWNpdHkgZHVyYXRpb24tNDAwIGhpZGRlbiBsZzpibG9jaycsXHJcbiAgICAgICAgICAgICAgc3RpY2t5ID8gJ29wYWNpdHktMScgOiAnb3BhY2l0eS0wJ1xyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMi8zIHNtOnctNDBcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHdpZHRoPXsyMDAwfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXs0NDB9XHJcbiAgICAgICAgICAgICAgICBzcmM9e3NpdGVTZXR0aW5ncz8uc2l0ZUxvZ28uc291cmNlVXJsfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtzaXRlU2V0dGluZ3M/LmdlbmVyYWxTZXR0aW5ncy50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidy04MCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAge3NpdGVTZXR0aW5ncz8ubWVudS5tZW51SXRlbXMubm9kZXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJteC0xIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgJ3ctNTIgdHJhbnNpdGlvbi1vcGFjaXR5IGR1cmF0aW9uLTQwMCBoaWRkZW4gbGc6YmxvY2snLFxyXG4gICAgICAgICAgICAgIHN0aWNreSA/ICdvcGFjaXR5LTEnIDogJ29wYWNpdHktMCdcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZVNpdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dC91c2Utc2l0ZSdcclxuaW1wb3J0IFNpZGVCYXJDYXJkIGZyb20gJy4uL3Bvc3QtY29tcG9uZW50cy9zaWRlYmFyLWNhcmQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFRhZ0Nsb3VkIGZyb20gJy4uL3RhZy1jbG91ZCdcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9zZWFyY2gnXHJcbmltcG9ydCBJbnN0YWdyYW1GZWVkIGZyb20gXCIuLi9pbnN0YWdyYW0tZmVlZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZUJhcigpIHtcclxuICBjb25zdCBzaXRlU2V0dGluZ3MgPSB1c2VTaXRlQ29udGV4dCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci1hY2NlbnQtMiBtZDpzdGlja3kgdG9wLTIwIFwiPlxyXG4gICAgICA8U2lkZUJhckNhcmQgdGl0bGU9XCJBYm91dCBNZVwiPnNvbWUgdGV4dCBoZXJlPC9TaWRlQmFyQ2FyZD5cclxuICAgICAgPFNpZGVCYXJDYXJkIHRpdGxlPVwiSW5zdGFncmFtXCI+XHJcbiAgICAgICAgICA8SW5zdGFncmFtRmVlZCAvPlxyXG4gICAgICA8L1NpZGVCYXJDYXJkPlxyXG4gICAgICA8U2lkZUJhckNhcmQgdGl0bGU9XCJTZWFyY2hcIj5cclxuICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDwvU2lkZUJhckNhcmQ+XHJcbiAgICAgIDxTaWRlQmFyQ2FyZCB0aXRsZT1cIkJyb3dzZSBieSBjYXRlZ29yeVwiPlxyXG4gICAgICAgIHtzaXRlU2V0dGluZ3M/LmNhdGVnb3JpZXM/LmVkZ2VzLm1hcCgoY2F0ZWdvcnkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtjYXRlZ29yeS5ub2RlLmlkfSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2NhdGVnb3J5Lm5vZGUudXJpfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPntjYXRlZ29yeS5ub2RlLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU2lkZUJhckNhcmQ+XHJcbiAgICAgIDxTaWRlQmFyQ2FyZCB0aXRsZT1cIlRhZ3NcIj5cclxuICAgICAgICB7c2l0ZVNldHRpbmdzPy50YWdzICYmIChcclxuICAgICAgICAgIDxUYWdDbG91ZCB0YWdzPXtzaXRlU2V0dGluZ3MudGFnc30gbWluRm9udD17OX0gbWF4Rm9udD17MjJ9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9TaWRlQmFyQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IENNU19OQU1FLCBIT01FX09HX0lNQUdFX1VSTCB9IGZyb20gJy4uL2xpYi9jb25zdGFudHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRhKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcclxuICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgcmVsPVwiaWNvblwiXHJcbiAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXHJcbiAgICAgICAgc2l6ZXM9XCIzMngzMlwiXHJcbiAgICAgICAgaHJlZj1cIi9mYXZpY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJpY29uXCJcclxuICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcclxuICAgICAgICBzaXplcz1cIjE2eDE2XCJcclxuICAgICAgICBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxyXG4gICAgICAvPlxyXG4gICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvZmF2aWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJtYXNrLWljb25cIlxyXG4gICAgICAgIGhyZWY9XCIvZmF2aWNvbi9zYWZhcmktcGlubmVkLXRhYi5zdmdcIlxyXG4gICAgICAgIGNvbG9yPVwiIzAwMDAwMFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiL2Zhdmljb24vZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PVwiIzAwMDAwMFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJtc2FwcGxpY2F0aW9uLWNvbmZpZ1wiIGNvbnRlbnQ9XCIvZmF2aWNvbi9icm93c2VyY29uZmlnLnhtbFwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjMDAwXCIgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiYWx0ZXJuYXRlXCIgdHlwZT1cImFwcGxpY2F0aW9uL3Jzcyt4bWxcIiBocmVmPVwiL2ZlZWQueG1sXCIgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2BBIHN0YXRpY2FsbHkgZ2VuZXJhdGVkIGJsb2cgZXhhbXBsZSB1c2luZyBOZXh0LmpzIGFuZCAke0NNU19OQU1FfS5gfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17SE9NRV9PR19JTUFHRV9VUkx9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyKHsgYXV0aG9yIH0pIHtcclxuICBjb25zdCBuYW1lID0gYXV0aG9yXHJcbiAgICA/IGF1dGhvci5maXJzdE5hbWUgJiYgYXV0aG9yLmxhc3ROYW1lXHJcbiAgICAgID8gYCR7YXV0aG9yLmZpcnN0TmFtZX0gJHthdXRob3IubGFzdE5hbWV9YFxyXG4gICAgICA6IGF1dGhvci5uYW1lXHJcbiAgICA6IG51bGxcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcmVsYXRpdmUgbXItNFwiPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXthdXRob3IuYXZhdGFyLnVybH1cclxuICAgICAgICAgIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsXCJcclxuICAgICAgICAgIGFsdD17bmFtZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZFwiPntuYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dMb2FkaW5nKHsgc3RpY2t5IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbmltYXRlLXB1bHNlIGdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTMyIHJvdy1nYXAtMjAgbWQ6cm93LWdhcC0zMiBtYi0wIG1kOm1iLTMyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHAtMCBtZDpwLTIgYmctZ3JheS0xMDAgaC04MCByb3VuZGVkLW1kXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS00IHAtMCBtZDpwLTIgYmctZ3JheS0xMDAgaC04MCByb3VuZGVkLW1kXCI+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcyh7IGNhdGVnb3JpZXMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+XHJcbiAgICAgIHtjYXRlZ29yaWVzLmVkZ2VzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgY2F0ZWdvcmllcy5lZGdlcy5tYXAoKGNhdGVnb3J5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibWwtMVwiPlxyXG4gICAgICAgICAgICB7Y2F0ZWdvcnkubm9kZS5uYW1lfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPntjYXRlZ29yaWVzLmVkZ2VzLm5vZGUubmFtZX08L3NwYW4+XHJcbiAgICAgICl9XHJcbiAgICA8L3NwYW4+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdmVySW1hZ2UoeyB0aXRsZSwgY292ZXJJbWFnZSwgc2x1ZyB9KSB7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZG9taW5hbnRDb2xvciwgc2V0RG9taW5hbnRDb2xvcl0gPSB1c2VTdGF0ZSgnI0NDQ0NGRicpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGVyZSBpcyBhIHNtYWxsIHBsYWNlaG9sZGVyXHJcbiAgICBjb25zdCBzaXplcyA9IGNvdmVySW1hZ2UubWVkaWFEZXRhaWxzPy5zaXplc1xyXG4gICAgbGV0IHNtYWxsX2ltYWdlXHJcblxyXG4gICAgaWYgKHNpemVzKSB7XHJcbiAgICAgIGNvbnN0IHRlc3QgPSBzaXplcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldi5maWxlU2l6ZSA8IGN1cnIuZmlsZVNpemUgPyBwcmV2IDogY3VyclxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc21hbGxfaW1hZ2UgPSB0ZXN0LnNvdXJjZVVybFxyXG5cclxuICAgICAgLy9mZXRjaCBkb21pbmFudCBjb2xvciBmcm9tIGltYWdlXHJcbiAgICAgIGZldGNoKGAvYXBpL2NvbG9yYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHVybDogc21hbGxfaW1hZ2VcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLnRoZW4oY29sb3IgPT4ge1xyXG4gICAgICAgIHNldERvbWluYW50Q29sb3IoY29sb3IuaGV4KVxyXG5cclxuICAgICAgICAvLyBuZXh0L2ltYWdlIGRvZXNuJ3Qgc3VwcG9ydCBkeW5hbWljIHN0eWxlIHRhZ1xyXG4gICAgICAgIC8vIHRhaWx3aW5kIGRvZXNuJ3Qgc3VwcG9ydCBkeW5hbWljIGNvbG9ycyBhdCBydW50aW1lXHJcbiAgICAgICAgLy8gZmFjZXBhbG0gaGF2ZSB0byByZXNvcnQgdG8gcmVmcyBmb3IgdGhlIHBsYWNlaG9sZGVyIGRvbWluYW50IGNvbG9yIGltYWdlXHJcbiAgICAgICAgY29uc3QgaW1hZ2VUYWcgPSAoYW5jaG9yUmVmLmN1cnJlbnQpLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKVswXTtcclxuICAgICAgICBpbWFnZVRhZy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvci5oZXg7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2UgPSAoXHJcbiAgICA8SW1hZ2VcclxuICAgICAgd2lkdGg9e2NvdmVySW1hZ2U/Lm1lZGlhRGV0YWlscz8ud2lkdGggPz8gMjAwMH1cclxuICAgICAgaGVpZ2h0PXtjb3ZlckltYWdlPy5tZWRpYURldGFpbHM/LmhlaWdodCA/PyAxMDAwfVxyXG4gICAgICBhbHQ9e2BDb3ZlciBJbWFnZSBmb3IgJHt0aXRsZX1gfVxyXG4gICAgICBzcmM9e2NvdmVySW1hZ2U/LnNvdXJjZVVybH1cclxuICAgICAgcGxhY2Vob2xkZXI9XCJlbXB0eVwiXHJcbiAgICAgIG9uTG9hZGluZ0NvbXBsZXRlPXsoKSA9PiBzZXRMb2FkZWQodHJ1ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT17Y24oYGZpbHRlciBzaGFkb3ctc21hbGwgcm91bmRlZC1zbWAsIHtcclxuICAgICAgICAnaG92ZXI6c2hhZG93LW1lZGl1bSB0cmFuc2l0aW9uLXNoYWRvdyBkdXJhdGlvbi0yMDAnOiBzbHVnLFxyXG4gICAgICAgICd1bmJsdXInOiBsb2FkZWQsXHJcbiAgICAgIH0pfVxyXG4gICAgLz5cclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXgtMFwiPlxyXG4gICAgICB7c2x1ZyA/IChcclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17dGl0bGV9IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlXCIgcmVmPXthbmNob3JSZWZ9PlxyXG4gICAgICAgICAgICB7aW1hZ2V9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIGltYWdlXHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZSh7IGRhdGVTdHJpbmcgfSkge1xyXG4gIGNvbnN0IGRhdGUgPSBwYXJzZUlTTyhkYXRlU3RyaW5nKVxyXG4gIHJldHVybiA8dGltZSBkYXRlVGltZT17ZGF0ZVN0cmluZ30+e2Zvcm1hdChkYXRlLCAnTExMTFx0ZCwgeXl5eScpfTwvdGltZT5cclxufVxyXG4iLCJpbXBvcnQgUG9zdFByZXZpZXcgZnJvbSAnLi9wb3N0LXByZXZpZXcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3JlU3Rvcmllcyh7IHBvc3RzLCBzaG93SGVhZGVyIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICAgIHtzaG93SGVhZGVyICYmIChcclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWItOCB0ZXh0LTZ4bCBtZDp0ZXh0LTd4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0XCI+XHJcbiAgICAgICAgICBNb3JlIFN0b3JpZXNcclxuICAgICAgICA8L2gyPlxyXG4gICAgICApfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbWQ6Y29sLWdhcC0xNiBsZzpjb2wtZ2FwLTMyIHJvdy1nYXAtMjAgbWQ6cm93LWdhcC0zMiBtYi0wIG1kOm1iLTMyXCI+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgoeyBub2RlIH0pID0+IChcclxuICAgICAgICAgIDxQb3N0UHJldmlld1xyXG4gICAgICAgICAgICBrZXk9e25vZGUuc2x1Z31cclxuICAgICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XHJcbiAgICAgICAgICAgIGNvdmVySW1hZ2U9e25vZGUuZmVhdHVyZWRJbWFnZT8ubm9kZX1cclxuICAgICAgICAgICAgZGF0ZT17bm9kZS5kYXRlfVxyXG4gICAgICAgICAgICBhdXRob3I9e25vZGUuYXV0aG9yPy5ub2RlfVxyXG4gICAgICAgICAgICBzbHVnPXtub2RlLnNsdWd9XHJcbiAgICAgICAgICAgIGV4Y2VycHQ9e25vZGUuZXhjZXJwdH1cclxuICAgICAgICAgICAgY2F0ZWdvcmllcz17bm9kZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmF0YXInXHJcbmltcG9ydCBEYXRlIGZyb20gJy4vZGF0ZSdcclxuaW1wb3J0IENvdmVySW1hZ2UgZnJvbSAnLi9jb3Zlci1pbWFnZSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuL2NhdGVnb3JpZXMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0UHJldmlldyh7XHJcbiAgdGl0bGUsXHJcbiAgY292ZXJJbWFnZSxcclxuICBkYXRlLFxyXG4gIGV4Y2VycHQsXHJcbiAgYXV0aG9yLFxyXG4gIHNsdWcsXHJcbiAgY2F0ZWdvcmllcyxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQgcC0wIG1kOnAtMlwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWQ6dGV4dC0zeGwgbWItMyBsZWFkaW5nLXNudWcgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Bvc3RzLyR7c2x1Z31gfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmxhY2tcIlxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRpdGxlIH19XHJcbiAgICAgICAgICA+PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9oMz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGRhdGUtdGFncyB0ZXh0LWNlbnRlciBtYi00XCI+XHJcbiAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17ZGF0ZX0gLz5cclxuICAgICAgICA8Q2F0ZWdvcmllcyBjYXRlZ29yaWVzPXtjYXRlZ29yaWVzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y292ZXJJbWFnZSAmJiAoXHJcbiAgICAgICAgICA8Q292ZXJJbWFnZSB0aXRsZT17dGl0bGV9IGNvdmVySW1hZ2U9e2NvdmVySW1hZ2V9IHNsdWc9e3NsdWd9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCBtYi00XCJcclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGV4Y2VycHQgfX1cclxuICAgICAgLz5cclxuICAgICAgey8qPEF2YXRhciBhdXRob3I9e2F1dGhvcn0gLz4qL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0VHJhbnNpdGlvbih7IGNoaWxkcmVuLCBzaG93ID0gZmFsc2UsIGFwcGVhciB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUcmFuc2l0aW9uXHJcbiAgICAgIGFwcGVhcj17YXBwZWFyfVxyXG4gICAgICBzaG93PXtzaG93fVxyXG4gICAgICBlbnRlcj1cInRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi00MDBcIlxyXG4gICAgICBlbnRlckZyb209XCJvcGFjaXR5LTBcIlxyXG4gICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICBsZWF2ZT1cInRyYW5zaXRpb24tb3BhY2l0eSBkdXJhdGlvbi00MDBcIlxyXG4gICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1RyYW5zaXRpb24+XHJcbiAgKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGVCYXJDYXJkKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1hY2NlbnQtMSBib3JkZXItZ3JleS0xMDAgYm9yZGVyIHAtOCBteC0wIG15LTUgc206bXgtNVwiPlxyXG4gICAgICA8aDMgY2xhc3NOYW1lPVwidXBwZXJjYXNlIG1iLTUgYm9yZGVyLWIgdGV4dC14bFwiPnt0aXRsZX08L2gzPlxyXG4gICAgICA8ZGl2PntjaGlsZHJlbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWFyY2hTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBzZWFyY2hRdWVyeSA9IGUudGFyZ2V0LnNlYXJjaC52YWx1ZVxyXG4gICAgcm91dGVyLnB1c2goYC8/cz0ke3NlYXJjaFF1ZXJ5fWApXHJcbiAgICBlLnRhcmdldC5yZXNldCgpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBoYW5kbGVTZWFyY2hTdWJtaXQoZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdyBmbGV4XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZCBwLTJcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHctYXV0byBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciB0ZXh0LWJsdWUtNTAwIHAtMiBob3Zlcjp0ZXh0LWJsdWUtNDAwXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyB0ZXh0LW1haW5QaW5rXCI+c2VhcmNoPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFnQ2xvdWQoeyB0YWdzLCBtaW5Gb250LCBtYXhGb250IH0pIHtcclxuICBjb25zdCBub3JtYWxpemUgPSAodmFsLCBtaW4sIG1heCkgPT4ge1xyXG4gICAgcmV0dXJuICgodmFsIC0gbWluKSAvIChtYXggLSBtaW4pKSAqIChtYXhGb250IC0gbWluRm9udCkgKyBtaW5Gb250XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3VudHMgPSB0YWdzLmVkZ2VzLm1hcCgodGFnKSA9PiB0YWcubm9kZS5jb3VudClcclxuICBjb25zdCBjb3VudE1pbiA9IE1hdGgubWluKC4uLmNvdW50cylcclxuICBjb25zdCBjb3VudE1heCA9IE1hdGgubWF4KC4uLmNvdW50cylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHt0YWdzLmVkZ2VzLm1hcCgodGFnKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2l6ZSA9IG5vcm1hbGl6ZSh0YWcubm9kZS5jb3VudCwgY291bnRNaW4sIGNvdW50TWF4KVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e3RhZy5ub2RlLmlkfSBocmVmPXt0YWcubm9kZS51cml9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZSBpbmxpbmUtYmxvY2tcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtzaXplfXB0YCB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3RhZy5ub2RlLm5hbWV9Jm5ic3A7XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApXHJcbiAgICAgIH0pfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBTaXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVNpdGVDb250ZXh0KCkge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KFNpdGVDb250ZXh0KVxyXG59XHJcbiIsIi8vaHR0cHM6Ly93d3cuaWJyYWhpbWEtbmRhdy5jb20vYmxvZy9idWlsZC1hLXN0aWNreS1uYXYtd2l0aC1yZWFjdC9cclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZnVuY3Rpb24gdXNlU3RpY2t5KCkge1xyXG4gIGNvbnN0IFtpc1N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGVsZW1lbnQgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgd2luZG93LnNjcm9sbFkgPiAyNTAgPyBzZXRTdGlja3kodHJ1ZSkgOiBzZXRTdGlja3koZmFsc2UpXHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHNjcm9sbCBwZXJmb3JtYW5jZSBpc3N1ZVxyXG4gIGNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIHdhaXQgPSAxNSwgaW1tZWRpYXRlID0gdHJ1ZSkgPT4ge1xyXG4gICAgbGV0IHRpbWVPdXRcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGxldCBjb250ZXh0ID0gdGhpcyxcclxuICAgICAgICBhcmdzID0gYXJndW1lbnRzXHJcbiAgICAgIGNvbnN0IGxhdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRpbWVPdXQgPSBudWxsXHJcbiAgICAgICAgaWYgKCFpbW1lZGlhdGUpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lT3V0XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lT3V0KVxyXG4gICAgICB0aW1lT3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdClcclxuICAgICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2UoaGFuZGxlU2Nyb2xsKSlcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiBoYW5kbGVTY3JvbGwpXHJcbiAgICB9XHJcbiAgfSwgW2RlYm91bmNlLCBoYW5kbGVTY3JvbGxdKVxyXG5cclxuICByZXR1cm4geyBpc1N0aWNreSwgZWxlbWVudCB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0aWNreVxyXG4iLCJjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuV09SRFBSRVNTX0FQSV9VUkxcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQVBJKHF1ZXJ5LCB7IHZhcmlhYmxlcyB9ID0ge30pIHtcclxuICBjb25zdCBoZWFkZXJzID0geyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52LldPUkRQUkVTU19BVVRIX1JFRlJFU0hfVE9LRU4pIHtcclxuICAgIGhlYWRlcnNbXHJcbiAgICAgICdBdXRob3JpemF0aW9uJ1xyXG4gICAgXSA9IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5XT1JEUFJFU1NfQVVUSF9SRUZSRVNIX1RPS0VOfWBcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9VUkwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVycyxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgcXVlcnksXHJcbiAgICAgIHZhcmlhYmxlcyxcclxuICAgIH0pLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXHJcbiAgaWYgKGpzb24uZXJyb3JzKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGpzb24uZXJyb3JzKVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggQVBJJylcclxuICB9XHJcbiAgcmV0dXJuIGpzb24uZGF0YVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJldmlld1Bvc3QoaWQsIGlkVHlwZSA9ICdEQVRBQkFTRV9JRCcpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXHJcbiAgICBgXHJcbiAgICBxdWVyeSBQcmV2aWV3UG9zdCgkaWQ6IElEISwgJGlkVHlwZTogUG9zdElkVHlwZSEpIHtcclxuICAgICAgcG9zdChpZDogJGlkLCBpZFR5cGU6ICRpZFR5cGUpIHtcclxuICAgICAgICBkYXRhYmFzZUlkXHJcbiAgICAgICAgc2x1Z1xyXG4gICAgICAgIHN0YXR1c1xyXG4gICAgICB9XHJcbiAgICB9YCxcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkLCBpZFR5cGUgfSxcclxuICAgIH1cclxuICApXHJcbiAgcmV0dXJuIGRhdGEucG9zdFxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmxvZ1NldHRpbmdzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXHJcbiAgICB7XHJcbiAgICAgIHNpdGVMb2dvIHtcclxuICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgfVxyXG4gICAgICBnZW5lcmFsU2V0dGluZ3Mge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgdXJsXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgfVxyXG4gICAgICBtZW51KGlkOiBcIm1haW5cIiwgaWRUeXBlOiBOQU1FKSB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICAgIG1lbnVJdGVtcyB7XHJcbiAgICAgICAgICAgIG5vZGVzIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGRhdGFiYXNlSWQgICAgICBcclxuICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGFncyh3aGVyZToge2hpZGVFbXB0eTogdHJ1ZX0sIGZpcnN0OiAxMDApIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB1cmlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY2F0ZWdvcmllcyh3aGVyZToge2hpZGVFbXB0eTogdHJ1ZX0pIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICB1cmlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgKVxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0c1dpdGhTbHVnKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXHJcbiAgICB7XHJcbiAgICAgIHBvc3RzKGZpcnN0OiAxMDAwMCkge1xyXG4gICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYClcclxuICByZXR1cm4gZGF0YT8ucG9zdHNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENhdGVnb3JpZXMoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKGBcclxuICAgICAge1xyXG4gICAgICAgIGNhdGVnb3JpZXMod2hlcmU6IHtoaWRlRW1wdHk6IHRydWV9KSB7XHJcbiAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgIHVyaVxyXG4gICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIGApXHJcbiAgcmV0dXJuIGRhdGE/LmNhdGVnb3JpZXNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFRhZ3MoKSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKGBcclxuICAgICAge1xyXG4gICAgICAgdGFncyh3aGVyZToge2hpZGVFbXB0eTogdHJ1ZX0sIGZpcnN0OiAxMDApIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBjb3VudFxyXG4gICAgICAgICAgICB1cmlcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB9XHJcbiAgYClcclxuICByZXR1cm4gZGF0YT8udGFnc1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNCeUNhdGVnb3J5KHByZXZpZXcsIGNhdGVnb3J5KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKFxyXG4gICAgYFxyXG4gICAgcXVlcnkgQWxsUG9zdHMge1xyXG4gICAgICBwb3N0cyhmaXJzdDogMjAsIHdoZXJlOiB7b3JkZXJieToge2ZpZWxkOiBEQVRFLCBvcmRlcjogREVTQ30sIGNhdGVnb3J5TmFtZTogXCIke2NhdGVnb3J5fVwifSkge1xyXG4gICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgZGF0ZVxyXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICAgICAgbWVkaWFEZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICAgICAgICAgIHNpemVzIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgICAgdXJpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF1dGhvciB7XHJcbiAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICBhdmF0YXIge1xyXG4gICAgICAgICAgICAgICAgICB1cmxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBvbmx5RW5hYmxlZDogIXByZXZpZXcsXHJcbiAgICAgICAgcHJldmlldyxcclxuICAgICAgfSxcclxuICAgIH1cclxuICApXHJcblxyXG4gIHJldHVybiBkYXRhPy5wb3N0c1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNCeVRhZyhwcmV2aWV3LCB0YWcpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXHJcbiAgICBgXHJcbiAgICBxdWVyeSBBbGxQb3N0cyB7XHJcbiAgcG9zdHMoZmlyc3Q6IDIwLCB3aGVyZToge29yZGVyYnk6IHtmaWVsZDogREFURSwgb3JkZXI6IERFU0N9LCB0YWc6IFwiJHt0YWd9XCJ9KSB7XHJcbiAgICBlZGdlcyB7XHJcbiAgICAgIG5vZGUge1xyXG4gICAgICAgIHRpdGxlXHJcbiAgICAgICAgZXhjZXJwdFxyXG4gICAgICAgIHNsdWdcclxuICAgICAgICBkYXRlXHJcbiAgICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgIG1lZGlhRGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICBzaXplcyB7XHJcbiAgICAgICAgICAgICAgICBmaWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGVnb3JpZXMge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgdXJpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXV0aG9yIHtcclxuICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICBsYXN0TmFtZVxyXG4gICAgICAgICAgICBhdmF0YXIge1xyXG4gICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiAgYCxcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgb25seUVuYWJsZWQ6ICFwcmV2aWV3LFxyXG4gICAgICAgIHByZXZpZXcsXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKVxyXG5cclxuICByZXR1cm4gZGF0YT8ucG9zdHNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaFBvc3RzKHNlYXJjaCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShcclxuICAgIGBcclxuICAgIHF1ZXJ5IEFsbFBvc3RzIHtcclxuICAgICAgcG9zdHMoZmlyc3Q6IDIwLCB3aGVyZToge29yZGVyYnk6IHtmaWVsZDogREFURSwgb3JkZXI6IERFU0N9LCBzZWFyY2g6IFwiJHtzZWFyY2h9XCJ9KSB7XHJcbiAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICBtZWRpYURldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgc2l6ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXV0aG9yIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICAgIHVyaVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBgXHJcbiAgKVxyXG5cclxuICByZXR1cm4gZGF0YT8ucG9zdHNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbFBvc3RzRm9ySG9tZShwcmV2aWV3KSB7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoQVBJKFxyXG4gICAgYFxyXG4gICAgcXVlcnkgQWxsUG9zdHMge1xyXG4gICAgICBwb3N0cyhmaXJzdDogMjAsIHdoZXJlOiB7b3JkZXJieToge2ZpZWxkOiBEQVRFLCBvcmRlcjogREVTQ319KSB7XHJcbiAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIGV4Y2VycHRcclxuICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICBkYXRlXHJcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICBtZWRpYURldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgc2l6ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXV0aG9yIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgICAgICAgICAgbGFzdE5hbWVcclxuICAgICAgICAgICAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgICAgICAgICAgIHVybFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICAgICAgICAgIHVyaVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIGAsXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIG9ubHlFbmFibGVkOiAhcHJldmlldyxcclxuICAgICAgICBwcmV2aWV3LFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgcmV0dXJuIGRhdGE/LnBvc3RzXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQb3N0QW5kTW9yZVBvc3RzKHNsdWcsIHByZXZpZXcsIHByZXZpZXdEYXRhKSB7XHJcbiAgY29uc3QgcG9zdFByZXZpZXcgPSBwcmV2aWV3ICYmIHByZXZpZXdEYXRhPy5wb3N0XHJcbiAgLy8gVGhlIHNsdWcgbWF5IGJlIHRoZSBpZCBvZiBhbiB1bnB1Ymxpc2hlZCBwb3N0XHJcbiAgY29uc3QgaXNJZCA9IE51bWJlci5pc0ludGVnZXIoTnVtYmVyKHNsdWcpKVxyXG4gIGNvbnN0IGlzU2FtZVBvc3QgPSBpc0lkXHJcbiAgICA/IE51bWJlcihzbHVnKSA9PT0gcG9zdFByZXZpZXcuaWRcclxuICAgIDogc2x1ZyA9PT0gcG9zdFByZXZpZXcuc2x1Z1xyXG4gIGNvbnN0IGlzRHJhZnQgPSBpc1NhbWVQb3N0ICYmIHBvc3RQcmV2aWV3Py5zdGF0dXMgPT09ICdkcmFmdCdcclxuICBjb25zdCBpc1JldmlzaW9uID0gaXNTYW1lUG9zdCAmJiBwb3N0UHJldmlldz8uc3RhdHVzID09PSAncHVibGlzaCdcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoXHJcbiAgICBgXHJcbiAgICBmcmFnbWVudCBBdXRob3JGaWVsZHMgb24gVXNlciB7XHJcbiAgICAgIG5hbWVcclxuICAgICAgZmlyc3ROYW1lXHJcbiAgICAgIGxhc3ROYW1lXHJcbiAgICAgIGF2YXRhciB7XHJcbiAgICAgICAgdXJsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGZyYWdtZW50IFBvc3RGaWVsZHMgb24gUG9zdCB7XHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGV4Y2VycHRcclxuICAgICAgc2x1Z1xyXG4gICAgICBkYXRlXHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICBtZWRpYURldGFpbHMge1xyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgc2l6ZXMge1xyXG4gICAgICAgICAgICAgIGZpbGVTaXplXHJcbiAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgYXV0aG9yIHtcclxuICAgICAgICBub2RlIHtcclxuICAgICAgICAgIC4uLkF1dGhvckZpZWxkc1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXRlZ29yaWVzIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0YWdzIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcXVlcnkgUG9zdEJ5U2x1ZygkaWQ6IElEISwgJGlkVHlwZTogUG9zdElkVHlwZSEpIHtcclxuICAgICAgcG9zdChpZDogJGlkLCBpZFR5cGU6ICRpZFR5cGUpIHtcclxuICAgICAgICAuLi5Qb3N0RmllbGRzXHJcbiAgICAgICAgY29udGVudFxyXG4gICAgICAgICR7XHJcbiAgICAgICAgICAvLyBPbmx5IHNvbWUgb2YgdGhlIGZpZWxkcyBvZiBhIHJldmlzaW9uIGFyZSBjb25zaWRlcmVkIGFzIHRoZXJlIGFyZSBzb21lIGluY29uc2lzdGVuY2llc1xyXG4gICAgICAgICAgaXNSZXZpc2lvblxyXG4gICAgICAgICAgICA/IGBcclxuICAgICAgICByZXZpc2lvbnMoZmlyc3Q6IDEsIHdoZXJlOiB7IG9yZGVyYnk6IHsgZmllbGQ6IE1PRElGSUVELCBvcmRlcjogREVTQyB9IH0pIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICBleGNlcnB0XHJcbiAgICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICAgIGF1dGhvciB7XHJcbiAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgLi4uQXV0aG9yRmllbGRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGBcclxuICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBwb3N0cyhmaXJzdDogMywgd2hlcmU6IHsgb3JkZXJieTogeyBmaWVsZDogREFURSwgb3JkZXI6IERFU0MgfSB9KSB7XHJcbiAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgIC4uLlBvc3RGaWVsZHNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBgLFxyXG4gICAge1xyXG4gICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICBpZDogaXNEcmFmdCA/IHBvc3RQcmV2aWV3LmlkIDogc2x1ZyxcclxuICAgICAgICBpZFR5cGU6IGlzRHJhZnQgPyAnREFUQUJBU0VfSUQnIDogJ1NMVUcnLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIClcclxuXHJcbiAgLy8gRHJhZnQgcG9zdHMgbWF5IG5vdCBoYXZlIGFuIHNsdWdcclxuICBpZiAoaXNEcmFmdCkgZGF0YS5wb3N0LnNsdWcgPSBwb3N0UHJldmlldy5pZFxyXG4gIC8vIEFwcGx5IGEgcmV2aXNpb24gKGNoYW5nZXMgaW4gYSBwdWJsaXNoZWQgcG9zdClcclxuICBpZiAoaXNSZXZpc2lvbiAmJiBkYXRhLnBvc3QucmV2aXNpb25zKSB7XHJcbiAgICBjb25zdCByZXZpc2lvbiA9IGRhdGEucG9zdC5yZXZpc2lvbnMuZWRnZXNbMF0/Lm5vZGVcclxuXHJcbiAgICBpZiAocmV2aXNpb24pIE9iamVjdC5hc3NpZ24oZGF0YS5wb3N0LCByZXZpc2lvbilcclxuICAgIGRlbGV0ZSBkYXRhLnBvc3QucmV2aXNpb25zXHJcbiAgfVxyXG5cclxuICAvLyBGaWx0ZXIgb3V0IHRoZSBtYWluIHBvc3RcclxuICBkYXRhLnBvc3RzLmVkZ2VzID0gZGF0YS5wb3N0cy5lZGdlcy5maWx0ZXIoKHsgbm9kZSB9KSA9PiBub2RlLnNsdWcgIT09IHNsdWcpXHJcbiAgLy8gSWYgdGhlcmUgYXJlIHN0aWxsIDMgcG9zdHMsIHJlbW92ZSB0aGUgbGFzdCBvbmVcclxuICBpZiAoZGF0YS5wb3N0cy5lZGdlcy5sZW5ndGggPiAyKSBkYXRhLnBvc3RzLmVkZ2VzLnBvcCgpXHJcblxyXG4gIHJldHVybiBkYXRhXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IEVYQU1QTEVfUEFUSCA9ICdjbXMtd29yZHByZXNzJ1xyXG5leHBvcnQgY29uc3QgQ01TX05BTUUgPSAnV29yZFByZXNzJ1xyXG5leHBvcnQgY29uc3QgQ01TX1VSTCA9ICdodHRwczovL3dvcmRwcmVzcy5vcmcnXHJcbmV4cG9ydCBjb25zdCBIT01FX09HX0lNQUdFX1VSTCA9XHJcbiAgJ2h0dHBzOi8vb2ctaW1hZ2UudmVyY2VsLmFwcC9OZXh0LmpzJTIwQmxvZyUyMEV4YW1wbGUlMjB3aXRoJTIwKipXb3JkUHJlc3MqKi5wbmc/dGhlbWU9bGlnaHQmbWQ9MSZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy52ZXJjZWwuY29tJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2ZyZpbWFnZXM9ZGF0YSUzQWltYWdlJTJGc3ZnJTJCeG1sJTJDJTI1M0MlMjUzRnhtbCt2ZXJzaW9uJTNEJTI3MS4wJTI3K2VuY29kaW5nJTNEJTI3VVRGLTglMjclMjUzRiUyNTNFJTI1M0NzdmcrcHJlc2VydmVBc3BlY3RSYXRpbyUzRCUyN3hNaWRZTWlkJTI3K3ZlcnNpb24lM0QlMjcxLjElMjcrdmlld0JveCUzRCUyNzArMCsyNTYrMjU1JTI3K3htbG5zJTNEJTI3aHR0cCUzQSUyRiUyRnd3dy53My5vcmclMkYyMDAwJTJGc3ZnJTI3JTI1M0UlMjUzQ2crZmlsbCUzRCUyNyUyNTIzNDY0MzQyJTI3JTI1M0UlMjUzQ3BhdGgrZCUzRCUyN20xOC4xMjQrMTI3LjVjMCs0My4yOTUrMjUuMTYxKzgwLjcxMSs2MS42NDYrOTguNDQxbC01Mi4xNzYtMTQyLjk2Yy02LjA2OTErMTMuNjAzLTkuNDY5OSsyOC42NTctOS40Njk5KzQ0LjUxNXptMTgzLjIyLTUuNTE5NmMwLTEzLjUxOC00Ljg1NTctMjIuODgtOS4wMjA0LTMwLjE2Ni01LjU0NDYtOS4wMS0xMC43NDItMTYuNjQtMTAuNzQyLTI1LjY1KzAtMTAuMDU1KzcuNjI1OS0xOS40MTQrMTguMzY3LTE5LjQxNCswLjQ4NDk0KzArMC45NDQ5MSswLjA2MDM1OCsxLjQxNzQrMC4wODc0MTUtMTkuNDYtMTcuODI4LTQ1LjM4Ny0yOC43MTQtNzMuODYzLTI4LjcxNC0zOC4yMTMrMC03MS44MzIrMTkuNjA2LTkxLjM5KzQ5LjMwMisyLjU2NjIrMC4wNzcwMDgrNC45ODQ3KzAuMTMxMTIrNy4wMzkrMC4xMzExMisxMS40NDErMCsyOS4xNTEtMS4zODgyKzI5LjE1MS0xLjM4ODIrNS44OTYzLTAuMzQ3NTgrNi41OTE1KzguMzEyNyswLjcwMTQrOS4wMSswKzAtNS45MjU1KzAuNjk3MjQtMTIuNTE5KzEuMDQyN2wzOS44MzIrMTE4LjQ4KzIzLjkzNy03MS43OS0xNy4wNDItNDYuNjkyYy01Ljg5MDEtMC4zNDU1LTExLjQ3LTEuMDQyNy0xMS40Ny0xLjA0MjctNS44OTQyLTAuMzQ1NS01LjIwMzMtOS4zNTc1KzAuNjkwOTktOS4wMSswKzArMTguMDY0KzEuMzg4MisyOC44MTErMS4zODgyKzExLjQzOSswKzI5LjE1MS0xLjM4ODIrMjkuMTUxLTEuMzg4Mis1LjkwMDUtMC4zNDc1OCs2LjU5MzYrOC4zMTI3KzAuNzAxNCs5LjAxKzArMC01LjkzOCswLjY5NzI0LTEyLjUxOSsxLjA0MjdsMzkuNTI4KzExNy41OCsxMC45MS0zNi40NThjNC43Mjg3LTE1LjEyOSs4LjMyNzMtMjUuOTk1KzguMzI3My0zNS4zNTl6bS03MS45MjErMTUuMDg3bC0zMi44MTgrOTUuMzYzYzkuNzk4OCsyLjg4MDUrMjAuMTYyKzQuNDU2MSszMC44OTkrNC40NTYxKzEyLjczOCswKzI0Ljk1My0yLjIwMiszNi4zMjMtNi4yMDAyLTAuMjkzNDYtMC40NjgyOS0wLjU1OTg3LTAuOTY1NzItMC43Nzg0MS0xLjUwNjlsLTMzLjYyNS05Mi4xMTJ6bTk0LjA1OC02Mi4wNDZjMC40NzAzNyszLjQ4NDErMC43MzY3OCs3LjIyNDIrMC43MzY3OCsxMS4yNDcrMCsxMS4xLTIuMDczKzIzLjU3Ny04LjMxNjkrMzkuMTc4bC0zMy40MTErOTYuNTk5YzMyLjUxOC0xOC45NjMrNTQuMzkxLTU0LjE5Mys1NC4zOTEtOTQuNTQ1KzAuMDAyMDgxLTE5LjAxNy00Ljg1NTctMzYuODk5LTEzLjM5OS01Mi40OHptLTk1Ljk3Ny03NS4wMjNjLTcwLjMwNCswLTEyNy41KzU3LjE5Ni0xMjcuNSsxMjcuNSswKzcwLjMxMys1Ny4yKzEyNy41MSsxMjcuNSsxMjcuNTErNzAuMzAyKzArMTI3LjUxLTU3LjE5NCsxMjcuNTEtMTI3LjUxLTAuMDAyMDgyLTcwLjMwNC01Ny4yMDktMTI3LjUtMTI3LjUxLTEyNy41em0wKzI0OS4xNmMtNjcuMDgrMC0xMjEuNjYtNTQuNTc4LTEyMS42Ni0xMjEuNjYrMC02Ny4wOCs1NC41NzYtMTIxLjY1KzEyMS42Ni0xMjEuNjUrNjcuMDc4KzArMTIxLjY1KzU0LjU3NCsxMjEuNjUrMTIxLjY1KzArNjcuMDg0LTU0LjU3NCsxMjEuNjYtMTIxLjY1KzEyMS42NnolMjclMkYlMjUzRSUyNTNDJTJGZyUyNTNFJTI1M0MlMkZzdmclMjUzRSdcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsImltcG9ydCB7IGdldEFsbFBvc3RzRm9ySG9tZSwgZ2V0QmxvZ1NldHRpbmdzIH0gZnJvbSAnLi4vbGliL2FwaSdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRhaW5lcidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnXHJcblxyXG5pbXBvcnQgTGF5b3V0U2lkZUJhciBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQtc2lkZWJhcidcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhvbWVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvaG9tZS1sYXlvdXQnXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoeyBhbGxQb3N0czogeyBlZGdlcyB9LCBwcmV2aWV3LCBzZXR0aW5ncyB9KSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbc2VhcmNoUG9zdHMsIHNldFNlYXJjaFBvc3RzXSA9IHVzZVN0YXRlKHsgZWRnZXM6IFtdIH0pXHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3Qgc2VhcmNoUXVlcnkgPSByb3V0ZXI/LnF1ZXJ5Py5zXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBpZiB5b3UncmUgb24gdGhlIGhvbWUgcGFnZSwgYnV0IHBlcmZvcm1pbmcgc2VhcmNoXHJcbiAgICBpZiAoc2VhcmNoUXVlcnkpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldFNlYXJjaFBvc3RzKCkge1xyXG4gICAgICAgIHNldFNlYXJjaFBvc3RzKHsgZWRnZXM6IFtdIH0pXHJcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBmZXRjaChgL2FwaS9zZWFyY2g/cXVlcnk9JHtzZWFyY2hRdWVyeX1gKVxyXG4gICAgICAgIGNvbnN0IHBvc3RzSlNPTiA9IGF3YWl0IHBvc3RzLmpzb24oKVxyXG4gICAgICAgIHNldFNlYXJjaFBvc3RzKHBvc3RzSlNPTilcclxuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdldFNlYXJjaFBvc3RzKClcclxuICAgIH1cclxuICB9LCBbc2VhcmNoUXVlcnldKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExheW91dCBwcmV2aWV3PXtwcmV2aWV3fT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPExheW91dFNpZGVCYXI+XHJcbiAgICAgICAgICAgIDxIb21lTGF5b3V0XHJcbiAgICAgICAgICAgICAgbG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtzZWFyY2hRdWVyeX1cclxuICAgICAgICAgICAgICBwb3N0cz17c2VhcmNoUXVlcnkgPyBzZWFyY2hQb3N0cyA6IGVkZ2VzfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9MYXlvdXRTaWRlQmFyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcHJldmlldyA9IGZhbHNlIH0pIHtcclxuICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IGdldEJsb2dTZXR0aW5ncygpXHJcbiAgY29uc3QgYWxsUG9zdHMgPSBhd2FpdCBnZXRBbGxQb3N0c0ZvckhvbWUocHJldmlldylcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGFsbFBvc3RzLCBwcmV2aWV3LCBzZXR0aW5ncyB9LFxyXG4gIH1cclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlYWRsZXNzdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJMaW5rIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkluc3RhZ3JhbUZlZWQiLCJwb3N0cyIsInNldFBvc3RzIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsImZldGNoIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJpIiwic2hvcnRjb2RlIiwiczNfdXJsIiwiRVhBTVBMRV9QQVRIIiwiRm9vdGVyIiwidXNlU2l0ZUNvbnRleHQiLCJIZWFkZXIiLCJlbGVtZW50Iiwic2l0ZVNldHRpbmdzIiwic2l0ZUxvZ28iLCJzb3VyY2VVcmwiLCJnZW5lcmFsU2V0dGluZ3MiLCJ0aXRsZSIsIk1vcmVTdG9yaWVzIiwiUG9zdFByZXZpZXciLCJCbG9nTG9hZGluZyIsIlBvc3RUcmFuc2l0aW9uIiwiSG9tZUxheW91dCIsInNlYXJjaFF1ZXJ5IiwiZWRnZXMiLCJoZXJvUG9zdCIsIm5vZGUiLCJtb3JlUG9zdHMiLCJzbGljZSIsImZlYXR1cmVkSW1hZ2UiLCJkYXRlIiwiYXV0aG9yIiwic2x1ZyIsImV4Y2VycHQiLCJjYXRlZ29yaWVzIiwibGVuZ3RoIiwiU2lkZUJhciIsIkxheW91dFNpZGVCYXIiLCJNZW51IiwiTWV0YSIsInVzZVN0aWNreSIsIkxheW91dCIsInByZXZpZXciLCJpc1N0aWNreSIsImNuIiwiU2VhcmNoIiwic3RpY2t5IiwibWVudSIsIm1lbnVJdGVtcyIsIm5vZGVzIiwiaXRlbSIsImxhYmVsIiwiaWQiLCJTaWRlQmFyQ2FyZCIsIlRhZ0Nsb3VkIiwiY2F0ZWdvcnkiLCJ1cmkiLCJuYW1lIiwidGFncyIsIkhlYWQiLCJDTVNfTkFNRSIsIkhPTUVfT0dfSU1BR0VfVVJMIiwiQXZhdGFyIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhdmF0YXIiLCJ1cmwiLCJDYXRlZ29yaWVzIiwiaW5kZXgiLCJ1c2VSZWYiLCJDb3ZlckltYWdlIiwiY292ZXJJbWFnZSIsImFuY2hvclJlZiIsImxvYWRlZCIsInNldExvYWRlZCIsImRvbWluYW50Q29sb3IiLCJzZXREb21pbmFudENvbG9yIiwic2l6ZXMiLCJtZWRpYURldGFpbHMiLCJzbWFsbF9pbWFnZSIsInRlc3QiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsImZpbGVTaXplIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzIiwiY29sb3IiLCJoZXgiLCJpbWFnZVRhZyIsImN1cnJlbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInBhcnNlSVNPIiwiZm9ybWF0IiwiRGF0ZSIsImRhdGVTdHJpbmciLCJzaG93SGVhZGVyIiwiX19odG1sIiwiVHJhbnNpdGlvbiIsInNob3ciLCJhcHBlYXIiLCJ1c2VSb3V0ZXIiLCJyb3V0ZXIiLCJoYW5kbGVTZWFyY2hTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJzZWFyY2giLCJ2YWx1ZSIsInB1c2giLCJyZXNldCIsIm1pbkZvbnQiLCJtYXhGb250Iiwibm9ybWFsaXplIiwidmFsIiwibWluIiwibWF4IiwiY291bnRzIiwidGFnIiwiY291bnQiLCJjb3VudE1pbiIsIk1hdGgiLCJjb3VudE1heCIsInNpemUiLCJmb250U2l6ZSIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiU2l0ZUNvbnRleHQiLCJzZXRTdGlja3kiLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsImltbWVkaWF0ZSIsInRpbWVPdXQiLCJjb250ZXh0IiwiYXJncyIsImFyZ3VtZW50cyIsImxhdGVyIiwiYXBwbHkiLCJjYWxsTm93IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJXT1JEUFJFU1NfQVBJX1VSTCIsImZldGNoQVBJIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiV09SRFBSRVNTX0FVVEhfUkVGUkVTSF9UT0tFTiIsImVycm9ycyIsImdldFByZXZpZXdQb3N0IiwiaWRUeXBlIiwiZ2V0QmxvZ1NldHRpbmdzIiwiZ2V0QWxsUG9zdHNXaXRoU2x1ZyIsImdldEFsbENhdGVnb3JpZXMiLCJnZXRBbGxUYWdzIiwiZ2V0QWxsUG9zdHNCeUNhdGVnb3J5Iiwib25seUVuYWJsZWQiLCJnZXRBbGxQb3N0c0J5VGFnIiwiZ2V0U2VhcmNoUG9zdHMiLCJnZXRBbGxQb3N0c0ZvckhvbWUiLCJnZXRQb3N0QW5kTW9yZVBvc3RzIiwicHJldmlld0RhdGEiLCJwb3N0UHJldmlldyIsImlzSWQiLCJOdW1iZXIiLCJpc0ludGVnZXIiLCJpc1NhbWVQb3N0IiwiaXNEcmFmdCIsInN0YXR1cyIsImlzUmV2aXNpb24iLCJyZXZpc2lvbnMiLCJyZXZpc2lvbiIsIk9iamVjdCIsImFzc2lnbiIsImZpbHRlciIsInBvcCIsIkNNU19VUkwiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZm9yRWFjaCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwiaW5kZXhPZiIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwieCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsImdldCIsInJvb3QiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsInBsYWNlaG9sZGVyIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRJbWFnZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImRpc3BsYXkiLCJ3YXJuIiwicG9zaXRpb24iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJib3JkZXIiLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiZXJyIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJfcm91dGVyIiwiX3JvdXRlcjEiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUmVmIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwidHlwZSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJub3ciLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJmdXR1cmUiLCJyZXNvbHZlciIsInByb20iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNjcmlwdCIsInJlamVjdCIsImRldkJ1aWxkUHJvbWlzZSIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJtcyIsImNhbmNlbGxlZCIsInIiLCJfX0JVSUxEX01BTklGRVNUIiwib25CdWlsZE1hbmlmZXN0IiwiX19CVUlMRF9NQU5JRkVTVF9DQiIsImdldEZpbGVzRm9yUm91dGUiLCJhc3NldFByZWZpeCIsInJvdXRlIiwic2NyaXB0cyIsImVuY29kZVVSSSIsImNzcyIsIm1hbmlmZXN0IiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJyb3V0ZUZpbGVzUHJvbWlzZSIsImVudHJ5cG9pbnQiLCJzdHlsZXMiLCJmaW5hbGx5IiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIl93aXRoUm91dGVyIiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlckNvbnRleHQiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsImRldGVjdGVkRG9tYWluIiwiaHR0cCIsImRvbWFpbiIsInBhdGhuYW1lIiwicGF0aExvd2VyIiwidG9Mb3dlckNhc2UiLCJsb2NhbGVMb3dlciIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwibm90Rm91bmQiLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsIlJvdXRlciIsImNvbnN0cnVjdG9yIiwicGF0aG5hbWUxIiwicXVlcnkxIiwiYXMxIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJDb21wb25lbnQiLCJDb21wb25lbnQxIiwiZXJyMSIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJzZGMiLCJzZHIiLCJfaWR4Iiwib25Qb3BTdGF0ZSIsInN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJfX04iLCJmb3JjZWRTY3JvbGwiLCJpZHgiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsIl9zaG91bGRSZXNvbHZlSHJlZiIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyIsIkluZGV4IiwiYWxsUG9zdHMiLCJzZXR0aW5ncyIsInNlYXJjaFBvc3RzIiwic2V0U2VhcmNoUG9zdHMiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJwb3N0c0pTT04iLCJnZXRTdGF0aWNQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=