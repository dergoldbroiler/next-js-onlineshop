exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 3772:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9554))

/***/ }),

/***/ 4499:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 5958, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8950, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2513, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1551, 23))

/***/ }),

/***/ 1347:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__  */ const { createProxy  } = __webpack_require__(1399);
module.exports = createProxy("/Users/bjornzschernack/Documents/Apps/Next-Onlineshop/onlineshop/app/header/header.tsx");


/***/ }),

/***/ 7471:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   "metadata": () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4458);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2817);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9890);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1347);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_header__WEBPACK_IMPORTED_MODULE_3__);




const metadata = {
    title: "Onlineshop with NextJS",
    description: "Generated by Bjoern Zschernack and create next app"
};
function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_header_header__WEBPACK_IMPORTED_MODULE_3___default()), {}),
                    children
                ]
            })
        })
    });
}


/***/ }),

/***/ 808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"url":"/_next/static/media/metadata/favicon.603d046c.ico","type":"image/x-icon","sizes":"any"});

/***/ }),

/***/ 9554:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./app/shared/hamburgermenu.tsx

const Hamburgermenu = ({ handleNavigationLayer  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "hamburgermenu",
        onClick: handleNavigationLayer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                type: "checkbox",
                id: "hamburg"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "hamburg",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "line"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "line"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const hamburgermenu = (Hamburgermenu);

// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 201 modules
var motion = __webpack_require__(7024);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./app/header/menu.tsx


const Menu = ({ handleMenuItemClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: (e)=>handleMenuItemClick("home"),
                        children: "Home"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/products",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: (e)=>handleMenuItemClick("products"),
                        children: "Products"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const menu = (Menu);

;// CONCATENATED MODULE: ./app/header/navigation.tsx



const Navigation = ({ open , handleMenuItemClick  })=>{
    if (open) {
        return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.div */.E.div, {
            id: "navlayer",
            animate: {
                left: "0%"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(menu, {
                handleMenuItemClick: handleMenuItemClick
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(motion/* motion.div */.E.div, {
        id: "navlayer",
        animate: {
            left: "-100%"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(menu, {
            handleMenuItemClick: handleMenuItemClick
        })
    });
};
/* harmony default export */ const navigation = (Navigation);

;// CONCATENATED MODULE: ./app/header/header.tsx




const Header = ()=>{
    const [nav_open, setNav] = (0,react_.useState)(false);
    const [current_page, setCurrentPage] = (0,react_.useState)("home");
    const handleNavigationLayer = ()=>{
        nav_open ? setNav(false) : setNav(true);
    };
    const handleMenuItemClick = (page)=>{
        setCurrentPage(page);
        handleNavigationLayer();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                open: nav_open,
                handleMenuItemClick: handleMenuItemClick
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-100 d-flex justify-content-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(hamburgermenu, {
                            handleNavigationLayer: handleNavigationLayer
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Logo"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 2817:
/***/ (() => {



/***/ }),

/***/ 9890:
/***/ (() => {



/***/ })

};
;