import {Ship,GameBoard} from "./index.js"


describe("Ship Tests",()=>{

    test("Check if hits sink ship",()=>{
    let dean = Ship("dean", 2)
 
        dean.hit()
        expect(dean.sank).toBe(false)
        dean.hit()
        expect(dean.sank).toBe(true)

    })

})


describe("gameboard tests",()=>{

    test('check if ship gets added',()=>{
        let testShip = Ship("sheep",3)
        let testGameBoard1 = GameBoard()

        testGameBoard1.addShip(testShip,[0,2])
        expect(testGameBoard1.map[0]).toEqual([0,0,3,3,3,0,0,0,0,0])
    })



 test('check if ship does not get added when coors are wrong',()=>{
        let testShip2 = Ship("sheep",4)
        let testGameBoard1 = GameBoard()

        expect(testGameBoard1.addShip(testShip2,[11,2])).toEqual(false)
    })


})
