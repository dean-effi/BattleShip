import { GameBoard,Player,botPlay, playerPlay } from "./main";
import{playerGameBoard,botGameBoard, randomizePlayerBoard} from "./index.js"



const board = Array.from(document.querySelectorAll(".board")) 
const startBtn = document.querySelector(".start-btn")
const randomBtn = document.querySelector(".random-btn")

const enemySection = document.querySelector(".enemy-section")
const bothBoards = document.querySelector(".both-boards")



export function createBoard(){
    let players = [playerGameBoard,botGameBoard, ]
    for(let j = 0;j < 2;j++){
        board[j].innerHTML = ''

        for (let r = 0; r < players[j].map.length; r++) {
            for (let c = 0; c < players[j].map[r].length; c++) {

                let boardGrid = document.createElement("div")

                if(j == 1){
                    boardGrid.addEventListener("click", ()=>{
                        console.log(r);
                        console.log(c);
                        playerPlay(r,c)

                        
                    })
                boardGrid.classList.add("hover:bg-gray-400")

                }
              
                if(j == 0){
                    if(players[j].map[r][c]){
                        boardGrid.classList.add("bg-teal-800")
    
                    }
    

                }
              
                if(players[j].map[r][c] == "H"){
                    boardGrid.classList.add("bg-rose-800")

                }

                
                if(players[j].map[r][c] == "M"){
                    boardGrid.classList.add("bg-gray-800")

                }


              




                boardGrid.classList.add("w-full","h-full","border","border-white"
                ,"board-grid","overflow-hidden")
                board[j].append(boardGrid)



            }

       
        
        
        
        }








    }
  
}


function startGame(){
    console.log('start');
    console.log(startBtn);
    startBtn.classList.add("hidden")

    enemySection.classList.remove("hidden")
    enemySection.classList.add("appear")

    bothBoards.classList.add("lg:grid-cols-[40%,40%]",)
    randomBtn.classList.add("hidden")
}


startBtn.addEventListener("click",startGame)
randomBtn.addEventListener("click",()=>{
    randomizePlayerBoard()
    createBoard()

})
