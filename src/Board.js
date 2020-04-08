import React from 'react'
import Tile from './Tile'
import Upload from './Upload'
import Buttons from './Buttons'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tilePositions: [],
        }
        this.showMove = this.showMove.bind(this)
        this.generateTilePositions = this.generateTilePositions.bind(this)
        this.randomizeBoard = this.randomizeBoard.bind(this)
        this.checkWin = this.checkWin.bind(this)
    }

    componentDidUpdate() {
        this.checkWin()
    }

    componentDidMount() {
        this.generateTilePositions()
    }

    generateTilePositions() {
        let tilePositions = []

        let boardSize = 16 //Let this be an available input for user to set size

        for (let i = 0; i < boardSize; i++) {
            let obj = {
                currentPosition: i,
                winPosition: i,
                type: i === 0 ? "blank" : "regular",
            }
            tilePositions.push(obj)
        }
        this.setState({
            tilePositions: tilePositions,
        })
    }

    showMove(currentClicked) {

        //console.log(this.state.tilePositions)
        let tempPositions = this.state.tilePositions
        let zeroObj = this.state.tilePositions.find(i => i.winPosition === 0)
        //array find to look for index of currentPosition 0 
        let clickedObj = this.state.tilePositions[currentClicked]
        console.log({clickedObj, zeroObj})

        let newPosition = -1

        let clickRow = parseInt((clickedObj.currentPosition) / 4)
        let clickCol = (clickedObj.currentPosition) % 4

        let blankRow = parseInt((zeroObj.currentPosition) / 4)
        let blankCol = (zeroObj.currentPosition) % 4

        let canSwitch = false;
           
        if (clickRow === blankRow && Math.abs(blankCol - clickCol) === 1) {
            canSwitch = true;
        } else if (clickCol === blankCol && Math.abs(blankRow - clickRow) === 1) {
            canSwitch = true;
        } else {
            canSwitch = false;
        }
        
        if(canSwitch){
            // newPosition = clickedObj.currentPosition
            // let temp = zeroObj.currentPosition
            let zpos = this.findMe(zeroObj.currentPosition);
            let cpos = this.findMe(clickedObj.currentPosition);
            let npos = this.findMe(clickedObj.currentPosition);

            tempPositions[cpos].type = "blank";
            tempPositions[zpos].type = "regular";
            // console.log({zeroObj.currentPosition, zeroObj})
            // clickedObj - winPosition is equal to it's index
            // zeroObj - winPosition currentPosition  is changing with each click
            console.log(tempPositions[cpos].currentPosition);
            console.log(tempPositions[zpos].currentPosition);
            tempPositions[cpos].currentPosition = zeroObj.currentPosition;
            tempPositions[zpos].currentPosition = cpos;

            this.setState({
                tilePositions: tempPositions
            })
        }
     
    }

    findMe(p){
        let k = 0;
        for (let i = 0; i < this.state.tilePositions.length; i++){
            if(this.state.tilePositions[i].currentPosition === p){
                k = i;
                break;
            }
        }
        return k;
    }

    randomizeBoard() {
        //swap tiles once, and call it a random number of times

        console.log("here")
        let tempPositions = this.state.tilePositions
        for (let i = tempPositions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = tempPositions[i].currentPosition
            tempPositions[i].currentPosition = tempPositions[j].currentPosition
            tempPositions[j].currentPosition = temp
        }

        // if (tempPositions.currentPosition === tempPositions.winPosition) {
        //     this.randomizeBoard()
        // }

        this.setState({
            tilePositions: tempPositions
        })
    }

    checkWin() {
        let tally = 0
        for (let i = 0; i < this.state.tilePositions.length; i++) {
            if (this.state.tilePositions[i].currentPosition === this.state.tilePositions[i].winPosition) {
                tally = tally + 1
            }
        }
        if (tally = 16) {

        }
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-4 col-sm-12">
                        <Upload />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-3 col-6">
                        <div id="grid" className="row">
                            {this.state.tilePositions.map((item, index) => (
                                <Tile
                                    key={index}
                                    tempObj={item}
                                    showMove={this.showMove}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <Buttons
                    randomize={this.randomizeBoard}
                />
            </div>
        )
    }
}

export default Board

