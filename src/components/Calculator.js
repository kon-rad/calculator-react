import React, { Component } from 'react';
import Display from './Display';
import Key from './Key';

const OPERATIONS = {
    '/': 'Divide',
    '*': 'Multiply',
    '-': 'Subtract',
    '+': 'Add'
};

const NUMBERS = {
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
    '0': true,
    '.': true
};

const EQUALS = '=';
const CLEAR = 'CLEAR';
const DELETE = 'DELETE';
const ERROR = 'ERROR';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: null
        }
    }

    handleClear() {
        this.setState({
            displayValue: null
        });
    }

    handleDelete() {
        if (this.state.displayValue === null) return;
        const newDisplayValue = this.state.displayValue.substr(0, this.state.displayValue.length - 1);
        this.setState({ displayValue: newDisplayValue });
    }

    keyClickHandler = (key) => {
        console.log(key);
        if (key === CLEAR) {
            this.handleClear();
        } else if (key === DELETE) {
            this.handleDelete();
        } else if (key === EQUALS) {
            let result = ERROR;
            try {
                result = eval(this.state.displayValue) + '';
            } catch (err) {
                console.log(err);
            }
            if (result.length > 8) {
                result = result.substr(0, 8);
            }
            this.setState({ displayValue: result });
        } else if (OPERATIONS.hasOwnProperty(key) || NUMBERS.hasOwnProperty(key)) {
            const newDisplayValue = (this.state.displayValue || '') + key;
            this.setState({ displayValue: newDisplayValue });
        }
    };

    render() {
        return (
            <div className="calculator z-depth-5">
                <Display displayValue={this.state.displayValue}/>
                <div className="keyboard">
                    <div className="top_row">
                        <Key keyType={CLEAR} onKeyClick={this.keyClickHandler}/>
                        <Key keyType={DELETE} onKeyClick={this.keyClickHandler}/>
                    </div>
                    <div className="keyboard_operations">
                        <Key keyType="/" onKeyClick={this.keyClickHandler}/>
                        <Key keyType="*" onKeyClick={this.keyClickHandler}/>
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
