import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const App = props => {
    const [value, setValue] = useState(false);

    return (
        <div className='App'>
            <h1>Hello, World!</h1>
            <p>Running in {props.mode} mode</p>
            <Button
                onClick={() => {
                    setValue(!value);
                }}>
                {value ? 'Ouch!' : 'Click me'}
            </Button>
        </div>
    );
};

export const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

export default App;

App.propTypes = {
    mode: PropTypes.string
};
