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
        let shotSign = document.createElement("div");
        shotSign.classList.add("lg:h-5", "lg:w-5", "bg-rose-800", "rounded-full", "absolute", "top-[32%]", "left-[37%]", "h-2", "w-2", "lg:top-[29%]", "lg:left-[33%]");
        boardGrid.classList.add("relative");
        if (players[j].map[r][c] == "H") {
          boardGrid.append(shotSign);
        }
        if (players[j].map[r][c] == "M") {
          boardGrid.append(shotSign);
          shotSign.classList.add("bg-white");
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
    randomBtn.classList.add("hidden");
    resetBtn.classList.add("hidden");
    explain.classList.add("hidden");
    enemySection.classList.remove("hidden");
    enemySection.classList.add("appear");
    eventsConsole.classList.remove("hidden");
    bothBoards.classList.remove("lg:grid-cols-[45%]");
    bothBoards.classList.remove("grid-rows-[50%,20%,5%]");
    bothBoards.classList.add("lg:grid-cols-[40%,40%]");
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
          return 0;
        }
      }
    }
    //evaluates if the shot hit or missed
    if (this.map[coors[0]][coors[1]]) {
      let currentShip = this.allShips[this.map[coors[0]][coors[1]]];
      attacksHit.push(coors);
      //turn name string into variable to hit correct ship
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Hit The " + currentShip.name.toUpperCase());
      currentShip.hit();
      if (currentShip.sank) {
        if (this.boardName == "enemy") {
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Sank The " + currentShip.name.toUpperCase(), "green");
        } else {
          (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Sank The " + currentShip.name.toUpperCase(), "red");
        }
        delete this.allShips[this.map[coors[0]][coors[1]]];

        //call game over
        if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.allShips).length < 1 || Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
          if (Object.keys(_index_js__WEBPACK_IMPORTED_MODULE_1__.botGameBoard.allShips).length < 1) {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "player");
          } else {
            setTimeout(_dom_js__WEBPACK_IMPORTED_MODULE_0__.endGame, 500, "bot");
          }
        }
      }
      this.map[coors[0]][coors[1]] = "H";
      return currentShip;
    } else {
      attacksMissed.push(coors);
      (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.updateConsole)(this.boardName, " Missed");
      this.map[coors[0]][coors[1]] = "M";
      return true;
    }
  }
  return {
    map,
    addShip,
    reciveAttack,
    allShips,
    boardName,
    attacksHit
  };
}
let lastShipHit = false;
function botPlay() {
  let attacksHit = _index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.attacksHit;
  let shot;
  if (lastShipHit.sank) {
    lastShipHit = false;
  }
  if (lastShipHit) {
    let randCoorOne = attacksHit[attacksHit.length - 1][0] + Math.round((Math.random() - 0.5) * ((lastShipHit.length - 1) * 2));
    let randCoorTwo = attacksHit[attacksHit.length - 1][1] + Math.round((Math.random() - 0.5) * ((lastShipHit.length - 1) * 2));
    if (randCoorOne > 9 || randCoorOne < 0 || randCoorTwo > 9 || randCoorTwo < 0) {
      shot = false;
    } else {
      shot = _index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.reciveAttack([randCoorOne, randCoorTwo]);
    }
  } else {
    shot = _index_js__WEBPACK_IMPORTED_MODULE_1__.playerGameBoard.reciveAttack([Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]);
  }
  if (shot.name) {
    lastShipHit = shot;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWVCb2FyZCwgUGxheWVyLCBib3RQbGF5LCBwbGF5ZXJQbGF5IH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHtcbiAgcGxheWVyR2FtZUJvYXJkLFxuICBib3RHYW1lQm9hcmQsXG4gIHJhbmRvbWl6ZUJvYXJkLFxuICB1c2VyU2hpcFBsYWNlLFxuICBhdmFpbFNoaXBzLFxuICBzaGlwc0xlZnQsXG4gIHJlc2V0TWFwLFxufSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuXG5jb25zdCBib2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib2FyZFwiKSk7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtYnRuXCIpO1xuY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yYW5kb20tYnRuXCIpO1xuY29uc3QgcmVzZXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc2V0LWJ0blwiKTtcbmNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuXCIpO1xuY29uc3QgcmVzdGFydEJ0bjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnQtYnRuMlwiKTtcbmNvbnN0IGV4cGxhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4cGxhaW5cIik7XG5jb25zdCBldmVudHNDb25zb2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb25zb2xlXCIpO1xuXG5jb25zdCBlbmVteVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZW15LXR4dFwiKTtcbmNvbnN0IHBsYXllclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci10eHRcIik7XG5cbmNvbnN0IGVuZW15U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXktc2VjdGlvblwiKTtcbmNvbnN0IGJvdGhCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdGgtYm9hcmRzXCIpO1xuXG5jb25zdCBlbmRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVuZC1zY3JlZW5cIik7XG5jb25zdCB3aW5FbmRTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbi1lbmQtc2NyZWVuXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoKSB7XG4gIGlmIChzaGlwc0xlZnQpIHtcbiAgICBleHBsYWluLnRleHRDb250ZW50ID0gYFBsYWNlIFlvdXIgJHtcbiAgICAgIGF2YWlsU2hpcHNbMF0ubmFtZVswXS50b1VwcGVyQ2FzZSgpICsgYXZhaWxTaGlwc1swXS5uYW1lLnN1YnN0cmluZygxKVxuICAgIH0gUHJlc3MgU3BhY2UgdG8gUm90YXRlYDtcbiAgfSBlbHNlIHtcbiAgICBleHBsYWluLnRleHRDb250ZW50ID0gYFlvdXIgU2hpcHMgQXJlIEFsbCBTZXQhYDtcbiAgfVxuICBsZXQgcGxheWVycyA9IFtwbGF5ZXJHYW1lQm9hcmQsIGJvdEdhbWVCb2FyZF07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgMjsgaisrKSB7XG4gICAgYm9hcmRbal0uaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcGxheWVyc1tqXS5tYXAubGVuZ3RoOyByKyspIHtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgcGxheWVyc1tqXS5tYXBbcl0ubGVuZ3RoOyBjKyspIHtcbiAgICAgICAgbGV0IGJvYXJkR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKGAke3J9LCR7Y31gKTtcblxuICAgICAgICBpZiAoaiA9PSAxKSB7XG4gICAgICAgICAgYm9hcmRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwbGF5ZXJQbGF5KHIsIGMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJvYXJkR3JpZC5jbGFzc0xpc3QuYWRkKFwiaG92ZXI6YmctZ3JheS00MDBcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaiA9PSAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgT2JqZWN0LmtleXMocGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzKS5pbmNsdWRlcyhcbiAgICAgICAgICAgICAgcGxheWVyc1tqXS5tYXBbcl1bY11cbiAgICAgICAgICAgICkgfHxcbiAgICAgICAgICAgIHBsYXllcnNbal0ubWFwW3JdW2NdID09IFwiSFwiXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBib2FyZEdyaWQuY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtODAwXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJvYXJkR3JpZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgdXNlclNoaXBQbGFjZShwbGF5ZXJHYW1lQm9hcmQsIFtyLCBjXSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBib2FyZEdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcHNMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICBpZiAodXNlckRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXZhaWxTaGlwc1swXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICAgICAgICAgICAgICBgJHtyfSwke2MgKyBpfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50WzBdLmNsYXNzTGlzdC5hZGQoXCJiZy10ZWFsLTUwMFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIGAke3IgKyBpfSwke2N9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LmFkZChcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgYm9hcmRHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hpcHNMZWZ0KSB7XG4gICAgICAgICAgICAgIGlmICh1c2VyRGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdmFpbFNoaXBzWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICAgICAgICAgICAgIGAke3J9LCR7YyArIGl9YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRbMF0uY2xhc3NMaXN0LnJlbW92ZShcImJnLXRlYWwtNTAwXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsU2hpcHNbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgICAgICAgICAgICAgYCR7ciArIGl9LCR7Y31gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgY3VycmVudFswXS5jbGFzc0xpc3QucmVtb3ZlKFwiYmctdGVhbC01MDBcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNob3RTaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2hvdFNpZ24uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBcImxnOmgtNVwiLFxuICAgICAgICAgIFwibGc6dy01XCIsXG4gICAgICAgICAgXCJiZy1yb3NlLTgwMFwiLFxuICAgICAgICAgIFwicm91bmRlZC1mdWxsXCIsXG4gICAgICAgICAgXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIFwidG9wLVszMiVdXCIsXG4gICAgICAgICAgXCJsZWZ0LVszNyVdXCIsXG4gICAgICAgICAgXCJoLTJcIixcbiAgICAgICAgICBcInctMlwiLFxuICAgICAgICAgIFwibGc6dG9wLVsyOSVdXCIsXG4gICAgICAgICAgXCJsZzpsZWZ0LVszMyVdXCJcbiAgICAgICAgKTtcbiAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXCJyZWxhdGl2ZVwiKTtcbiAgICAgICAgaWYgKHBsYXllcnNbal0ubWFwW3JdW2NdID09IFwiSFwiKSB7XG4gICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZChzaG90U2lnbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcnNbal0ubWFwW3JdW2NdID09IFwiTVwiKSB7XG4gICAgICAgICAgYm9hcmRHcmlkLmFwcGVuZChzaG90U2lnbik7XG4gICAgICAgICAgc2hvdFNpZ24uY2xhc3NMaXN0LmFkZChcImJnLXdoaXRlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9hcmRHcmlkLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgXCJ3LWZ1bGxcIixcbiAgICAgICAgICBcImgtZnVsbFwiLFxuICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgXCJib3JkZXItd2hpdGVcIixcbiAgICAgICAgICBcImJvYXJkLWdyaWRcIixcbiAgICAgICAgICBcIm92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgICk7XG4gICAgICAgIGJvYXJkW2pdLmFwcGVuZChib2FyZEdyaWQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGlmIChzaGlwc0xlZnQgPT0gZmFsc2UpIHtcbiAgICBzdGFydEJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJhbmRvbUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJlc2V0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZXhwbGFpbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZW5lbXlTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhcHBlYXJcIik7XG5cbiAgICBldmVudHNDb25zb2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBib3RoQm9hcmRzLmNsYXNzTGlzdC5yZW1vdmUoXCJsZzpncmlkLWNvbHMtWzQ1JV1cIik7XG4gICAgYm90aEJvYXJkcy5jbGFzc0xpc3QucmVtb3ZlKFwiZ3JpZC1yb3dzLVs1MCUsMjAlLDUlXVwiKTtcblxuICAgIGJvdGhCb2FyZHMuY2xhc3NMaXN0LmFkZChcImxnOmdyaWQtY29scy1bNDAlLDQwJV1cIik7XG4gIH1cbn1cblxuZXhwb3J0IGxldCB1c2VyRGlyZWN0aW9uID0gXCJob3Jpem9udGFsXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmNvZGUgPT0gXCJTcGFjZVwiKSB7XG4gICAgaWYgKHVzZXJEaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIHVzZXJEaXJlY3Rpb24gPSBcInZlcnRpY2FsXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVzZXJEaXJlY3Rpb24gPSBcImhvcml6b250YWxcIjtcbiAgICB9XG4gIH1cbn0pO1xuXG5zdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRHYW1lKTtcbnJhbmRvbUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByYW5kb21pemVCb2FyZChwbGF5ZXJHYW1lQm9hcmQpO1xuICBjcmVhdGVCb2FyZCgpO1xufSk7XG5cbnJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHJlc2V0TWFwKCk7XG4gIGNyZWF0ZUJvYXJkKCk7XG59KTtcblxucmVzdGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5yZXN0YXJ0QnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsb2NhdGlvbi5yZWxvYWQoKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5kR2FtZSh3aW5uZXIpIHtcbiAgaWYgKHdpbm5lciA9PSBcInBsYXllclwiKSB7XG4gICAgd2luRW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgZW5kU2NyZWVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbnNvbGUoYm9hcmROYW1lLCBtc2csIGNvbG9yID0gXCJ3aGl0ZVwiKSB7XG4gIGlmIChib2FyZE5hbWUgPT0gXCJlbmVteVwiKSB7XG4gICAgcGxheWVyVGV4dC50ZXh0Q29udGVudCA9IFwiIC0gWW91IEhhdmVcIiArIG1zZztcbiAgICBwbGF5ZXJUZXh0LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gIH0gZWxzZSB7XG4gICAgZW5lbXlUZXh0LnRleHRDb250ZW50ID0gXCIgLSBFbmVteSBIYXNcIiArIG1zZztcbiAgICBlbmVteVRleHQuc3R5bGUuY29sb3IgPSBjb2xvcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2FtZUJvYXJkLCBib3RQbGF5LCBwbGF5ZXJQbGF5LCBTaGlwIH0gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgY3JlYXRlQm9hcmQsIHVzZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi9kb20uanNcIjtcbmV4cG9ydCBsZXQgc2hpcHNMaXN0ID0gW1xuICBTaGlwKFwicGF0cm9sQm9hdFwiLCAyKSxcbiAgU2hpcChcInN1Ym1hcmluZVwiLCAzKSxcbiAgU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgU2hpcChcImJhdHRsZVNoaXBcIiwgNCksXG4gIFNoaXAoXCJjYXJyaWVyXCIsIDUpLFxuXTtcbmV4cG9ydCBsZXQgYXZhaWxTaGlwcyA9IFsuLi5zaGlwc0xpc3RdO1xuZXhwb3J0IGxldCBzaGlwc0xlZnQgPSB0cnVlO1xuZXhwb3J0IGxldCBib3RHYW1lQm9hcmQgPSBHYW1lQm9hcmQoXCJlbmVteVwiKTtcbmV4cG9ydCBsZXQgcGxheWVyR2FtZUJvYXJkID0gR2FtZUJvYXJkKFwicGxheWVyXCIpO1xuZXhwb3J0IGNvbnN0IGRpcmVjdGlvbnMgPSBbXCJob3Jpem9udGFsXCIsIFwidmVydGljYWxcIl07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VyU2hpcFBsYWNlKGJvYXJkLCBjb29ycywgZGlyZWNpb24gPSB1c2VyRGlyZWN0aW9uKSB7XG4gIGlmIChzaGlwc0xlZnQpIHtcbiAgICBib2FyZC5hZGRTaGlwKGF2YWlsU2hpcHNbMF0sIGNvb3JzLCBkaXJlY2lvbik7XG4gICAgbGV0IG1vdmVkc2hpcCA9IGF2YWlsU2hpcHMuc2hpZnQoKTtcbiAgICBib2FyZFtcImFsbFNoaXBzXCJdW21vdmVkc2hpcC5uYW1lXSA9IG1vdmVkc2hpcDtcbiAgfVxuICBpZiAoYXZhaWxTaGlwcy5sZW5ndGggPCAxKSB7XG4gICAgc2hpcHNMZWZ0ID0gZmFsc2U7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9taXplQm9hcmQoYm9hcmQpIHtcbiAgYm9hcmQuYWxsU2hpcHMgPSB7XG4gICAgcGF0cm9sQm9hdDogU2hpcChcInBhdHJvbEJvYXRcIiwgMiksXG4gICAgc3VibWFyaW5lOiBTaGlwKFwic3VibWFyaW5lXCIsIDMpLFxuICAgIGRlc3Ryb3llcjogU2hpcChcImRlc3Ryb3llclwiLCAzKSxcbiAgICBiYXR0bGVTaGlwOiBTaGlwKFwiYmF0dGxlU2hpcFwiLCA0KSxcbiAgICBjYXJyaWVyOiBTaGlwKFwiY2FycmllclwiLCA1KSxcbiAgfTtcblxuICBpZiAoYm9hcmQgPT0gcGxheWVyR2FtZUJvYXJkKSB7XG4gICAgc2hpcHNMZWZ0ID0gZmFsc2U7XG4gIH1cbiAgYm9hcmQubWFwID0gYm9hcmQubWFwLm1hcCgoKSA9PiB7XG4gICAgcmV0dXJuIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgfSk7XG5cbiAgT2JqZWN0LmtleXMoYm9hcmQuYWxsU2hpcHMpLmZvckVhY2goKHNoaXApID0+IHtcbiAgICBib2FyZC5hZGRTaGlwKFxuICAgICAgYm9hcmQuYWxsU2hpcHNbc2hpcF0sXG4gICAgICBbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpXSxcbiAgICAgIGRpcmVjdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildXG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNldE1hcCgpIHtcbiAgcGxheWVyR2FtZUJvYXJkLm1hcCA9IHBsYXllckdhbWVCb2FyZC5tYXAubWFwKCgpID0+IHtcbiAgICByZXR1cm4gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICB9KTtcbiAgcGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzID0ge307XG4gIHNoaXBzTGVmdCA9IHRydWU7XG4gIGF2YWlsU2hpcHMgPSBbLi4uc2hpcHNMaXN0XTtcbn1cblxucmFuZG9taXplQm9hcmQoYm90R2FtZUJvYXJkKTtcblxuY3JlYXRlQm9hcmQoKTtcbiIsImltcG9ydCB7IGNyZWF0ZUJvYXJkLCBlbmRHYW1lLCB1cGRhdGVDb25zb2xlIH0gZnJvbSBcIi4vZG9tLmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXJHYW1lQm9hcmQsIGJvdEdhbWVCb2FyZCB9IGZyb20gXCIuL2luZGV4LmpzXCI7XG5cbmZ1bmN0aW9uIFNoaXAobmFtZSwgbGVuZ3RoKSB7XG4gIGxldCBoaXRzID0gMDtcbiAgbGV0IHNhbmsgPSBmYWxzZTtcbiAgZnVuY3Rpb24gaGl0KCkge1xuICAgIGhpdHMrKztcbiAgICBpZiAoaGl0cyA+PSBsZW5ndGgpIHtcbiAgICAgIHRoaXMuc2luaygpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzaW5rKCkge1xuICAgIHRoaXMuc2FuayA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHsgbmFtZSwgbGVuZ3RoLCBoaXQsIHNhbmssIHNpbmsgfTtcbn1cblxuZnVuY3Rpb24gR2FtZUJvYXJkKG5hbWUpIHtcbiAgY29uc3QgYm9hcmROYW1lID0gbmFtZTtcbiAgY29uc3QgYXR0YWNrc01pc3NlZCA9IFtdO1xuICBjb25zdCBhdHRhY2tzSGl0ID0gW107XG4gIGNvbnN0IG1hcCA9IFtdO1xuICBjb25zdCByb3cgPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgbWFwLnB1c2goWy4uLnJvd10pO1xuICB9XG5cbiAgbGV0IGFsbFNoaXBzID0ge307XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IFtcImhvcml6b250YWxcIiwgXCJ2ZXJ0aWNhbFwiXTtcblxuICBmdW5jdGlvbiBhZGRTaGlwKHNoaXAsIGNvb3IsIGRpcmVjdGlvbiA9IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgLy9jaGVjayBpZiBjb29ycyBhdmFpbGFibGVcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb29yWzFdICsgaiA+IDkgfHxcbiAgICAgICAgICBjb29yWzFdICsgaiA8IDAgfHxcbiAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdXSB8fFxuICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF1dW2Nvb3JbMV0gKyBqXSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiArIDFdKSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGogLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdICsgaiAtIDFdKSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyAxXVtjb29yWzFdICsgal0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXSAtIDFdW2Nvb3JbMV0gKyBqXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5hZGRTaGlwKFxuICAgICAgICAgICAgdGhpcy5hbGxTaGlwc1tzaGlwLm5hbWVdLFxuICAgICAgICAgICAgW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KV0sXG4gICAgICAgICAgICBkaXJlY3Rpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpXVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL2FkZCBTaGlwIFRvIEJvYXJkXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5tYXBbY29vclswXV1bY29vclsxXSArIGldID0gc2hpcC5uYW1lO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2NoZWNrIGlmIGNvb3JzIGF2YWlsYWJsZVxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb29yWzBdICsgaiA+IDkgfHxcbiAgICAgICAgICBjb29yWzBdICsgaiA8IDAgfHxcbiAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdXVtjb29yWzFdXSB8fFxuICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyBqXVtjb29yWzFdXSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIGpdW2Nvb3JbMV0gKyAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSArIDFdKSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIGpdW2Nvb3JbMV0gLSAxXSAhPSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICB0aGlzLm1hcFtjb29yWzBdICsgal1bY29vclsxXSAtIDFdKSB8fFxuICAgICAgICAgICh0eXBlb2YgdGhpcy5tYXBbY29vclswXSArIDFdICE9IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JbMF0gKyAxXVtjb29yWzFdICsgal0pIHx8XG4gICAgICAgICAgKHR5cGVvZiB0aGlzLm1hcFtjb29yWzBdIC0gMV0gIT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgdGhpcy5tYXBbY29vclswXSAtIDFdW2Nvb3JbMV0gKyBqXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy5hZGRTaGlwKHRoaXMuYWxsU2hpcHNbc2hpcC5uYW1lXSwgW1xuICAgICAgICAgICAgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSksXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KSxcbiAgICAgICAgICBdKTtcblxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL2FkZCBTaGlwIFRvIEJvYXJkXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGhpcy5tYXBbY29vclswXSArIGldW2Nvb3JbMV1dID0gc2hpcC5uYW1lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlY2l2ZUF0dGFjayhjb29ycykge1xuICAgIC8vY2hlY2tzIGlmIGFscmVhZHkgc2hvdFxuICAgIGZvciAobGV0IGFyciBvZiBbLi4uYXR0YWNrc0hpdCwgLi4uYXR0YWNrc01pc3NlZF0pIHtcbiAgICAgIGlmIChhcnJbMF0gPT0gY29vcnNbMF0pIHtcbiAgICAgICAgaWYgKGFyclsxXSA9PSBjb29yc1sxXSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vZXZhbHVhdGVzIGlmIHRoZSBzaG90IGhpdCBvciBtaXNzZWRcbiAgICBpZiAodGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSkge1xuICAgICAgbGV0IGN1cnJlbnRTaGlwID0gdGhpcy5hbGxTaGlwc1t0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dXTtcbiAgICAgIGF0dGFja3NIaXQucHVzaChjb29ycyk7XG4gICAgICAvL3R1cm4gbmFtZSBzdHJpbmcgaW50byB2YXJpYWJsZSB0byBoaXQgY29ycmVjdCBzaGlwXG4gICAgICB1cGRhdGVDb25zb2xlKFxuICAgICAgICB0aGlzLmJvYXJkTmFtZSxcbiAgICAgICAgXCIgSGl0IFRoZSBcIiArIGN1cnJlbnRTaGlwLm5hbWUudG9VcHBlckNhc2UoKVxuICAgICAgKTtcbiAgICAgIGN1cnJlbnRTaGlwLmhpdCgpO1xuICAgICAgaWYgKGN1cnJlbnRTaGlwLnNhbmspIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmROYW1lID09IFwiZW5lbXlcIikge1xuICAgICAgICAgIHVwZGF0ZUNvbnNvbGUoXG4gICAgICAgICAgICB0aGlzLmJvYXJkTmFtZSxcbiAgICAgICAgICAgIFwiIFNhbmsgVGhlIFwiICsgY3VycmVudFNoaXAubmFtZS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgXCJncmVlblwiXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1cGRhdGVDb25zb2xlKFxuICAgICAgICAgICAgdGhpcy5ib2FyZE5hbWUsXG4gICAgICAgICAgICBcIiBTYW5rIFRoZSBcIiArIGN1cnJlbnRTaGlwLm5hbWUudG9VcHBlckNhc2UoKSxcbiAgICAgICAgICAgIFwicmVkXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHRoaXMuYWxsU2hpcHNbdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXV07XG5cbiAgICAgICAgLy9jYWxsIGdhbWUgb3ZlclxuICAgICAgICBpZiAoXG4gICAgICAgICAgT2JqZWN0LmtleXMocGxheWVyR2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxIHx8XG4gICAgICAgICAgT2JqZWN0LmtleXMoYm90R2FtZUJvYXJkLmFsbFNoaXBzKS5sZW5ndGggPCAxXG4gICAgICAgICkge1xuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyhib3RHYW1lQm9hcmQuYWxsU2hpcHMpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZW5kR2FtZSwgNTAwLCBcInBsYXllclwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChlbmRHYW1lLCA1MDAsIFwiYm90XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcFtjb29yc1swXV1bY29vcnNbMV1dID0gXCJIXCI7XG5cbiAgICAgIHJldHVybiBjdXJyZW50U2hpcDtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0YWNrc01pc3NlZC5wdXNoKGNvb3JzKTtcbiAgICAgIHVwZGF0ZUNvbnNvbGUodGhpcy5ib2FyZE5hbWUsIFwiIE1pc3NlZFwiKTtcblxuICAgICAgdGhpcy5tYXBbY29vcnNbMF1dW2Nvb3JzWzFdXSA9IFwiTVwiO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IG1hcCwgYWRkU2hpcCwgcmVjaXZlQXR0YWNrLCBhbGxTaGlwcywgYm9hcmROYW1lLCBhdHRhY2tzSGl0IH07XG59XG5sZXQgbGFzdFNoaXBIaXQgPSBmYWxzZTtcbmZ1bmN0aW9uIGJvdFBsYXkoKSB7XG4gIGxldCBhdHRhY2tzSGl0ID0gcGxheWVyR2FtZUJvYXJkLmF0dGFja3NIaXQ7XG4gIGxldCBzaG90O1xuICBpZiAobGFzdFNoaXBIaXQuc2Fuaykge1xuICAgIGxhc3RTaGlwSGl0ID0gZmFsc2U7XG4gIH1cbiAgaWYgKGxhc3RTaGlwSGl0KSB7XG4gICAgbGV0IHJhbmRDb29yT25lID1cbiAgICAgIGF0dGFja3NIaXRbYXR0YWNrc0hpdC5sZW5ndGggLSAxXVswXSArXG4gICAgICBNYXRoLnJvdW5kKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqICgobGFzdFNoaXBIaXQubGVuZ3RoIC0gMSkgKiAyKSk7XG5cbiAgICBsZXQgcmFuZENvb3JUd28gPVxuICAgICAgYXR0YWNrc0hpdFthdHRhY2tzSGl0Lmxlbmd0aCAtIDFdWzFdICtcbiAgICAgIE1hdGgucm91bmQoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogKChsYXN0U2hpcEhpdC5sZW5ndGggLSAxKSAqIDIpKTtcblxuICAgIGlmIChcbiAgICAgIHJhbmRDb29yT25lID4gOSB8fFxuICAgICAgcmFuZENvb3JPbmUgPCAwIHx8XG4gICAgICByYW5kQ29vclR3byA+IDkgfHxcbiAgICAgIHJhbmRDb29yVHdvIDwgMFxuICAgICkge1xuICAgICAgc2hvdCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaG90ID0gcGxheWVyR2FtZUJvYXJkLnJlY2l2ZUF0dGFjayhbcmFuZENvb3JPbmUsIHJhbmRDb29yVHdvXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHNob3QgPSBwbGF5ZXJHYW1lQm9hcmQucmVjaXZlQXR0YWNrKFtcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSxcbiAgICBdKTtcbiAgfVxuICBpZiAoc2hvdC5uYW1lKSB7XG4gICAgbGFzdFNoaXBIaXQgPSBzaG90O1xuICB9XG5cbiAgaWYgKHNob3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBib3RQbGF5KCk7XG4gIH1cblxuICBjcmVhdGVCb2FyZCgpO1xufVxuXG5mdW5jdGlvbiBwbGF5ZXJQbGF5KC4uLmNvb3JzKSB7XG4gIGxldCByb3dDb29yID0gY29vcnNbMF07XG4gIGxldCBjb2xDb29yID0gY29vcnNbMV07XG4gIGxldCBwbGF5ZXJDb29ycyA9IFtyb3dDb29yLCBjb2xDb29yXTtcbiAgbGV0IHNob3QgPSBib3RHYW1lQm9hcmQucmVjaXZlQXR0YWNrKFsuLi5wbGF5ZXJDb29yc10pO1xuICBpZiAoc2hvdCkge1xuICAgIGJvdFBsYXkoKTtcblxuICAgIGNyZWF0ZUJvYXJkKCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwbGF5ZXJQbGF5KCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZUJvYXJkLCBib3RQbGF5LCBwbGF5ZXJQbGF5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiUGxheWVyIiwiYm90UGxheSIsInBsYXllclBsYXkiLCJwbGF5ZXJHYW1lQm9hcmQiLCJib3RHYW1lQm9hcmQiLCJyYW5kb21pemVCb2FyZCIsInVzZXJTaGlwUGxhY2UiLCJhdmFpbFNoaXBzIiwic2hpcHNMZWZ0IiwicmVzZXRNYXAiLCJib2FyZCIsIkFycmF5IiwiZnJvbSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInN0YXJ0QnRuIiwicXVlcnlTZWxlY3RvciIsInJhbmRvbUJ0biIsInJlc2V0QnRuIiwicmVzdGFydEJ0biIsInJlc3RhcnRCdG4yIiwiZXhwbGFpbiIsImV2ZW50c0NvbnNvbGUiLCJlbmVteVRleHQiLCJwbGF5ZXJUZXh0IiwiZW5lbXlTZWN0aW9uIiwiYm90aEJvYXJkcyIsImVuZFNjcmVlbiIsIndpbkVuZFNjcmVlbiIsImNyZWF0ZUJvYXJkIiwidGV4dENvbnRlbnQiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJwbGF5ZXJzIiwiaiIsImlubmVySFRNTCIsInIiLCJtYXAiLCJsZW5ndGgiLCJjIiwiYm9hcmRHcmlkIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJPYmplY3QiLCJrZXlzIiwiYWxsU2hpcHMiLCJpbmNsdWRlcyIsInVzZXJEaXJlY3Rpb24iLCJpIiwiY3VycmVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJyZW1vdmUiLCJzaG90U2lnbiIsImFwcGVuZCIsInN0YXJ0R2FtZSIsImUiLCJjb2RlIiwibG9jYXRpb24iLCJyZWxvYWQiLCJlbmRHYW1lIiwid2lubmVyIiwidXBkYXRlQ29uc29sZSIsImJvYXJkTmFtZSIsIm1zZyIsImNvbG9yIiwic3R5bGUiLCJTaGlwIiwic2hpcHNMaXN0IiwiZGlyZWN0aW9ucyIsImNvb3JzIiwiZGlyZWNpb24iLCJhZGRTaGlwIiwibW92ZWRzaGlwIiwic2hpZnQiLCJwYXRyb2xCb2F0Iiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiYmF0dGxlU2hpcCIsImNhcnJpZXIiLCJmb3JFYWNoIiwic2hpcCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhpdHMiLCJzYW5rIiwiaGl0Iiwic2luayIsImF0dGFja3NNaXNzZWQiLCJhdHRhY2tzSGl0Iiwicm93IiwicHVzaCIsImNvb3IiLCJkaXJlY3Rpb24iLCJyZWNpdmVBdHRhY2siLCJhcnIiLCJjdXJyZW50U2hpcCIsInNldFRpbWVvdXQiLCJsYXN0U2hpcEhpdCIsInNob3QiLCJyYW5kQ29vck9uZSIsInJvdW5kIiwicmFuZENvb3JUd28iLCJyb3dDb29yIiwiY29sQ29vciIsInBsYXllckNvb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==