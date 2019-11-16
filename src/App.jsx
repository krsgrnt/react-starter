import React from 'react';
import { Router, Link } from '@reach/router';

const App = () => {
    return (
        <Router>
            <Home path="/" />
            {/* <Context path="/context" /> */}
        </Router>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>React Starter project by Kris Grint</p>
            <Nav />
        </div>
    );
};

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
        </nav>
    );
};

export { Nav, Home };
export default App;
