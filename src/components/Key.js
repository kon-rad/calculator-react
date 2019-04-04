import React, { Component } from 'react';

class Key extends Component {

    render() {

        return (
            <div className={`key key-${this.props.keyType}`}>
                {this.props.keyType}
            </div>
        );
    }
}

export default Key;
