import React, { Component } from 'react';
import Quote from "./Quote"
import GenerateSimpsons from './GenerateSimpsons'
import "./App.css";

const  Simpson = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habitants: Simpson,
    }
  }

  getSimpson() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=5")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          habitants: data[0],
        });
    });
}


  render() {
    const statut = this.state.working ? "Travail" : "Pause";
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://assets.stickpng.com/thumbs/5a05b6b79cf05203c4b6045f.png" className={`App-logo ${statut}`} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <GenerateSimpsons selectSimpsons = {() => this.getSimpson()} />
        <Quote habitants={this.state.habitants}/>
      </div>
    );
  }
}

export default App;