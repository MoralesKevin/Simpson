import React, { Component } from 'react';
import Ecran from './Ecran'
import "./NameForm.css";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Homer Simpson",
        }
        this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(event) {
        this.setState({ name: event.target.value.replace(/\*/gi , "") })
    }

    render() {
        return (
            <form className="NameInput">
                <Ecran affichage={this.state.name}/>
                <label htmlFor="name">Name : </label>
                <input id="name" onChange={this.eventHandler} value={this.state.name} type="text" />
            </form>
        );
    }
}

export default NameForm;