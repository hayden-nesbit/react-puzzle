import React from 'react'

class Upload extends React.Component {
    
    render() {
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="fileInput"></label>
                        <input onChange={this.props.setImg} type="file" class="form-control-file" id="fileInput"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Upload
