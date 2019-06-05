import React from 'react'
import {  Container,Header  } from "semantic-ui-react";



class GameResults extends React.Component{
  
  state = {wins: 0, losses: 0, ties: 0}
  results = () =>{

  }
  render(){
    return(
      <Container>
        <Header>Wins: {this.state.wins}</Header>
        <Header>Losses: {this.state.losses}</Header>
        <Header>Ties: {this.state.ties}</Header>
      </Container>
    )
  }
}





export default GameResults