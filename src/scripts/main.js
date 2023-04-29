import { createBoard, endGame, updateConsole } from "./dom.js";
import { playerGameBoard, botGameBoard } from "./index.js";

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
  return { name, length, hit, sank, sink };
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

  function addShip(ship, coor, direction = "horizontal") {
    if (direction == "horizontal") {
      //check if coors available

      for (let j = 0; j < ship.length; j++) {
        if (
          coor[1] + j > 9 ||
          coor[1] + j < 0 ||
          this.map[coor[0]][coor[1]] ||
          this.map[coor[0]][coor[1] + j] ||
          (typeof this.map[coor[0]][coor[1] + j + 1] != "undefined" &&
            this.map[coor[0]][coor[1] + j + 1]) ||
          (typeof this.map[coor[0]][coor[1] + j - 1] != "undefined" &&
            this.map[coor[0]][coor[1] + j - 1]) ||
          (typeof this.map[coor[0] + 1] != "undefined" &&
            this.map[coor[0] + 1][coor[1] + j]) ||
          (typeof this.map[coor[0] - 1] != "undefined" &&
            this.map[coor[0] - 1][coor[1] + j])
        ) {
          this.addShip(
            this.allShips[ship.name],
            [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)],
            directions[Math.floor(Math.random() * 2)]
          );
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
        if (
          coor[0] + j > 9 ||
          coor[0] + j < 0 ||
          this.map[coor[0]][coor[1]] ||
          this.map[coor[0] + j][coor[1]] ||
          (typeof this.map[coor[0] + j][coor[1] + 1] != "undefined" &&
            this.map[coor[0] + j][coor[1] + 1]) ||
          (typeof this.map[coor[0] + j][coor[1] - 1] != "undefined" &&
            this.map[coor[0] + j][coor[1] - 1]) ||
          (typeof this.map[coor[0] + 1] != "undefined" &&
            this.map[coor[0] + 1][coor[1] + j]) ||
          (typeof this.map[coor[0] - 1] != "undefined" &&
            this.map[coor[0] - 1][coor[1] + j])
        ) {
          this.addShip(this.allShips[ship.name], [
            Math.floor(Math.random() * 9),
            Math.floor(Math.random() * 9),
          ]);

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
      updateConsole(
        this.boardName,
        " Hit The " + currentShip.name.toUpperCase()
      );
      currentShip.hit();
      if (currentShip.sank) {
        if (this.boardName == "enemy") {
          updateConsole(
            this.boardName,
            " Sank The " + currentShip.name.toUpperCase(),
            "green"
          );
        } else {
          updateConsole(
            this.boardName,
            " Sank The " + currentShip.name.toUpperCase(),
            "red"
          );
        }

        delete this.allShips[this.map[coors[0]][coors[1]]];

        //call game over
        if (
          Object.keys(playerGameBoard.allShips).length < 1 ||
          Object.keys(botGameBoard.allShips).length < 1
        ) {
          if (Object.keys(botGameBoard.allShips).length < 1) {
            setTimeout(endGame, 500, "player");
          } else {
            setTimeout(endGame, 500, "bot");
          }
        }
      }

      this.map[coors[0]][coors[1]] = "H";

      return currentShip;
    } else {
      attacksMissed.push(coors);
      updateConsole(this.boardName, " Missed");

      this.map[coors[0]][coors[1]] = "M";
      return true;
    }
  }
  return { map, addShip, reciveAttack, allShips, boardName, attacksHit };
}
let lastShipHit = false;
function botPlay() {
  let attacksHit = playerGameBoard.attacksHit;
  let shot;
  if (lastShipHit.sank) {
    lastShipHit = false;
  }
  if (lastShipHit) {
    let randCoorOne =
      attacksHit[attacksHit.length - 1][0] +
      Math.round((Math.random() - 0.5) * ((lastShipHit.length - 1) * 2));

    let randCoorTwo =
      attacksHit[attacksHit.length - 1][1] +
      Math.round((Math.random() - 0.5) * ((lastShipHit.length - 1) * 2));

    if (
      randCoorOne > 9 ||
      randCoorOne < 0 ||
      randCoorTwo > 9 ||
      randCoorTwo < 0
    ) {
      shot = false;
    } else {
      shot = playerGameBoard.reciveAttack([randCoorOne, randCoorTwo]);
    }
  } else {
    shot = playerGameBoard.reciveAttack([
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ]);
  }
  if (shot.name) {
    lastShipHit = shot;
  }

  if (shot) {
    return true;
  } else {
    botPlay();
  }

  createBoard();
}

function playerPlay(...coors) {
  let rowCoor = coors[0];
  let colCoor = coors[1];
  let playerCoors = [rowCoor, colCoor];
  let shot = botGameBoard.reciveAttack([...playerCoors]);
  if (shot) {
    botPlay();

    createBoard();

    return true;
  } else {
    playerPlay();
  }
}

export { Ship, GameBoard, botPlay, playerPlay };
