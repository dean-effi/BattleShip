import { GameBoard,Player,botPlay, playerPlay,  } from "./main";
import{playerGameBoard,botGameBoard, randomizeBoard,userShipPlace,availShips,userDirection,shipsLeft,resetMap} from "./index.js"



const board = Array.from(document.querySelectorAll(".board")) 
const startBtn = document.querySelector(".start-btn")
const randomBtn = document.querySelector(".random-btn")
const resetBtn = document.querySelector(".reset-btn")
const restartBtn = document.querySelector(".restart-btn")
const restartBtn2 = document.querySelector(".restart-btn2")
const explain = document.querySelector(".explain")
const eventsConsole = document.querySelector(".console")

const enemyText = document.querySelector(".enemy-txt")
const playerText = document.querySelector(".player-txt")


const enemySection = document.querySelector(".enemy-section")
const bothBoards = document.querySelector(".both-boards")




// eventsConsole.scrollTop = eventsConsole.scrollHeight;

// eventsConsole.scrollIntoView(false);

console.log(eventsConsole);
eventsConsole.scrollIntoView(true)


export function createBoard(){
    if(shipsLeft){
        explain.textContent = `Place Your ${availShips[0].name[0].toUpperCase() + availShips[0].name.substring(1)} Press Space to Rotate`
    }else{

        explain.textContent = `Your Ships Are All Set!`

    }
    let players = [playerGameBoard,botGameBoard, ]
    for(let j = 0;j < 2;j++){
        board[j].innerHTML = ''

        for (let r = 0; r < players[j].map.length; r++) {
            for (let c = 0; c < players[j].map[r].length; c++) {

                let boardGrid = document.createElement("div")
                boardGrid.classList.add(`${r},${c}`)

                if(j == 1){
                    boardGrid.addEventListener("click", ()=>{
                      
                        playerPlay(r,c)

                        
                    })
                boardGrid.classList.add("hover:bg-gray-400")

                }
              
                if(j == 0){
                    if(Object.keys(playerGameBoard.allShips).includes(players[j].map[r][c])
                    || players[j].map[r][c] == "H"){
                        boardGrid.classList.add("bg-teal-800")

    
                    }

                    boardGrid.addEventListener("click",()=>{
                        userShipPlace(playerGameBoard,[r,c])
                    })

                    boardGrid.addEventListener("mouseover",()=>{
                        if(shipsLeft > 0){

                            if(userDirection == "horizontal"){
                                for(let i = 0;i < availShips[0].length;i++){
                                    let current = document.getElementsByClassName(`${r},${c + i}`)
                                    current[0].classList.add("bg-teal-500");
        
                                    
                                }

                            }else{

                                for(let i = 0;i < availShips[0].length;i++){
                                    let current = document.getElementsByClassName(`${r + i  },${c }`)
                                    current[0].classList.add("bg-teal-500");
        
                                    
                                }

                            }

                        }
                     
                    })

                    boardGrid.addEventListener("mouseout",()=>{

                        if(shipsLeft){

                            if(userDirection == "horizontal"){
                                for(let i = 0;i < availShips[0].length;i++){
                                    let current = document.getElementsByClassName(`${r},${c + i}`)
                                    current[0].classList.remove("bg-teal-500");
        
                                    
                                }

                            }else{

                                for(let i = 0;i < availShips[0].length;i++){
                                    let current = document.getElementsByClassName(`${r + i  },${c }`)
                                    current[0].classList.remove("bg-teal-500");
        
                                    
                                }

                            }

                        }
                    })
    

                }
                if(players[j].map[r][c] == "H"){
                    let shotSign = document.createElement("div")
                    boardGrid.append(shotSign)
                    
                    boardGrid.classList.add("relative")
                    shotSign.classList.add("lg:h-5","lg:w-5","bg-rose-800","rounded-full","absolute"
                    ,"top-[32%]","left-[37%]","h-2","w-2","lg:top-[29%]","lg:left-[33%]")


                }
                if(players[j].map[r][c] == "M"){
                    let shotSign = document.createElement("div")
                    boardGrid.append(shotSign)

                    boardGrid.classList.add("relative")
                    shotSign.classList.add("lg:h-5","lg:w-5","bg-white","rounded-full","absolute"
                    ,"top-[32%]","left-[37%]","h-2","w-2","lg:top-[29%]","lg:left-[33%]")

                }

                boardGrid.classList.add("w-full","h-full","border","border-white"
                ,"board-grid","overflow-hidden")
                board[j].append(boardGrid)


                
            }
        }
    }
  
}


function startGame(){
    if(shipsLeft == false){
        startBtn.classList.add("hidden")
    
        enemySection.classList.remove("hidden")
        enemySection.classList.add("appear")

        eventsConsole.classList.remove("hidden")

        
        bothBoards.classList.remove("lg:grid-cols-[45%]")
        bothBoards.classList.remove("grid-rows-[50%,20%,5%]")

        bothBoards.classList.add("lg:grid-cols-[40%,40%]",)
        randomBtn.classList.add("hidden")
        resetBtn.classList.add("hidden")
        explain.classList.add("hidden")

    }
    
}











    //to skip main  screen

    // startBtn.classList.add("hidden")

    // enemySection.classList.remove("hidden")
    // enemySection.classList.add("appear")

    // eventsConsole.classList.remove("hidden")

    
    // bothBoards.classList.remove("lg:grid-cols-[45%]")
    // bothBoards.classList.remove("grid-rows-[50%,20%,5%]")

    // bothBoards.classList.add("lg:grid-cols-[40%,40%]",)
    // randomBtn.classList.add("hidden")
    // resetBtn.classList.add("hidden")
    // explain.classList.add("hidden")






















startBtn.addEventListener("click",startGame)
randomBtn.addEventListener("click",()=>{
    randomizeBoard(playerGameBoard)
    createBoard()

})

resetBtn.addEventListener("click",()=>{
    resetMap()
    createBoard()
})

restartBtn.addEventListener("click",()=>{
    location.reload()
})

restartBtn2.addEventListener("click",()=>{
    location.reload()
})


let endScreen = document.querySelector(".end-screen")
let winEndScreen = document.querySelector(".win-end-screen")

export function endGame(winner){
    if(winner == "player"){

        winEndScreen.classList.remove("hidden")

    }else{

        endScreen.classList.remove("hidden")

    }

}

export function updateConsole(boardName,msg,color="white"){

    if(boardName == "enemy"){
        playerText.textContent = " - You Have" + msg
        playerText.style.color = color

    }else{
        enemyText.textContent = " - Enemy Has" +  msg
        enemyText.style.color = color
    }
    
}
