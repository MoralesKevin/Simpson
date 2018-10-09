import React, { Component } from "react";
import Lamp from "./Lamp"
import Quote from "./Quote";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.working
    }
    this.onWork = this.onWork.bind(this);
  }
  onWork() {
    this.setState({ working: !this.state.working });
  }
  render() {
    const statut = this.state.working ? "Travail" : "Pause";
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://assets.stickpng.com/thumbs/5a05b6b79cf05203c4b6045f.png" className={`App-logo ${statut}`} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <div className="Homer-button">
          <button onClick={this.onWork}>{statut}</button>
        </div>
        <Lamp />
        <Lamp />
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;