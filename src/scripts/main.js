import { createBoard,endGame } from "./dom.js"
import{playerGameBoard,botGameBoard,} from "./index.js"



function Ship(name,length){
    let hits = 0
    let sank = false 
    function hit(){
        hits++
        if(hits >= length){
            this.sink()
        }
        
      
    }
    function sink(){
        this.sank = true 
        console.log(this.name + ' HAS SANKKKK!');
     
    }
    return{name,length,hit,sank,sink}

}


function GameBoard(){
    const attacksMissed = []
    const attacksHit =  []
    const map = []
    const row = [0,0,0,0,0,0,0,0,0,0]
    for (let i = 0; i < 10; i++) {
        map.push([...row])
    }

    let allShips = {
        
    }
 
    const directions = ['horizontal',"vertical"]
    
    function addShip(ship,coor,direction = "horizontal"){
        if(direction == "horizontal"){  
            //check if coors available
            // console.log(typeof this.map[coor[0] - 1 ] == undefined);
        
            for(let j = 0; j < ship.length; j++){
                if(
                (coor[1] + j) > 9|| 
                (coor[1] + j) < 0||
                this.map[coor[0]][coor[1]] ||
                this.map[coor[0]][coor[1] + j]||
                typeof this.map[coor[0]][coor[1] + j + 1] != "undefined" && this.map[coor[0]][coor[1] + j + 1]||
                typeof this.map[coor[0]][coor[1] + j - 1] != "undefined" && this.map[coor[0]][coor[1] + j - 1]||
                typeof this.map[coor[0] + 1] != "undefined" && this.map[coor[0] + 1][coor[1] + j]||
                typeof this.map[coor[0] - 1] != "undefined" && this.map[coor[0] - 1][coor[1] + j ]




                
                    ){
                    this.addShip(this.allShips[ship.name],[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)],directions[Math.floor(Math.random() * 2)])
                    return false

                }
            }
            //add Ship To Board
            for(let i = 0; i < ship.length; i++){
                this.map[coor[0]][coor[1] + i] = ship.name
            }
        }else{

            //check if coors available
            for(let j = 0; j < ship.length; j++){
                if(
                    (coor[0] + j) > 9|| 
                    (coor[0] + j) < 0 ||
                    this.map[coor[0]][coor[1]] ||
                    this.map[coor[0] + j][coor[1]]||
                    typeof this.map[coor[0] + j][coor[1]  + 1] != "undefined" && this.map[coor[0] + j][coor[1]  + 1]||
                    typeof this.map[coor[0] + j][coor[1] - 1] != "undefined" && this.map[coor[0]  + j][coor[1] - 1]||
                    typeof this.map[coor[0] + 1] != "undefined" && this.map[coor[0] + 1][coor[1] + j]||
                    typeof this.map[coor[0] - 1] != "undefined" && this.map[coor[0] - 1][coor[1] + j ]
    

                )
                {

                    this.addShip(this.allShips[ship.name],[Math.floor(Math.random() * 9),Math.floor(Math.random() * 9)])

                    return false
                }
            }
            
            //add Ship To Board
            for(let i = 0; i < ship.length; i++){

                this.map[coor[0] + i][coor[1]] = ship.name
            }
        }
    }


    function reciveAttack(coors){

        //checks if already shot
        for(let arr of [...attacksHit, ...attacksMissed]){
            if(arr[0] == coors[0]){
                if (arr[1] == coors[1]){
                    console.log('already shot there ');
                    return 0
                }
            }
        }
        //evaluates if the shot hit or missed 
        if(this.map[coors[0]][coors[1]]){
            attacksHit.push(coors)
            //turn name string into variable to hit correct ship 
            console.log('Thats a hit!');
            this.allShips[this.map[coors[0]][coors[1]]].hit()
            if(this.allShips[this.map[coors[0]][coors[1]]].sank){
                delete this.allShips[this.map[coors[0]][coors[1]]]

                //call game over
                if(Object.keys(playerGameBoard.allShips).length < 1 ||Object.keys( botGameBoard.allShips).length < 1 ){
                    if(Object.keys(botGameBoard.allShips).length < 1){
                        setTimeout(endGame,500,"player") 


                    }else{
                        setTimeout(endGame,500,"bot") 

                    }
                    console.log('GAME OVER');
                };
            }

            this.map[coors[0]][coors[1]] = 'H'
            


        

            return true
        }else{
            attacksMissed.push(coors)
            this.map[coors[0]][coors[1]] = 'M'
            console.log('MISSED@!');
            return true 
        }
    }
    return{map,addShip,reciveAttack,allShips}
}

function botPlay(){
    let shot = playerGameBoard.reciveAttack([Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)])
    if(shot){
        return true 
    }else{
        botPlay()
    }
    createBoard()

}

function playerPlay(...coors){
    
    let rowCoor = coors[0]
    let colCoor = coors[1]
    let playerCoors = [rowCoor,colCoor]
    let shot = botGameBoard.reciveAttack([...playerCoors])
        if(shot){
            botPlay()

            createBoard()
            
            return true 
        }else{
            console.log(shot);
            playerPlay()
        }

}




export{Ship,GameBoard,botPlay,playerPlay,}