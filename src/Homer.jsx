import React,{ Component } from 'react';

class Homer extends Component{
    constructor(props){
        super(props);
        this.state = {
            working: props.working,
        }
    }

    onWork = () => {
        this.setState ({working: !this.state.working});
    }
    
    render() {
        return(
            <button ClassName="Homer-button" onClick={this.onWork}>{statut}</button>
        )
    }
}

export default Homer;