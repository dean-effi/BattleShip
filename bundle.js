/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


const board = Array.from(document.querySelectorAll(".board"));
const startBtn = document.querySelector(".start-btn");
const randomBtn = document.querySelector(".random-btn");
const enemySection = document.querySelector(".enemy-section");
const bothBoards = document.querySelector(".both-boards");
function createBoard() {
  let players = [_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard, _index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard];
  for (let j = 0; j < 2; j++) {
    board[j].innerHTML = '';
    for (let r = 0; r < players[j].map.length; r++) {
      for (let c = 0; c < players[j].map[r].length; c++) {
        let boardGrid = document.createElement("div");
        boardGrid.classList.add(`${r},${c}`);
        if (j == 1) {
          boardGrid.addEventListener("click", () => {
            console.log(r);
            console.log(c);
            (0,_main__WEBPACK_IMPORTED_MODULE_0__.playerPlay)(r, c);
          });
          boardGrid.classList.add("hover:bg-gray-400");
        }
        if (j == 0) {
          if (players[j].map[r][c]) {
            boardGrid.classList.add("bg-teal-800");
          }
          boardGrid.addEventListener("click", () => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.userShipPlace)(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard, [r, c]);
            console.log('asfsaf');
          });
          boardGrid.addEventListener("mouseover", () => {
            if (_index_js__WEBPACK_IMPORTED_MODULE_1__.availShips.length > 0) {
              if (_index_js__WEBPACK_IMPORTED_MODULE_1__.userDirection == "horizontal") {
                for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].length; i++) {
                  let current = document.getElementsByClassName(`${r},${c + i}`);
                  current[0].classList.add("bg-teal-500");
                }
              } else {
                for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].length; i++) {
                  let current = document.getElementsByClassName(`${r + i},${c}`);
                  current[0].classList.add("bg-teal-500");
                }
              }
            }
          });
          boardGrid.addEventListener("mouseout", () => {
            if (_index_js__WEBPACK_IMPORTED_MODULE_1__.availShips.length > 0) {
              if (_index_js__WEBPACK_IMPORTED_MODULE_1__.userDirection == "horizontal") {
                for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].length; i++) {
                  let current = document.getElementsByClassName(`${r},${c + i}`);
                  current[0].classList.remove("bg-teal-500");
                }
              } else {
                for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].length; i++) {
                  let current = document.getElementsByClassName(`${r + i},${c}`);
                  current[0].classList.remove("bg-teal-500");
                }
              }
            }
          });
        }
        if (players[j].map[r][c] == "H") {
          boardGrid.classList.add("bg-rose-800");
        }
        if (players[j].map[r][c] == "M") {
          boardGrid.classList.add("bg-gray-800");
        }
        boardGrid.classList.add("w-full", "h-full", "border", "border-white", "board-grid", "overflow-hidden");
        board[j].append(boardGrid);
      }
    }
  }
}
function startGame() {
  console.log('start');
  console.log(startBtn);
  startBtn.classList.add("hidden");
  enemySection.classList.remove("hidden");
  enemySection.classList.add("appear");
  bothBoards.classList.add("lg:grid-cols-[40%,40%]");
  randomBtn.classList.add("hidden");
}
startBtn.addEventListener("click", startGame);
randomBtn.addEventListener("click", () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.randomizeBoard)(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard);
  createBoard();
});

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "availShips": () => (/* binding */ availShips),
/* harmony export */   "botGameBoard": () => (/* binding */ botGameBoard),
/* harmony export */   "playerGameBoard": () => (/* binding */ playerGameBoard),
/* harmony export */   "randomizeBoard": () => (/* binding */ randomizeBoard),
/* harmony export */   "userDirection": () => (/* binding */ userDirection),
/* harmony export */   "userShipPlace": () => (/* binding */ userShipPlace)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");


let availShips = [(0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("patrolBoat", 2), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("submarine", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("destroyer", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("battleShip", 4), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("carrier", 5)];
let botGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
let playerGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)();
const directions = ['horizontal', "vertical"];
let userDirection = "horizontal";
document.addEventListener("keydown", e => {
  if (e.code == "Space") {
    if (userDirection == "horizontal") {
      userDirection = "vertical";
    } else {
      userDirection = "horizontal";
    }
  }
});
let shipsLeft = true;
function userShipPlace(board, coors) {
  let direcion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : userDirection;
  if (shipsLeft) {
    console.log('activated');
    board.addShip(availShips[0], coors, direcion);
    let movedship = availShips.shift();
    board['allShips'][movedship.name] = movedship;
  }
  if (availShips.length < 1) {
    shipsLeft = false;
    console.log('u are done nana');
  }
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)();
}

// userShipPlace(playerGameBoard,[0,0])

function randomizeBoard(board) {
  board.allShips = {
    patrolBoat: (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("patrolBoat", 2),
    submarine: (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("submarine", 3),
    destroyer: (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("destroyer", 3),
    battleShip: (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("battleShip", 4),
    carrier: (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("carrier", 5)
  };
  if (board == playerGameBoard) {
    shipsLeft = false;
  }
  board.map = board.map.map(() => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });
  board.addShip(board.allShips.patrolBoat, [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
  board.addShip(board.allShips.submarine, [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
  board.addShip(board.allShips.destroyer, [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
  board.addShip(board.allShips.battleShip, [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
  board.addShip(board.allShips.carrier, [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
}
randomizeBoard(botGameBoard);
// randomizeBoard(playerGameBoard)

(0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)();

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameBoard": () => (/* binding */ GameBoard),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "botPlay": () => (/* binding */ botPlay),
/* harmony export */   "playerPlay": () => (/* binding */ playerPlay)
/* harmony export */ });
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


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
  for (let i = 0; i < 10; i++) {
    map.push([...row]);
  }
  let allShips = {};
  const directions = ['horizontal', "vertical"];
  function addShip(ship, coor) {
    let direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "horizontal";
    if (direction == "horizontal") {
      //check if coors available
      // console.log(typeof this.map[coor[0] - 1 ] == undefined);

      for (let j = 0; j < ship.length; j++) {
        if (coor[1] + j > 9 || coor[1] + j < 0 || this.map[coor[0]][coor[1]] || this.map[coor[0]][coor[1] + j] || typeof this.map[coor[0]][coor[1] + j + 1] != "undefined" && this.map[coor[0]][coor[1] + j + 1] || typeof this.map[coor[0]][coor[1] + j - 1] != "undefined" && this.map[coor[0]][coor[1] + j - 1] || typeof this.map[coor[0] + 1] != "undefined" && this.map[coor[0] + 1][coor[1] + j] || typeof this.map[coor[0] - 1] != "undefined" && this.map[coor[0] - 1][coor[1] + j]) {
          this.addShip(this.allShips[ship.name], [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
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
        if (coor[0] + j > 9 || coor[0] + j < 0 || this.map[coor[0]][coor[1]] || this.map[coor[0] + j][coor[1]] || typeof this.map[coor[0] + j][coor[1] + 1] != "undefined" && this.map[coor[0] + j][coor[1] + 1] || typeof this.map[coor[0] + j][coor[1] - 1] != "undefined" && this.map[coor[0] + j][coor[1] - 1] || typeof this.map[coor[0] + 1] != "undefined" && this.map[coor[0] + 1][coor[1] + j] || typeof this.map[coor[0] - 1] != "undefined" && this.map[coor[0] - 1][coor[1] + j]) {
          this.addShip(this.allShips[ship.name], [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)]);
          return false;
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
function botPlay() {
  let shot = _index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.reciveAttack([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  if (shot) {
    return true;
  } else {
    botPlay();
  }
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();
}
function playerPlay() {
  let rowCoor = arguments.length <= 0 ? undefined : arguments[0];
  let colCoor = arguments.length <= 1 ? undefined : arguments[1];
  let playerCoors = [rowCoor, colCoor];
  let shot = _index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.reciveAttack([...playerCoors]);
  if (shot) {
    botPlay();
    (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createBoard)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7RUFBQSxDQUFDLENBQUM7RUFFN0RmLEtBQUssQ0FBQ3NDLE9BQU8sQ0FBQ3RDLEtBQUssQ0FBQzBDLFFBQVEsQ0FBQ0MsVUFBVSxFQUFDLENBQUNLLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDRixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDbEIsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoSmxELEtBQUssQ0FBQ3NDLE9BQU8sQ0FBQ3RDLEtBQUssQ0FBQzBDLFFBQVEsQ0FBQ0UsU0FBUyxFQUFDLENBQUNJLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDRixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDbEIsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUMvSWxELEtBQUssQ0FBQ3NDLE9BQU8sQ0FBQ3RDLEtBQUssQ0FBQzBDLFFBQVEsQ0FBQ0csU0FBUyxFQUFDLENBQUNHLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDRixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDbEIsVUFBVSxDQUFDZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FB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QUksQ0FBQyxJQUNoQmdELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR2hELENBQUMsR0FBSSxDQUFDLElBQ2pCLElBQUksQ0FBQ0csR0FBRyxDQUFDNkMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUMxQixJQUFJLENBQUM3QyxHQUFHLENBQUM2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHaEQsQ0FBQyxDQUFDLElBQzlCLE9BQU8sSUFBSSxDQUFDRyxHQUFHLENBQUM2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUNHLEdBQUcsQ0FBQzZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdoRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQzlGLE9BQU8sSUFBSSxDQUFDRyxHQUFHLENBQUM2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUNHLEdBQUcsQ0FBQzZDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUdoRCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQzlGLE9BQU8sSUFBSSxDQUFDRyxHQUFHLENBQUM2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQzdDLEdBQUcsQ0FBQzZDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHaEQsQ0FBQyxDQUFDLElBQ2pGLE9BQU8sSUFBSSxD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QTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkLFBsYXllcixib3RQbGF5LCBwbGF5ZXJQbGF5LCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydHtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkLCByYW5kb21pemVCb2FyZCx1c2VyU2hpcFBsYWNlLGF2YWlsU2hpcHMsdXNlckRpcmVjdGlvbn0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5cblxuY29uc3QgYm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpIFxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKVxuY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb20tYnRuXCIpXG5cbmNvbnN0IGVuZW15U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXktc2VjdGlvblwiKVxuY29uc3QgYm90aEJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90aC1ib2FyZHNcIilcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpe1xuICAgIGxldCBwbGF5ZXJzID0gW3BsYXllckdhbWVCb2FyZCxib3RHYW1lQm9hcmQsIF1cbiAgICBmb3IobGV0IGogPSAwO2ogPCAyO2orKyl7XG4gICAgICAgIGJvYXJkW2pdLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCBwbGF5ZXJzW2pdLm1hcC5sZW5ndGg7IHIrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwbGF5ZXJzW2pdLm1hcFtyXS5sZW5ndGg7IGMrKykge1xuXG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChgJHtyfSwke2N9YClcblxuICAgICAgICAgICAgICAgIGlmKGogPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQbGF5KHIsYylcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJob3ZlcjpiZy1ncmF5LTQwMFwiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihqID09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzW2pdLm1hcFtyXVtjXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtODAwXCIpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTaGlwUGxhY2UocGxheWVyR2FtZUJvYXJkLFtyLGNdKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FzZnNhZicpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGF2YWlsU2hpcHMubGVuZ3RoID4gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyfSwke2MgKyBpfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5hZGQoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyICsgaSAgfSwke2MgfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5hZGQoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsKCk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoYXZhaWxTaGlwcy5sZW5ndGggPiAwKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXJEaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3J9LCR7YyArIGl9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3IgKyBpICB9LCR7YyB9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYocGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJIXCIpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXJvc2UtODAwXCIpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJzW2pdLm1hcFtyXVtjXSA9PSBcIk1cIil7XG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwiYmctZ3JheS04MDBcIilcblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIFxuXG5cblxuXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJ3LWZ1bGxcIixcImgtZnVsbFwiLFwiYm9yZGVyXCIsXCJib3JkZXItd2hpdGVcIlxuICAgICAgICAgICAgICAgICxcImJvYXJkLWdyaWRcIixcIm92ZXJmbG93LWhpZGRlblwiKVxuICAgICAgICAgICAgICAgIGJvYXJkW2pdLmFwcGVuZChib2FyZEdyaWQpXG5cblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICBcbn1cblxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKXtcbiAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICBjb25zb2xlLmxvZyhzdGFydEJ0bik7XG4gICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuXG4gICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICBlbmVteVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKVxuXG4gICAgYm90aEJvYXJkcy5jbGFzc0xpc3QuYWRkKFwibGc6Z3JpZC1jb2xzLVs0MCUsNDAlXVwiLClcbiAgICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxufVxuXG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHN0YXJ0R2FtZSlcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJhbmRvbWl6ZUJvYXJkKHBsYXllckdhbWVCb2FyZClcbiAgICBjcmVhdGVCb2FyZCgpXG5cbn0pXG5cblxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkLGJvdFBsYXksIHBsYXllclBsYXksU2hpcCB9IGZyb20gXCIuL21haW5cIjtcbmltcG9ydCB7Y3JlYXRlQm9hcmQsIH0gZnJvbSBcIi4vZG9tLmpzXCJcblxuZXhwb3J0IGxldCBhdmFpbFNoaXBzID0gW1NoaXAoXCJwYXRyb2xCb2F0XCIsMiksU2hpcChcInN1Ym1hcmluZVwiLDMpLFNoaXAoXCJkZXN0cm95ZXJcIiwzKSxcblNoaXAoXCJiYXR0bGVTaGlwXCIsNCksU2hpcChcImNhcnJpZXJcIiw1KV1cbmV4cG9ydCBsZXQgYm90R2FtZUJvYXJkID0gR2FtZUJvYXJkKClcbmV4cG9ydCBsZXQgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKClcbmNvbnN0IGRpcmVjdGlvbnMgPSBbJ2hvcml6b250YWwnLFwidmVydGljYWxcIl1cbmV4cG9ydCBsZXQgdXNlckRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLChlKT0+e1xuXG4gIGlmKGUuY29kZSA9PSBcIlNwYWNlXCIpe1xuICAgIGlmKHVzZXJEaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgdXNlckRpcmVjdGlvbiA9IFwidmVydGljYWxcIlxuICAgIH1lbHNle1xuICAgICAgdXNlckRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG4gICAgfVxuXG4gIH1cbn0pXG5cblxuXG5sZXQgc2hpcHNMZWZ0ID0gdHJ1ZSBcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTaGlwUGxhY2UoYm9hcmQsY29vcnMsZGlyZWNpb249dXNlckRpcmVjdGlvbil7XG5pZiAoc2hpcHNMZWZ0KXtcbiAgY29uc29sZS5sb2coJ2FjdGl2YXRlZCcpO1xuXG4gIGJvYXJkLmFkZFNoaXAoYXZhaWxTaGlwc1swXSxjb29ycyxkaXJlY2lvbilcbiAgbGV0IG1vdmVkc2hpcCA9IGF2YWlsU2hpcHMuc2hpZnQoKVxuICBib2FyZFsnYWxsU2hpcHMnXVttb3ZlZHNoaXAubmFtZV0gPSBtb3ZlZHNoaXBcbn1cblxuXG4gIGlmKGF2YWlsU2hpcHMubGVuZ3RoIDwgMSl7XG4gICAgc2hpcHNMZWZ0ID0gZmFsc2VcbiAgICBjb25zb2xlLmxvZygndSBhcmUgZG9uZSBuYW5hJyk7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpXG5cblxufVxuXG4vLyB1c2VyU2hpcFBsYWNlKHBsYXllckdhbWVCb2FyZCxbMCwwXSlcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVCb2FyZChib2FyZCl7XG5cbiAgYm9hcmQuYWxsU2hpcHMgPSB7XG4gICAgICAgIHBhdHJvbEJvYXQgOiBTaGlwKFwicGF0cm9sQm9hdFwiLDIpLFxuICAgICAgICBzdWJtYXJpbmUgOiBTaGlwKFwic3VibWFyaW5lXCIsMyksXG4gICAgICAgIGRlc3Ryb3llciA6IFNoaXAoXCJkZXN0cm95ZXJcIiwzKSxcbiAgICAgICAgYmF0dGxlU2hpcCA6IFNoaXAoXCJiYXR0bGVTaGlwXCIsNCksXG4gICAgICAgIGNhcnJpZXIgOiBTaGlwKFwiY2FycmllclwiLDUpXG4gIH1cblxuICBpZiggYm9hcmQgPT0gcGxheWVyR2FtZUJvYXJkKXtcbiAgICBzaGlwc0xlZnQgPSBmYWxzZTtcblxuICB9XG4gIGJvYXJkLm1hcCA9IGJvYXJkLm1hcC5tYXAoKCk9PntyZXR1cm4gWzAsMCwwLDAsMCwwLDAsMCwwLDBdfSlcblxuICBib2FyZC5hZGRTaGlwKGJvYXJkLmFsbFNoaXBzLnBhdHJvbEJvYXQsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5zdWJtYXJpbmUsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5kZXN0cm95ZXIsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5iYXR0bGVTaGlwLFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pXG4gIGJvYXJkLmFkZFNoaXAoYm9hcmQuYWxsU2hpcHMuY2FycmllcixbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildKVxuICBcblxufVxuXG5cbnJhbmRvbWl6ZUJvYXJkKGJvdEdhbWVCb2FyZClcbi8vIHJhbmRvbWl6ZUJvYXJkKHBsYXllckdhbWVCb2FyZClcblxuY3JlYXRlQm9hcmQoKVxuXG5cblxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQgfSBmcm9tIFwiLi9kb20uanNcIlxuaW1wb3J0e3BsYXllckdhbWVCb2FyZCxib3RHYW1lQm9hcmR9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuXG5cblxuZnVuY3Rpb24gU2hpcChuYW1lLGxlbmd0aCl7XG4gICAgbGV0IGhpdHMgPSAwXG4gICAgbGV0IHNhbmsgPSBmYWxzZSBcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgaGl0cysrXG4gICAgICAgIGlmKGhpdHMgPj0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2luaygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2luaygpe1xuICAgICAgICB0aGlzLnNhbmsgPSB0cnVlIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAnIEhBUyBTQU5LS0tLIScpO1xuICAgIH1cbiAgICByZXR1cm57bmFtZSxsZW5ndGgsaGl0LHNhbmssc2lua31cblxufVxuXG5cbmZ1bmN0aW9uIEdhbWVCb2FyZCgpe1xuICAgIGNvbnN0IGF0dGFja3NNaXNzZWQgPSBbXVxuICAgIGNvbnN0IGF0dGFja3NIaXQgPSAgW11cbiAgICBjb25zdCBtYXAgPSBbXVxuICAgIGNvbnN0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBtYXAucHVzaChbLi4ucm93XSlcbiAgICB9XG5cbiAgICBsZXQgYWxsU2hpcHMgPSB7XG4gICAgICAgIFxuICAgIH1cbiBcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWydob3Jpem9udGFsJyxcInZlcnRpY2FsXCJdXG4gICAgXG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaGlwLGNvb3IsZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICBpZihkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpeyAgXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGNvb3JzIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxIF0gPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgKGNvb3JbMV0gKyBqKSA+IDl8fCBcbiAgICAgICAgICAgICAgICAoY29vclsxXSArIGopIDwgMHx8XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXV0gfHxcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgal18fFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiArIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogKyAxXXx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiAtIDFdfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXSArIDFdW2Nvb3JbMV0gKyBqXXx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gLSAxXVtjb29yWzFdICsgaiBdXG5cblxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTaGlwKHRoaXMuYWxsU2hpcHNbc2hpcC5uYW1lXSxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaV0gPSBzaGlwLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY29vcnMgYXZhaWxhYmxlXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgIChjb29yWzBdICsgaikgPiA5fHwgXG4gICAgICAgICAgICAgICAgICAgIChjb29yWzBdICsgaikgPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAgKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdICArIDFdfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdICArIGpdW2Nvb3JbMV0gLSAxXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdICsgMV1bY29vclsxXSArIGpdfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gLSAxXVtjb29yWzFdICsgaiBdXG4gICAgXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2hpcCh0aGlzLmFsbFNoaXBzW3NoaXAubmFtZV0sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSlcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBpXVtjb29yWzFdXSA9IHNoaXAubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWNpdmVBdHRhY2soY29vcnMpe1xuXG4gICAgICAgIC8vY2hlY2tzIGlmIGFscmVhZHkgc2hvdFxuICAgICAgICBmb3IobGV0IGFyciBvZiBbLi4uYXR0YWNrc0hpdCwgLi4uYXR0YWNrc01pc3NlZF0pe1xuICAgICAgICAgICAgaWYoYXJyWzBdID09IGNvb3JzWzBdKXtcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzFdID09IGNvb3JzWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FscmVhZHkgc2hvdCB0aGVyZSAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9ldmFsdWF0ZXMgaWYgdGhlIHNob3QgaGl0IG9yIG1pc3NlZCBcbiAgICAgICAgaWYodGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSl7XG4gICAgICAgICAgICBhdHRhY2tzSGl0LnB1c2goY29vcnMpXG4gICAgICAgICAgICAvL3R1cm4gbmFtZSBzdHJpbmcgaW50byB2YXJpYWJsZSB0byBoaXQgY29ycmVjdCBzaGlwIFxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoYXRzIGEgaGl0IScpO1xuICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5oaXQoKVxuICAgICAgICAgICAgaWYodGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5zYW5rKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dID0gJ0gnXG4gICAgICAgICAgICBcblxuXG4gICAgICAgIFxuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGF0dGFja3NNaXNzZWQucHVzaChjb29ycylcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV0gPSAnTSdcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNSVNTRURAIScpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWUgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJue21hcCxhZGRTaGlwLHJlY2l2ZUF0dGFjayxhbGxTaGlwc31cbn1cblxuZnVuY3Rpb24gYm90UGxheSgpe1xuICAgIGxldCBzaG90ID0gcGxheWVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKV0pXG4gICAgaWYoc2hvdCl7XG4gICAgICAgIHJldHVybiB0cnVlIFxuICAgIH1lbHNle1xuICAgICAgICBib3RQbGF5KClcbiAgICB9XG4gICAgY3JlYXRlQm9hcmQoKVxuXG59XG5cbmZ1bmN0aW9uIHBsYXllclBsYXkoLi4uY29vcnMpe1xuICAgIFxuICAgIGxldCByb3dDb29yID0gY29vcnNbMF1cbiAgICBsZXQgY29sQ29vciA9IGNvb3JzWzFdXG4gICAgbGV0IHBsYXllckNvb3JzID0gW3Jvd0Nvb3IsY29sQ29vcl1cbiAgICBsZXQgc2hvdCA9IGJvdEdhbWVCb2FyZC5yZWNpdmVBdHRhY2soWy4uLnBsYXllckNvb3JzXSlcbiAgICAgICAgaWYoc2hvdCl7XG4gICAgICAgICAgICBib3RQbGF5KClcblxuICAgICAgICAgICAgY3JlYXRlQm9hcmQoKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzaG90KTtcbiAgICAgICAgICAgIHBsYXllclBsYXkoKVxuICAgICAgICB9XG5cbn1cblxuXG5leHBvcnR7U2hpcCxHYW1lQm9hcmQsYm90UGxheSxwbGF5ZXJQbGF5fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJQbGF5ZXIiLCJib3RQbGF5IiwicGxheWVyUGxheSIsInBsYXllckdhbWVCb2FyZCIsImJvdEdhbWVCb2FyZCIsInJhbmRvbWl6ZUJvYXJkIiwidXNlclNoaXBQbGFjZSIsImF2YWlsU2hpcHMiLCJ1c2VyRGlyZWN0aW9uIiwiYm9hcmQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFydEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyYW5kb21CdG4iLCJlbmVteVNlY3Rpb24iLCJib3RoQm9hcmRzIiwiY3JlYXRlQm9hcmQiLCJwbGF5ZXJzIiwiaiIsImlubmVySFRNTCIsInIiLCJtYXAiLCJsZW5ndGgiLCJjIiwiYm9hcmRHcmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwiaSIsImN1cnJlbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicmVtb3ZlIiwiYXBwZW5kIiwic3RhcnRHYW1lIiwiU2hpcCIsImRpcmVjdGlvbnMiLCJlIiwiY29kZSIsInNoaXBzTGVmdCIsImNvb3JzIiwiZGlyZWNpb24iLCJhZGRTaGlwIiwibW92ZWRzaGlwIiwic2hpZnQiLCJuYW1lIiwiYWxsU2hpcHMiLCJwYXRyb2xCb2F0Iiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiYmF0dGxlU2hpcCIsImNhcnJpZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoaXRzIiwic2FuayIsImhpdCIsInNpbmsiLCJhdHRhY2tzTWlzc2VkIiwiYXR0YWNrc0hpdCIsInJvdyIsInB1c2giLCJzaGlwIiwiY29vciIsImRpcmVjdGlvbiIsInJlY2l2ZUF0dGFjayIsImFyciIsInNob3QiLCJyb3dDb29yIiwiY29sQ29vciIsInBsYXllckNvb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==