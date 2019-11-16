import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import App from './App';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
