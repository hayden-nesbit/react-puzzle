import React from 'react'
import Tile from './Tile'
import Upload from './Upload'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tilePositions: [],
        }
        this.showMove = this.showMove.bind(this)

    }

    componentDidUpdate() {
        // window.localStorage.setItem('tilePositions', JSON.stringify(this.state.tilePositions))
    }

    componentDidMount() {
        this.generateTilePositions()
    }

    generateTilePositions() {
        let tilePositions = []

        for (let i = 0; i < 16; i++) {
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
        // console.log(this.state.tilePositions[currentClicked - 1].type)

        //change to "isAllowed = true/false"
        //run through 4 if statements, if one hits, switch to TRUE
        //then have code to do switch written once
       
        let tempPositions = this.state.tilePositions
        let tempObj = this.state.tilePositions[currentClicked]

        let newPosition = -1

        if (tempPositions[currentClicked - 1].type === "blank") {
            newPosition = currentClicked - 1
    

        } else if (tempPositions[currentClicked + 1].type === "blank") {
            newPosition = currentClicked + 1

        } else if (tempPositions[currentClicked + 4].type === "blank") {
            newPosition = currentClicked + 4


        } else if (tempPositions[currentClicked - 4].type === "blank") {
            newPosition = currentClicked - 4

        }
        
        if (!(newPosition === -1)) {
            tempPositions[newPosition].type = "regular";
            tempPositions[currentClicked].type = "blank";
            let temp = tempObj.currentPosition
            this.state.tilePositions[currentClicked].currentPosition = this.state.tilePositions[newPosition].currentPosition;
            this.state.tilePositions[newPosition].currentPosition = temp;
            
            this.setState({
                tilePositions: tempPositions
            })
        }
        
            
    }

    randomizeBoard() {

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
                    <div className="col-md-6 offset-3 col-sm-12">
                        <div className="row">
                            {this.state.tilePositions.map((item, index) => (
                                <Tile
                                    key={index}
                                    tempObj={item}
                                    // currentPosition={item.currentPosition}
                                    // winPosition={item.winPosition}
                                    // type={item.type}
                                    // id={item.type}
                                    showMove={this.showMove}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board

