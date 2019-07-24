import React, { Component } from 'react';

import { Row,Container,Col } from 'react-bootstrap';
import Element from './Element'
class Elements extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }
    render() {
        var element=this.props.elements.map((element,i)=>{
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