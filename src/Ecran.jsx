import React, { Component } from 'react';

class Ecran extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() { 
        return ( 
            <div>
                <h1>{this.props.affichage}</h1>
            </div>
         );
    }
}
 
export default Ecran;