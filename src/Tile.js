import React from 'react'
import './Tile.css'

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
        this.props.showMove(this.props.currentPosition)
    }

    render() {

        return (
            <div onClick={this.switchTile}  id={this.props.type} className="col-md-3 border">
                <div id="tile" className="text-center">{this.props.currentPosition}</div>
            </div>
        )
    }

}

    export default Tile
