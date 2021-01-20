import React, { useState } from 'react'

export const IncrementDecrement = () => {

    const [state, setstate] = useState(0);

    const handleIncrement = ()=> {
        setstate(state + 1)
    }
    const handleDecrement = ()=> {
        setstate(state - 1)
    }

    return (
        <div>
            <p>{state}</p>
            <button onClick={ handleIncrement } >+</button>
            <button onClick={ handleDecrement }>-</button>
        </div>
    )
}
