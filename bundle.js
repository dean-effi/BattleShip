/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "botGameBoard": () => (/* binding */ botGameBoard),
/* harmony export */   "playerGameBoard": () => (/* binding */ playerGameBoard)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");

let botGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
let playerGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
botGameBoard.addShip(botGameBoard.allShips.patrolBoat, [4, 0]);
botGameBoard.addShip(botGameBoard.allShips.submarine, [0, 2]);
botGameBoard.addShip(botGameBoard.allShips.destroyer, [2, 1]);
botGameBoard.addShip(botGameBoard.allShips.battleShip, [0, 9], "vertical");
botGameBoard.addShip(botGameBoard.allShips.carrier, [7, 0]);
playerGameBoard.addShip(playerGameBoard.allShips.patrolBoat, [4, 0]);
playerGameBoard.addShip(playerGameBoard.allShips.submarine, [0, 2]);
playerGameBoard.addShip(playerGameBoard.allShips.destroyer, [2, 1]);
playerGameBoard.addShip(playerGameBoard.allShips.battleShip, [0, 9], "vertical");
playerGameBoard.addShip(playerGameBoard.allShips.carrier, [7, 0]);
while (Object.keys(botGameBoard.allShips).length > 0 && Object.keys(playerGameBoard.allShips).length > 0) {
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.playerPlay)();
  (0,_main__WEBPACK_IMPORTED_MODULE_0__.botPlay)();
  console.log(botGameBoard.map);
}
console.log(botGameBoard, playerGameBoard);

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "botPlay": () => (/* binding */ botPlay),
/* harmony export */   "playerPlay": () => (/* binding */ playerPlay)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");

function Ship(name, length) {
  let hits = 0;
  let sank = false;
  function hit() {
    hits++;
    if (hits >= length) {
      this.sink();
    }
  }
  function sink() {
    this.sank = true;
    console.log(this.name + ' HAS SANKKKK!');
  }
  return {
    name,
    length,
    hit,
    sank,
    sink
  };
}
function GameBoard() {
  const attacksMissed = [];
  const attacksHit = [];
  const map = [];
  const row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let allShips = {
    patrolBoat: Ship("patrolBoat", 2),
    submarine: Ship("submarine", 3),
    destroyer: Ship("destroyer", 3),
    battleShip: Ship("battleShip", 4),
    carrier: Ship("carrier", 5)
  };
  for (let i = 0; i < 10; i++) {
    map.push([...row]);
  }
  function addShip(ship, coor) {
    let direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "horizontal";
    if (direction == "horizontal") {
      //check if coors available
      for (let j = 0; j < ship.length; j++) {
        if (coor[0] > 9 || coor[0] < 0 || coor[1] + j > 9 || coor[1] + j < 0 || this.map[coor[0]][coor[1] + j]) {
          return false;
        }
      }
      //add Ship To Board
      for (let i = 0; i < ship.length; i++) {
        this.map[coor[0]][coor[1] + i] = ship.name;
      }
    } else {
      //check if coors available
      for (let j = 0; j < ship.length; j++) {
        if (coor[0] + j > 9 || coor[0] + j < 0 || coor[1] > 9 || coor[1] < 0 || this.map[coor[0] + j][coor[1]]) {
          return "Spot is invalid";
        }
      }

      //add Ship To Board
      for (let i = 0; i < ship.length; i++) {
        this.map[coor[0] + i][coor[1]] = ship.name;
      }
    }
  }
  function reciveAttack(coors) {
    //checks if already shot
    for (let arr of [...attacksHit, ...attacksMissed]) {
      if (arr[0] == coors[0]) {
        if (arr[1] == coors[1]) {
          console.log('already shot there ');
          return 0;
        }
      }
    }
    //evaluates if the shot hit or missed 
    if (this.map[coors[0]][coors[1]]) {
      attacksHit.push(coors);
      //turn name string into variable to hit correct ship 
      console.log('Thats a hit!');
      this.allShips[this.map[coors[0]][coors[1]]].hit();
      if (this.allShips[this.map[coors[0]][coors[1]]].sank) {
        delete this.allShips[this.map[coors[0]][coors[1]]];
      }
      this.map[coors[0]][coors[1]] = 'H';
      return true;
    } else {
      attacksMissed.push(coors);
      this.map[coors[0]][coors[1]] = 'M';
      console.log('MISSED@!');
      return true;
    }
  }
  return {
    map,
    addShip,
    reciveAttack,
    allShips
  };
}
function Player() {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "player1";
  let turn = false;
  return {
    name,
    turn,
    shipsPlaced
  };
}
function botPlay() {
  let shot = _index_js__WEBPACK_IMPORTED_MODULE_0__.playerGameBoard.reciveAttack([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  if (shot) {
    return true;
  } else {
    botPlay();
  }
}
function playerPlay() {
  let rowCoor = Number(prompt("Choose your row:"));
  let colCoor = Number(prompt("Choose your col:"));
  let playerCoors = [rowCoor, colCoor];
  let shot = _index_js__WEBPACK_IMPORTED_MODULE_0__.botGameBoard.reciveAttack([...playerCoors]);
  if (shot) {
    return true;
  } else {
    console.log(shot);
    playerPlay();
  }
}


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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEVBQUU7RUFDYjtBQUNKO0FBRUEsU0FBU0MsVUFBVSxHQUFFO0VBRWpCLElBQUl3QyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7RUFDaEQsSUFBSUMsT0FBTyxHQUFHRixNQUFNLENBQUNDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0VBQ2hELElBQUlFLFdBQVcsR0FBRyxDQUFDSixPQUFPLEVBQUNHLE9BQU8sQ0FBQztFQUNuQyxJQUFJUCxJQUFJLEdBQUduQyxnRUFBeUIsQ0FBQyxDQUFDLEdBQUcyQyxXQUFXLENBQUMsQ0FBQztFQUNsRCxJQUFHUixJQUFJLEVBQUM7SUFDSixPQUFPLElBQUk7RUFDZixDQUFDLE1BQUk7SUFDRHZCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO0lBQ2pCcEMsVUFBVSxFQUFFO0VBQ2hCO0FBQ1I7Ozs7Ozs7VUNsSUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL21haW4uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHYW1lQm9hcmQsUGxheWVyLGJvdFBsYXksIHBsYXllclBsYXkgfSBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBsZXQgYm90R2FtZUJvYXJkID0gR2FtZUJvYXJkKClcbmV4cG9ydCBsZXQgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKClcblxuXG5ib3RHYW1lQm9hcmQuYWRkU2hpcChib3RHYW1lQm9hcmQuYWxsU2hpcHMucGF0cm9sQm9hdCxbNCwwXSlcbmJvdEdhbWVCb2FyZC5hZGRTaGlwKGJvdEdhbWVCb2FyZC5hbGxTaGlwcy5zdWJtYXJpbmUsWzAsMl0pXG5ib3RHYW1lQm9hcmQuYWRkU2hpcChib3RHYW1lQm9hcmQuYWxsU2hpcHMuZGVzdHJveWVyLFsyLDFdKVxuYm90R2FtZUJvYXJkLmFkZFNoaXAoYm90R2FtZUJvYXJkLmFsbFNoaXBzLmJhdHRsZVNoaXAsWzAsOV0sXCJ2ZXJ0aWNhbFwiKVxuYm90R2FtZUJvYXJkLmFkZFNoaXAoYm90R2FtZUJvYXJkLmFsbFNoaXBzLmNhcnJpZXIsWzcsMF0sKVxuXG5wbGF5ZXJHYW1lQm9hcmQuYWRkU2hpcChwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMucGF0cm9sQm9hdCxbNCwwXSlcbnBsYXllckdhbWVCb2FyZC5hZGRTaGlwKHBsYXllckdhbWVCb2FyZC5hbGxTaGlwcy5zdWJtYXJpbmUsWzAsMl0pXG5wbGF5ZXJHYW1lQm9hcmQuYWRkU2hpcChwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMuZGVzdHJveWVyLFsyLDFdKVxucGxheWVyR2FtZUJvYXJkLmFkZFNoaXAocGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzLmJhdHRsZVNoaXAsWzAsOV0sXCJ2ZXJ0aWNhbFwiKVxucGxheWVyR2FtZUJvYXJkLmFkZFNoaXAocGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzLmNhcnJpZXIsWzcsMF0sKVxuXG5cbndoaWxlKE9iamVjdC5rZXlzKGJvdEdhbWVCb2FyZC5hbGxTaGlwcykubGVuZ3RoID4gMCAmJlxuICBPYmplY3Qua2V5cyhwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMpLmxlbmd0aCA+IDApe1xuXG4gICAgcGxheWVyUGxheSgpXG4gICAgYm90UGxheSgpXG4gICAgXG4gICAgY29uc29sZS5sb2coYm90R2FtZUJvYXJkLm1hcCk7XG5cbn1cblxuXG5cblxuXG5cblxuY29uc29sZS5sb2coYm90R2FtZUJvYXJkLCBwbGF5ZXJHYW1lQm9hcmQpOyIsImltcG9ydHtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmZ1bmN0aW9uIFNoaXAobmFtZSxsZW5ndGgpe1xuICAgIGxldCBoaXRzID0gMFxuICAgIGxldCBzYW5rID0gZmFsc2UgXG4gICAgZnVuY3Rpb24gaGl0KCl7XG4gICAgICAgIGhpdHMrK1xuICAgICAgICBpZihoaXRzID49IGxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLnNpbmsoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpbmsoKXtcbiAgICAgICAgdGhpcy5zYW5rID0gdHJ1ZSBcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgJyBIQVMgU0FOS0tLSyEnKTtcbiAgICB9XG4gICAgcmV0dXJue25hbWUsbGVuZ3RoLGhpdCxzYW5rLHNpbmt9XG5cbn1cbmZ1bmN0aW9uIEdhbWVCb2FyZCgpe1xuICAgIGNvbnN0IGF0dGFja3NNaXNzZWQgPSBbXVxuICAgIGNvbnN0IGF0dGFja3NIaXQgPSAgW11cbiAgICBjb25zdCBtYXAgPSBbXVxuICAgIGNvbnN0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXVxuICAgIGxldCBhbGxTaGlwcyA9IHtcbiAgICAgICAgcGF0cm9sQm9hdCA6IFNoaXAoXCJwYXRyb2xCb2F0XCIsMiksXG4gICAgICAgIHN1Ym1hcmluZSA6IFNoaXAoXCJzdWJtYXJpbmVcIiwzKSxcbiAgICAgICAgZGVzdHJveWVyIDogU2hpcChcImRlc3Ryb3llclwiLDMpLFxuICAgICAgICBiYXR0bGVTaGlwIDogU2hpcChcImJhdHRsZVNoaXBcIiw0KSxcbiAgICAgICAgY2FycmllciA6IFNoaXAoXCJjYXJyaWVyXCIsNSlcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIG1hcC5wdXNoKFsuLi5yb3ddKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFNoaXAoc2hpcCxjb29yLGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXsgIFxuICAgICAgICAgICAgLy9jaGVjayBpZiBjb29ycyBhdmFpbGFibGVcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBzaGlwLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZihjb29yWzBdICA+IDkgfHwgY29vclswXSAgPCAwIHx8IGNvb3JbMV0gKyBqID4gOSB8fCBjb29yWzFdICsgaiA8IDAgXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGpdKXtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2FkZCBTaGlwIFRvIEJvYXJkXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGldID0gc2hpcC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGNvb3JzIGF2YWlsYWJsZVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGlmKGNvb3JbMF0gKyBqID4gOSB8fCBjb29yWzBdICsgaiA8IDAgfHwgY29vclsxXSAgPiA5IHx8IGNvb3JbMV0gPCAwXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5tYXBbY29vclswXSArIGpdW2Nvb3JbMV1dKXtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJTcG90IGlzIGludmFsaWRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9hZGQgU2hpcCBUbyBCb2FyZFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBpXVtjb29yWzFdXSA9IHNoaXAubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlY2l2ZUF0dGFjayhjb29ycyl7XG5cbiAgICAgICAgLy9jaGVja3MgaWYgYWxyZWFkeSBzaG90XG4gICAgICAgIGZvcihsZXQgYXJyIG9mIFsuLi5hdHRhY2tzSGl0LCAuLi5hdHRhY2tzTWlzc2VkXSl7XG4gICAgICAgICAgICBpZihhcnJbMF0gPT0gY29vcnNbMF0pe1xuICAgICAgICAgICAgICAgIGlmIChhcnJbMV0gPT0gY29vcnNbMV0pe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBzaG90IHRoZXJlICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2V2YWx1YXRlcyBpZiB0aGUgc2hvdCBoaXQgb3IgbWlzc2VkIFxuICAgICAgICBpZih0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dKXtcbiAgICAgICAgICAgIGF0dGFja3NIaXQucHVzaChjb29ycylcbiAgICAgICAgICAgIC8vdHVybiBuYW1lIHN0cmluZyBpbnRvIHZhcmlhYmxlIHRvIGhpdCBjb3JyZWN0IHNoaXAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVGhhdHMgYSBoaXQhJyk7XG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzW3RoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV1dLmhpdCgpXG4gICAgICAgICAgICBpZih0aGlzLmFsbFNoaXBzW3RoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV1dLnNhbmspe1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFsbFNoaXBzW3RoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV1dXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV0gPSAnSCdcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXR0YWNrc01pc3NlZC5wdXNoKGNvb3JzKVxuICAgICAgICAgICAgdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSA9ICdNJ1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01JU1NFREAhJyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm57bWFwLGFkZFNoaXAscmVjaXZlQXR0YWNrLGFsbFNoaXBzfVxufVxuXG5mdW5jdGlvbiBQbGF5ZXIobmFtZT1cInBsYXllcjFcIil7XG4gICAgbGV0IHR1cm4gPSBmYWxzZVxuICAgIHJldHVybntuYW1lLHR1cm4sc2hpcHNQbGFjZWR9XG59XG5cbmZ1bmN0aW9uIGJvdFBsYXkoKXtcbiAgICBsZXQgc2hvdCA9IHBsYXllckdhbWVCb2FyZC5yZWNpdmVBdHRhY2soW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCldKVxuICAgIGlmKHNob3Qpe1xuICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICB9ZWxzZXtcbiAgICAgICAgYm90UGxheSgpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBwbGF5ZXJQbGF5KCl7XG4gICAgXG4gICAgbGV0IHJvd0Nvb3IgPSBOdW1iZXIocHJvbXB0KFwiQ2hvb3NlIHlvdXIgcm93OlwiKSlcbiAgICBsZXQgY29sQ29vciA9IE51bWJlcihwcm9tcHQoXCJDaG9vc2UgeW91ciBjb2w6XCIpKVxuICAgIGxldCBwbGF5ZXJDb29ycyA9IFtyb3dDb29yLGNvbENvb3JdXG4gICAgbGV0IHNob3QgPSBib3RHYW1lQm9hcmQucmVjaXZlQXR0YWNrKFsuLi5wbGF5ZXJDb29yc10pXG4gICAgICAgIGlmKHNob3Qpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWUgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coc2hvdCk7XG4gICAgICAgICAgICBwbGF5ZXJQbGF5KClcbiAgICAgICAgfVxufVxuXG5cblxuZXhwb3J0e1NoaXAsR2FtZUJvYXJkLFBsYXllcixib3RQbGF5LHBsYXllclBsYXl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbIkdhbWVCb2FyZCIsIlBsYXllciIsImJvdFBsYXkiLCJwbGF5ZXJQbGF5IiwiYm90R2FtZUJvYXJkIiwicGxheWVyR2FtZUJvYXJkIiwiYWRkU2hpcCIsImFsbFNoaXBzIiwicGF0cm9sQm9hdCIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJhdHRsZVNoaXAiLCJjYXJyaWVyIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJTaGlwIiwibmFtZSIsImhpdHMiLCJzYW5rIiwiaGl0Iiwic2luayIsImF0dGFja3NNaXNzZWQiLCJhdHRhY2tzSGl0Iiwicm93IiwiaSIsInB1c2giLCJzaGlwIiwiY29vciIsImRpcmVjdGlvbiIsImoiLCJyZWNpdmVBdHRhY2siLCJjb29ycyIsImFyciIsInR1cm4iLCJzaGlwc1BsYWNlZCIsInNob3QiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3dDb29yIiwiTnVtYmVyIiwicHJvbXB0IiwiY29sQ29vciIsInBsYXllckNvb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==