import React from "react";
import "./App.css";
import rock from "./images/rock.jpeg"
import paper from "./images/paper.png"
import scissors from "./images/scissors.jpeg"
import { Container, Header, Button } from "semantic-ui-react";
import OptionBox from "./components/OptionBox"

class App extends React.Component {
  state = {userChoice: null, compChoice: null, showGame: false,}


  toggleGame = () =>[
    this.setState( state => {
      return {showGame: !this.state.showGame}
    })
  ]
  render() {
    return (
      <Container>
        <Header as="h1">React Rock Paper Scissors</Header>
        <Button onClick={this.toggleGame}>Let's Play</Button>
        {this.state.showGame &&  <div className="game_div">

        <OptionBox name = "rock" img={rock}/>
        <OptionBox name = "paper" img={paper}/>
        <OptionBox name = "scissors" img={scissors}/>
       </div>}
       
      </Container>
    );
  }
}

export default App;
