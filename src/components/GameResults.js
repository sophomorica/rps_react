import React,  {useEffect, useState} from "react";
import rock from "../images/rock.jpeg";
import paper from "../images/paper.png";
import scissors from "../images/scissors.jpeg";
import { Container, Header, Image } from "semantic-ui-react";
import App from "../App"
import "../gameCss.css"

const GameResults = (props) =>{

    const [outcome, setOutcome] = useState(null)
    const [wins, setWins] = useState(0)
    const [losses, setLosses] = useState(0)
    const [ties, setTies] = useState(0)

    useEffect( () => {
      console.log(props.comp)
      if (props.comp !== "")
        logic();
    }, [props.comp])

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
        setTies(ties + 1)
        setOutcome("Tie");
      }
      if (props.choice === 'rock') {
        if (props.comp ==='paper'){
          setLosses(losses +1 )
        }
        setWins(wins +1 )
      }
      if (props.choice === 'paper') {
       
        if (props.comp === 'scissors') {
          setLosses(losses +1 )

        } else {
          setWins(wins +1 )
            }
            }
      if(props.choice === 'scissors'){
       
        if (props.comp ==='rock'){
          setLosses(losses +1 )
        }else{
          setWins(wins +1 )
        }
      }

        
      }
      
        return (
          <Container>
        <div className="results">
          {/* {logic()} */}
          <Header>{outcome}</Header>
          <div className= "pictures">

          {results()}
          {resultsComp()}
          </div>
        </div>
        <div className="results">

        <Header>Wins: {wins}</Header>
        <Header>Losses: {losses}</Header>
        <Header>Ties: {ties}</Header>
        </div>
      </Container>
    );
  }



export default GameResults;
