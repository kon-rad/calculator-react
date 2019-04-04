import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display />
                <Keyboard />
            </div>
        );
    }
}

export default Calculator;
