import React from "react";
import "./App.css";
import rock from "./images/rock.jpeg";
import paper from "./images/paper.png";
import scissors from "./images/scissors.jpeg";
import { Container, Header, Button, Image } from "semantic-ui-react";
import OptionBox from "./components/OptionBox";
import GameResults from "./components/GameResults";
class App extends React.Component {
  state = { userChoice: null, compChoice: null, showGame: false };

  setChoice = choice => {
    this.setState(state => {
      return { userChoice: choice, compChoice: this.randomChoice() };
    });
  };

  //  componentDidMount(random){
  //    this.setState(state =>{
  //      return{compChoice: this.randomChoice(random)}
  //    })
  //  }

  toggleGame = () => {
    this.setState(state => {
      return { showGame: !this.state.showGame };
    });
  };
  randomChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
  };
  results = () =>{

  }

  render() {
    return (
      <Container>
        <Header as="h1">React Rock Paper Scissors</Header>
        <Button onClick={this.toggleGame}>Let's Play</Button>
        <hr />
        {this.state.showGame && (
          <div className="game_div">
            <OptionBox name="rock" img={rock} choice={this.setChoice} />
            <OptionBox name="paper" img={paper} choice={this.setChoice} />
            <OptionBox name="scissors" img={scissors} choice={this.setChoice} />
          </div>
        )}
        {this.state.userChoice && (
          <div>
            <Header>You Chose: {this.state.userChoice}</Header>
            <Header>Computer Chose: {this.state.compChoice}</Header>
            
            <GameResults choice = {this.state.userChoice} comp = {this.state.compChoice}/>
          </div>
        )}
       
      </Container>
    );
  }
}

export default App;
