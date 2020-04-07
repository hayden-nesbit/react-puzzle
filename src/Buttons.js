import React from 'react'

class Buttons extends React.Component {
    constructor(props) {
        super(props)
    }
   

    // handleClick(e){
    //     e.preventDefault()
    //     this.props.randomizeBoard()
    // }

    render() {
        return (
            <div className="mt-5" >
                <button onClick={this.props.randomizeBoard} type="button" class="btn btn-secondary btn-md">Scramble</button>
            </div>
        )
    }
}

export default Buttons