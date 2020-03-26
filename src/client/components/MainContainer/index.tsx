import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Pages
import Home from '../Home/index';
import type {DemoState} from '../../type/demo_state';

interface Props {
    demo_state: DemoState
}

interface State {
    
}

export default class MainContainer extends React.Component<Props, State> {
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