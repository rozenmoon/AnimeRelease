import React from 'react';
import {createStore}from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../store/reducer';
import Home from './Home/Home';
import '../styles/index.css';

const store = createStore(rootReducer);

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