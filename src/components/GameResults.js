import React from "react";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpeg";
import { Container, Header, Image } from "semantic-ui-react";

class GameResults extends React.Component {
  state = { outcome: null, wins: 0, losses: 0, ties: 0 };
  results = () => {
    switch (this.props.choice) {
      case "rock":
        return <Image src={rock} size="small" />;
        break;
      case "paper":
        return <Image src={paper} size="small" />;
        break;
      case "scissors":
        return <Image src={scissors} size="small" />;
    }
  };

  resultsComp = () => {
    switch (this.props.comp) {
      case "rock":
        return <Image src={rock} size="small" />;
        break;
      case "paper":
        return <Image src={paper} size="small" />;
        break;
      case "scissors":
        return <Image src={scissors} size="small" />;
    }
  };


  
 logic = () => {
  const rules = {
   "Rock": "Scissors",
   "Paper": "Rock",
   "Scissors": "Paper"
  }
  const {choice, comp} = this.props
  if (choice === comp) {
    return <Header>Tie</Header>;
   //this.setState({outcome: "Tie"})
  } else if (comp === rules[choice]) {
   //this.setState({outcome: "Win", wins: (this.state.wins + 1) })
   return <Header>you are a big lose</Header>;
  } else {
    return <Header>win</Header>
   //this.setState({outcome: "Lose", losses: (this.state.losses + 1) })
  }
 }
  render() {
    return (
      <Container>
        <div>
          {this.logic()}
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
