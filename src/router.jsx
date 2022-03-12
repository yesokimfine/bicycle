import React, { Component } from "react";
import { HashRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import App from "./App";
import Admin from "./admin";
import Login from "./page/login";
import Home from "./page/home";
import Buttons from "./page/ui/buttons";
import Modals from "./page/ui/modals";
import Loadings from "./page/ui/loadings";
import Notification from "./page/ui/notification";
import Message from "./page/ui/message";
import Tab from "./page/ui/tabs";
import Gallery from "./page/ui/gallery";
import Carousels from "./page/ui/carousel";
import Log from "./page/form/login";
import FormRegister from "./page/form/register";
import BasicTable from "./page/table/basicTable";
import HighTable from "./page/table/highTable";
import City from "./page/city";
import Order from "./page/order";
import NoMatch from "./page/nomatch";
import Common from "./common";
import OrderDetail from "./page/order/detail";
import User from "./page/user";
import BikeMap from "./page/bikeMap";
import Bar from "./page/echarts/bar";
import Pie from "./page/echarts/pie";
import Line from "./page/echarts/line";
import Rich from "./page/rich";
import Permission from "./page/permission";
export default class RootRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route
                path="/common"
                render={() => (
                  <Common>
                    <Route
                      exact
                      path="/common/detail/order/:orderId"
                      component={OrderDetail}
                    />
                  </Common>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Admin>
                    <Switch>
                      <Route path="/home" component={Home} />
                      <Route path="/ui/buttons" component={Buttons} />
                      <Route path="/ui/modals" component={Modals} />
                      <Route path="/ui/loadings" component={Loadings} />
                      <Route
                        path="/ui/notification"
                        component={Notification}
                      />
                      <Route path="/ui/messages" component={Message} />
                      <Route path="/ui/tabs" component={Tab} />
                      <Route path="/ui/gallery" component={Gallery} />
                      <Route path="/ui/carousel" component={Carousels} />
                      <Route path="/form/login" component={Log} />
                      <Route path="/form/reg" component={FormRegister} />
                      <Route path="/table/basic" component={BasicTable} />
                      <Route path="/table/high" component={HighTable} />
                      <Route path="/city" component={City} />
                      <Route path="/order" component={Order} />
                      <Route path="/user" component={User} />
                      <Route path="/bikeMap" component={BikeMap} />
                      <Route path="/charts/bar" component={Bar} />
                      <Route path="/charts/pie" component={Pie} />
                      <Route path="/charts/line" component={Line} />
                      <Route path="/rich" component={Rich} />
                      <Route path="/permission" component={Permission} />
                      <Redirect to="/home" />
                      <Route component={NoMatch} />
                    </Switch>
                  </Admin>
                )}
              />
            </Switch>
          </App>
        </Router>
      </div>
    );
  }
}
