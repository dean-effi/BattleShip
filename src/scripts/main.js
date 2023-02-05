import{playerGameBoard,botGameBoard} from "./index.js"

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
    let allShips = {
        patrolBoat : Ship("patrolBoat",2),
        submarine : Ship("submarine",3),
        destroyer : Ship("destroyer",3),
        battleShip : Ship("battleShip",4),
        carrier : Ship("carrier",5)
    }
    for (let i = 0; i < 10; i++) {
        map.push([...row])
    }

    function addShip(ship,coor,direction = "horizontal"){
        if(direction == "horizontal"){  
            //check if coors available
            for(let j = 0; j < ship.length; j++){
                if(coor[0]  > 9 || coor[0]  < 0 || coor[1] + j > 9 || coor[1] + j < 0 
                || this.map[coor[0]][coor[1] + j]){

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
                if(coor[0] + j > 9 || coor[0] + j < 0 || coor[1]  > 9 || coor[1] < 0
                || this.map[coor[0] + j][coor[1]]){

                    return "Spot is invalid"
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

function Player(name="player1"){
    let turn = false
    return{name,turn,shipsPlaced}
}

function botPlay(){
    let shot = playerGameBoard.reciveAttack([Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)])
    if(shot){
        return true 
    }else{
        botPlay()
    }
}

function playerPlay(){
    
    let rowCoor = Number(prompt("Choose your row:"))
    let colCoor = Number(prompt("Choose your col:"))
    let playerCoors = [rowCoor,colCoor]
    let shot = botGameBoard.reciveAttack([...playerCoors])
        if(shot){
            return true 
        }else{
            console.log(shot);
            playerPlay()
        }
}



export{Ship,GameBoard,Player,botPlay,playerPlay}