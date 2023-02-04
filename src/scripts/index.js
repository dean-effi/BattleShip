import{Player,Ship,GameBoard} from "./main.js"


// console.log({Player,Ship,GameBoard});
let turn;

//temporary way to initiate game
let playerGameBoard = GameBoard()
let botGameBoard = GameBoard()

let patrolBoat =Ship("patrolBoat",2)
let submarine = Ship("submarine",3)
let destroyer = Ship("destroyer",3)
let battleShip = Ship("battleShip",4)
let carrier = Ship("carrier",5)





playerGameBoard.addShip(patrolBoat,[4,0])
playerGameBoard.addShip(submarine,[2,5],"vertical")
playerGameBoard.addShip(destroyer,[1,0])
playerGameBoard.addShip(battleShip,[6,0])
playerGameBoard.addShip(carrier,[5,4])


botGameBoard.addShip(patrolBoat,[4,0])
botGameBoard.addShip(submarine,[2,5],"vertical")
botGameBoard.addShip(destroyer,[1,0])
botGameBoard.addShip(battleShip,[6,0])
botGameBoard.addShip(carrier,[5,4])





console.log({botGameBoard,playerGameBoard});
