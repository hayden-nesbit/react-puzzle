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
            let obj = { currentPosition: i,
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
        // console.log(currentClicked)
        console.log(this.state.tilePositions[currentClicked-1].type)
        // console.log("in the update click")
        //if my neighbor is blank, run switchTile with it
            // currentPosition +1
            // currentPosition -1
            // currentPosition +4
            // currentPosition -4
        //else nothing

        if(this.state.tilePositions[currentClicked-1].type === "blank") {
            this.state.tilePositions[currentClicked].type = this.state.tilePositions[currentClicked-1].type;
            this.state.tilePositions[currentClicked].currentPosition = this.state.tilePositions[currentClicked-1].currentPosition
        } else if (this.state.tilePositions[currentClicked+1].type === "blank") {
            this.state.tilePositions[currentClicked].type = this.state.tilePositions[currentClicked+1].type;
            this.state.tilePositions[currentClicked].currentPosition = this.state.tilePositions[currentClicked+1].currentPosition
        } else if (this.state.tilePositions[currentClicked+4].type === "blank") {
            this.state.tilePositions[currentClicked].type = this.state.tilePositions[currentClicked+4].type;
            this.state.tilePositions[currentClicked].currentPosition = this.state.tilePositions[currentClicked+4].currentPosition
        } else if (this.state.tilePositions[currentClicked-4].type === "blank") {
            this.state.tilePositions[currentClicked].type = this.state.tilePositions[currentClicked-4].type;
            this.state.tilePositions[currentClicked].currentPosition = this.state.tilePositions[currentClicked-4].currentPosition
        } 
        this.setState({
            tilePositions: this.state.tilePositions
        })

    }

    randomizeBoard() {

    }

    checkWin() {
    //
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
                                currentPosition={item.currentPosition}
                                winPosition={item.winPosition}
                                showMove={this.showMove}
                                type={item.type}
                                id={item.type}
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

