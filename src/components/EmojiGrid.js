import React from 'react';

function EmojiGrid(props) {
    return(
        <table>
            <tr>
                <th><img src={props.emojis[0]} /></th>
                <th><img src={props.emojis[1]} /></th>
                <th><img src={props.emojis[2]} /></th>
            </tr>
            <tr>
                <td><img src={props.emojis[3]} /></td>
                <td><img src={props.emojis[4]} /></td>
                <td><img src={props.emojis[5]} /></td>
            </tr>
        </table>
    )
}

export default EmojiGrid