import React from 'react';

function Key(props) {

    return (
        <div
            className={`key key_${props.keyType}`}
            onClick={() => {props.onKeyClick(props.keyType)}}
        >
            {props.keyType}
        </div>
    );
}

export default Key;
