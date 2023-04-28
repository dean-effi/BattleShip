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
/* harmony export */   "endGame": () => (/* binding */ endGame),
/* harmony export */   "updateConsole": () => (/* binding */ updateConsole),
/* harmony export */   "userDirection": () => (/* binding */ userDirection)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/scripts/index.js");


const board = Array.from(document.querySelectorAll(".board"));
const startBtn = document.querySelector(".start-btn");
const randomBtn = document.querySelector(".random-btn");
const resetBtn = document.querySelector(".reset-btn");
const restartBtn = document.querySelector(".restart-btn");
const restartBtn2 = document.querySelector(".restart-btn2");
const explain = document.querySelector(".explain");
const eventsConsole = document.querySelector(".console");
const enemyText = document.querySelector(".enemy-txt");
const playerText = document.querySelector(".player-txt");
const enemySection = document.querySelector(".enemy-section");
const bothBoards = document.querySelector(".both-boards");
const endScreen = document.querySelector(".end-screen");
const winEndScreen = document.querySelector(".win-end-screen");
function createBoard() {
  if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft) {
    explain.textContent = `Place Your ${_index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].name[0].toUpperCase() + _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].name.substring(1)} Press Space to Rotate`;
  } else {
    explain.textContent = `Your Ships Are All Set!`;
  }
  let players = [_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard, _index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard];
  for (let j = 0; j < 2; j++) {
    board[j].innerHTML = "";
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
          if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.allShips).includes(players[j].map[r][c]) || players[j].map[r][c] == "H") {
            boardGrid.classList.add("bg-teal-800");
          }
          boardGrid.addEventListener("click", () => {
            (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.userShipPlace)(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard, [r, c]);
          });
          boardGrid.addEventListener("mouseover", () => {
            if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft > 0) {
              if (userDirection == "horizontal") {
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
              if (userDirection == "horizontal") {
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
          let shotSign = document.createElement("div");
          boardGrid.append(shotSign);
          boardGrid.classList.add("relative");
          shotSign.classList.add("lg:h-5", "lg:w-5", "bg-rose-800", "rounded-full", "absolute", "top-[32%]", "left-[37%]", "h-2", "w-2", "lg:top-[29%]", "lg:left-[33%]");
        }
        if (players[j].map[r][c] == "M") {
          let shotSign = document.createElement("div");
          boardGrid.append(shotSign);
          boardGrid.classList.add("relative");
          shotSign.classList.add("lg:h-5", "lg:w-5", "bg-white", "rounded-full", "absolute", "top-[32%]", "left-[37%]", "h-2", "w-2", "lg:top-[29%]", "lg:left-[33%]");
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
    eventsConsole.classList.remove("hidden");
    bothBoards.classList.remove("lg:grid-cols-[45%]");
    bothBoards.classList.remove("grid-rows-[50%,20%,5%]");
    bothBoards.classList.add("lg:grid-cols-[40%,40%]");
    randomBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    explain.classList.add("hidden");
  }
}
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
function endGame(winner) {
  if (winner == "player") {
    winEndScreen.classList.remove("hidden");
  } else {
    endScreen.classList.remove("hidden");
  }
}
function updateConsole(boardName, msg) {
  let color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "white";
  if (boardName == "enemy") {
    playerText.textContent = " - You Have" + msg;
    playerText.style.color = color;
  } else {
    enemyText.textContent = " - Enemy Has" + msg;
    enemyText.style.color = color;
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
/* harmony export */   "directions": () => (/* binding */ directions),
/* harmony export */   "playerGameBoard": () => (/* binding */ playerGameBoard),
/* harmony export */   "randomizeBoard": () => (/* binding */ randomizeBoard),
/* harmony export */   "resetMap": () => (/* binding */ resetMap),
/* harmony export */   "shipsLeft": () => (/* binding */ shipsLeft),
/* harmony export */   "shipsList": () => (/* binding */ shipsList),
/* harmony export */   "userShipPlace": () => (/* binding */ userShipPlace)
/* harmony export */ });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/scripts/main.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ "./src/scripts/dom.js");


let shipsList = [(0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("patrolBoat", 2), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("submarine", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("destroyer", 3), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("battleShip", 4), (0,_main__WEBPACK_IMPORTED_MODULE_0__.Ship)("carrier", 5)];
let availShips = [...shipsList];
let shipsLeft = true;
let botGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)("enemy");
let playerGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)("player");
const directions = ["horizontal", "vertical"];
function userShipPlace(board, coors) {
  let direcion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _dom_js__WEBPACK_IMPORTED_MODULE_1__.userDirection;
  if (shipsLeft) {
    board.addShip(availShips[0], coors, direcion);
    let movedship = availShips.shift();
    board["allShips"][movedship.name] = movedship;
  }
  if (availShips.length < 1) {
    shipsLeft = false;
  }
  (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)();
}
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
  Object.keys(board.allShips).forEach(ship => {
    board.addShip(board.allShips[ship], [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)], directions[Math.floor(Math.random() * 2)]);
  });
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
    console.log(this.name + " HAS SANKKKK!");
  }
  return {
    name,
    length,
    hit,
    sank,
    sink
  };
}
function GameBoard(name) {
  const boardName = name;
  const attacksMissed = [];
  const attacksHit = [];
  const map = [];
  const row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < 10; i++) {
    map.push([...row]);
  }
  let allShips = {};
  const directions = ["horizontal", "vertical"];
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
          console.log("already shot there ");
          return 0;
        }
      }
    }
    //evaluates if the shot hit or missed
    if (this.map[coors[0]][coors[1]]) {
      attacksHit.push(coors);
      //turn name string into variable to hit correct ship
      console.log(this.boardName);
      console.log("Thats a hit!");
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Hit The " + this.allShips[this.map[coors[0]][coors[1]]].name.toUpperCase());
      this.allShips[this.map[coors[0]][coors[1]]].hit();
      if (this.allShips[this.map[coors[0]][coors[1]]].sank) {
        if (this.boardName == "enemy") {
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Sank The " + this.allShips[this.map[coors[0]][coors[1]]].name, "green");
        } else {
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Sank The " + this.allShips[this.map[coors[0]][coors[1]]].name, "red");
        }
        delete this.allShips[this.map[coors[0]][coors[1]]];

        //call game over
        if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.allShips).length < 1 || Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
          if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "player");
          } else {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "bot");
          }
          console.log("GAME OVER");
        }
      }
      this.map[coors[0]][coors[1]] = "H";
      return true;
    } else {
      attacksMissed.push(coors);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Missed");
      this.map[coors[0]][coors[1]] = "M";
      console.log("MISSED@!");
      return true;
    }
  }
  return {
    map,
    addShip,
    reciveAttack,
    allShips,
    boardName
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMyRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHOUQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFDdkQsSUFBSSxDQUFDRyxHQUFHLENBQUMyRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHOUQsQ0FBQyxHQUFHLENBQUMsQ0FBRSxJQUNwQyxPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDMkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzlELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQ3ZELElBQUksQ0FBQ0csR0FBRyxDQUFDMkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzlELENBQUMsR0FBRyxDQUFDLENBQUUsSUFDcEMsT0FBTyxJQUFJLENBQUNHLEdBQUcsQ0FBQzJELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQzFDLElBQUksQ0FBQzNELEdBQUcsQ0FBQzJELElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHOUQsQ0FBQyxDQUFFLElBQ3BDLE9BQU8sSUFBSSxDQUFDRyxHQUFHLENBQUMyRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksV0FBVyxJQUMxQyxJQUFJLENBQUMzRCxHQUFHLENBQUMyRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzlELENBQUMsQ0FBRSxFQUNyQztVQUNBLElBQUksQ0FBQ3VDLE9BQU8sQ0FDVixJQUFJLENBQUMxQixRQUFRLENBQUNtQyxJQUFJLENBQUNwRCxJQUFJLENBQUMsRUFDeEIsQ0FBQ3FELElB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QUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkLCBQbGF5ZXIsIGJvdFBsYXksIHBsYXllclBsYXkgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQge1xuICBwbGF5ZXJHYW1lQm9hcmQsXG4gIGJvdEdhbWVCb2FyZCxcbiAgcmFuZG9taXplQm9hcmQsXG4gIHVzZXJTaGlwUGxhY2UsXG4gIGF2YWlsU2hpcHMsXG4gIHNoaXBzTGVmdCxcbiAgcmVzZXRNYXAsXG59IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmNvbnN0IGJvYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJvYXJkXCIpKTtcbmNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydC1idG5cIik7XG5jb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1idG5cIik7XG5jb25zdCByZXNldEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzZXQtYnRuXCIpO1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG5cIik7XG5jb25zdCByZXN0YXJ0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG4yXCIpO1xuY29uc3QgZXhwbGFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXhwbGFpblwiKTtcbmNvbnN0IGV2ZW50c0NvbnNvbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnNvbGVcIik7XG5cbmNvbnN0IGVuZW15VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXktdHh0XCIpO1xuY29uc3QgcGxheWVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLXR4dFwiKTtcblxuY29uc3QgZW5lbXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteS1zZWN0aW9uXCIpO1xuY29uc3QgYm90aEJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm90aC1ib2FyZHNcIik7XG5cbmNvbnN0IGVuZFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5kLXNjcmVlblwiKTtcbmNvbnN0IHdpbkVuZFNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luLWVuZC1zY3JlZW5cIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCb2FyZCgpIHtcbiAgaWYgKHNoaXBzTGVmdCkge1xuICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSBgUGxhY2UgWW91ciAke1xuICAgICAgYXZhaWxTaGlwc1swXS5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBhdmFpbFNoaXBzWzBdLm5hbWUuc3Vic3RyaW5nKDEpXG4gICAgfSBQcmVzcyBTcGFjZSB0byBSb3RhdGVgO1xuICB9IGVsc2Uge1xuICAgIGV4cGxhaW4udGV4dENvbnRlbnQgPSBgWW91ciBTaGlwcyBBcmUgQWxsIFNldCFgO1xuICB9XG4gIGxldCBwbGF5ZXJzID0gW3BsYXllckdhbWVCb2FyZCwgYm90R2FtZUJvYXJkXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCAyOyBqKyspIHtcbiAgICBib2FyZFtqXS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCBwbGF5ZXJzW2pdLm1hcC5sZW5ndGg7IHIrKykge1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBwbGF5ZXJzW2pdLm1hcFtyXS5sZW5ndGg7IGMrKykge1xuICAgICAgICBsZXQgYm9hcmRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoYCR7cn0sJHtjfWApO1xuXG4gICAgICAgIGlmIChqID09IDEpIHtcbiAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXllclBsYXkociwgYyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJob3ZlcjpiZy1ncmF5LTQwMFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChqID09IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMpLmluY2x1ZGVzKFxuICAgICAgICAgICAgICBwbGF5ZXJzW2pdLm1hcFtyXVtjXVxuICAgICAgICAgICAgKSB8fFxuICAgICAgICAgICAgcGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJIXCJcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwiYmctdGVhbC04MDBcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYm9hcmRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICB1c2VyU2hpcFBsYWNlKHBsYXllckdhbWVCb2FyZCwgW3IsIGNdKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwc0xlZnQgPiAwKSB7XG4gICAgICAgICAgICAgIGlmICh1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIGAke3J9LCR7YyArIGl9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsU2hpcHNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgYCR7ciArIGl9LCR7Y31gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc0xpc3QuYWRkKFwiYmctdGVhbC01MDBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGlwc0xlZnQpIHtcbiAgICAgICAgICAgICAgaWYgKHVzZXJEaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsU2hpcHNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgYCR7cn0sJHtjICsgaX1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctdGVhbC01MDBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICBgJHtyICsgaX0sJHtjfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJIXCIpIHtcbiAgICAgICAgICBsZXQgc2hvdFNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmQoc2hvdFNpZ24pO1xuXG4gICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZVwiKTtcbiAgICAgICAgICBzaG90U2lnbi5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgXCJsZzpoLTVcIixcbiAgICAgICAgICAgIFwibGc6dy01XCIsXG4gICAgICAgICAgICBcImJnLXJvc2UtODAwXCIsXG4gICAgICAgICAgICBcInJvdW5kZWQtZnVsbFwiLFxuICAgICAgICAgICAgXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgICAgXCJ0b3AtWzMyJV1cIixcbiAgICAgICAgICAgIFwibGVmdC1bMzclXVwiLFxuICAgICAgICAgICAgXCJoLTJcIixcbiAgICAgICAgICAgIFwidy0yXCIsXG4gICAgICAgICAgICBcImxnOnRvcC1bMjklXVwiLFxuICAgICAgICAgICAgXCJsZzpsZWZ0LVszMyVdXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJzW2pdLm1hcFtyXVtjXSA9PSBcIk1cIikge1xuICAgICAgICAgIGxldCBzaG90U2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZChzaG90U2lnbik7XG5cbiAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInJlbGF0aXZlXCIpO1xuICAgICAgICAgIHNob3RTaWduLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBcImxnOmgtNVwiLFxuICAgICAgICAgICAgXCJsZzp3LTVcIixcbiAgICAgICAgICAgIFwiYmctd2hpdGVcIixcbiAgICAgICAgICAgIFwicm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgICBcImFic29sdXRlXCIsXG4gICAgICAgICAgICBcInRvcC1bMzIlXVwiLFxuICAgICAgICAgICAgXCJsZWZ0LVszNyVdXCIsXG4gICAgICAgICAgICBcImgtMlwiLFxuICAgICAgICAgICAgXCJ3LTJcIixcbiAgICAgICAgICAgIFwibGc6dG9wLVsyOSVdXCIsXG4gICAgICAgICAgICBcImxnOmxlZnQtWzMzJV1cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcInctZnVsbFwiLFxuICAgICAgICAgIFwiaC1mdWxsXCIsXG4gICAgICAgICAgXCJib3JkZXJcIixcbiAgICAgICAgICBcImJvcmRlci13aGl0ZVwiLFxuICAgICAgICAgIFwiYm9hcmQtZ3JpZFwiLFxuICAgICAgICAgIFwib3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgKTtcbiAgICAgICAgYm9hcmRbal0uYXBwZW5kKGJvYXJkR3JpZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgaWYgKHNoaXBzTGVmdCA9PSBmYWxzZSkge1xuICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICBlbmVteVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBlbmVteVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFwcGVhclwiKTtcblxuICAgIGV2ZW50c0NvbnNvbGUuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgIGJvdGhCb2FyZHMuY2xhc3NMaXN0LnJlbW92ZShcImxnOmdyaWQtY29scy1bNDUlXVwiKTtcbiAgICBib3RoQm9hcmRzLmNsYXNzTGlzdC5yZW1vdmUoXCJncmlkLXJvd3MtWzUwJSwyMCUsNSVdXCIpO1xuXG4gICAgYm90aEJvYXJkcy5jbGFzc0xpc3QuYWRkKFwibGc6Z3JpZC1jb2xzLVs0MCUsNDAlXVwiKTtcbiAgICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGV4cGxhaW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufVxuXG5leHBvcnQgbGV0IHVzZXJEaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgaWYgKGUuY29kZSA9PSBcIlNwYWNlXCIpIHtcbiAgICBpZiAodXNlckRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgdXNlckRpcmVjdGlvbiA9IFwidmVydGljYWxcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgdXNlckRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiO1xuICAgIH1cbiAgfVxufSk7XG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xucmFuZG9tQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJhbmRvbWl6ZUJvYXJkKHBsYXllckdhbWVCb2FyZCk7XG4gIGNyZWF0ZUJvYXJkKCk7XG59KTtcblxucmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmVzZXRNYXAoKTtcbiAgY3JlYXRlQm9hcmQoKTtcbn0pO1xuXG5yZXN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbnJlc3RhcnRCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICBpZiAod2lubmVyID09IFwicGxheWVyXCIpIHtcbiAgICB3aW5FbmRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSBlbHNlIHtcbiAgICBlbmRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uc29sZShib2FyZE5hbWUsIG1zZywgY29sb3IgPSBcIndoaXRlXCIpIHtcbiAgaWYgKGJvYXJkTmFtZSA9PSBcImVuZW15XCIpIHtcbiAgICBwbGF5ZXJUZXh0LnRleHRDb250ZW50ID0gXCIgLSBZb3UgSGF2ZVwiICsgbXNnO1xuICAgIHBsYXllclRleHQuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBlbmVteVRleHQudGV4dENvbnRlbnQgPSBcIiAtIEVuZW15IEhhc1wiICsgbXNnO1xuICAgIGVuZW15VGV4dC5zdHlsZS5jb2xvciA9IGNvbG9yO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmQsIGJvdFBsYXksIHBsYXllclBsYXksIFNoaXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgdXNlckRpcmVjdGlvbiB9IGZyb20gXCIuL2RvbS5qc1wiO1xuZXhwb3J0IGxldCBzaGlwc0xpc3QgPSBbXG4gIFNoaXAoXCJwYXRyb2xCb2F0XCIsIDIpLFxuICBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLFxuICBTaGlwKFwiYmF0dGxlU2hpcFwiLCA0KSxcbiAgU2hpcChcImNhcnJpZXJcIiwgNSksXG5dO1xuZXhwb3J0IGxldCBhdmFpbFNoaXBzID0gWy4uLnNoaXBzTGlzdF07XG5leHBvcnQgbGV0IHNoaXBzTGVmdCA9IHRydWU7XG5leHBvcnQgbGV0IGJvdEdhbWVCb2FyZCA9IEdhbWVCb2FyZChcImVuZW15XCIpO1xuZXhwb3J0IGxldCBwbGF5ZXJHYW1lQm9hcmQgPSBHYW1lQm9hcmQoXCJwbGF5ZXJcIik7XG5leHBvcnQgY29uc3QgZGlyZWN0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTaGlwUGxhY2UoYm9hcmQsIGNvb3JzLCBkaXJlY2lvbiA9IHVzZXJEaXJlY3Rpb24pIHtcbiAgaWYgKHNoaXBzTGVmdCkge1xuICAgIGJvYXJkLmFkZFNoaXAoYXZhaWxTaGlwc1swXSwgY29vcnMsIGRpcmVjaW9uKTtcbiAgICBsZXQgbW92ZWRzaGlwID0gYXZhaWxTaGlwcy5zaGlmdCgpO1xuICAgIGJvYXJkW1wiYWxsU2hpcHNcIl1bbW92ZWRzaGlwLm5hbWVdID0gbW92ZWRzaGlwO1xuICB9XG4gIGlmIChhdmFpbFNoaXBzLmxlbmd0aCA8IDEpIHtcbiAgICBzaGlwc0xlZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGNyZWF0ZUJvYXJkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21pemVCb2FyZChib2FyZCkge1xuICBib2FyZC5hbGxTaGlwcyA9IHtcbiAgICBwYXRyb2xCb2F0OiBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKSxcbiAgICBzdWJtYXJpbmU6IFNoaXAoXCJzdWJtYXJpbmVcIiwgMyksXG4gICAgZGVzdHJveWVyOiBTaGlwKFwiZGVzdHJveWVyXCIsIDMpLFxuICAgIGJhdHRsZVNoaXA6IFNoaXAoXCJiYXR0bGVTaGlwXCIsIDQpLFxuICAgIGNhcnJpZXI6IFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuICB9O1xuXG4gIGlmIChib2FyZCA9PSBwbGF5ZXJHYW1lQm9hcmQpIHtcbiAgICBzaGlwc0xlZnQgPSBmYWxzZTtcbiAgfVxuICBib2FyZC5tYXAgPSBib2FyZC5tYXAubWFwKCgpID0+IHtcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICB9KTtcblxuICBPYmplY3Qua2V5cyhib2FyZC5hbGxTaGlwcykuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgIGJvYXJkLmFkZFNoaXAoXG4gICAgICBib2FyZC5hbGxTaGlwc1tzaGlwXSxcbiAgICAgIFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSwgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLFxuICAgICAgZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV1cbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TWFwKCkge1xuICBwbGF5ZXJHYW1lQm9hcmQubWFwID0gcGxheWVyR2FtZUJvYXJkLm1hcC5tYXAoKCkgPT4ge1xuICAgIHJldHVybiBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gIH0pO1xuICBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMgPSB7fTtcbiAgc2hpcHNMZWZ0ID0gdHJ1ZTtcbiAgYXZhaWxTaGlwcyA9IFsuLi5zaGlwc0xpc3RdO1xuICBjb25zb2xlLmxvZyhhdmFpbFNoaXBzKTtcbn1cblxucmFuZG9taXplQm9hcmQoYm90R2FtZUJvYXJkKTtcblxuY3JlYXRlQm9hcmQoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBlbmRHYW1lLCB1cGRhdGVDb25zb2xlIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lQm9hcmQsIGJvdEdhbWVCb2FyZCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHNhbmsgPSBmYWxzZTtcbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIGhpdHMrKztcbiAgICBpZiAoaGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgIHRoaXMuc2luaygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzaW5rKCkge1xuICAgIHRoaXMuc2FuayA9IHRydWU7XG4gICAgY29uc29sZS5sb2codGhpcy5uYW1lICsgXCIgSEFTIFNBTktLS0shXCIpO1xuICB9XG4gIHJldHVybiB7IG5hbWUsIGxlbmd0aCwgaGl0LCBzYW5rLCBzaW5rIH07XG59XG5cbmZ1bmN0aW9uIEdhbWVCb2FyZChuYW1lKSB7XG4gIGNvbnN0IGJvYXJkTmFtZSA9IG5hbWU7XG4gIGNvbnN0IGF0dGFja3NNaXNzZWQgPSBbXTtcbiAgY29uc3QgYXR0YWNrc0hpdCA9IFtdO1xuICBjb25zdCBtYXAgPSBbXTtcbiAgY29uc3Qgcm93ID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIG1hcC5wdXNoKFsuLi5yb3ddKTtcbiAgfVxuXG4gIGxldCBhbGxTaGlwcyA9IHt9O1xuXG4gIGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbiAgZnVuY3Rpb24gYWRkU2hpcChzaGlwLCBjb29yLCBkaXJlY3Rpb24gPSBcImhvcml6b250YWxcIikge1xuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIC8vY2hlY2sgaWYgY29vcnMgYXZhaWxhYmxlXG4gICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5tYXBbY29vclswXSAtIDEgXSA9PSB1bmRlZmluZWQpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JbMV0gKyBqID4gOSB8fFxuICAgICAgICAgIGNvb3JbMV0gKyBqIDwgMCB8fFxuICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGpdIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiArIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqICsgMV0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiAtIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqIC0gMV0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgMV0gIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXSArIDFdW2Nvb3JbMV0gKyBqXSkgfHxcbiAgICAgICAgICAodHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdIC0gMV1bY29vclsxXSArIGpdKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmFkZFNoaXAoXG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzW3NoaXAubmFtZV0sXG4gICAgICAgICAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxcbiAgICAgICAgICAgIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaV0gPSBzaGlwLm5hbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vY2hlY2sgaWYgY29vcnMgYXZhaWxhYmxlXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXAubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JbMF0gKyBqID4gOSB8fFxuICAgICAgICAgIGNvb3JbMF0gKyBqIDwgMCB8fFxuICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgdGhpcy5tYXBbY29vclswXSArIGpdW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdICsgMV0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAtIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdIC0gMV0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgMV0gIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXSArIDFdW2Nvb3JbMV0gKyBqXSkgfHxcbiAgICAgICAgICAodHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdIC0gMV1bY29vclsxXSArIGpdKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLmFkZFNoaXAodGhpcy5hbGxTaGlwc1tzaGlwLm5hbWVdLCBbXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxcbiAgICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLFxuICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLm1hcFtjb29yWzBdICsgaV1bY29vclsxXV0gPSBzaGlwLm5hbWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVjaXZlQXR0YWNrKGNvb3JzKSB7XG4gICAgLy9jaGVja3MgaWYgYWxyZWFkeSBzaG90XG4gICAgZm9yIChsZXQgYXJyIG9mIFsuLi5hdHRhY2tzSGl0LCAuLi5hdHRhY2tzTWlzc2VkXSkge1xuICAgICAgaWYgKGFyclswXSA9PSBjb29yc1swXSkge1xuICAgICAgICBpZiAoYXJyWzFdID09IGNvb3JzWzFdKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhbHJlYWR5IHNob3QgdGhlcmUgXCIpO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vZXZhbHVhdGVzIGlmIHRoZSBzaG90IGhpdCBvciBtaXNzZWRcbiAgICBpZiAodGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSkge1xuICAgICAgYXR0YWNrc0hpdC5wdXNoKGNvb3JzKTtcbiAgICAgIC8vdHVybiBuYW1lIHN0cmluZyBpbnRvIHZhcmlhYmxlIHRvIGhpdCBjb3JyZWN0IHNoaXBcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm9hcmROYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGhhdHMgYSBoaXQhXCIpO1xuICAgICAgdXBkYXRlQ29uc29sZShcbiAgICAgICAgdGhpcy5ib2FyZE5hbWUsXG4gICAgICAgIFwiIEhpdCBUaGUgXCIgK1xuICAgICAgICAgIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV0ubmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgICApO1xuICAgICAgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5oaXQoKTtcbiAgICAgIGlmICh0aGlzLmFsbFNoaXBzW3RoaXMubWFwW2Nvb3JzWzBdXVtjb29yc1sxXV1dLnNhbmspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmROYW1lID09IFwiZW5lbXlcIikge1xuICAgICAgICAgIHVwZGF0ZUNvbnNvbGUoXG4gICAgICAgICAgICB0aGlzLmJvYXJkTmFtZSxcbiAgICAgICAgICAgIFwiIFNhbmsgVGhlIFwiICsgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5uYW1lLFxuICAgICAgICAgICAgXCJncmVlblwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDb25zb2xlKFxuICAgICAgICAgICAgdGhpcy5ib2FyZE5hbWUsXG4gICAgICAgICAgICBcIiBTYW5rIFRoZSBcIiArIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV0ubmFtZSxcbiAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV07XG5cbiAgICAgICAgLy9jYWxsIGdhbWUgb3ZlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0LmtleXMocGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxIHx8XG4gICAgICAgICAgT2JqZWN0LmtleXMoYm90R2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhib3RHYW1lQm9hcmQuYWxsU2hpcHMpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5kR2FtZSwgNTAwLCBcInBsYXllclwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmRHYW1lLCA1MDAsIFwiYm90XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdBTUUgT1ZFUlwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dID0gXCJIXCI7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRhY2tzTWlzc2VkLnB1c2goY29vcnMpO1xuICAgICAgdXBkYXRlQ29uc29sZSh0aGlzLmJvYXJkTmFtZSwgXCIgTWlzc2VkXCIpO1xuXG4gICAgICB0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dID0gXCJNXCI7XG4gICAgICBjb25zb2xlLmxvZyhcIk1JU1NFREAhXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IG1hcCwgYWRkU2hpcCwgcmVjaXZlQXR0YWNrLCBhbGxTaGlwcywgYm9hcmROYW1lIH07XG59XG5cbmZ1bmN0aW9uIGJvdFBsYXkoKSB7XG4gIGxldCBzaG90ID0gcGxheWVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhbXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLFxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgXSk7XG4gIGlmIChzaG90KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgYm90UGxheSgpO1xuICB9XG4gIGNyZWF0ZUJvYXJkKCk7XG59XG5cbmZ1bmN0aW9uIHBsYXllclBsYXkoLi4uY29vcnMpIHtcbiAgbGV0IHJvd0Nvb3IgPSBjb29yc1swXTtcbiAgbGV0IGNvbENvb3IgPSBjb29yc1sxXTtcbiAgbGV0IHBsYXllckNvb3JzID0gW3Jvd0Nvb3IsIGNvbENvb3JdO1xuICBsZXQgc2hvdCA9IGJvdEdhbWVCb2FyZC5yZWNpdmVBdHRhY2soWy4uLnBsYXllckNvb3JzXSk7XG4gIGlmIChzaG90KSB7XG4gICAgYm90UGxheSgpO1xuXG4gICAgY3JlYXRlQm9hcmQoKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKHNob3QpO1xuICAgIHBsYXllclBsYXkoKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lQm9hcmQsIGJvdFBsYXksIHBsYXllclBsYXkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJQbGF5ZXIiLCJib3RQbGF5IiwicGxheWVyUGxheSIsInBsYXllckdhbWVCb2FyZCIsImJvdEdhbWVCb2FyZCIsInJhbmRvbWl6ZUJvYXJkIiwidXNlclNoaXBQbGFjZSIsImF2YWlsU2hpcHMiLCJzaGlwc0xlZnQiLCJyZXNldE1hcCIsImJvYXJkIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3RhcnRCdG4iLCJxdWVyeVNlbGVjdG9yIiwicmFuZG9tQnRuIiwicmVzZXRCdG4iLCJyZXN0YXJ0QnRuIiwicmVzdGFydEJ0bjIiLCJleHBsYWluIiwiZXZlbnRzQ29uc29sZSIsImVuZW15VGV4dCIsInBsYXllclRleHQiLCJlbmVteVNlY3Rpb24iLCJib3RoQm9hcmRzIiwiZW5kU2NyZWVuIiwid2luRW5kU2NyZWVuIiwiY3JlYXRlQm9hcmQiLCJ0ZXh0Q29udGVudCIsIm5hbWUiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsInBsYXllcnMiLCJqIiwiaW5uZXJIVE1MIiwiciIsIm1hcCIsImxlbmd0aCIsImMiLCJib2FyZEdyaWQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIk9iamVjdCIsImtleXMiLCJhbGxTaGlwcyIsImluY2x1ZGVzIiwidXNlckRpcmVjdGlvbiIsImkiLCJjdXJyZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInJlbW92ZSIsInNob3RTaWduIiwiYXBwZW5kIiwic3RhcnRHYW1lIiwiZSIsImNvZGUiLCJsb2NhdGlvbiIsInJlbG9hZCIsImVuZEdhbWUiLCJ3aW5uZXIiLCJ1cGRhdGVDb25zb2xlIiwiYm9hcmROYW1lIiwibXNnIiwiY29sb3IiLCJzdHlsZSIsIlNoaXAiLCJzaGlwc0xpc3QiLCJkaXJlY3Rpb25zIiwiY29vcnMiLCJkaXJlY2lvbiIsImFkZFNoaXAiLCJtb3ZlZHNoaXAiLCJzaGlmdCIsInBhdHJvbEJvYXQiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJiYXR0bGVTaGlwIiwiY2FycmllciIsImZvckVhY2giLCJzaGlwIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29uc29sZSIsImxvZyIsImhpdHMiLCJzYW5rIiwiaGl0Iiwic2luayIsImF0dGFja3NNaXNzZWQiLCJhdHRhY2tzSGl0Iiwicm93IiwicHVzaCIsImNvb3IiLCJkaXJlY3Rpb24iLCJyZWNpdmVBdHRhY2siLCJhcnIiLCJzZXRUaW1lb3V0Iiwic2hvdCIsInJvd0Nvb3IiLCJjb2xDb29yIiwicGxheWVyQ29vcnMiXSwic291cmNlUm9vdCI6IiJ9