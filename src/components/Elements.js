import React, { Component } from 'react';
import {elements} from '../datos/datos';
import { Row,Container,Col } from 'react-bootstrap';
import Element from './Element'
class Elements extends Component {
    constructor(){
        super();
        this.state={
            elements
        }
    }
    render() {
        var element=this.state.elements.map((element,i)=>{
            return(
                <Col sm={4} key={i}>
                    <Element element={element} ></Element>
                </Col>
                
            )
        })
        return (
            <Container>
                <Row>
                    {element}
                </Row>
            </Container>
            
        );
    }
}
export default Elements;