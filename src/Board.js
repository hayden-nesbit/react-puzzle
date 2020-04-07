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

    }

    componentDidUpdate() {
        // window.localStorage.setItem('tilePositions', JSON.stringify(this.state.tilePositions))
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
        //when the currentPosition is 12 or greater, + 4 is no longer valid
        //9 variations of move sets
        //do 9 nested if statements... for each of the 9 variations

        //if 0
        if (tempPositions[currentClicked].winPosition === 0) {
            if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4
            }
        }

        //if 3
        else if (tempPositions[currentClicked].winPosition === 3) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4

            }
        }

        //if 1,2
        else if (tempPositions[currentClicked].winPosition === 1 || tempPositions[currentClicked].winPosition === 2) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4
            }
        }

        //if 4,8
        else if (tempPositions[currentClicked].winPosition === 4 || tempPositions[currentClicked].winPosition === 8) {
            if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4
            } else if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            }
        }

        //if 5,6,9,10
        else if (tempPositions[currentClicked].winPosition === 5 || tempPositions[currentClicked].winPosition === 6 || tempPositions[currentClicked].winPosition === 9 || tempPositions[currentClicked].winPosition === 10) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4
            } else if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            }
        }

        //if 7, 11
        else if (tempPositions[currentClicked].winPosition === 7 || tempPositions[currentClicked].winPosition === 11) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked + 4].type === "blank") {
                newPosition = currentClicked + 4
            } else if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            }
        }

        //if 12
        else if (tempPositions[currentClicked].winPosition === 12) {
            if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            } else if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            }
        }

        //if 13,14
        else if (tempPositions[currentClicked].winPosition === 13 || tempPositions[currentClicked].winPosition === 14) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked + 1].type === "blank") {
                newPosition = currentClicked + 1
            } else if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            }
        }

        //if 15
        else if (tempPositions[currentClicked].winPosition === 15) {
            if (tempPositions[currentClicked - 1].type === "blank") {
                newPosition = currentClicked - 1
            } else if (tempPositions[currentClicked - 4].type === "blank") {
                newPosition = currentClicked - 4
            }
        }

        if (!(newPosition === -1)) {
            tempPositions[newPosition].type = "regular";
            tempPositions[currentClicked].type = "blank";
            let temp = tempObj.currentPosition
            tempPositions[currentClicked].currentPosition = tempPositions[newPosition].currentPosition;
            tempPositions[newPosition].currentPosition = temp;

            this.setState({
                tilePositions: tempPositions
            })
        }
    }

    randomizeBoard(e) {
        //set a function to take an array and randomize it's indexes
        //sort it randomly
        e.preventDefault()
        console.log("here")
        let tempPositions = this.state.tilePositions
        tempPositions.sort(() => Math.random() - 0.5)

        this.setState({
            tilePositions: tempPositions
        })
    }

    checkWin() {
        //if currentPositions match original array positions
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
                        <div className="row">
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
                    scramble={this.randomizeBoard}
                />
            </div>
        )
    }
}

export default Board

