import React from 'react'
import { Image, Container,Button,  } from "semantic-ui-react";


class OptionBox extends React.Component{
    render(){
        return(
    <Container>

        <Image
        src={this.props.img}
        size="small"
        onClick={()=> this.props.choice(this.props.name)}
        /> 
        <hr/>
       
        
    </Container>
        )
    }
}

    




export default OptionBox