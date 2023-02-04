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

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameBoard\": () => (/* binding */ GameBoard),\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(name, length) {\n  let hits = 0;\n  let sank = false;\n  function hit() {\n    hits++;\n    if (hits >= length) {\n      this.sink();\n    }\n  }\n  function sink() {\n    this.sank = true;\n    console.log(this.name + ' HAS SANKKKK!');\n  }\n  return {\n    name,\n    length,\n    hit,\n    sank,\n    sink\n  };\n}\nfunction GameBoard() {\n  const attacksMissed = [];\n  const attacksHit = [];\n  const map = [];\n  const row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n  for (let i = 0; i < 10; i++) {\n    map.push([...row]);\n  }\n  function addShip(ship, coor) {\n    let direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"horizontal\";\n    if (direction == \"horizontal\") {\n      //check if coors available\n      for (let j = 0; j < ship.length; j++) {\n        if (coor[0] + j > 9 || coor[0] + j < 0 || coor[1] + j > 9 || coor[1] + j < 0 || this.map[coor[0]][coor[1] + j]) {\n          return false;\n        }\n      }\n\n      //add Ship To Board\n      for (let i = 0; i < ship.length; i++) {\n        this.map[coor[0]][coor[1] + i] = ship.name;\n      }\n    } else {\n      //check if coors available\n      for (let j = 0; j < ship.length; j++) {\n        if (coor[0] + j > 9 || coor[0] + j < 0 || coor[1] + j > 9 || coor[1] + j < 0 || this.map[coor[0] + j][coor[1]]) {\n          return \"Spot is taken\";\n        }\n      }\n\n      //add Ship To Board\n      for (let i = 0; i < ship.length; i++) {\n        this.map[coor[0] + i][coor[1]] = ship.name;\n      }\n    }\n  }\n  function reciveAttack(coors) {\n    //checks if already shot\n    for (let arr of [...attacksHit, ...attacksMissed]) {\n      if (arr[0] == coors[0]) {\n        if (arr[1] == coors[1]) {\n          console.log('already shot there ');\n          return true;\n        }\n      }\n    }\n\n    //evaluates if the shot hit or missed \n    if (this.map[coors[0]][coors[1]]) {\n      attacksHit.push(coors);\n      //turn name string into variable to hit correct ship \n      eval(this.map[coors[0]][coors[1]]).hit();\n      return true;\n    } else {\n      attacksMissed.push(coors);\n      return false;\n    }\n  }\n  return {\n    map,\n    addShip,\n    reciveAttack\n  };\n}\nlet destroyer = Ship(\"destroyer\", 3);\nlet bigBoy = Ship(\"bigBoy\", 5);\nlet gameBoard1 = GameBoard();\ngameBoard1.addShip(destroyer, [0, 2], \"vertical\");\ngameBoard1.addShip(bigBoy, [0, 5], \"horizontal\");\ngameBoard1.reciveAttack([0, 2]);\ngameBoard1.reciveAttack([1, 2]);\ngameBoard1.reciveAttack([2, 2]);\ngameBoard1.reciveAttack([3, 2]);\nconsole.log(gameBoard1.map);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;