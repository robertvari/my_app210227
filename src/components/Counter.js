import React, {useState} from 'react';
import "./Counter.css"

function Counter(props) {
    // let count = 0
    const [count, set_count] = useState(0)

    const set_count_action = () => {
        set_count(count + 1)
    }

    return (
        <div className="counter-container">
            <h1>Count: {count}</h1>
            <button onClick={set_count_action}>Count</button>
        </div>
    );
}

export default Counter;