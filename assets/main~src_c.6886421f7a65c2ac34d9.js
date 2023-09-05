/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/components/styles.ts\");\n\nfunction Navbar(DOM) {\n    DOM.innerHTML = (`\n        <ul class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['links-container']}'>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/home' id='home' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link} ${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.active}'>Home</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/products' id='products' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Products</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/about' id='about' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>About</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/contact' id='contact' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Contact</a></li>\n            <li class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['link-item']}'><a href='#/search' id='search' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.link}'>Search</a></li>\n        </ul>\n        <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['user-interactions']}'>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.cart}'>\n                <img src='images/cart.png' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['cart-icon']}' alt=\"cart icon\">\n                <span class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['cart-item-count']}'>80</span>\n            </div>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.user}'>\n                <img src='images/user.png' class='${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['user-icon']}' alt='user image'>\n            </div>\n        </div>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/Navbar.ts?");

/***/ }),

/***/ "./src/components/functions/home.ts":
/*!******************************************!*\
  !*** ./src/components/functions/home.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home_Function)\n/* harmony export */ });\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles */ \"./src/components/styles.ts\");\n\nfunction Home_Function() {\n    const navbar = document.querySelector(`.${_styles__WEBPACK_IMPORTED_MODULE_0__.styles.navbar}`);\n    window.addEventListener('scroll', () => {\n        if (scrollY >= 270) {\n            navbar?.classList.add(_styles__WEBPACK_IMPORTED_MODULE_0__.styles.bg);\n        }\n        else {\n            navbar?.classList.remove(_styles__WEBPACK_IMPORTED_MODULE_0__.styles.bg);\n        }\n    });\n    const CollageImages = Array.from(document.querySelectorAll(`.${_styles__WEBPACK_IMPORTED_MODULE_0__.styles['collage-img']}`));\n    CollageImages.forEach((item, i) => {\n        const originalZIndex = item.style.zIndex;\n        item.addEventListener('mouseover', () => {\n            CollageImages.forEach((image, index) => {\n                if (index !== i) {\n                    image.style.filter = 'blur(10px)';\n                    image.style.zIndex = '1';\n                }\n            });\n            item.style.zIndex = '2';\n            item.style.filter = '';\n        });\n        item.addEventListener('mouseleave', () => {\n            CollageImages.forEach((image) => {\n                image.style.filter = '';\n                image.style.zIndex = originalZIndex;\n            });\n        });\n    });\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/functions/home.ts?");

/***/ }),

/***/ "./src/components/pages/404Page.ts":
/*!*****************************************!*\
  !*** ./src/components/pages/404Page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PageNotFound)\n/* harmony export */ });\n/* harmony import */ var _assets_sass_modules_404_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sass/modules/404.module.scss */ \"./src/assets/sass/modules/404.module.scss\");\n\nfunction PageNotFound(DOM) {\n    document.title = 'Online Store - Page not found';\n    DOM.innerHTML = (`\n        <section class='${_assets_sass_modules_404_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['four-o-four-section']}'>\n            <div class='${_assets_sass_modules_404_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content}'>\n                <h1 class='${_assets_sass_modules_404_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['error']}'>Page doesn't exists</h1>\n                <p class='${_assets_sass_modules_404_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['sub-line']}'>Look's like you are lost. Return our <a href='#/home' id='back'>HomePage</a></p>\n            </div>\n        </section>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/404Page.ts?");

/***/ }),

/***/ "./src/components/pages/AboutPage.ts":
/*!*******************************************!*\
  !*** ./src/components/pages/AboutPage.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AboutPage)\n/* harmony export */ });\nfunction AboutPage(DOM) {\n    document.title = 'Online Store - About Us';\n    DOM.innerHTML = (`\n        <h1>This is About Page</h1>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/AboutPage.ts?");

/***/ }),

/***/ "./src/components/pages/ContactPage.ts":
/*!*********************************************!*\
  !*** ./src/components/pages/ContactPage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ContactPage)\n/* harmony export */ });\nfunction ContactPage(DOM) {\n    document.title = 'Online Store - Contact';\n    DOM.innerHTML = (`\n        <h1>This is Contact Page</h1>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/ContactPage.ts?");

/***/ }),

/***/ "./src/components/pages/HomePage.ts":
/*!******************************************!*\
  !*** ./src/components/pages/HomePage.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Footer */ \"./src/components/Footer.ts\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ \"./src/components/Header.ts\");\n/* harmony import */ var _functions_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/home */ \"./src/components/functions/home.ts\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ \"./src/components/styles.ts\");\n\n\n\n\nfunction HomePage(DOM) {\n    document.title = 'Online Store - Home';\n    DOM.innerHTML = (`\n    <header id='header' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['header-section']}'></header>\n        <section class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['best-selling-products-section']}'>\n            <h1 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-title']}'>best selling products</h1>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-container']}'>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-card']}'>\n                    <img src='images/product-1.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-img']}' alt='product image'>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-name']}'>lights →</p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-card']}'>\n                    <img src='images/product-2.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-img']}' alt='product image'>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-name']}'>table →</p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-card']}'>\n                    <img src='images/product-3.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-img']}' alt='product image'>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-name']}'>storage →</p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-card']}'>\n                    <img src='images/product-4.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-img']}' alt='product image'>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['product-name']}'>sofa →</p>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['mid-section']}'>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-item-container']}'>\n                <img src='images/bg-2.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-bg']}' alt='bg image'>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-info']}'>\n                    <h1 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.title}'>premium quality in <span>affordable</span></h1>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.info}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Dicta ipsum fuga, magnam numquam, iste ex pariatur error \n                        ad maxime vero, accusamus provident nulla hic quia!\n                    </p>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['image-mid-section']}'>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['image-collage']}'>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['image-collection']}'>\n                    <img src='images/poster-1.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['collage-img']}' alt='collage image'>\n                    <img src='images/poster-2.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['collage-img']}' alt='collage image'>\n                    <img src='images/poster-3.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['collage-img']}' alt='collage image'>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-section']}'>\n            <h1 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-title']}'>what our <span>customers</span> says about us </h1>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-container']}'>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-card']}'>\n                    <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 1.png' alt='user1'>\n                    </div>\n                    <h2 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-title']}'>best quality more than my expectations</h2>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-card']}'>\n                    <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 2.png' alt='user1'>\n                    </div>\n                    <h2 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-title']}'>on time delivery with best packaging.</h2>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-card']}'>\n                    <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 3.png' alt='user1'>\n                    </div>\n                    <h2 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-title']}'>very helpful customer support</h2>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-card']}'>\n                    <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 4.png' alt='user1'>\n                    </div>\n                    <h2 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['review-title']}'>very easy to refund/return products.</h2>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['end-section']}'>\n            <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-item-container']}'>\n                <img src='images/bg-3.png' class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-bg']}' alt='bg image'>\n                <div class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles['section-info']}'>\n                    <h1 class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.title}'>order <span>now</span></h1>\n                    <p class='${_styles__WEBPACK_IMPORTED_MODULE_3__.styles.info}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Dicta ipsum fuga, magnam numquam, iste ex pariatur error \n                        ad maxime vero, accusamus provident nulla hic quia!\n                    </p>\n                </div>\n            </div>\n        </section>\n\n        <footer id='footer'></footer>\n    `);\n    (0,_functions_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const Head = document.getElementById('header');\n    {\n        Head && (0,_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Head);\n    }\n    const Foot = document.getElementById('footer');\n    {\n        Foot && (0,_Footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Foot);\n    }\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/HomePage.ts?");

/***/ }),

/***/ "./src/components/pages/ProductPage.ts":
/*!*********************************************!*\
  !*** ./src/components/pages/ProductPage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\nfunction ProductPage(DOM) {\n    document.title = 'Online Store - Products';\n    DOM.innerHTML = (`\n        <h1>This is Product Page</h1>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/ProductPage.ts?");

/***/ }),

/***/ "./src/components/pages/SearchPage.ts":
/*!********************************************!*\
  !*** ./src/components/pages/SearchPage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchPage)\n/* harmony export */ });\n/* harmony import */ var _assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sass/modules/search.module.scss */ \"./src/assets/sass/modules/search.module.scss\");\n\nfunction SearchPage(DOM) {\n    document.title = 'Online Store - Search Results';\n    DOM.innerHTML = (`\n    <section class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-listing']}'>\n    <h1 class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-title']}'>sofas</h1>\n    <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-container']}'>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-1.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-2.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-3.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-4.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-5.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-6.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-7.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-8.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n        <div class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n            <img src='images/sofa-9.png' class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n            <p class='${_assets_sass_modules_search_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-price']}'>$ 499</p>\n        </div>\n    </div>\n</section>\n    `);\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/SearchPage.ts?");

/***/ }),

/***/ "./src/components/styles.ts":
/*!**********************************!*\
  !*** ./src/components/styles.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\n/* harmony import */ var _assets_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sass/modules/app.module.scss */ \"./src/assets/sass/modules/app.module.scss\");\n\nconst styles = _assets_sass_modules_app_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/styles.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start */ \"./src/start.ts\");\n/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sass/index.scss */ \"./src/assets/sass/index.scss\");\n/* harmony import */ var _assets_security_hashes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/security/hashes */ \"./src/assets/security/hashes.ts\");\n\n\n\nconst DOM = document.querySelector('#app');\nDOM.id = (0,_assets_security_hashes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_start__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(DOM);\n\n\n//# sourceURL=webpack://standalone-typescript/./src/index.ts?");

/***/ }),

/***/ "./src/start.ts":
/*!**********************!*\
  !*** ./src/start.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Start)\n/* harmony export */ });\n/* harmony import */ var _assets_render_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/render/render */ \"./src/assets/render/render.ts\");\n/* harmony import */ var _assets_routes_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/routes/router */ \"./src/assets/routes/router.ts\");\n/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/styles */ \"./src/components/styles.ts\");\n\n\n\nfunction Start(start) {\n    start.innerHTML = (`\n        <nav id='navbar' class='${_components_styles__WEBPACK_IMPORTED_MODULE_2__.styles.navbar}'></nav>\n        <main id='routes'></main>\n    `);\n    (0,_assets_render_render__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    (0,_assets_routes_router__WEBPACK_IMPORTED_MODULE_1__.TS_Router)();\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/start.ts?");

/***/ }),

/***/ "./src/images/404-bg.png":
/*!*******************************!*\
  !*** ./src/images/404-bg.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/404-bg.d478e5ad3e41bee1b311.png\";\n\n//# sourceURL=webpack://standalone-typescript/./src/images/404-bg.png?");

/***/ }),

/***/ "./src/images/bg-1.png":
/*!*****************************!*\
  !*** ./src/images/bg-1.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/bg-1.a61ebf350b82628acb14.png\";\n\n//# sourceURL=webpack://standalone-typescript/./src/images/bg-1.png?");

/***/ }),

/***/ "./src/images/header.png":
/*!*******************************!*\
  !*** ./src/images/header.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/header.d945750b8d9e727a0f86.png\";\n\n//# sourceURL=webpack://standalone-typescript/./src/images/header.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main~src_c": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkstandalone_typescript"] = self["webpackChunkstandalone_typescript"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","main~src_assets_re","main~src_assets_sa"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;