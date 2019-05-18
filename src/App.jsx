import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        const mode = this.props.mode;
        return (
            <div className='App'>
                <h1>Hello, World!</h1>
                <p>Running in {mode} mode</p>
            </div>
        );
    }
}

export default App;

App.propTypes = {
    mode: PropTypes.string,
};
