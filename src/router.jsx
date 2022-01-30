import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Home from './page/home'
import Buttons from './page/ui/buttons';
import NoMatch from './page/nomatch'
export default class RootRouter extends Component {
    render() {
        return <div>
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/admin" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}/>
                                    <Route path="/admin/ui/buttons" component={Buttons} />
                                    <Route component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </Router>
        </div>;
    }
}
