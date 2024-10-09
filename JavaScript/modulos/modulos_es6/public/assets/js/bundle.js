/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pessoa: () => (/* binding */ Pessoa),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   idade: () => (/* binding */ idade),
/* harmony export */   nome: () => (/* binding */ nome),
/* harmony export */   outroNome: () => (/* binding */ outroNome),
/* harmony export */   seila: () => (/* binding */ sobrenome),
/* harmony export */   soma: () => (/* binding */ soma)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var nome = 'Luiz';
var sobrenome = 'Miranda';
var idade = 30;
function soma(x, y) {
  return x + y;
}

// Exportaçãoo direta!
var outroNome = 'Paulo';

// Exportando classe
var Pessoa = /*#__PURE__*/function () {
  function Pessoa(nome, sobrenome) {
    _classCallCheck(this, Pessoa);
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  return _createClass(Pessoa, [{
    key: "falarNome",
    value: function falarNome() {
      return "".concat(this.nome, " ").concat(this.sobrenome);
    }
  }]);
}();

// Exportação default
// export default function reqBD(bd, user, pass) {
//   return new Promise((res, rej) => {
//     const bdAdd = bd == 'bdtest' ? true : false;
//     const bdUser = user == 'admin' ? true : false;
//     const bdPass = pass == 'admin' ? true : false;

//     if (bdAdd && bdUser && bdPass) {
//       res('A conexão com o banco foi realizada.');
//     } else {
//       rej(new Error('A conexão não foi realizada.'));
//     }
//   });
// };

// Outra forma de exportação default
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (x, y) {
  return x * y;
});

// Exportação comum


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1.js */ "./src/modulo1.js");
// Importação padrão


// Importando TUDO

console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__);
var nome = 'João'; // Erro de colisão, caso as variáveis tenham o mesmo nome. 

console.log(nome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.seila, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.idade, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.outroNome);
console.log((0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.soma)(5, 5));
var p1 = new _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.Pessoa('Sérgio', 'Diágono');
console.log(p1.falarNome());

// Importando módulo padrão

(0,_modulo1_js__WEBPACK_IMPORTED_MODULE_0__["default"])('bdtest', 'admin', 'admin').then(function (res) {
  console.log(res);
})["catch"](function (e) {
  console.error(e);
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map