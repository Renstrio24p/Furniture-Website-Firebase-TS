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

/***/ "./src/components/pages/ProductPage.ts":
/*!*********************************************!*\
  !*** ./src/components/pages/ProductPage.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage)\n/* harmony export */ });\n/* harmony import */ var _assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/sass/modules/product.module.scss */ \"./src/assets/sass/modules/product.module.scss\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Footer */ \"./src/components/Footer.ts\");\n/* harmony import */ var _functions_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/product */ \"./src/components/functions/product.ts\");\n/* harmony import */ var _assets_sass_global_product_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/sass/global/product.scss */ \"./src/assets/sass/global/product.scss\");\n\n\n\n\nfunction ProductPage(DOM) {\n    document.title = 'Online Store - Products';\n    DOM.innerHTML = (`\n\n        <section class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-section']}'>\n            <img src='images/product-image.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-image']}' alt='product image'>\n            <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-detail']}'>\n                <h1 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-title']}'>Premium Sofa</h1>\n                <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-des']}'>\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                    Numquam vitae amet doloribus aspernatur recusandae fuga!\n                </p>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].ratings}'>\n                    <img src='images/fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star}' alt='star'>\n                    <img src='images/fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star}' alt='star'>\n                    <img src='images/fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star}' alt='star'>\n                    <img src='images/fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star}' alt='star'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].star}' alt='star'>\n                    <span class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-count']}'>4,823 reviews</span>\n                </div>\n                <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].price}'>$ 599</p>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['btn-container']}'>\n                    <button class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-btn']} ${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['buy-btn']}'>buy now</button>\n                    <button class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-btn']} ${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['cart-btn']}'>add to cart</button>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['detail-des']}'>\n            <h1 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-title']}'>details</h1>\n            <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].des}'>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n            Morbi rhoncus augue sapien, et sollicitudin ipsum euismod eget.\n            Nam aliquam tristique dictum. Integer placerat a turpis ut eleifend.\n            Aliquam viverra ligula ac vehicula imperdiet. Vivamus venenatis quam mi,\n            elementum rutrum mauris ultricies ultricies. Fusce eget elit molestie ante\n            vehicula tincidunt at ut eros. Donec ullamcorper quis sapien nec pellentesque.\n            Ut vitae dui erat. Nunc eu ligula eget diam tincidunt posuere. Ut ut finibus elit.\n            Duis commodo nisl quam, sed commodo ante lobortis nec. Sed accumsan consequat\n            massa, rhoncus euismod urna molestie et. Donec non vulputate risus.<br><br> Quisque\n            accumsan pharetra tincidunt. Ut sollicitudin nibh placerat magna blandit eleifend.\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit,\n            dui eu interdum cursus, orci quam egestas mauris, ut imperdiet ex dolor in dui. \n            Mauris ut augue elementum, pretium neque eget, venenatis justo. Suspendisse potenti. \n            Suspendisse aliquam vulputate neque, sit amet lacinia urna bibendum at. Ut suscipit, \n            nulla sed semper feugiat, nibh est lacinia quam, ut egestas nunc magna quis arcu. \n            Cras orci elit, varius sed nisl sed, imperdiet sagittis ante.<br><br>         \n            Nulla non ultrices arcu, et laoreet enim. In hac habitasse platea dictumst. \n            Pellentesque id feugiat justo. Aliquam ut rhoncus nunc. Sed et lacus magna. \n            Suspendisse maximus eros eu enim dapibus, in mattis leo suscipit. \n            Sed lacinia ipsum fermentum rutrum mattis. Nulla a dapibus augue. \n            Suspendisse accumsan, turpis vitae porta rutrum, mi ex posuere mi, \n            id scelerisque tellus arcu non lacus. Curabitur luctus purus at scelerisque interdum. \n            Aliquam varius vehicula libero.           \n            Vestibulum vitae tincidunt quam, id ultrices augue. Fusce vel quam scelerisque,\n            aliquam ex ac, ullamcorper eros. Morbi congue odio eu tincidunt feugiat.\n            Proin id ipsum velit. Vivamus pretium magna ornare egestas efficitur. \n            In hendrerit id orci ut convallis. Duis elit nisl, pulvinar sit amet vulputate at,\n            gravida eu nisl. Donec bibendum lacus ac augue aliquet, rhoncus mollis lacus finibus.           \n            Suspendisse pulvinar eget ante id varius. Orci varius natoque penatibus et magnis dis\n            parturient montes, nascetur ridiculus mus. Cras ultricies elementum leo,\n            et consectetur nisi lobortis in. Cras quis arcu fringilla, hendrerit erat vitae,\n            sollicitudin nisl. Suspendisse hendrerit urna sed sodales feugiat.\n            Cras semper sollicitudin nisi. \n            </p>\n        </section>\n\n        <section class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-section']}'>\n            <h1 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-title']}'>Reviews </h1>\n            <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-container']}'>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-card']}'>\n                    <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 1.png' alt='user1'>\n                    </div>\n                    <h2 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-title']}'>best quality more than my expectations</h2>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-card']}'>\n                    <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 2.png' alt='user1'>\n                    </div>\n                    <h2 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-title']}'>on time delivery with best packaging.</h2>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-card']}'>\n                    <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['user-dp']}' data-rating='4.9'>\n                        <img src='images/user 3.png' alt='user1'>\n                    </div>\n                    <h2 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-title']}'>very helpful customer support</h2>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-card']}'>\n                    <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['user-dp']}' data-rating='4.9'>\n                      <img src='images/user 4.png' alt='user1'>\n                    </div>\n                    <h2 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-title']}'>very easy to refund/return products.</h2>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].review}'>\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                        Sit pariatur libero labore aspernatur reprehenderit odio.\n                    </p>\n                </div>\n            </div>\n        </section>\n\n        <section class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['add-review-section']}'>\n            <h1 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-title']}'>add a review</h1>\n            <form id='send' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form}'>\n                <input type='text' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-headline']}' placeholder='review headline'/>\n                <textarea class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['review-field']}' placeholder='review'></textarea>\n                <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-text']}'>how much you like this product?</p>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['star-container']}'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}' alt='star'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}' alt='star'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}' alt='star'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}' alt='star'>\n                    <img src='images/no fill star.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['rating-star']}' alt='star'>\n                </div>\n                <button class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['add-review-btn']}'>add review</button>\n            </form>\n        </section>\n\n        <section class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['best-selling-products-section']}'>\n            <h1 class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['section-title']}'>Similar Products</h1>\n            <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-container']}'>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n                    <img src='images/product-1.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-name']}'>lights →</p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n                    <img src='images/product-2.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-name']}'>table →</p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n                    <img src='images/product-3.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-name']}'>storage →</p>\n                </div>\n                <div class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-card']}'>\n                    <img src='images/product-4.png' class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-img']}' alt='product image'>\n                    <p class='${_assets_sass_modules_product_module_scss__WEBPACK_IMPORTED_MODULE_0__[\"default\"]['product-name']}'>sofa →</p>\n                </div>\n            </div>\n        </section>\n\n        <footer id='footer'></footer>\n    `);\n    const Foot = document.getElementById('footer');\n    (0,_Footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Foot);\n    (0,_functions_product__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://standalone-typescript/./src/components/pages/ProductPage.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","main~src_assets_re","main~src_assets_sass_g","main~src_assets_sass_modules_4","main~src_assets_sa","main~src_components_F","main~src_components_pages_4"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;