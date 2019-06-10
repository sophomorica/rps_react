import React,  {useEffect, useState} from "react";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpeg";
import { Container, Header, Image } from "semantic-ui-react";

const GameResults = () =>{

    const [outcome, setOutcome] = useState(null)
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)
    const [ties, setTies] = useState(0)
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
        
  
    const logic = (choice, comp) =>{

      if (choice === comp) {
        return <Header>Tie</Header>;
      }
        if (choice === 'rock'){
        if (comp ==='paper'){
          return <Header>Lose</Header>
        }return <Header>Win</Header>
      }
      if (choice === 'paper') {
        if (comp === 'scissors') {
          return <Header>Lose</Header>
        } else {
          return <Header>Win</Header>
            }
            }
      
        
      }
      
        return (
          <Container>
        <div>
          {logic()}
          {results()}
          {resultsComp()}
        </div>
        <Header>Wins: {setWins(wins +1)}</Header>
        <Header>Losses: {setLosses(losses + 1 )}</Header>
        <Header>Ties: {setTies(ties +1)}</Header>
      </Container>
    );
  }



export default GameResults;
