import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
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

export default class RootRouter extends Component {
  render() {
    return (
      <div>
        <Router>
          <App>
            <Switch>
              <Route path="/login" component={Login} />
              <Route
                path="/admin"
                render={() => (
                  <Admin>
                    <Switch>
                      <Route path="/admin/home" component={Home} />
                      <Route path="/admin/ui/buttons" component={Buttons} />
                      <Route path="/admin/ui/modals" component={Modals} />
                      <Route path="/admin/ui/loadings" component={Loadings} />
                      <Route
                        path="/admin/ui/notification"
                        component={Notification}
                      />
                      <Route path="/admin/ui/messages" component={Message} />
                      <Route path="/admin/ui/tabs" component={Tab} />
                      <Route path="/admin/ui/gallery" component={Gallery} />
                      <Route path="/admin/ui/carousel" component={Carousels} />
                      <Route path="/admin/form/login" component={Log} />
                      <Route path="/admin/form/reg" component={FormRegister} />
                      <Route path="/admin/table/basic" component={BasicTable} />
                      <Route path="/admin/table/high" component={HighTable} />
                      <Route path="/admin/city" component={City} />
                      <Route path="/admin/order" component={Order} />
                      <Route path="/admin/user" component={User} />
                      <Route path="/admin/bikeMap" component={BikeMap} />
                      <Route path="/admin/charts/bar" component={Bar} />
                      <Route path="/admin/charts/pie" component={Pie} />
                      <Route component={NoMatch} />
                    </Switch>
                  </Admin>
                )}
              />
              <Route
                path="/common"
                render={() => (
                  <Common>
                    <Route path="/common/detail/order/:orderId" component={OrderDetail}/>
                  </Common>
                )}
              />
            </Switch>
          </App>
        </Router>
      </div>
    );
  }
}
