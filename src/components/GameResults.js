import React,  {useEffect, useState} from "react";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpeg";
import { Container, Header, Image } from "semantic-ui-react";
import App from "../App"

const GameResults = (props) =>{

    const [outcome, setOutcome] = useState(null)
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)
    const [ties, setTies] = useState(0)
    const results = () => {
      switch (props.choice) {
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
          
  const resultsComp = () => {
    switch (props.comp) {
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
        
  
    const logic = () =>{

      if (props.choice === props.comp) {
        return <Header>Tie</Header>;
      }
        if (props.choice === 'rock'){
        if (props.comp ==='paper'){
          return <Header>Lose</Header>
        }
        return <Header>Win</Header>
      }
      if (props.choice === 'paper') {
        if (props.comp === 'scissors') {
          return <Header>Lose</Header>

        } else {
          return <Header>Win</Header>
            }
            }
      if(props.choice === 'scissors'){
        if (props.comp ==='rock'){
          return <Header>Lose</Header>
        }else{
          return<Header>Win</Header>
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
        <Header>Wins: {wins}</Header>
        <Header>Losses: {losses}</Header>
        <Header>Ties: {ties}</Header>
      </Container>
    );
  }



export default GameResults;
