import React from 'react'
import './Tile.css'
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
        this.props.checkWin(e)
    }

    render() {

        let location = this.props.tempObj.tileLoc
        let top = location[0] * -100
        let left = location[1] * -100

        return (
            <div onClick={this.switchTile} id={this.props.tempObj.type} className="col-md-3 col-3 border p-0 bg-secondary" style={{height:100, width:100, overflow:"hidden"}}>
                <img style={{top:top, left:left}} src={process.env.PUBLIC_URL + this.props.img} />
            </div>
        )
    }

}

    export default Tile
