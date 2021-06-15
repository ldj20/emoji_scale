import React from 'react';

function Box(props) {
    return(
        <div className="display-box" style={{backgroundColor: props.color}}>
            <div className="display">
                <p>{props.description}</p>
                {props.children}
            </div>
        </div>
    )
}

export default Box