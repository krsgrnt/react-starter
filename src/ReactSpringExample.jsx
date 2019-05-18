import React from 'react';
import { useSpring, animated } from 'react-spring';

const ReactSpringExample = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <div>
            <animated.h2 style={props}>React Spring Example</animated.h2>
        </div>
    );
};

export default ReactSpringExample;
