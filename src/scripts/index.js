import { GameBoard,Player,botPlay, playerPlay } from "./main";
import {createBoard} from "./dom.js"


export let botGameBoard = GameBoard()
export let playerGameBoard = GameBoard()

const directions = ['horizontal',"vertical"]

botGameBoard.addShip(botGameBoard.allShips.patrolBoat,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.submarine,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.destroyer,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.battleShip,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.carrier,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])

// playerGameBoard.addShip(playerGameBoard.allShips.patrolBoat,[4,0])
// playerGameBoard.addShip(playerGameBoard.allShips.submarine,[0,2])
// playerGameBoard.addShip(playerGameBoard.allShips.destroyer,[2,1])
// playerGameBoard.addShip(playerGameBoard.allShips.battleShip,[0,9])
// playerGameBoard.addShip(playerGameBoard.allShips.carrier,[7,0],)

playerGameBoard.addShip(playerGameBoard.allShips.patrolBoat,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
playerGameBoard.addShip(playerGameBoard.allShips.submarine,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
playerGameBoard.addShip(playerGameBoard.allShips.destroyer,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
playerGameBoard.addShip(playerGameBoard.allShips.battleShip,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
playerGameBoard.addShip(playerGameBoard.allShips.carrier,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])



createBoard()

// while(Object.keys(playerGameBoard.allShips).length > 0 || Object.keys(botGameBoard.allShips).length > 0){

// createBoard()
// playerPlay()
// botPlay()


// }


