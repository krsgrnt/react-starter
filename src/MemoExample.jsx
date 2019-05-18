import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const MemoExample = props => {
    const reverseWord = word => {
        console.log('function called');
        return word
            .split('')
            .reverse()
            .join('');
    };

    const [renderCount, triggerRender] = useState(0);

    const TitleReversed = useMemo(() => reverseWord(props.title), [
        props.title
    ]);

    return (
        <div>
            <h2>{TitleReversed}</h2>
            <button onClick={() => triggerRender(renderCount + 1)}>
                Trigger render {renderCount ? renderCount : null}
            </button>
        </div>
    );
};

MemoExample.propTypes = {
    title: PropTypes.string
};

export default MemoExample;
