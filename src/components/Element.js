import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import { Doughnut} from 'react-chartjs-2';
import './Element.css';
import Legend from './Legend';
import Title from './Title';
var numeral = require('numeral');
class Element extends Component {
    // element.
    constructor(props){
        super(props);
        this.state={
            chartData:{
                
                datasets:[
                    {
                        label: props.element.title,
                    }
                ]

            },
            total:0
        }

    }
    componentDidMount() {
        var data = [], backgroundColor = [], labels=[],total=0;
        for (let i = this.props.element.data.length-1;i>=0;i--){
            total += this.props.element.data[i].value;
            data.push(this.props.element.data[i].value);
            backgroundColor.push(this.props.element.data[i].color);
            labels.push(this.props.element.data[i].label);
        }
                
        this.setState({
            chartData: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,

                }]
            },
            total:total
        });
        
    }
    render() {
        var simbol = this.props.element.simbol,
            title = this.props.element.title,
            total=this.state.total,
            data = this.props.element.data;

        var component = data.map((element, i) => {
            var percent = (100 / total) * element.value,
                color = element.color,
                label = element.label,
                value = element.value;

            return (
                <Col key={i}>
                    <Legend 
                        label={label} 
                        color={color} 
                        percent={percent} 
                        value={numeral(value).format('0,0,0,0')}
                        simbol={simbol}
                        ></Legend>
                </Col>

            )
        })
        return (
            
            <div className="chart">
                <Row>
                    <Col sm={12}>
                        <Doughnut
                            data={this.state.chartData}
                            options={{
                                cutoutPercentage: 90,
                                legend: {
                                    display: false,
                                    rotation: -0.7 * Math.PI
                                }
                            }}
                        >

                        </Doughnut>
                        <Title title={title} total={total} simbol={simbol}></Title>
                    </Col>
                </Row>
                <Row>
                    {component}
                </Row>
                
                
                
            </div>


            
        );
    }
}
export default Element;