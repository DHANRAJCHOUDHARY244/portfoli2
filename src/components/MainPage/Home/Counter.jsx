import React from 'react'
import { useCountUp } from 'react-countup'
import { ShowTextEffect } from './InfiniteText';

const Counter = ({ className, duration, value, text1, text2 }) => {
    const countUpRef = React.useRef(null);
    useCountUp({
        ref: countUpRef,
        start: 0,
        end: value,
        duration: duration,
        enableScrollSpy: true,
        prefix: '+'
    })
    return (
        <div className={className}>
            <h1 className='NumCounters' ref={countUpRef} >
            </h1>
            <p>
            <ShowTextEffect
                text={text1}
            />
                <br />
                <ShowTextEffect
                text={text2}
            />
            </p>
        </div>
    )
}

export default Counter