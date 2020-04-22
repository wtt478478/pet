import React, { Component } from 'react';
import './Avatar.css'

class Avatar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="pet-avatar">
                <img src="../images/avatar.jpg" />
            
            </div>
         );
    }
}
 
export default Avatar;