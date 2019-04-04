import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {

    render() {

        return (
            <div className="keyboard">
                <div className="top_row">
                    <Key keyType="Clear" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="Delete" onKeyClick={this.props.onKeyClick}/>
                </div>
                <div className="keyboard_operations">
                    <Key keyType="/" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="x" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="-" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="+" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="=" onKeyClick={this.props.onKeyClick}/>
                </div>
                <div className="keyboard_numbers">
                    <Key keyType="7" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="8" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="9" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="4" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="5" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="6" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="1" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="2" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="3" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="-" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="0" onKeyClick={this.props.onKeyClick}/>
                    <Key keyType="." onKeyClick={this.props.onKeyClick}/>
                </div>
            </div>
        );
    }
}

export default Keyboard;
