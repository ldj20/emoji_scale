import React from 'react';

function EmojiGrid(props) {
    return(
        <div className="container">
            <div className="row">
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[0][0]} id={props.emojis[0][1]} onClick={props.handleChange} />
                </div>
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[1][0]} id={props.emojis[1][1]} onClick={props.handleChange} />
                </div>
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[2][0]} id={props.emojis[2][1]} onClick={props.handleChange} />
                </div>
            </div>
            <p />
            <div className="row">
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[3][0]} id={props.emojis[3][1]} onClick={props.handleChange} />
                </div>
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[4][0]} id={props.emojis[4][1]} onClick={props.handleChange} />
                </div>
                <div className="col col-4 d-flex justify-content-center">
                    <img name={props.set} className="emoji" src={props.emojis[5][0]} id={props.emojis[5][1]} onClick={props.handleChange} />
                </div>
            </div>
        </div>
        
    )
}

export default EmojiGrid