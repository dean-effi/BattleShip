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

    function addShip(ship,coor,direction = "horizontal"){
        if(direction == "horizontal"){  
            //check if coors available
            for(let j = 0; j < ship.length; j++){
                if(coor[0] + j > 9 || coor[0] + j < 0 || coor[1] + j > 9 || coor[1] + j < 0 
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
                if(coor[0] + j > 9 || coor[0] + j < 0 || coor[1] + j > 9 || coor[1] + j < 0
                || this.map[coor[0] + j][coor[1]]){

                    return "Spot is taken"
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
                    return true
                }
            }
        }



        //evaluates if the shot hit or missed 
        if(this.map[coors[0]][coors[1]]){
            attacksHit.push(coors)
            //turn name string into variable to hit correct ship 
            eval(this.map[coors[0]][coors[1]]).hit()
        

            return true
        }else{
            attacksMissed.push(coors)
            return false
        }
    }


    return{map,addShip,reciveAttack}
}

let destroyer  = Ship("destroyer",3)
let bigBoy  = Ship("bigBoy",5)

let gameBoard1 = GameBoard()

gameBoard1.addShip(destroyer,[0,2],"vertical")
gameBoard1.addShip(bigBoy,[0,5],"horizontal")

gameBoard1.reciveAttack([0,2])
gameBoard1.reciveAttack([1,2])

gameBoard1.reciveAttack([2,2])


gameBoard1.reciveAttack([3,2])





export{Ship,GameBoard}