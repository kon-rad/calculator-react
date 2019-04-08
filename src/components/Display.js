import React from 'react';

function Display(props){
    return (
        <div className="display">
            <span className="display_text">{props.displayValue}</span>
        </div>
    );
}

export default Display;
