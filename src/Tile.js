import React from 'react'
import './Tile.css'
import logo from './logo.svg';

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
            <div onClick={this.switchTile}  id={this.props.type} className="col-md-3 col-3 border bg-secondary" style={{height:100, width:100, overflow:"hidden"}}>
                <img id={this.props.id} src={logo} />
                {/* <div className="text-left">{this.props.tempObj.currentPosition}</div> will change to {this.props.tempObj.img} */}
            </div>
        )
    }

}

    export default Tile
