import React, { Component } from 'react';
import Key from './Key';

class Keyboard extends Component {

    render() {

        return (
            <div className="keyboard">
                <div className="top_row">
                    <Key keyType="NULL"/>
                    <Key keyType="Clear"/>
                    <Key keyType="Delete"/>
                </div>
                <div className="keyboard_operations">
                    <Key keyType="/"/>
                    <Key keyType="x"/>
                    <Key keyType="-"/>
                    <Key keyType="+"/>
                    <Key keyType="="/>
                </div>
                <div className="keyboard_numbers">
                    <Key keyType="7"/>
                    <Key keyType="8"/>
                    <Key keyType="9"/>
                    <Key keyType="4"/>
                    <Key keyType="5"/>
                    <Key keyType="6"/>
                    <Key keyType="1"/>
                    <Key keyType="2"/>
                    <Key keyType="3"/>
                    <Key keyType="-"/>
                    <Key keyType="0"/>
                    <Key keyType="."/>
                </div>
            </div>
        );
    }
}

export default Keyboard;
