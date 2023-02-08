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
/* harmony export */   "updateConsole": () => (/* binding */ updateConsole)
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

// eventsConsole.scrollTop = eventsConsole.scrollHeight;

// eventsConsole.scrollIntoView(false);

console.log(eventsConsole);
eventsConsole.scrollIntoView(true);
function createBoard() {
  if (_index_js__WEBPACK_IMPORTED_MODULE_1__.shipsLeft) {
    explain.textContent = `Place Your ${_index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].name[0].toUpperCase() + _index_js__WEBPACK_IMPORTED_MODULE_1__.availShips[0].name.substring(1)} Press Space to Rotate`;
  } else {
    explain.textContent = `Your Ships Are All Set!`;
  }
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
          if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.allShips).includes(players[j].map[r][c]) || players[j].map[r][c] == "H") {
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

//to skip main  screen

// startBtn.classList.add("hidden")

// enemySection.classList.remove("hidden")
// enemySection.classList.add("appear")

// eventsConsole.classList.remove("hidden")

// bothBoards.classList.remove("lg:grid-cols-[45%]")
// bothBoards.classList.remove("grid-rows-[50%,20%,5%]")

// bothBoards.classList.add("lg:grid-cols-[40%,40%]",)
// randomBtn.classList.add("hidden")
// resetBtn.classList.add("hidden")
// explain.classList.add("hidden")

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
let botGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)("enemy");
let playerGameBoard = (0,_main__WEBPACK_IMPORTED_MODULE_0__.GameBoard)("player");
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
      console.log(this.boardName);
      console.log('Thats a hit!');
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
          console.log('GAME OVER');
        }
        ;
      }
      this.map[coors[0]][coors[1]] = 'H';
      return true;
    } else {
      attacksMissed.push(coors);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Missed");
      this.map[coors[0]][coors[1]] = 'M';
      console.log('MISSED@!');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHNUQsQ0FBQyxHQUFJLENBQUMsSUFDaEI0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUc1RCxDQUFDLEdBQUksQ0FBQyxJQUNqQixJQUFJLENBQUNHLEdBQUcsQ0FBQ3lELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFDMUIsSUFBSSxDQUFDekQsR0FBRyxDQUFDeUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzVELENBQUMsQ0FBQyxJQUM5QixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDeUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzVELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDRyxHQUFHLENBQUN5RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHNUQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUM5RixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDeUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzVELENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDRyxHQUFHLENBQUN5RCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHNUQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUM5RixPQUFPLElBQUksQ0FBQ0csR0FBRyxDQUFDeUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUN6RCxHQUFHLENBQUN5RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRzVELENBQUMsQ0FBQyxJQUNq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SUFDREgsT0FBTyxDQUFDQyxHQUFHLENBQUN5RSxJQUFJLENBQUM7SUFDakJwRyxVQUFVLEVBQUU7RUFDaEI7QUFFUjs7Ozs7OztVQ3ZNQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9tYWluLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZUJvYXJkLFBsYXllcixib3RQbGF5LCBwbGF5ZXJQbGF5LCAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnR7cGxheWVyR2FtZUJvYXJkLGJvdEdhbWVCb2FyZCwgcmFuZG9taXplQm9hcmQsdXNlclNoaXBQbGFjZSxhdmFpbFNoaXBzLHVzZXJEaXJlY3Rpb24sc2hpcHNMZWZ0LHJlc2V0TWFwfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cblxuXG5jb25zdCBib2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSkgXG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpXG5jb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJhbmRvbS1idG5cIilcbmNvbnN0IHJlc2V0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXNldC1idG5cIilcbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuXCIpXG5jb25zdCByZXN0YXJ0QnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydC1idG4yXCIpXG5jb25zdCBleHBsYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5leHBsYWluXCIpXG5jb25zdCBldmVudHNDb25zb2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zb2xlXCIpXG5cbmNvbnN0IGVuZW15VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXktdHh0XCIpXG5jb25zdCBwbGF5ZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItdHh0XCIpXG5cblxuY29uc3QgZW5lbXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmVteS1zZWN0aW9uXCIpXG5jb25zdCBib3RoQm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3RoLWJvYXJkc1wiKVxuXG5cblxuXG4vLyBldmVudHNDb25zb2xlLnNjcm9sbFRvcCA9IGV2ZW50c0NvbnNvbGUuc2Nyb2xsSGVpZ2h0O1xuXG4vLyBldmVudHNDb25zb2xlLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblxuY29uc29sZS5sb2coZXZlbnRzQ29uc29sZSk7XG5ldmVudHNDb25zb2xlLnNjcm9sbEludG9WaWV3KHRydWUpXG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCl7XG4gICAgaWYoc2hpcHNMZWZ0KXtcbiAgICAgICAgZXhwbGFpbi50ZXh0Q29udGVudCA9IGBQbGFjZSBZb3VyICR7YXZhaWxTaGlwc1swXS5uYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBhdmFpbFNoaXBzWzBdLm5hbWUuc3Vic3RyaW5nKDEpfSBQcmVzcyBTcGFjZSB0byBSb3RhdGVgXG4gICAgfWVsc2V7XG5cbiAgICAgICAgZXhwbGFpbi50ZXh0Q29udGVudCA9IGBZb3VyIFNoaXBzIEFyZSBBbGwgU2V0IWBcblxuICAgIH1cbiAgICBsZXQgcGxheWVycyA9IFtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkLCBdXG4gICAgZm9yKGxldCBqID0gMDtqIDwgMjtqKyspe1xuICAgICAgICBib2FyZFtqXS5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgcGxheWVyc1tqXS5tYXAubGVuZ3RoOyByKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGxheWVyc1tqXS5tYXBbcl0ubGVuZ3RoOyBjKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBib2FyZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoYCR7cn0sJHtjfWApXG5cbiAgICAgICAgICAgICAgICBpZihqID09IDEpe1xuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJQbGF5KHIsYylcblxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJob3ZlcjpiZy1ncmF5LTQwMFwiKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihqID09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyhwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMpLmluY2x1ZGVzKHBsYXllcnNbal0ubWFwW3JdW2NdKVxuICAgICAgICAgICAgICAgICAgICB8fCBwbGF5ZXJzW2pdLm1hcFtyXVtjXSA9PSBcIkhcIil7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtODAwXCIpXG5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdXNlclNoaXBQbGFjZShwbGF5ZXJHYW1lQm9hcmQsW3IsY10pXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNMZWZ0ID4gMCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyfSwke2MgKyBpfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5hZGQoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtyICsgaSAgfSwke2MgfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5hZGQoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsKCk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2hpcHNMZWZ0KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVzZXJEaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3J9LCR7YyArIGl9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke3IgKyBpICB9LCR7YyB9YClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICBcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihwbGF5ZXJzW2pdLm1hcFtyXVtjXSA9PSBcIkhcIil7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaG90U2lnbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZChzaG90U2lnbilcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwicmVsYXRpdmVcIilcbiAgICAgICAgICAgICAgICAgICAgc2hvdFNpZ24uY2xhc3NMaXN0LmFkZChcImxnOmgtNVwiLFwibGc6dy01XCIsXCJiZy1yb3NlLTgwMFwiLFwicm91bmRlZC1mdWxsXCIsXCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICxcInRvcC1bMzIlXVwiLFwibGVmdC1bMzclXVwiLFwiaC0yXCIsXCJ3LTJcIixcImxnOnRvcC1bMjklXVwiLFwibGc6bGVmdC1bMzMlXVwiKVxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYocGxheWVyc1tqXS5tYXBbcl1bY10gPT0gXCJNXCIpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvdFNpZ24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgICAgICAgICAgICAgIGJvYXJkR3JpZC5hcHBlbmQoc2hvdFNpZ24pXG5cbiAgICAgICAgICAgICAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZVwiKVxuICAgICAgICAgICAgICAgICAgICBzaG90U2lnbi5jbGFzc0xpc3QuYWRkKFwibGc6aC01XCIsXCJsZzp3LTVcIixcImJnLXdoaXRlXCIsXCJyb3VuZGVkLWZ1bGxcIixcImFic29sdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgLFwidG9wLVszMiVdXCIsXCJsZWZ0LVszNyVdXCIsXCJoLTJcIixcInctMlwiLFwibGc6dG9wLVsyOSVdXCIsXCJsZzpsZWZ0LVszMyVdXCIpXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcInctZnVsbFwiLFwiaC1mdWxsXCIsXCJib3JkZXJcIixcImJvcmRlci13aGl0ZVwiXG4gICAgICAgICAgICAgICAgLFwiYm9hcmQtZ3JpZFwiLFwib3ZlcmZsb3ctaGlkZGVuXCIpXG4gICAgICAgICAgICAgICAgYm9hcmRbal0uYXBwZW5kKGJvYXJkR3JpZClcblxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIFxufVxuXG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZSgpe1xuICAgIGlmKHNoaXBzTGVmdCA9PSBmYWxzZSl7XG4gICAgICAgIHN0YXJ0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICBcbiAgICAgICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIilcblxuICAgICAgICBldmVudHNDb25zb2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICAgICAgICBcbiAgICAgICAgYm90aEJvYXJkcy5jbGFzc0xpc3QucmVtb3ZlKFwibGc6Z3JpZC1jb2xzLVs0NSVdXCIpXG4gICAgICAgIGJvdGhCb2FyZHMuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtcm93cy1bNTAlLDIwJSw1JV1cIilcblxuICAgICAgICBib3RoQm9hcmRzLmNsYXNzTGlzdC5hZGQoXCJsZzpncmlkLWNvbHMtWzQwJSw0MCVdXCIsKVxuICAgICAgICByYW5kb21CdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgIGV4cGxhaW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuXG4gICAgfVxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvL3RvIHNraXAgbWFpbiAgc2NyZWVuXG5cbiAgICAvLyBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG5cbiAgICAvLyBlbmVteVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgIC8vIGVuZW15U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiYXBwZWFyXCIpXG5cbiAgICAvLyBldmVudHNDb25zb2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICAgIFxuICAgIC8vIGJvdGhCb2FyZHMuY2xhc3NMaXN0LnJlbW92ZShcImxnOmdyaWQtY29scy1bNDUlXVwiKVxuICAgIC8vIGJvdGhCb2FyZHMuY2xhc3NMaXN0LnJlbW92ZShcImdyaWQtcm93cy1bNTAlLDIwJSw1JV1cIilcblxuICAgIC8vIGJvdGhCb2FyZHMuY2xhc3NMaXN0LmFkZChcImxnOmdyaWQtY29scy1bNDAlLDQwJV1cIiwpXG4gICAgLy8gcmFuZG9tQnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAvLyByZXNldEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgLy8gZXhwbGFpbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbnN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHN0YXJ0R2FtZSlcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgIHJhbmRvbWl6ZUJvYXJkKHBsYXllckdhbWVCb2FyZClcbiAgICBjcmVhdGVCb2FyZCgpXG5cbn0pXG5cbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT57XG4gICAgcmVzZXRNYXAoKVxuICAgIGNyZWF0ZUJvYXJkKClcbn0pXG5cbnJlc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBsb2NhdGlvbi5yZWxvYWQoKVxufSlcblxucmVzdGFydEJ0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICBsb2NhdGlvbi5yZWxvYWQoKVxufSlcblxuXG5sZXQgZW5kU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbmQtc2NyZWVuXCIpXG5sZXQgd2luRW5kU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW4tZW5kLXNjcmVlblwiKVxuXG5leHBvcnQgZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpe1xuICAgIGlmKHdpbm5lciA9PSBcInBsYXllclwiKXtcblxuICAgICAgICB3aW5FbmRTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuXG4gICAgfWVsc2V7XG5cbiAgICAgICAgZW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcblxuICAgIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uc29sZShib2FyZE5hbWUsbXNnLGNvbG9yPVwid2hpdGVcIil7XG5cbiAgICBpZihib2FyZE5hbWUgPT0gXCJlbmVteVwiKXtcbiAgICAgICAgcGxheWVyVGV4dC50ZXh0Q29udGVudCA9IFwiIC0gWW91IEhhdmVcIiArIG1zZ1xuICAgICAgICBwbGF5ZXJUZXh0LnN0eWxlLmNvbG9yID0gY29sb3JcblxuICAgIH1lbHNle1xuICAgICAgICBlbmVteVRleHQudGV4dENvbnRlbnQgPSBcIiAtIEVuZW15IEhhc1wiICsgIG1zZ1xuICAgICAgICBlbmVteVRleHQuc3R5bGUuY29sb3IgPSBjb2xvclxuICAgIH1cbiAgICBcbn1cbiIsImltcG9ydCB7IEdhbWVCb2FyZCxib3RQbGF5LCBwbGF5ZXJQbGF5LFNoaXAgfSBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQge2NyZWF0ZUJvYXJkLCB9IGZyb20gXCIuL2RvbS5qc1wiXG5cblxuZXhwb3J0IGxldCBzaGlwc0xpc3QgPSBbU2hpcChcInBhdHJvbEJvYXRcIiwyKSxTaGlwKFwic3VibWFyaW5lXCIsMyksU2hpcChcImRlc3Ryb3llclwiLDMpLFxuU2hpcChcImJhdHRsZVNoaXBcIiw0KSxTaGlwKFwiY2FycmllclwiLDUpXVxuXG5cbmV4cG9ydCBsZXQgYXZhaWxTaGlwcyA9IFsuLi5zaGlwc0xpc3RdXG5leHBvcnQgbGV0IHNoaXBzTGVmdCA9IHRydWUgXG5cblxuXG5leHBvcnQgbGV0IGJvdEdhbWVCb2FyZCA9IEdhbWVCb2FyZChcImVuZW15XCIpXG5leHBvcnQgbGV0IHBsYXllckdhbWVCb2FyZCA9IEdhbWVCb2FyZChcInBsYXllclwiKVxuXG5jb25zdCBkaXJlY3Rpb25zID0gWydob3Jpem9udGFsJyxcInZlcnRpY2FsXCJdXG5leHBvcnQgbGV0IHVzZXJEaXJlY3Rpb24gPSBcImhvcml6b250YWxcIlxuXG5cblxuXG5cblxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsKGUpPT57XG5cbiAgaWYoZS5jb2RlID09IFwiU3BhY2VcIil7XG4gICAgaWYodXNlckRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIil7XG4gICAgICB1c2VyRGlyZWN0aW9uID0gXCJ2ZXJ0aWNhbFwiXG4gICAgfWVsc2V7XG4gICAgICB1c2VyRGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCIgXG4gICAgfVxuXG4gIH1cbn0pXG5cblxuXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyU2hpcFBsYWNlKGJvYXJkLGNvb3JzLGRpcmVjaW9uPXVzZXJEaXJlY3Rpb24pe1xuaWYgKHNoaXBzTGVmdCl7XG5cbiAgYm9hcmQuYWRkU2hpcChhdmFpbFNoaXBzWzBdLGNvb3JzLGRpcmVjaW9uKVxuICBsZXQgbW92ZWRzaGlwID0gYXZhaWxTaGlwcy5zaGlmdCgpXG4gIGJvYXJkWydhbGxTaGlwcyddW21vdmVkc2hpcC5uYW1lXSA9IG1vdmVkc2hpcFxufVxuXG5cbiAgaWYoYXZhaWxTaGlwcy5sZW5ndGggPCAxKXtcbiAgICBzaGlwc0xlZnQgPSBmYWxzZVxuICB9XG5cbiAgY3JlYXRlQm9hcmQoKVxuXG5cbn1cblxuLy8gdXNlclNoaXBQbGFjZShwbGF5ZXJHYW1lQm9hcmQsWzAsMF0pXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplQm9hcmQoYm9hcmQpe1xuXG4gIGJvYXJkLmFsbFNoaXBzID0ge1xuICAgICAgICBwYXRyb2xCb2F0IDogU2hpcChcInBhdHJvbEJvYXRcIiwyKSxcbiAgICAgICAgc3VibWFyaW5lIDogU2hpcChcInN1Ym1hcmluZVwiLDMpLFxuICAgICAgICBkZXN0cm95ZXIgOiBTaGlwKFwiZGVzdHJveWVyXCIsMyksXG4gICAgICAgIGJhdHRsZVNoaXAgOiBTaGlwKFwiYmF0dGxlU2hpcFwiLDQpLFxuICAgICAgICBjYXJyaWVyIDogU2hpcChcImNhcnJpZXJcIiw1KVxuICB9XG5cbiAgaWYoIGJvYXJkID09IHBsYXllckdhbWVCb2FyZCl7XG4gICAgc2hpcHNMZWZ0ID0gZmFsc2U7XG5cbiAgfVxuICBib2FyZC5tYXAgPSBib2FyZC5tYXAubWFwKCgpPT57cmV0dXJuIFswLDAsMCwwLDAsMCwwLDAsMCwwXX0pXG5cbiAgYm9hcmQuYWRkU2hpcChib2FyZC5hbGxTaGlwcy5wYXRyb2xCb2F0LFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pXG4gIGJvYXJkLmFkZFNoaXAoYm9hcmQuYWxsU2hpcHMuc3VibWFyaW5lLFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pXG4gIGJvYXJkLmFkZFNoaXAoYm9hcmQuYWxsU2hpcHMuZGVzdHJveWVyLFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sZGlyZWN0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV0pXG4gIGJvYXJkLmFkZFNoaXAoYm9hcmQuYWxsU2hpcHMuYmF0dGxlU2hpcCxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildKVxuICBib2FyZC5hZGRTaGlwKGJvYXJkLmFsbFNoaXBzLmNhcnJpZXIsW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXSlcbiAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc2V0TWFwKCl7XG4gIHBsYXllckdhbWVCb2FyZC5tYXAgPSBwbGF5ZXJHYW1lQm9hcmQubWFwLm1hcCgoKT0+e3JldHVybiBbMCwwLDAsMCwwLDAsMCwwLDAsMF19KVxuICBwbGF5ZXJHYW1lQm9hcmQuYWxsU2hpcHMgPSB7fVxuICBzaGlwc0xlZnQgPSB0cnVlXG4gIGF2YWlsU2hpcHMgPSBbLi4uc2hpcHNMaXN0XVxuICBjb25zb2xlLmxvZyhhdmFpbFNoaXBzKTtcbn1cblxuXG5cblxuXG5cbnJhbmRvbWl6ZUJvYXJkKGJvdEdhbWVCb2FyZClcblxuY3JlYXRlQm9hcmQoKVxuXG5cblxuIiwiaW1wb3J0IHsgY3JlYXRlQm9hcmQsZW5kR2FtZSx1cGRhdGVDb25zb2xlIH0gZnJvbSBcIi4vZG9tLmpzXCJcbmltcG9ydHtwbGF5ZXJHYW1lQm9hcmQsYm90R2FtZUJvYXJkLH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5cblxuZnVuY3Rpb24gU2hpcChuYW1lLGxlbmd0aCl7XG4gICAgbGV0IGhpdHMgPSAwXG4gICAgbGV0IHNhbmsgPSBmYWxzZSBcbiAgICBmdW5jdGlvbiBoaXQoKXtcbiAgICAgICAgaGl0cysrXG4gICAgICAgIGlmKGhpdHMgPj0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuc2luaygpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBcbiAgICB9XG4gICAgZnVuY3Rpb24gc2luaygpe1xuICAgICAgICB0aGlzLnNhbmsgPSB0cnVlIFxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5hbWUgKyAnIEhBUyBTQU5LS0tLIScpO1xuICAgICBcbiAgICB9XG4gICAgcmV0dXJue25hbWUsbGVuZ3RoLGhpdCxzYW5rLHNpbmt9XG5cbn1cblxuXG5mdW5jdGlvbiBHYW1lQm9hcmQobmFtZSl7XG4gICAgY29uc3QgYm9hcmROYW1lID0gbmFtZVxuICAgIGNvbnN0IGF0dGFja3NNaXNzZWQgPSBbXVxuICAgIGNvbnN0IGF0dGFja3NIaXQgPSAgW11cbiAgICBjb25zdCBtYXAgPSBbXVxuICAgIGNvbnN0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBtYXAucHVzaChbLi4ucm93XSlcbiAgICB9XG5cbiAgICBsZXQgYWxsU2hpcHMgPSB7XG4gICAgICAgIFxuICAgIH1cbiBcbiAgICBjb25zdCBkaXJlY3Rpb25zID0gWydob3Jpem9udGFsJyxcInZlcnRpY2FsXCJdXG4gICAgXG4gICAgZnVuY3Rpb24gYWRkU2hpcChzaGlwLGNvb3IsZGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCIpe1xuICAgICAgICBpZihkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpeyAgXG4gICAgICAgICAgICAvL2NoZWNrIGlmIGNvb3JzIGF2YWlsYWJsZVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxIF0gPT0gdW5kZWZpbmVkKTtcbiAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgKGNvb3JbMV0gKyBqKSA+IDl8fCBcbiAgICAgICAgICAgICAgICAoY29vclsxXSArIGopIDwgMHx8XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXV0gfHxcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgal18fFxuICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiArIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogKyAxXXx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiAtIDFdfHxcbiAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiYgdGhpcy5tYXBbY29vclswXSArIDFdW2Nvb3JbMV0gKyBqXXx8XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gLSAxXVtjb29yWzFdICsgaiBdXG5cblxuXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRTaGlwKHRoaXMuYWxsU2hpcHNbc2hpcC5uYW1lXSxbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSldLGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaV0gPSBzaGlwLm5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgIC8vY2hlY2sgaWYgY29vcnMgYXZhaWxhYmxlXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgc2hpcC5sZW5ndGg7IGorKyl7XG4gICAgICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAgICAgIChjb29yWzBdICsgaikgPiA5fHwgXG4gICAgICAgICAgICAgICAgICAgIChjb29yWzBdICsgaikgPCAwIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV1dIHx8XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAgKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdICArIDFdfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdICArIGpdW2Nvb3JbMV0gLSAxXXx8XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdICsgMV0gIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLm1hcFtjb29yWzBdICsgMV1bY29vclsxXSArIGpdfHxcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMubWFwW2Nvb3JbMF0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmIHRoaXMubWFwW2Nvb3JbMF0gLSAxXVtjb29yWzFdICsgaiBdXG4gICAgXG5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkU2hpcCh0aGlzLmFsbFNoaXBzW3NoaXAubmFtZV0sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSlcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vYWRkIFNoaXAgVG8gQm9hcmRcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBpXVtjb29yWzFdXSA9IHNoaXAubmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiByZWNpdmVBdHRhY2soY29vcnMpe1xuXG4gICAgICAgIC8vY2hlY2tzIGlmIGFscmVhZHkgc2hvdFxuICAgICAgICBmb3IobGV0IGFyciBvZiBbLi4uYXR0YWNrc0hpdCwgLi4uYXR0YWNrc01pc3NlZF0pe1xuICAgICAgICAgICAgaWYoYXJyWzBdID09IGNvb3JzWzBdKXtcbiAgICAgICAgICAgICAgICBpZiAoYXJyWzFdID09IGNvb3JzWzFdKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FscmVhZHkgc2hvdCB0aGVyZSAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9ldmFsdWF0ZXMgaWYgdGhlIHNob3QgaGl0IG9yIG1pc3NlZCBcbiAgICAgICAgaWYodGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSl7XG4gICAgICAgICAgICBhdHRhY2tzSGl0LnB1c2goY29vcnMpXG4gICAgICAgICAgICAvL3R1cm4gbmFtZSBzdHJpbmcgaW50byB2YXJpYWJsZSB0byBoaXQgY29ycmVjdCBzaGlwIFxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2FyZE5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RoYXRzIGEgaGl0IScpO1xuICAgICAgICAgICAgdXBkYXRlQ29uc29sZSh0aGlzLmJvYXJkTmFtZSxcIiBIaXQgVGhlIFwiICsgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5uYW1lLnRvVXBwZXJDYXNlKCksKVxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5oaXQoKVxuICAgICAgICAgICAgaWYodGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5zYW5rKXtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkTmFtZSA9PSBcImVuZW15XCIpe1xuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNvbnNvbGUodGhpcy5ib2FyZE5hbWUsIFwiIFNhbmsgVGhlIFwiICsgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXS5uYW1lLFwiZ3JlZW5cIilcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDb25zb2xlKHRoaXMuYm9hcmROYW1lLCBcIiBTYW5rIFRoZSBcIiArIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV0ubmFtZSxcInJlZFwiKVxuXG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXVxuXG4gICAgICAgICAgICAgICAgLy9jYWxsIGdhbWUgb3ZlclxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHBsYXllckdhbWVCb2FyZC5hbGxTaGlwcykubGVuZ3RoIDwgMSB8fE9iamVjdC5rZXlzKCBib3RHYW1lQm9hcmQuYWxsU2hpcHMpLmxlbmd0aCA8IDEgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoT2JqZWN0LmtleXMoYm90R2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZW5kR2FtZSw1MDAsXCJwbGF5ZXJcIikgXG5cblxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZW5kR2FtZSw1MDAsXCJib3RcIikgXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR0FNRSBPVkVSJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSA9ICdIJ1xuICAgICAgICAgICAgXG5cblxuICAgICAgICBcblxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhdHRhY2tzTWlzc2VkLnB1c2goY29vcnMpXG4gICAgICAgICAgICB1cGRhdGVDb25zb2xlKHRoaXMuYm9hcmROYW1lLFwiIE1pc3NlZFwiKVxuXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dID0gJ00nXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTUlTU0VEQCEnKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybnttYXAsYWRkU2hpcCxyZWNpdmVBdHRhY2ssYWxsU2hpcHMsYm9hcmROYW1lfVxufVxuXG5mdW5jdGlvbiBib3RQbGF5KCl7XG4gICAgbGV0IHNob3QgPSBwbGF5ZXJHYW1lQm9hcmQucmVjaXZlQXR0YWNrKFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCksXG4gICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXSlcbiAgICBpZihzaG90KXtcbiAgICAgICAgcmV0dXJuIHRydWUgXG4gICAgfWVsc2V7XG4gICAgICAgIGJvdFBsYXkoKVxuICAgIH1cbiAgICBjcmVhdGVCb2FyZCgpXG5cbn1cblxuZnVuY3Rpb24gcGxheWVyUGxheSguLi5jb29ycyl7XG4gICAgXG4gICAgbGV0IHJvd0Nvb3IgPSBjb29yc1swXVxuICAgIGxldCBjb2xDb29yID0gY29vcnNbMV1cbiAgICBsZXQgcGxheWVyQ29vcnMgPSBbcm93Q29vcixjb2xDb29yXVxuICAgIGxldCBzaG90ID0gYm90R2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhbLi4ucGxheWVyQ29vcnNdKVxuICAgICAgICBpZihzaG90KXtcbiAgICAgICAgICAgIGJvdFBsYXkoKVxuXG4gICAgICAgICAgICBjcmVhdGVCb2FyZCgpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0cnVlIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3QpO1xuICAgICAgICAgICAgcGxheWVyUGxheSgpXG4gICAgICAgIH1cblxufVxuXG5cblxuXG5leHBvcnR7U2hpcCxHYW1lQm9hcmQsYm90UGxheSxwbGF5ZXJQbGF5LH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiUGxheWVyIiwiYm90UGxheSIsInBsYXllclBsYXkiLCJwbGF5ZXJHYW1lQm9hcmQiLCJib3RHYW1lQm9hcmQiLCJyYW5kb21pemVCb2FyZCIsInVzZXJTaGlwUGxhY2UiLCJhdmFpbFNoaXBzIiwidXNlckRpcmVjdGlvbiIsInNoaXBzTGVmdCIsInJlc2V0TWFwIiwiYm9hcmQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdGFydEJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJyYW5kb21CdG4iLCJyZXNldEJ0biIsInJlc3RhcnRCdG4iLCJyZXN0YXJ0QnRuMiIsImV4cGxhaW4iLCJldmVudHNDb25zb2xlIiwiZW5lbXlUZXh0IiwicGxheWVyVGV4dCIsImVuZW15U2VjdGlvbiIsImJvdGhCb2FyZHMiLCJjb25zb2xlIiwibG9nIiwic2Nyb2xsSW50b1ZpZXciLCJjcmVhdGVCb2FyZCIsInRleHRDb250ZW50IiwibmFtZSIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwicGxheWVycyIsImoiLCJpbm5lckhUTUwiLCJyIiwibWFwIiwibGVuZ3RoIiwiYyIsImJvYXJkR3JpZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiT2JqZWN0Iiwia2V5cyIsImFsbFNoaXBzIiwiaW5jbHVkZXMiLCJpIiwiY3VycmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJzaG90U2lnbiIsImFwcGVuZCIsInN0YXJ0R2FtZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiZW5kU2NyZWVuIiwid2luRW5kU2NyZWVuIiwiZW5kR2FtZSIsIndpbm5lciIsInVwZGF0ZUNvbnNvbGUiLCJib2FyZE5hbWUiLCJtc2ciLCJjb2xvciIsInN0eWxlIiwiU2hpcCIsInNoaXBzTGlzdCIsImRpcmVjdGlvbnMiLCJlIiwiY29kZSIsImNvb3JzIiwiZGlyZWNpb24iLCJhZGRTaGlwIiwibW92ZWRzaGlwIiwic2hpZnQiLCJwYXRyb2xCb2F0Iiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiYmF0dGxlU2hpcCIsImNhcnJpZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoaXRzIiwic2FuayIsImhpdCIsInNpbmsiLCJhdHRhY2tzTWlzc2VkIiwiYXR0YWNrc0hpdCIsInJvdyIsInB1c2giLCJzaGlwIiwiY29vciIsImRpcmVjdGlvbiIsInJlY2l2ZUF0dGFjayIsImFyciIsInNldFRpbWVvdXQiLCJzaG90Iiwicm93Q29vciIsImNvbENvb3IiLCJwbGF5ZXJDb29ycyJdLCJzb3VyY2VSb290IjoiIn0=