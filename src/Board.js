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
            
            let clickRow = parseInt((i) / 4)
            let clickCol = (i) % 4
            let tileLoc = [clickRow, clickCol]
            let obj = {
                currentPosition: i,
                winPosition: i,
                type: "regular",
                tileLoc: tileLoc
            }
            tilePositions.push(obj)
        }

       

        let bpos = this.findMe(0, tilePositions);
        tilePositions[bpos].type = "blank";
        this.setState({
            tilePositions: tilePositions,
        })
    }

    showMove(currentClicked) {

        let tempPositions = this.state.tilePositions
        let zeroObj = this.state.tilePositions.find(i => i.currentPosition === 0)
        let clickedObj = this.state.tilePositions[currentClicked]

        let zpos = this.findMe(zeroObj.currentPosition, this.state.tilePositions);
        let cpos = this.findMe(clickedObj.currentPosition, this.state.tilePositions);

        console.log(cpos)

        let clickRow = parseInt((cpos) / 4)
        let clickCol = (cpos) % 4

        let blankRow = parseInt((zpos) / 4)
        let blankCol = (zpos) % 4

        let canSwitch = false;

        if (clickRow === blankRow && Math.abs(blankCol - clickCol) === 1) {
            canSwitch = true;
        } else if (clickCol === blankCol && Math.abs(blankRow - clickRow) === 1) {
            canSwitch = true;
        } else {
            canSwitch = false;
        }
        
        if(canSwitch){

            tempPositions[cpos].type = "blank";
            tempPositions[zpos].type = "regular";

            let tmpLoc = tempPositions[cpos].tileLoc;
            tempPositions[cpos].tileLoc = zeroObj.tileLoc
            tempPositions[zpos].tileLoc = tmpLoc

            let tmp = tempPositions[cpos].currentPosition;
            tempPositions[cpos].currentPosition = zeroObj.currentPosition;
            tempPositions[zpos].currentPosition = tmp;

            this.setState({
                tilePositions: tempPositions,
            })
        }
     
    }

    findMe(p, arr){
        let k = 0;
        for (let i = 0; i < arr.length; i++){
            if(arr[i].currentPosition === p){
                k = i;
                break;
            }
        }
        return k;
    }

    randomizeBoard() {
        let tempPositions = this.state.tilePositions
        for (let i = tempPositions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = tempPositions[i].tileLoc
            tempPositions[i].tileLoc = tempPositions[j].tileLoc
            tempPositions[j].tileLoc = temp
            tempPositions[i].type = "regular";
            tempPositions[j].type = "regular";
        }
        let bpos = this.findMe(0, tempPositions);
        tempPositions[bpos].type = "blank";

        this.setState({
            tilePositions: tempPositions
        })
    }

    async checkWin() {
        let tally = 0
        for (let i = 0; i < this.state.tilePositions.length; i++) {
            if (this.state.tilePositions[i].currentPosition === this.state.tilePositions[i].winPosition) {
                tally = tally + 1
            }
        }
         if (tally === 16) {
            await alert("winner")
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
                        <div id="grid" className="row" style={{width:400}}>
                            {this.state.tilePositions.map((item, index) => (
                                <Tile
                                    key={index}
                                    tempObj={item}
                                    showMove={this.showMove}
                                    id={index}
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
