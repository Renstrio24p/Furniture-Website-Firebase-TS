"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkstandalone_typescript"] = self["webpackChunkstandalone_typescript"] || []).push([["main~src_components_F"],{

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\nfunction Footer(DOM) {\n    DOM.innerHTML = (`\n        <p>Made and Refactor by. Waren</p>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/Footer.ts?");

/***/ }),

/***/ "./src/components/Header.ts":
/*!**********************************!*\
  !*** ./src/components/Header.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/components/styles.ts\");\n\nfunction Header(DOM) {\n    DOM.innerHTML = `\n        <h1 class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['header-heading']}'><span>premium </span>quality</h1>\n    `;\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/Header.ts?");

/***/ }),

/***/ "./src/components/Navbar.ts":
/*!**********************************!*\
  !*** ./src/components/Navbar.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/components/styles.ts\");\n\nfunction Navbar(DOM) {\n    DOM.innerHTML = (`\n        <ul class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['links-container']}'>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/home' id='home' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link} ${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.active}'>Home</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/products' id='products' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Products</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/about' id='about' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>About</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/contact' id='contact' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Contact</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/search' id='search' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Search</a></li>\n        </ul>\n        <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['user-interactions']}'>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.cart}'>\n                <img src='images/cart-white.png' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['cart-icon']}' alt=\"cart icon\">\n                <span class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['cart-item-count']}'>80</span>\n            </div>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.user}'>\n                <a href='#/login'>\n                    <img src='images/user-white.png' id='login' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['user-icon']}' alt='user image'>\n                </a>\n            </div>\n        </div>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/Navbar.ts?");

/***/ }),

/***/ "./src/components/functions/home.ts":
/*!******************************************!*\
  !*** ./src/components/functions/home.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home_Function)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/components/styles.ts\");\n\nfunction Home_Function() {\n    const navbar = document.querySelector(`.${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.navbar}`);\n    window.addEventListener('scroll', () => {\n        if (scrollY >= 270) {\n            navbar?.classList.add(_styles__WEBPACK_IMPORTED_MODULE_0__.styles.bg);\n        }\n        else {\n            navbar?.classList.remove(_styles__WEBPACK_IMPORTED_MODULE_0__.styles.bg);\n        }\n    });\n    const CollageImages = Array.from(document.querySelectorAll(`.${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['collage-img']}`));\n    CollageImages.forEach((item, i) => {\n        const originalZIndex = item.style.zIndex;\n        item.addEventListener('mouseover', () => {\n            CollageImages.forEach((image, index) => {\n                if (index !== i) {\n                    image.style.filter = 'blur(10px)';\n                    image.style.zIndex = '1';\n                }\n            });\n            item.style.zIndex = '2';\n            item.style.filter = '';\n        });\n        item.addEventListener('mouseleave', () => {\n            CollageImages.forEach((image) => {\n                image.style.filter = '';\n                image.style.zIndex = originalZIndex;\n            });\n        });\n    });\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/functions/home.ts?");

/***/ }),

/***/ "./src/components/functions/product.ts":
/*!*********************************************!*\
  !*** ./src/components/functions/product.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductFunction)\n/* harmony export */ });\n/* harmony import */ var _assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sass/modules/product.module.scss */ \"./src/assets/sass/modules/product.module.scss\");\n\nfunction ProductFunction() {\n    let ratingStarInput = document.querySelectorAll(`.${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}`);\n    Array.from(ratingStarInput).map((star, index) => {\n        star.addEventListener('click', () => {\n            for (let i = 0; i < 5; i++) {\n                if (i <= index) {\n                    ratingStarInput[i].src = `images/fill star.png`;\n                }\n                else {\n                    ratingStarInput[i].src = `images/no fill star.png`;\n                }\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/functions/product.ts?");

/***/ })

}]);