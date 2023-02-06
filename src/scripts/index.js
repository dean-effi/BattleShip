import { GameBoard,Player,botPlay, playerPlay } from "./main";
import {createBoard} from "./dom.js"


export let botGameBoard = GameBoard()
export let playerGameBoard = GameBoard()
const directions = ['horizontal',"vertical"]


export function randomizePlayerBoard(){
  playerGameBoard.map = playerGameBoard.map.map(()=>{return [0,0,0,0,0,0,0,0,0,0]})

  playerGameBoard.addShip(playerGameBoard.allShips.patrolBoat,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  playerGameBoard.addShip(playerGameBoard.allShips.submarine,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  playerGameBoard.addShip(playerGameBoard.allShips.destroyer,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  playerGameBoard.addShip(playerGameBoard.allShips.battleShip,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  playerGameBoard.addShip(playerGameBoard.allShips.carrier,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  

}


botGameBoard.addShip(botGameBoard.allShips.patrolBoat,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.submarine,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.destroyer,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.battleShip,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
botGameBoard.addShip(botGameBoard.allShips.carrier,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])


randomizePlayerBoard()
createBoard()



