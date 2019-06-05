import React from "react";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpeg";
import { Container, Header, Image } from "semantic-ui-react";

class GameResults extends React.Component {
  state = { wins: 0, losses: 0, ties: 0 };
  results = () => {
    switch (this.props.choice) {
      case "rock":
       return <Image src={rock} size = "small" />;
        break;
      case "paper":
       return <Image src={paper} size = "small" />;
        break;
      case "scissors":
       return <Image src={scissors} size = "small" />;
    }
  };
  
  resultsComp = () => {
    switch (this.props.comp) {
      case "rock":
       return <Image src={rock} size = "small" />;
        break;
      case "paper":
       return <Image src={paper} size = "small" />;
        break;
      case "scissors":
       return <Image src={scissors} size = "small" />;
    }
  };
  
  logic = () =>{
    const rules = {
      "rock": "scissors",
      "paper": "rock",
      "scissors":"paper"
    }
    if (this.props.choice === this.props.comp){
      return <Header>Tie</Header>

    }
    else if (this.props.comp === this.props.choice[rules]){
      return <Header>Lose</Header>

    }else 
    return <Header>Win</Header>
  }
  render() {
    return (
      <Container>
        <div>{this.logic()}</div>
        <div>
          {this.results()}
          {this.resultsComp()}
        </div>
        <Header>Wins: {this.state.wins}</Header>
        <Header>Losses: {this.state.losses}</Header>
        <Header>Ties: {this.state.ties}</Header>
      </Container>
    );
  }
}

export default GameResults;
