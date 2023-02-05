import { GameBoard,Player,botPlay, playerPlay } from "./main";
import{playerGameBoard,botGameBoard} from "./index.js"



const board = Array.from(document.querySelectorAll(".board")) 
const startBtn = document.querySelector(".start-btn")
const enemySection = document.querySelector(".enemy-section")



export function createBoard(){
    let players = [botGameBoard, playerGameBoard]
    for(let j = 0;j < 2;j++){
        board[j].innerHTML = ''

        for (let r = 0; r < players[j].map.length; r++) {
            for (let c = 0; c < players[j].map[r].length; c++) {

                let boardGrid = document.createElement("div")

                if(j == 0){
                    boardGrid.addEventListener("click", ()=>{
                        console.log(r);
                        console.log(c);
                        playerPlay(r,c)

                        
                    })
                }

                if(players[j].map[r][c]){
                    boardGrid.classList.add("bg-blue-800")

                }

                if(players[j].map[r][c] == "H"){
                    boardGrid.classList.add("bg-red-800")

                }

                
                if(players[j].map[r][c] == "M"){
                    boardGrid.classList.add("bg-black")

                }







                boardGrid.classList.add("w-full","h-full","border","border-black"
                ,"board-grid","overflow-hidden")
                board[j].append(boardGrid)



            }

       
        
        
        
        }








    }
  
}


function startGame(){
    console.log('start');
    enemySection.classList.remove("hidden")
}


startBtn.addEventListener("click",startGame)

