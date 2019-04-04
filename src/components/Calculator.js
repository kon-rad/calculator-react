import React, { Component } from 'react';
import Display from './Display';
import Key from './Key';

const OPERATIONS = {
    '/': 'Divide',
    'x': 'Multiply',
    '-': 'Subtract',
    '+': 'Add',
    '=': 'Equals'
};

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

    handleClear() {

    }

    handleDelete() {

    }

    handleOperationAdd(key) {

    }

    handleNewNumber(key) {

    }

    keyClickHandler = (key) => {
        console.log(key);
        if (key === 'CLEAR') {
            this.handleClear();
        } else if (key === 'DELETE') {
            this.handleDelete();
        } else if (OPERATIONS.hasOwnProperty(key)) {
            this.handleOperationAdd(key);
        } else {
            this.handleNewNumber(key);
        }
    };

    render() {
        return (
            <div className="calculator z-depth-5">
                <Display displayValue={this.displayValue}/>
                <div className="keyboard">
                    <div className="top_row">
                        <Key keyType="CLEAR" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="DELETE" onKeyClick={this.keyClickHandler}/>
                    </div>
                    <div className="keyboard_operations">
                        <Key keyType="/" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="x" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="-" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="+" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="=" onKeyClick={this.keyClickHandler}/>
                    </div>
                    <div className="keyboard_numbers">
                        <Key keyType="7" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="8" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="9" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="4" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="5" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="6" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="1" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="2" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="3" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="-" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="0" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="." onKeyClick={this.keyClickHandler}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
