import React, { Component } from 'react';
import './Title.css';
import './Legend.css';
var numeral = require('numeral');
class Elements extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        var title=this.props.title;
        var total=this.props.total;
        var simbol = this.props.simbol;
        return (
            <div>
                <div className="flotante">
                    <div className="title">{title.toUpperCase()}</div>
                    <div className="value">{numeral(total).format('0,0,0,0')}{simbol}</div>
                </div>

            </div>



        );
    }
}
export default Elements;