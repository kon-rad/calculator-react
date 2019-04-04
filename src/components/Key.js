import React, { Component } from 'react';

class Key extends Component {

    render() {

        return (
            <div
                className={`key key_${this.props.keyType}`}
                onClick={() => {this.props.onKeyClick(this.props.keyType)}}
            >
                {this.props.keyType}
            </div>
        );
    }
}

export default Key;
