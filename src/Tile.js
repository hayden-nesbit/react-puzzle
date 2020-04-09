import React from 'react'
import './Tile.css'
import logo from './logo.svg'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            position: -1,
        
        }
        this.switchTile = this.switchTile.bind(this)
    }

    componentDidMount(){
        this.setState({
            position: this.props.tempObj.currentPosition,
        })
    }

    componentDidUpdate() {
    }

    switchTile(e) {
        e.preventDefault();
        this.props.showMove(this.state.position)
    }

    render() {

        let location = this.props.tempObj.tileLoc
        let top = location[0] * -100
        let left = location[1] * -100
        console.log({top, left})

        return (
            <div onClick={this.switchTile} className="col-md-3 col-3 border p-0 bg-secondary" style={{height:100, width:100, overflow:"hidden"}}>
                <img style={{top:top, left:left}} id={this.props.tempObj.type} src={logo} />
            </div>
        )
    }

}

    export default Tile
