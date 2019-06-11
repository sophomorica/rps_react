import React, {useEffect, useState} from "react"
import "./App.css";
import rock from "./images/rock.jpeg";
import paper from "./images/paper.png";
import scissors from "./images/scissors.jpeg";
import { Container, Header, Button, Image } from "semantic-ui-react";
import OptionBox from "./components/OptionBox";
import GameResults from "./components/GameResults";

const App =  () => {

  const [userChoice, setUserChoice] = useState(null)
  const [compChoice, setCompChoice] = useState(null)
  const [showGame, setShowGame] = useState(false)
  
  const toggleGame = () => {
   setShowGame(!showGame)
  };
  const randomChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
  };
  const setChoice = choice => {
    
      setUserChoice(choice)
      setCompChoice(randomChoice())
      
  };

  return (
    <>
  <Container>
    <Header as="h1">React Rock Paper Scissors</Header>
    <Button onClick={()=>toggleGame()}>Let's Play</Button>
    <hr />
    {showGame && (
      <div className="game_div">
        <OptionBox name="rock" img={rock} choice={setChoice} />
        <OptionBox name="paper" img={paper} choice={setChoice} />
        <OptionBox name="scissors" img={scissors} choice={setChoice} />
      </div>
    )}
    {userChoice && (
      <div>
        <Header>You Chose: {userChoice}</Header>
        <Header>Computer Chose: {compChoice}</Header>
        
        <GameResults choice = {userChoice} comp = {compChoice}/>
      </div>
    )}
   
  </Container>
  </>
);

}

export default App