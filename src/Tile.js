import React from 'react'
import './Tile.css'


//this tile needs to hold several pieces of data
//its location (0-15 on board)
//its type (either a regular tile or a blank tile (1))
//the image portion for that location
//a clickhandler connected to a move function
//a win location (it's original 0-15)

//onclick, the tile should call the move function and check:
//where am I (location)?
//what am I (type)?
//who am I (img)?
//if any of its neighbors is blank, it should 
//EXCHANGE LOCATION
//keep img
//keep win location

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // location: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            type: '',
            //img??,
            win: ''
        }
    }

    render() {
        return (
            <div id="tile" className="col-md-3 border">
                <div className="text-center">{this.props.location}</div>
            </div>
        )
    }
}

export default Tile
