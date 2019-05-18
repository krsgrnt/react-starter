import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + 1
            };
        case 'minus':
            return {
                count: state.count - 1
            };
        case 'reset':
            return {
                count: initialState.count
            };
        default:
            throw new Error();
    }
};

const ReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>Reducer Example</h2>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
            <button onClick={() => dispatch({ type: 'minus' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    );
};

export default ReducerExample;
