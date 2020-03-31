import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'; // Pages
import Home from '../Home';
import About from '../About';
import Dashboard from '../Dashboard';
import type {DemoState} from '../../types/demo_state';
//import type {Action} from '../../types';

interface Props {
    demo_state: DemoState,
    actions: any
}

interface State {
    
}

export default class MainContainer extends React.Component<Props, State> {
    click() {
        const {actions} = this.props;

        document.getElementsByTagName("button")[0].style.display = 'none';
        actions.changeDemoState()
    }

    render () {
        const {demo_state, actions} = this.props;

        return (
            <div className="app__wrapper">
                {demo_state.title}
                <button onClick={() => this.click()}>Change</button>
                
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul> 

                <hr />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </div>
        )
    }
}