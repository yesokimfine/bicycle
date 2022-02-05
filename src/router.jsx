import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App';
import Admin from './admin';
import Login from './page/login';
import Home from './page/home'
import Buttons from './page/ui/buttons';
import Modals from './page/ui/modals';
import Loadings from './page/ui/loadings';
import Notification from './page/ui/notification';
import Message from './page/ui/message';
import Tab from './page/ui/tabs';
import Gallery from './page/ui/gallery';
import Carousels from './page/ui/carousel';
import NoMatch from './page/nomatch';

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
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route path="/admin/ui/loadings" component={Loadings}/>
                                    <Route path="/admin/ui/notification" component={Notification}/>
                                    <Route path="/admin/ui/messages" component={Message}/>
                                    <Route path="/admin/ui/tabs" component={Tab}/>
                                    <Route path="/admin/ui/gallery" component={Gallery}/>
                                    <Route path="/admin/ui/carousel" component={Carousels}/>
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
