import { GameBoard,Player,botPlay, playerPlay } from "./main";

export let botGameBoard = GameBoard()
export let playerGameBoard = GameBoard()


botGameBoard.addShip(botGameBoard.allShips.patrolBoat,[4,0])
botGameBoard.addShip(botGameBoard.allShips.submarine,[0,2])
botGameBoard.addShip(botGameBoard.allShips.destroyer,[2,1])
botGameBoard.addShip(botGameBoard.allShips.battleShip,[0,9],"vertical")
botGameBoard.addShip(botGameBoard.allShips.carrier,[7,0],)

playerGameBoard.addShip(playerGameBoard.allShips.patrolBoat,[4,0])
playerGameBoard.addShip(playerGameBoard.allShips.submarine,[0,2])
playerGameBoard.addShip(playerGameBoard.allShips.destroyer,[2,1])
playerGameBoard.addShip(playerGameBoard.allShips.battleShip,[0,9],"vertical")
playerGameBoard.addShip(playerGameBoard.allShips.carrier,[7,0],)


while(Object.keys(botGameBoard.allShips).length > 0 &&
  Object.keys(playerGameBoard.allShips).length > 0){

    playerPlay()
    botPlay()
    
    console.log(botGameBoard.map);

}







console.log(botGameBoard, playerGameBoard);