import React, { useRef } from 'react';

const RefExample = () => {
    const ref = useRef();
    const [example, additional] = [
        'ref-example-class-name',
        'ref-additional-class-name'
    ];

    return (
        <div>
            <h2 ref={ref} className={example}>
                Ref Example
            </h2>
            <button
                onClick={() => {
                    ref.current.classList.add(additional);
                }}>
                Add class
            </button>
            <button
                onClick={() => {
                    ref.current.classList.remove(additional);
                }}>
                Remove class
            </button>
        </div>
    );
};

export default RefExample;
