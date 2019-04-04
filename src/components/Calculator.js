import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstDigit: null,
            secondDigit: null,
            operation: null,
            displayValue: null
        }
    }

    keyClickHandler = (key) => {
        console.log(key);
    };

    render() {
        return (
            <div className="calculator z-depth-5">
                <Display displayValue={this.displayValue}/>
                <Keyboard onKeyClick={this.keyClickHandler}/>
            </div>
        );
    }
}

export default Calculator;
