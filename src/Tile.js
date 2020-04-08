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
            position: this.props.tempObj.currentPosition,
            type: this.props.tempObj.type
        })
    }

    componentDidUpdate() {

    }

    switchTile(e) {
        e.preventDefault();
        this.props.showMove(this.state.position)
    }

    render() {
        return (
            <div onClick={this.switchTile}  id={this.props.tempObj.type} className="col-md-3 col-3 border">
                <div id="tile" className="text-center">{this.props.tempObj.currentPosition}</div>
            </div>
        )
    }

}

export default Tile
