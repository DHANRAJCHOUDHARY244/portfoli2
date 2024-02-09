import React from 'react'
import { useCountUp } from 'react-countup'

const Counter = ({ duration, value}) => {
    const countUpRef = React.useRef(null);
    useCountUp({
        ref: countUpRef,
        start: 0,
        end: value,
        duration: duration,
        enableScrollSpy: true,
        suffix: '%'
    })
    return (
        <h1 className="percent" ref={countUpRef}>
        {value}
        </h1>
    )
}

export default Counter