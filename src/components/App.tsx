import React, { Dispatch } from 'react';
import Home from './Home/Home';
import '../styles/index.css';
import { connect } from 'react-redux';
import { loadInitData } from '../store/actionCreator';


interface Props {
    loadInitData: any;
}
class App extends React.PureComponent<Props> {
    constructor(props: Props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadInitData();
    }
    render() {
        return (
            <div className="body">
            <Home/>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    loadInitData: () => dispatch(loadInitData()),
});


export default connect(null, mapDispatchToProps)(App);