import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; // Pages
import Home from '../Home';
import type {DemoState} from '../../types/demo_state';
//import type {Action} from '../../types';

interface Props {
    demo_state: DemoState,
    actions: any
}

interface State {
    
}

export default class MainContainer extends React.Component<Props, State> {
    render () {
        const {demo_state, actions} = this.props;

        return (
            <div className="app__wrapper">
                {demo_state.title}
                <button onClick={() => actions.changeDemoState()}>Change</button>
                <Home />
            </div>
        )
    }
}