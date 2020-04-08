import React from 'react';
import logo from './logo.svg';
// import pic from './new-instagram-logo-png-transparent-light.png'
import './Image.css'


class Image extends React.Component {

    


    render() {
        return (
            <div className="image">
                {/* <img src={logo} /> */}
                <img src={logo} />

            </div>
        )
    }
}

export default Image