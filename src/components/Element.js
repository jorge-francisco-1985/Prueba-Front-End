import React, { Component } from 'react';
import {Card } from 'react-bootstrap';
class Element extends Component {
   
    render() {
        var element=this.props.element;
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{element.title}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            
        );
    }
}
export default Element;