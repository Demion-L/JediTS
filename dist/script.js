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

/***/ "./src/ForceUser.ts":
/*!**************************!*\
  !*** ./src/ForceUser.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ForceUser\": () => (/* binding */ ForceUser)\n/* harmony export */ });\n/**\r\n * Class ForceUser\r\n * @param {String} name\r\n * @param {Number} amountOFMDCL\r\n */\r\nvar ForceUser = /** @class */ (function () {\r\n    function ForceUser(name, amountOFMDCL) {\r\n        this._name = name;\r\n        this._amountOFMDCL = amountOFMDCL;\r\n    }\r\n    Object.defineProperty(ForceUser.prototype, \"name\", {\r\n        get: function () {\r\n            return this._name;\r\n        },\r\n        set: function (name) {\r\n            this._name = name;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ForceUser.prototype, \"amountOFMDCL\", {\r\n        get: function () {\r\n            return this._amountOFMDCL;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return ForceUser;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://jedi-order/./src/ForceUser.ts?");

/***/ }),

/***/ "./src/Jedi.ts":
/*!*********************!*\
  !*** ./src/Jedi.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Jedi\": () => (/* binding */ Jedi)\n/* harmony export */ });\n/* harmony import */ var _ForceUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForceUser */ \"./src/ForceUser.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Jedi = /** @class */ (function (_super) {\r\n    __extends(Jedi, _super);\r\n    function Jedi(name, amountOFMDCL, fear, rage, kindness) {\r\n        var _this = _super.call(this, name, amountOFMDCL) || this;\r\n        _this._fear = fear;\r\n        _this._rage = rage;\r\n        _this._kindness = kindness;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(Jedi.prototype, \"fear\", {\r\n        get: function () {\r\n            return this._fear;\r\n        },\r\n        set: function (fear) {\r\n            this._fear = fear;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Jedi.prototype, \"rage\", {\r\n        get: function () {\r\n            return this._rage;\r\n        },\r\n        set: function (rage) {\r\n            this._rage = rage;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Jedi.prototype, \"kindness\", {\r\n        get: function () {\r\n            return this._kindness;\r\n        },\r\n        set: function (kindness) {\r\n            this._kindness = kindness;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Jedi.prototype.fight = function () {\r\n        console.log(\"Jedi \" + this._name + \" start to fight\");\r\n    };\r\n    Jedi.prototype.useForce = function () {\r\n        console.log(\"Jedi \" + this._name + \" is using Force!\");\r\n    };\r\n    Jedi.prototype.side = function () {\r\n        var ballance = this._rage + this._fear + this._kindness;\r\n        var sideIs;\r\n        if (ballance > 3) {\r\n            sideIs = \"bright\";\r\n        }\r\n        else if (ballance < -3) {\r\n            sideIs = \"dark\";\r\n        }\r\n        else {\r\n            sideIs = \"grey\";\r\n        }\r\n        return sideIs;\r\n    };\r\n    return Jedi;\r\n}(_ForceUser__WEBPACK_IMPORTED_MODULE_0__.ForceUser));\r\n\r\n\n\n//# sourceURL=webpack://jedi-order/./src/Jedi.ts?");

/***/ }),

/***/ "./src/JediKnight.ts":
/*!***************************!*\
  !*** ./src/JediKnight.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JediKnight\": () => (/* binding */ JediKnight)\n/* harmony export */ });\n/* harmony import */ var _Jedi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jedi */ \"./src/Jedi.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n/**\r\n * Class JediKnight -> Jedi\r\n * @param{String} typeofKight\r\n * @param{Boolean} hasPadavan\r\n * @param{Number} experiance\r\n */\r\n\r\nvar JediKnight = /** @class */ (function (_super) {\r\n    __extends(JediKnight, _super);\r\n    function JediKnight(name, amountOFMDCL, fear, rage, kindness, typeofKight, hasPadavan, experiance) {\r\n        var _this = _super.call(this, name, amountOFMDCL, fear, rage, kindness) || this;\r\n        _this.typeofKnight = typeofKight;\r\n        _this._hasPadavan = hasPadavan;\r\n        _this._experiance = experiance;\r\n        return _this;\r\n    }\r\n    Object.defineProperty(JediKnight.prototype, \"hasPadavan\", {\r\n        get: function () {\r\n            return this._hasPadavan;\r\n        },\r\n        set: function (hasPadavan) {\r\n            this._hasPadavan = hasPadavan;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(JediKnight.prototype, \"experiance\", {\r\n        get: function () {\r\n            return this._experiance;\r\n        },\r\n        set: function (experiance) {\r\n            this._experiance = experiance;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    JediKnight.prototype.canBeMagister = function () {\r\n        if (this._experiance > 5000) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    return JediKnight;\r\n}(_Jedi__WEBPACK_IMPORTED_MODULE_0__.Jedi));\r\n\r\n\n\n//# sourceURL=webpack://jedi-order/./src/JediKnight.ts?");

/***/ }),

/***/ "./src/JediOrder.ts":
/*!**************************!*\
  !*** ./src/JediOrder.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JediOrder\": () => (/* binding */ JediOrder)\n/* harmony export */ });\nvar JediOrder = /** @class */ (function () {\r\n    function JediOrder(name, inWarWithSith, hasAcademy) {\r\n        this._name = name;\r\n        this._inWarWithSith = inWarWithSith;\r\n        this._hasAcademy = hasAcademy;\r\n        this._jediList = [];\r\n    }\r\n    Object.defineProperty(JediOrder.prototype, \"name\", {\r\n        get: function () {\r\n            return this._name;\r\n        },\r\n        set: function (name) {\r\n            this._name = name;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(JediOrder.prototype, \"inWarWithSith\", {\r\n        get: function () {\r\n            return this._inWarWithSith;\r\n        },\r\n        set: function (inWarWithSith) {\r\n            this._inWarWithSith = inWarWithSith;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(JediOrder.prototype, \"hasAcademy\", {\r\n        get: function () {\r\n            return this._hasAcademy;\r\n        },\r\n        set: function (hasAcademy) {\r\n            this._hasAcademy = hasAcademy;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(JediOrder.prototype, \"jediList\", {\r\n        get: function () {\r\n            return this._jediList;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    JediOrder.prototype.getJediWithPadavan = function () {\r\n        return this._jediList.filter(function (jedi) { return jedi.hasPadavan; });\r\n    };\r\n    JediOrder.prototype.getJediByType = function (type) {\r\n        return this._jediList.filter(function (jedi) { return jedi.typeofKnight === type; });\r\n    };\r\n    JediOrder.prototype.devoteJedi = function (jedi) {\r\n        this._jediList.push(jedi);\r\n    };\r\n    JediOrder.prototype.expeleJedi = function (jedi) {\r\n        var index = this._jediList.indexOf(jedi);\r\n        if (index > -1) {\r\n            return this._jediList.splice(index, 1);\r\n        }\r\n        return null;\r\n    };\r\n    /**\r\n     * order66 method with Callback Function\r\n     */\r\n    // order66(cb) {\r\n    //   let survivors;\r\n    //   let error;\r\n    //   const atack = () => {\r\n    //     if (this._jediList.length < 1) {\r\n    //       error = new Error('No Jedis here!!!');\r\n    //       // console.log(error);\r\n    //     } else if (this._jediList.length >= 4) {\r\n    //       this._jediList.pop();\r\n    //       setTimeout(atack, 999);\r\n    //     } else {\r\n    //       survivors = this.jediList;\r\n    //       cb && cb(error, survivors);\r\n    //     }\r\n    //   };\r\n    //   setTimeout(atack, 999);\r\n    // }\r\n    /**\r\n     * order66 method with Promise\r\n     */\r\n    JediOrder.prototype.order66 = function (order) {\r\n        var jediList = order || this._jediList;\r\n        return new Promise(function (resolve, reject) {\r\n            var atack = function () {\r\n                jediList.pop();\r\n                // console.log(jediList);\r\n                if (jediList.length < 1) {\r\n                    reject(new Error(\"No Jedis here!!!\"));\r\n                }\r\n                else if (jediList.length >= 4) {\r\n                    setTimeout(atack, 333);\r\n                }\r\n                else {\r\n                    resolve(jediList);\r\n                }\r\n            };\r\n            setTimeout(atack, 333);\r\n        });\r\n    };\r\n    return JediOrder;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack://jedi-order/./src/JediOrder.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _JediKnight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JediKnight */ \"./src/JediKnight.ts\");\n/* harmony import */ var _JediOrder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JediOrder */ \"./src/JediOrder.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar obivanKenoby = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Obi van Kenoby\", 550, 4, 3, 4, \"guardian\", true, 6000);\r\nvar enakinSkywalker = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Enakin Skywalker\", 950, 3, -2, 3, \"sentinel\", false, 1500);\r\nvar maceWindu = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Mace Windu\", 650, 4, -3, 2, \"guardian\", true, 6000);\r\nvar yoda = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Yoda\", 1250, 5, 0, 4, \"consular\", false, 120000);\r\nvar lukeSkywalker = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Luke Skywalker\", 950, 3, 3, 5, \"guardian\", false, 6000);\r\nvar ploKun = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Plo Koon\", 650, 4, 3, 4, \"sentinel\", true, 6000);\r\nvar ahsokaTano = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Ahsoka Tano\", 450, 3, 2, 4, \"consular\", false, 3000);\r\nvar quiGon = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Qui-Gon Jinn\", 750, 5, 5, 5, \"consular\", true, 8000);\r\nvar kitFisto = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Kit Fisto\", 550, 3, 1, 2, \"guardian\", false, 5500);\r\nvar kiAdiMundi = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Ki-Adi-Mundi\", 550, 3, 1, 2, \"sentinel\", true, 5500);\r\nvar prostoVasia = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Vasia\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar prostoMaks = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Maks\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar prostoDima = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Dima\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar prostoVadim = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Vadim\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar prostoPasha = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Pasha\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar prostoSveta = new _JediKnight__WEBPACK_IMPORTED_MODULE_0__.JediKnight(\"Sveta\", 5, 3, 1, 2, \"sentinel\", false, 5);\r\nvar jSquad = [\r\n    obivanKenoby,\r\n    yoda,\r\n    enakinSkywalker,\r\n    maceWindu,\r\n    lukeSkywalker,\r\n    ploKun,\r\n    ahsokaTano,\r\n];\r\nvar jSquad2 = [quiGon, kitFisto, kiAdiMundi, prostoVasia];\r\nvar jediOrder = new _JediOrder__WEBPACK_IMPORTED_MODULE_1__.JediOrder(\"Order of New Republic\", true, true);\r\njSquad.forEach(function (element) {\r\n    jediOrder.devoteJedi(element);\r\n});\r\njediOrder\r\n    .order66()\r\n    .then(function (data) {\r\n    console.log(data);\r\n})\r\n    .catch(function (error) { return console.warn(error); });\r\nvar asyncJediOrder = function (newSquad) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var survivors_1, enforcement, newOrder, nextRound, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 3, , 4]);\r\n                return [4 /*yield*/, jediOrder.order66()];\r\n            case 1:\r\n                survivors_1 = _a.sent();\r\n                console.log(survivors_1);\r\n                enforcement = function (newSquad) {\r\n                    newSquad.forEach(function (element) {\r\n                        survivors_1.push(element);\r\n                    });\r\n                    return survivors_1;\r\n                };\r\n                newOrder = enforcement(newSquad).reverse();\r\n                console.log(newOrder);\r\n                return [4 /*yield*/, jediOrder.order66(newOrder)];\r\n            case 2:\r\n                nextRound = _a.sent();\r\n                console.dir(nextRound);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_1 = _a.sent();\r\n                console.error(error_1);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); };\r\nasyncJediOrder(jSquad2).then(function (result) { return console.log(result); });\r\n\n\n//# sourceURL=webpack://jedi-order/./src/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;