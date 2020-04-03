import React from 'react'
import Tile from './Tile'
import Upload from './Upload'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tilePositions: [],
        }
        this.update = this.update.bind(this)

    }

    componentDidUpdate() {
        window.localStorage.setItem('tilePositions', JSON.stringify(this.state.tilePositions))
    }

    componentDidMount() {
        if (window.localStorage.tilePositions) {
            let tilePositions = JSON.parse(window.localStorage.tilePositions)
            this.setState({
                tilePositions: tilePositions,
            })
        } else {
            this.generateTilePositions()
        }
    }

    generateTilePositions() {
        let tilePositions = []
        for (let i = 0; i < 16; i++) {
            tilePositions.push(i)
        }
        this.setState({
            tilePositions: tilePositions
        })
    }

   update() {
        console.log("in the update click")
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
                            {this.state.tilePositions.map(item => (
                                <Tile
                                    key={item}
                                    currentPosition={item}
                                    winPosition={item}
                                    onChangeFunction={this.update}
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

