import React from 'react'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
   

    handleClick(e){
        e.preventDefault()
        this.props.randomize()
    }

    render() {
        return (
            <div className="mt-5 text-left ml-5" >
                <button onClick={this.handleClick} type="button" class="btn btn-secondary btn-md">Scramble</button>
            </div>
        )
    }
}

export default Buttons