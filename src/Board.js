import React from 'react'
import Tile from './Tile'
import Upload from './Upload'
import Buttons from './Buttons'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tilePositions: [],
            imgURL: 'logo.svg'
        }

        this.showMove = this.showMove.bind(this)
        this.generateTilePositions = this.generateTilePositions.bind(this)
        this.randomizeBoard = this.randomizeBoard.bind(this)
        this.checkWin = this.checkWin.bind(this)
        this.setImage = this.setImage.bind(this)
        // this.runRandom = this.runRandom.bind(this)
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

        if (canSwitch) {

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

    findMe(p, arr) {
        let k = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].currentPosition === p) {
                k = i;
                break;
            }
        }
        return k;
    }

    // runRandom() {
    //     this.randomizeBoard()
    // }

    randomizeBoard() {

        let tempPositions = this.state.tilePositions
        console.log(tempPositions)


        for (let i = tempPositions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = tempPositions[i].tileLoc
            tempPositions[i].tileLoc = tempPositions[j].tileLoc
            tempPositions[j].tileLoc = temp
            tempPositions[i].type = "regular";
            tempPositions[j].type = "regular";

        }
        // if (tempPositions.currentPosition === this.state.tilePositions.winPositions) {
        //     this.runRandom()
        // }

        let bpos = this.findMe(0, tempPositions);
        tempPositions[bpos].type = "blank";

        this.setState({
            tilePositions: tempPositions
        })
    }

    checkWin(e) {
        let tempPositions = this.state.tilePositions
        
        let tally = 0
        for (let i = 0; i < this.state.tilePositions.length; i++) {

            let winTileRow = parseInt((tempPositions[i].winPosition) / 4)
            let winTileCol = (tempPositions[i].winPosition) % 4
            let currTileRow = tempPositions[i].tileLoc[0]
            let currTileCol = tempPositions[i].tileLoc[1]

            if (winTileRow === currTileRow && winTileCol === currTileCol) {
                tally = tally + 1
            }
        }

        if (tally === 16 && e) {
            alert("Nice job!")
        }
    }

    setImage(e) {
        let input = e.target.files[0]

        this.setState({
            imgURL: URL.createObjectURL(input)
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4 offset-4 col-sm-12">
                        <Upload
                            setImg={this.setImage}
                        />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6 offset-3 col-6">
                        <div id="grid" className="row border border-secondary" style={{ width: 400 }}>
                            {this.state.tilePositions.map((item, index) => (
                                <Tile
                                    key={index}
                                    tempObj={item}
                                    showMove={this.showMove}
                                    id={index}
                                    checkWin={this.checkWin}
                                    img={this.state.imgURL}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 offset-4 col-sm-12 text-center">
                        <Buttons
                            randomize={this.randomizeBoard}
                        />
                    </div>
                </div>

            </div>
        )
    }
}

export default Board
