import React from 'react'

class Upload extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div class="form-group text-left">
                        <label for="exampleFormControlFile1"></label>
                        <input type="file" class="form-control-file" id="exampleFormControlFile1"></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Upload
