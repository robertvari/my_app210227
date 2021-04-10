import React from 'react';

function Hello(props) {
    const {name, address} = props

    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>{address}</h2>
            <hr/>
        </div>
    );
}

export default Hello;