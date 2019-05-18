import React, { useState, useDebugValue } from 'react';

const DebugValueExample = () => {
    const [renderCount, triggerRender] = useState(0);
    useDebugValue('hi');
    return <div />;
};

export default DebugValueExample;
