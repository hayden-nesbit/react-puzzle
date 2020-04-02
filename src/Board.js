import React from 'react'
import Tile from './Tile'
import Upload from './Upload'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tilePositions: [],
        }
    }

    render() {

    let tileNumber = []
    for (let i = 0; i < 16; i++ ) {
        tileNumber.push(i)
    }

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
                            {tileNumber.map(item => (
                                <Tile
                                    key={item}
                                    location={item}
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

