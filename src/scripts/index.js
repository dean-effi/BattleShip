import { GameBoard,botPlay, playerPlay,Ship } from "./main";
import {createBoard, } from "./dom.js"


export let shipsList = [Ship("patrolBoat",2),Ship("submarine",3),Ship("destroyer",3),
Ship("battleShip",4),Ship("carrier",5)]


export let availShips = [...shipsList]
export let shipsLeft = true 





export let botGameBoard = GameBoard()
export let playerGameBoard = GameBoard()
const directions = ['horizontal',"vertical"]
export let userDirection = "horizontal"








document.addEventListener("keydown",(e)=>{

  if(e.code == "Space"){
    if(userDirection == "horizontal"){
      userDirection = "vertical"
    }else{
      userDirection = "horizontal" 
    }

  }
})




export function userShipPlace(board,coors,direcion=userDirection){
if (shipsLeft){

  board.addShip(availShips[0],coors,direcion)
  let movedship = availShips.shift()
  board['allShips'][movedship.name] = movedship
}


  if(availShips.length < 1){
    shipsLeft = false
  }

  createBoard()


}

// userShipPlace(playerGameBoard,[0,0])



export function randomizeBoard(board){

  board.allShips = {
        patrolBoat : Ship("patrolBoat",2),
        submarine : Ship("submarine",3),
        destroyer : Ship("destroyer",3),
        battleShip : Ship("battleShip",4),
        carrier : Ship("carrier",5)
  }

  if( board == playerGameBoard){
    shipsLeft = false;

  }
  board.map = board.map.map(()=>{return [0,0,0,0,0,0,0,0,0,0]})

  board.addShip(board.allShips.patrolBoat,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  board.addShip(board.allShips.submarine,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  board.addShip(board.allShips.destroyer,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  board.addShip(board.allShips.battleShip,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  board.addShip(board.allShips.carrier,[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
  

}

export function resetMap(){
  playerGameBoard.map = playerGameBoard.map.map(()=>{return [0,0,0,0,0,0,0,0,0,0]})
  playerGameBoard.allShips = {}
  shipsLeft = true
  availShips = [...shipsList]
  console.log(availShips);
}






randomizeBoard(botGameBoard)

createBoard()



