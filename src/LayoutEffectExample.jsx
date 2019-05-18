import React, { useLayoutEffect, useState } from 'react';

const LayoutEffectExample = () => {
    const [lockStatus, setLockStatus] = useState(false);
    return (
        <div className='dish-card'>
            <h2>Layout Effect Example</h2>
            <button onClick={() => setLockStatus(!lockStatus)}>
                {lockStatus ? 'unlock' : 'lock'}
            </button>
            {lockStatus && (
                <LockLayout>Pressing button to unlock scrolling.</LockLayout>
            )}
        </div>
    );
};

const LockLayout = props => {
    // fires after all DOM mutations
    useLayoutEffect(() => {
        const originalOverflow = window.getComputedStyle(document.body)
            .overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            // fire on unmount or cleanup
            document.body.style.overflow = originalOverflow;
        };
    }, []); // only fires on mount
    return <p>{props.children}</p>;
};

export default LayoutEffectExample;
