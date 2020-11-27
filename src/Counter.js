import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [counter, changeCounter] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => console.log("interval"), 1000)
        return function () { clearInterval(interval) }
    })

    return (
        <div>
            <h3>Welcome Ryan!</h3>
            <h3>Counter: {counter}</h3>
            <button onClick={() => changeCounter(counter + 1)}>increase</button>
            <button onClick={() => counter ===0 ? null : changeCounter(counter - 1)}>decrease</button>
        </div>
    )
}

export default Counter