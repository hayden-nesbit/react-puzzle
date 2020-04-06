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
            type: '',
            position: -1
        }
        this.switchTile = this.switchTile.bind(this)
    }

    componentDidMount(){
        this.setState({
            position: this.props.currentPosition,
            type: this.props.type
        })
    }

    componentDidUpdate() {

    }

    switchTile(e) {
        e.preventDefault();
        console.log("click worked")
        this.props.showMove()

        //now.. if a tile is clicked, set currentPosition to another tiles currentPosition

        // if (this.state.position === 0) {
        //     this.setState({
        //         position: 1
        //     })
        // }
    }

    render() {

        return (
            <div onClick={this.switchTile} id="tile" className="col-md-3 border">
                <div className="text-center">{this.state.position}</div>
            </div>
        )
    }

}

    export default Tile
