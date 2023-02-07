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
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "endGame": () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


const board = Array.from(document.querySelectorAll(".board"));
const startBtn = document.querySelector(".start-btn");
const randomBtn = document.querySelector(".random-btn");
const resetBtn = document.querySelector(".reset-btn");
const restartBtn = document.querySelector(".restart-btn");
const restartBtn2 = document.querySelector(".restart-btn2");
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
          });
          boardGrid.addEventListener("mouseover", () => {
            if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft > 0) {
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
            if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft) {
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
  if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft == false) {
    startBtn.classList.add("hidden");
    enemySection.classList.remove("hidden");
    enemySection.classList.add("appear");
    bothBoards.classList.add("lg:grid-cols-[40%,40%]");
    randomBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
  }
}
startBtn.addEventListener("click", startGame);
randomBtn.addEventListener("click", () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.randomizeBoard)(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard);
  createBoard();
});
resetBtn.addEventListener("click", () => {
  (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.resetMap)();
  createBoard();
});
restartBtn.addEventListener("click", () => {
  location.reload();
});
restartBtn2.addEventListener("click", () => {
  location.reload();
});
let endScreen = document.querySelector(".end-screen");
let winEndScreen = document.querySelector(".win-end-screen");
function endGame(winner) {
  if (winner == "player") {
    winEndScreen.classList.remove("hidden");
  } else {
    endScreen.classList.remove("hidden");
  }
}

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
/* harmony export */   "resetMap": () => (/* binding */ resetMap),
/* harmony export */   "shipsLeft": () => (/* binding */ shipsLeft),
/* harmony export */   "shipsList": () => (/* binding */ shipsList),
/* harmony export */   "userDirection": () => (/* binding */ userDirection),
/* harmony export */   "userShipPlace": () => (/* binding */ userShipPlace)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");


let shipsList = [(0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("patrolBoat", 2), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("submarine", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("destroyer", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("battleShip", 4), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("carrier", 5)];
let availShips = [...shipsList];
let shipsLeft = true;
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
function userShipPlace(board, coors) {
  let direcion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : userDirection;
  if (shipsLeft) {
    board.addShip(availShips[0], coors, direcion);
    let movedship = availShips.shift();
    board['allShips'][movedship.name] = movedship;
  }
  if (availShips.length < 1) {
    shipsLeft = false;
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
function resetMap() {
  playerGameBoard.map = playerGameBoard.map.map(() => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });
  playerGameBoard.allShips = {};
  shipsLeft = true;
  availShips = [...shipsList];
  console.log(availShips);
}
randomizeBoard(botGameBoard);
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

        //call game over
        if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.allShips).length < 1 || Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
          if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "player");
          } else {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "bot");
          }
          console.log('GAME OVER');
        }
        ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQztRQUNoQyxJQUNDc0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEQsQ0FBQyxHQUFJLENBQUMsSUFDaEJzRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUd0RCxDQUFDLEdBQUksQ0FBQyxJQUNqQixJQUFJLENBQUNHLEdBQUcsQ0FBQ21ELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFDMUIsSUFBSSxDQUFDbkQsR0FBRyxDQUFDbUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RELENBQUMsQ0FBQyxJQUM5QixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDbUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDRyxHQUFHLENBQUNtRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUM5RixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDbUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR3RELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDRyxHQUFHLENBQUNtRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHdEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUM5RixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDbUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUNuRCxHQUFHLENBQUNtRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLElB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SUMsT0FBTyxtREFBVztFQUN0QixJQUFJQyxXQUFXLEdBQUcsQ0FBQ0YsT0FBTyxFQUFDQyxPQUFPLENBQUM7RUFDbkMsSUFBSUYsSUFBSSxHQUFHbkYsZ0VBQXlCLENBQUMsQ0FBQyxHQUFHc0YsV0FBVyxDQUFDLENBQUM7RUFDbEQsSUFBR0gsSUFBSSxFQUFDO0lBQ0p0RixPQUFPLEVBQUU7SUFFVHVCLG9EQUFXLEVBQUU7SUFFYixPQUFPLElBQUk7RUFDZixDQUFDLE1BQUk7SUFDRDZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDaUIsSUFBSSxDQUFDO0lBQ2pCckYsVUFBVSxFQUFFO0VBQ2hCO0FBRVI7Ozs7Ozs7VUN4TEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCb2FyZCxQbGF5ZXIsYm90UGxheSwgcGxheWVyUGxheSwgIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0e3BsYXllckdhbWVCb2FyZCxib3RHYW1lQm9hcmQsIHJhbmRvbWl6ZUJvYXJkLHVzZXJTaGlwUGxhY2UsYXZhaWxTaGlwcyx1c2VyRGlyZWN0aW9uLHNoaXBzTGVmdCxyZXNldE1hcH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5cblxuY29uc3QgYm9hcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRcIikpIFxuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0LWJ0blwiKVxuY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb20tYnRuXCIpXG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnRuXCIpXG5jb25zdCByZXN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0LWJ0blwiKVxuY29uc3QgcmVzdGFydEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuMlwiKVxuXG5cblxuXG5jb25zdCBlbmVteVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZW15LXNlY3Rpb25cIilcbmNvbnN0IGJvdGhCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdGgtYm9hcmRzXCIpXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKXtcbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkLCBdXG4gICAgZm9yKGxldCBqID0gMDtqIDwgMjtqKyspe1xuICAgICAgICBib2FyZFtqXS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcGxheWVyc1tqXS5tYXAubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGxheWVyc1tqXS5tYXBbcl0ubGVuZ3RoOyBjKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoYCR7cn0sJHtjfWApXG5cbiAgICAgICAgICAgICAgICBpZihqID09IDEpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQbGF5KHIsYylcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJob3ZlcjpiZy1ncmF5LTQwMFwiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihqID09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXJzW2pdLm1hcFtyXVtjXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtODAwXCIpXG4gICAgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJTaGlwUGxhY2UocGxheWVyR2FtZUJvYXJkLFtyLGNdKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoaXBzTGVmdCA+IDApe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodXNlckRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IGF2YWlsU2hpcHNbMF0ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7cn0sJHtjICsgaX1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc0xpc3QuYWRkKFwiYmctdGVhbC01MDBcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IGF2YWlsU2hpcHNbMF0ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYCR7ciArIGkgIH0sJHtjIH1gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc0xpc3QuYWRkKFwiYmctdGVhbC01MDBcIik7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCgpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNoaXBzTGVmdCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyfSwke2MgKyBpfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyICsgaSAgfSwke2MgfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJIXCIpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXJvc2UtODAwXCIpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJNXCIpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLWdyYXktODAwXCIpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInctZnVsbFwiLFwiaC1mdWxsXCIsXCJib3JkZXJcIixcImJvcmRlci13aGl0ZVwiXG4gICAgICAgICAgICAgICAgLFwiYm9hcmQtZ3JpZFwiLFwib3ZlcmZsb3ctaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgYm9hcmRbal0uYXBwZW5kKGJvYXJkR3JpZClcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIFxufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpe1xuICAgIGlmKHNoaXBzTGVmdCA9PSBmYWxzZSl7XG4gICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICBcbiAgICAgICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIilcbiAgICBcbiAgICAgICAgYm90aEJvYXJkcy5jbGFzc0xpc3QuYWRkKFwibGc6Z3JpZC1jb2xzLVs0MCUsNDAlXVwiLClcbiAgICAgICAgcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgcmVzZXRCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgIH1cbiAgICBcbn1cblxuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixzdGFydEdhbWUpXG5yYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICByYW5kb21pemVCb2FyZChwbGF5ZXJHYW1lQm9hcmQpXG4gICAgY3JlYXRlQm9hcmQoKVxuXG59KVxuXG5yZXNldEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJlc2V0TWFwKClcbiAgICBjcmVhdGVCb2FyZCgpXG59KVxuXG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgbG9jYXRpb24ucmVsb2FkKClcbn0pXG5cbnJlc3RhcnRCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgbG9jYXRpb24ucmVsb2FkKClcbn0pXG5cblxubGV0IGVuZFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLXNjcmVlblwiKVxubGV0IHdpbkVuZFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luLWVuZC1zY3JlZW5cIilcblxuZXhwb3J0IGZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKXtcbiAgICBpZih3aW5uZXIgPT0gXCJwbGF5ZXJcIil7XG5cbiAgICAgICAgd2luRW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICAgIH1lbHNle1xuXG4gICAgICAgIGVuZFNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG5cbiAgICB9XG5cbn0iLCJpbXBvcnQgeyBHYW1lQm9hcmQsYm90UGxheSwgcGxheWVyUGxheSxTaGlwIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHtjcmVhdGVCb2FyZCwgfSBmcm9tIFwiLi9kb20uanNcIlxuXG5cbmV4cG9ydCBsZXQgc2hpcHNMaXN0ID0gW1NoaXAoXCJwYXRyb2xCb2F0XCIsMiksU2hpcChcInN1Ym1hcmluZVwiLDMpLFNoaXAoXCJkZXN0cm95ZXJcIiwzKSxcblNoaXAoXCJiYXR0bGVTaGlwXCIsNCksU2hpcChcImNhcnJpZXJcIiw1KV1cblxuXG5leHBvcnQgbGV0IGF2YWlsU2hpcHMgPSBbLi4uc2hpcHNMaXN0XVxuZXhwb3J0IGxldCBzaGlwc0xlZnQgPSB0cnVlIFxuXG5cblxuXG5cbmV4cG9ydCBsZXQgYm90R2FtZUJvYXJkID0gR2FtZUJvYXJkKClcbmV4cG9ydCBsZXQgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKClcbmNvbnN0IGRpcmVjdGlvbnMgPSBbJ2hvcml6b250YWwnLFwidmVydGljYWxcIl1cbmV4cG9ydCBsZXQgdXNlckRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiXG5cblxuXG5cblxuXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwoZSk9PntcblxuICBpZihlLmNvZGUgPT0gXCJTcGFjZVwiKXtcbiAgICBpZih1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgIHVzZXJEaXJlY3Rpb24gPSBcInZlcnRpY2FsXCJcbiAgICB9ZWxzZXtcbiAgICAgIHVzZXJEaXJlY3Rpb24gPSBcImhvcml6b250YWxcIiBcbiAgICB9XG5cbiAgfVxufSlcblxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTaGlwUGxhY2UoYm9hcmQsY29vcnMsZGlyZWNpb249dXNlckRpcmVjdGlvbil7XG5pZiAoc2hpcHNMZWZ0KXtcblxuICBib2FyZC5hZGRTaGlwKGF2YWlsU2hpcHNbMF0sY29vcnMsZGlyZWNpb24pXG4gIGxldCBtb3ZlZHNoaXAgPSBhdmFpbFNoaXBzLnNoaWZ0KClcbiAgYm9hcmRbJ2FsbFNoaXBzJ11bbW92ZWRzaGlwLm5hbWVdID0gbW92ZWRzaGlwXG59XG5cblxuICBpZihhdmFpbFNoaXBzLmxlbmd0aCA8IDEpe1xuICAgIHNoaXBzTGVmdCA9IGZhbHNlXG4gIH1cblxuICBjcmVhdGVCb2FyZCgpXG5cblxufVxuXG4vLyB1c2VyU2hpcFBsYWNlKHBsYXllckdhbWVCb2FyZCxbMCwwXSlcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVCb2FyZChib2FyZCl7XG5cbiAgYm9hcmQuYWxsU2hpcHMgPSB7XG4gICAgICAgIHBhdHJvbEJvYXQgOiBTaGlwKFwicGF0cm9sQm9hdFwiLDIpLFxuICAgICAgICBzdWJtYXJpbmUgOiBTaGlwKFwic3VibWFyaW5lXCIsMyksXG4gICAgICAgIGRlc3Ryb3llciA6IFNoaXAoXCJkZXN0cm95ZXJcIiwzKSxcbiAgICAgICAgYmF0dGxlU2hpcCA6IFNoaXAoXCJiYXR0bGVTaGlwXCIsNCksXG4gICAgICAgIGNhcnJpZXIgOiBTaGlwKFwiY2FycmllclwiLDUpXG4gIH1cblxuICBpZiggYm9hcmQgPT0gcGxheWVyR2FtZUJvYXJkKXtcbiAgICBzaGlwc0xlZnQgPSBmYWxzZTtcblxuICB9XG4gIGJvYXJkLm1hcCA9IGJvYXJkLm1hcC5tYXAoKCk9PntyZXR1cm4gWzAsMCwwLDAsMCwwLDAsMCwwLDBdfSlcblxuICBib2FyZC5hZGRTaGlwKGJvYXJkLmFsbFNoaXBzLnBhdHJvbEJvYXQsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5zdWJtYXJpbmUsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5kZXN0cm95ZXIsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5iYXR0bGVTaGlwLFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pXG4gIGJvYXJkLmFkZFNoaXAoYm9hcmQuYWxsU2hpcHMuY2FycmllcixbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildKVxuICBcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzZXRNYXAoKXtcbiAgcGxheWVyR2FtZUJvYXJkLm1hcCA9IHBsYXllckdhbWVCb2FyZC5tYXAubWFwKCgpPT57cmV0dXJuIFswLDAsMCwwLDAsMCwwLDAsMCwwXX0pXG4gIHBsYXllckdhbWVCb2FyZC5hbGxTaGlwcyA9IHt9XG4gIHNoaXBzTGVmdCA9IHRydWVcbiAgYXZhaWxTaGlwcyA9IFsuLi5zaGlwc0xpc3RdXG4gIGNvbnNvbGUubG9nKGF2YWlsU2hpcHMpO1xufVxuXG5cblxuXG5cblxucmFuZG9taXplQm9hcmQoYm90R2FtZUJvYXJkKVxuXG5jcmVhdGVCb2FyZCgpXG5cblxuXG4iLCJpbXBvcnQgeyBjcmVhdGVCb2FyZCxlbmRHYW1lIH0gZnJvbSBcIi4vZG9tLmpzXCJcbmltcG9ydHtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkLH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5cblxuZnVuY3Rpb24gU2hpcChuYW1lLGxlbmd0aCl7XG4gICAgbGV0IGhpdHMgPSAwXG4gICAgbGV0IHNhbmsgPSBmYWxzZSBcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgaGl0cysrXG4gICAgICAgIGlmKGhpdHMgPj0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2luaygpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gc2luaygpe1xuICAgICAgICB0aGlzLnNhbmsgPSB0cnVlIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAnIEhBUyBTQU5LS0tLIScpO1xuICAgICBcbiAgICB9XG4gICAgcmV0dXJue25hbWUsbGVuZ3RoLGhpdCxzYW5rLHNpbmt9XG5cbn1cblxuXG5mdW5jdGlvbiBHYW1lQm9hcmQoKXtcbiAgICBjb25zdCBhdHRhY2tzTWlzc2VkID0gW11cbiAgICBjb25zdCBhdHRhY2tzSGl0ID0gIFtdXG4gICAgY29uc3QgbWFwID0gW11cbiAgICBjb25zdCByb3cgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgbWFwLnB1c2goWy4uLnJvd10pXG4gICAgfVxuXG4gICAgbGV0IGFsbFNoaXBzID0ge1xuICAgICAgICBcbiAgICB9XG4gXG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsnaG9yaXpvbnRhbCcsXCJ2ZXJ0aWNhbFwiXVxuICAgIFxuICAgIGZ1bmN0aW9uIGFkZFNoaXAoc2hpcCxjb29yLGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgaWYoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXsgIFxuICAgICAgICAgICAgLy9jaGVjayBpZiBjb29ycyBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdIC0gMSBdID09IHVuZGVmaW5lZCk7XG4gICAgICAgIFxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgIChjb29yWzFdICsgaikgPiA5fHwgXG4gICAgICAgICAgICAgICAgKGNvb3JbMV0gKyBqKSA8IDB8fFxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGpdfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqICsgMV18fFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiAtIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogLSAxXXx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gKyAxXVtjb29yWzFdICsgal18fFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdIC0gMV1bY29vclsxXSArIGogXVxuXG5cblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2hpcCh0aGlzLmFsbFNoaXBzW3NoaXAubmFtZV0sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2FkZCBTaGlwIFRvIEJvYXJkXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGldID0gc2hpcC5uYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGNvb3JzIGF2YWlsYWJsZVxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspe1xuICAgICAgICAgICAgICAgIGlmKFxuICAgICAgICAgICAgICAgICAgICAoY29vclswXSArIGopID4gOXx8IFxuICAgICAgICAgICAgICAgICAgICAoY29vclswXSArIGopIDwgMCB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdXSB8fFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXV18fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIGpdW2Nvb3JbMV0gICsgMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAgKyAxXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAtIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXSAgKyBqXVtjb29yWzFdIC0gMV18fFxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXSArIDFdW2Nvb3JbMV0gKyBqXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdIC0gMV1bY29vclsxXSArIGogXVxuICAgIFxuXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFNoaXAodGhpcy5hbGxTaGlwc1tzaGlwLm5hbWVdLFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0pXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2FkZCBTaGlwIFRvIEJvYXJkXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKyl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdICsgaV1bY29vclsxXV0gPSBzaGlwLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gcmVjaXZlQXR0YWNrKGNvb3JzKXtcblxuICAgICAgICAvL2NoZWNrcyBpZiBhbHJlYWR5IHNob3RcbiAgICAgICAgZm9yKGxldCBhcnIgb2YgWy4uLmF0dGFja3NIaXQsIC4uLmF0dGFja3NNaXNzZWRdKXtcbiAgICAgICAgICAgIGlmKGFyclswXSA9PSBjb29yc1swXSl7XG4gICAgICAgICAgICAgICAgaWYgKGFyclsxXSA9PSBjb29yc1sxXSl7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IHNob3QgdGhlcmUgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZXZhbHVhdGVzIGlmIHRoZSBzaG90IGhpdCBvciBtaXNzZWQgXG4gICAgICAgIGlmKHRoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV0pe1xuICAgICAgICAgICAgYXR0YWNrc0hpdC5wdXNoKGNvb3JzKVxuICAgICAgICAgICAgLy90dXJuIG5hbWUgc3RyaW5nIGludG8gdmFyaWFibGUgdG8gaGl0IGNvcnJlY3Qgc2hpcCBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUaGF0cyBhIGhpdCEnKTtcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV0uaGl0KClcbiAgICAgICAgICAgIGlmKHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV0uc2Fuayl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV1cblxuICAgICAgICAgICAgICAgIC8vY2FsbCBnYW1lIG92ZXJcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyhwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMpLmxlbmd0aCA8IDEgfHxPYmplY3Qua2V5cyggYm90R2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKGJvdEdhbWVCb2FyZC5hbGxTaGlwcykubGVuZ3RoIDwgMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZEdhbWUsNTAwLFwicGxheWVyXCIpIFxuXG5cbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGVuZEdhbWUsNTAwLFwiYm90XCIpIFxuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0dBTUUgT1ZFUicpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV0gPSAnSCdcbiAgICAgICAgICAgIFxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgYXR0YWNrc01pc3NlZC5wdXNoKGNvb3JzKVxuICAgICAgICAgICAgdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSA9ICdNJ1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01JU1NFREAhJyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSBcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm57bWFwLGFkZFNoaXAscmVjaXZlQXR0YWNrLGFsbFNoaXBzfVxufVxuXG5mdW5jdGlvbiBib3RQbGF5KCl7XG4gICAgbGV0IHNob3QgPSBwbGF5ZXJHYW1lQm9hcmQucmVjaXZlQXR0YWNrKFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSlcbiAgICBpZihzaG90KXtcbiAgICAgICAgcmV0dXJuIHRydWUgXG4gICAgfWVsc2V7XG4gICAgICAgIGJvdFBsYXkoKVxuICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpXG5cbn1cblxuZnVuY3Rpb24gcGxheWVyUGxheSguLi5jb29ycyl7XG4gICAgXG4gICAgbGV0IHJvd0Nvb3IgPSBjb29yc1swXVxuICAgIGxldCBjb2xDb29yID0gY29vcnNbMV1cbiAgICBsZXQgcGxheWVyQ29vcnMgPSBbcm93Q29vcixjb2xDb29yXVxuICAgIGxldCBzaG90ID0gYm90R2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhbLi4ucGxheWVyQ29vcnNdKVxuICAgICAgICBpZihzaG90KXtcbiAgICAgICAgICAgIGJvdFBsYXkoKVxuXG4gICAgICAgICAgICBjcmVhdGVCb2FyZCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3QpO1xuICAgICAgICAgICAgcGxheWVyUGxheSgpXG4gICAgICAgIH1cblxufVxuXG5cblxuXG5leHBvcnR7U2hpcCxHYW1lQm9hcmQsYm90UGxheSxwbGF5ZXJQbGF5LH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiUGxheWVyIiwiYm90UGxheSIsInBsYXllclBsYXkiLCJwbGF5ZXJHYW1lQm9hcmQiLCJib3RHYW1lQm9hcmQiLCJyYW5kb21pemVCb2FyZCIsInVzZXJTaGlwUGxhY2UiLCJhdmFpbFNoaXBzIiwidXNlckRpcmVjdGlvbiIsInNoaXBzTGVmdCIsInJlc2V0TWFwIiwiYm9hcmQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFydEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyYW5kb21CdG4iLCJyZXNldEJ0biIsInJlc3RhcnRCdG4iLCJyZXN0YXJ0QnRuMiIsImVuZW15U2VjdGlvbiIsImJvdGhCb2FyZHMiLCJjcmVhdGVCb2FyZCIsInBsYXllcnMiLCJqIiwiaW5uZXJIVE1MIiwiciIsIm1hcCIsImxlbmd0aCIsImMiLCJib2FyZEdyaWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImkiLCJjdXJyZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsImFwcGVuZCIsInN0YXJ0R2FtZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZW5kU2NyZWVuIiwid2luRW5kU2NyZWVuIiwiZW5kR2FtZSIsIndpbm5lciIsIlNoaXAiLCJzaGlwc0xpc3QiLCJkaXJlY3Rpb25zIiwiZSIsImNvZGUiLCJjb29ycyIsImRpcmVjaW9uIiwiYWRkU2hpcCIsIm1vdmVkc2hpcCIsInNoaWZ0IiwibmFtZSIsImFsbFNoaXBzIiwicGF0cm9sQm9hdCIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImJhdHRsZVNoaXAiLCJjYXJyaWVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImhpdHMiLCJzYW5rIiwiaGl0Iiwic2luayIsImF0dGFja3NNaXNzZWQiLCJhdHRhY2tzSGl0Iiwicm93IiwicHVzaCIsInNoaXAiLCJjb29yIiwiZGlyZWN0aW9uIiwicmVjaXZlQXR0YWNrIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNldFRpbWVvdXQiLCJzaG90Iiwicm93Q29vciIsImNvbENvb3IiLCJwbGF5ZXJDb29ycyJdLCJzb3VyY2VSb290IjoiIn0=