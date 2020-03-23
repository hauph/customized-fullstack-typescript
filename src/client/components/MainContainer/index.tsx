import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Pages
import Home from '../Home/index';
//import StateType from '../../type/StateType.d.ts';


export default class MainContainer extends React.Component {
    render () {
        const {demo_state} = this.props;

        return (
            <BrowserRouter>
                <div className="app__wrapper">
                    {demo_state.title}
                    <button>Change</button>
                    <Home />
                </div>
            </BrowserRouter>
        )
    }
}