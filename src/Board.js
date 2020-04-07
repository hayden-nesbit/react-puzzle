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

        let tempPositions = this.state.tilePositions
        let tempObj = this.state.tilePositions[currentClicked]

        let newPosition = -1

        let targetRow = parseInt((tempPositions[currentClicked].winPosition) / 4)
        let targetCol = (tempPositions[currentClicked].winPosition) % 4

        let blankRow = parseInt((tempPositions[0].currentPosition) / 4)
        let blankCol = (tempPositions[0].currentPosition) % 4


        console.log({ targetRow, targetCol })
        console.log({ blankRow, blankCol })


        if (targetRow === blankRow && Math.abs(blankCol - targetCol) === 1) {
            newPosition =
            tempPositions[newPosition].type = "regular";
            tempPositions[currentClicked].type = "blank";
            let temp = tempObj.currentPosition
            tempPositions[currentClicked].currentPosition = tempPositions[newPosition].currentPosition;
            tempPositions[newPosition].currentPosition = temp;
        }

        else if (targetCol === blankCol && Math.abs(blankRow - targetRow) === 1) {
            newPosition =
            tempPositions[newPosition].type = "regular";
            tempPositions[currentClicked].type = "blank";
            let temp = tempObj.currentPosition
            tempPositions[currentClicked].currentPosition = tempPositions[newPosition].currentPosition;
            tempPositions[newPosition].currentPosition = temp;
        }

        this.setState({
            tilePositions: tempPositions
        })

    }


    // //if 0
    // if (tempPositions[currentClicked].winPosition === 0) {
    //     if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     }
    // }

    // //if 3
    // else if (tempPositions[currentClicked].winPosition === 3) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     }
    // }

    // //if 1,2
    // else if (tempPositions[currentClicked].winPosition === 1 || tempPositions[currentClicked].winPosition === 2) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     }
    // }

    // //if 4,8
    // else if (tempPositions[currentClicked].winPosition === 4 || tempPositions[currentClicked].winPosition === 8) {
    //     if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     } else if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     }
    // }

    // //if 5,6,9,10
    // else if (tempPositions[currentClicked].winPosition === 5 || tempPositions[currentClicked].winPosition === 6 || tempPositions[currentClicked].winPosition === 9 || tempPositions[currentClicked].winPosition === 10) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     } else if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     }
    // }

    // //if 7, 11
    // else if (tempPositions[currentClicked].winPosition === 7 || tempPositions[currentClicked].winPosition === 11) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked + 4].type === "blank") {
    //         newPosition = currentClicked + 4
    //     } else if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     }
    // }

    // //if 12
    // else if (tempPositions[currentClicked].winPosition === 12) {
    //     if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     } else if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     }
    // }

    // //if 13,14
    // else if (tempPositions[currentClicked].winPosition === 13 || tempPositions[currentClicked].winPosition === 14) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked + 1].type === "blank") {
    //         newPosition = currentClicked + 1
    //     } else if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     }
    // }

    // //if 15
    // else if (tempPositions[currentClicked].winPosition === 15) {
    //     if (tempPositions[currentClicked - 1].type === "blank") {
    //         newPosition = currentClicked - 1
    //     } else if (tempPositions[currentClicked - 4].type === "blank") {
    //         newPosition = currentClicked - 4
    //     }
    // }

    // if (!(newPosition === -1)) {
    //     tempPositions[newPosition].type = "regular";
    //     tempPositions[currentClicked].type = "blank";
    //     let temp = tempObj.currentPosition
    //     tempPositions[currentClicked].currentPosition = tempPositions[newPosition].currentPosition;
    //     tempPositions[newPosition].currentPosition = temp;

    //     this.setState({
    //         tilePositions: tempPositions
    //     })
    // }


    randomizeBoard() {
        //set a function to take an array and randomize it's indexes
        //sort it randomly
        console.log("here")
        let tempPositions = this.state.tilePositions
        for (let i = tempPositions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = tempPositions[i]
            tempPositions[i] = tempPositions[j]
            tempPositions[j] = temp

            // if (tempPositions === this.state.tilePositions) {
            //     this.randomizeBoard()
            // } else {
            this.setState({
                tilePositions: tempPositions
            })
        }

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

