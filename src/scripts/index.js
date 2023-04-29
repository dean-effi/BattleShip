import { GameBoard, botPlay, playerPlay, Ship } from "./main";
import { createBoard, userDirection } from "./dom.js";
export let shipsList = [
  Ship("patrolBoat", 2),
  Ship("submarine", 3),
  Ship("destroyer", 3),
  Ship("battleShip", 4),
  Ship("carrier", 5),
];
export let availShips = [...shipsList];
export let shipsLeft = true;
export let botGameBoard = GameBoard("enemy");
export let playerGameBoard = GameBoard("player");
export const directions = ["horizontal", "vertical"];

export function userShipPlace(board, coors, direcion = userDirection) {
  if (shipsLeft) {
    board.addShip(availShips[0], coors, direcion);
    let movedship = availShips.shift();
    board["allShips"][movedship.name] = movedship;
  }
  if (availShips.length < 1) {
    shipsLeft = false;
  }

  createBoard();
}

export function randomizeBoard(board) {
  board.allShips = {
    patrolBoat: Ship("patrolBoat", 2),
    submarine: Ship("submarine", 3),
    destroyer: Ship("destroyer", 3),
    battleShip: Ship("battleShip", 4),
    carrier: Ship("carrier", 5),
  };

  if (board == playerGameBoard) {
    shipsLeft = false;
  }
  board.map = board.map.map(() => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });

  Object.keys(board.allShips).forEach((ship) => {
    board.addShip(
      board.allShips[ship],
      [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)],
      directions[Math.floor(Math.random() * 2)]
    );
  });
}

export function resetMap() {
  playerGameBoard.map = playerGameBoard.map.map(() => {
    return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  });
  playerGameBoard.allShips = {};
  shipsLeft = true;
  availShips = [...shipsList];
}

randomizeBoard(botGameBoard);

createBoard();
