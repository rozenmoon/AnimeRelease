import React from 'react';
import Home from './Home/Home';

import '../styles/index.css';

class App extends React.PureComponent {
    render() {
        return (
            <div className="body">
            <Home/>
            </div>

        );
    }
}

export default App;