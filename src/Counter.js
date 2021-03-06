import React, { useState, useEffect } from 'react'

const Counter = () => {

    const [counter, changeCounter] = useState(0)

    useEffect(() => {
        console.log("Yep")
    }, [])

    return (
        <div>
            <h3>Hey Ryan!</h3>
            <h3>Counter: {counter}</h3>
            <button onClick={() => changeCounter(counter + 1)}>increase</button>
            <button onClick={() => counter ===0 ? null : changeCounter(counter - 1)}>decrease</button>
        </div>
    )
}

export default Counter