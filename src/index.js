import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';

import Hooks from './Hooks';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<Hooks />, document.getElementById('root'));
