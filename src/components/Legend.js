import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import './Legend.css';

class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        const titletyle = { 
            color: this.props.color
        };
        return (
            <div>
                <Row>
                    <Col>
                        <div style={titletyle}> <b> {this.props.label}</b></div>
                    </Col>
                </Row>
                <Row>
                    <Col><div className="percent">{this.props.percent}%</div></Col>
                    <Col><div className="legend-value">{this.props.value}{this.props.simbol}</div></Col>
                </Row>
                
                
            </div>
            
            

        );
    }
}
export default Elements;