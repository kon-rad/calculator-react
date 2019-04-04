import React, { Component } from 'react';
import Display from './Display';
import Keyboard from './Keyboard';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator z-depth-5">
                <Display />
                <Keyboard />
            </div>
        );
    }
}

export default Calculator;
