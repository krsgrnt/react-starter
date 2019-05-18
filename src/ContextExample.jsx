import React, { createContext, useContext } from 'react';

export const ExampleContext = createContext();

const ContextExample = () => {
    return (
        <ExampleContext.Provider
            value={{
                toggleStatus: true
            }}>
            <h2>Context Example</h2>
            <Toggle>
                This text will be toggled based on ExampleContext context
                provider.
            </Toggle>
        </ExampleContext.Provider>
    );
};

const Toggle = props => {
    const ToggleContext = useContext(ExampleContext);

    if (ToggleContext.toggleStatus) {
        return props.children;
    }

    return null;
};

export default ContextExample;
