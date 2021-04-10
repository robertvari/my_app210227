import React, {useState, useEffect} from 'react';
import "./Counter.css"

function Counter(props) {
    // let count = 0
    const [count, set_count] = useState(0)

    const set_count_action = () => {
        set_count(count + 1)
    }

    useEffect(() => {
        console.log("Something is changed")
    })

    useEffect(() => {
        console.log("Counter loaded")
    }, [])

    useEffect(() => {
        if(count === 10){
            console.log("Keep going!")
        }
    }, [count])

    return (
        <div className="counter-container">
            <h1>Count: {count}</h1>
            <button onClick={set_count_action}>Count</button>
        </div>
    );
}

export default Counter;