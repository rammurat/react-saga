import React, {Component} from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import Route from 'react-router-dom/Route'

//Load final store
import store from "./store";

//Load all containers
import Home from "./containers/home/index";
import PSP from "./containers/psp/index";
import ERROR from "./containers/error"

export default class App extends Component {
  render() {
    return(
      <Router>
          <Provider store={store}>
            <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/psp/:search' component={PSP}></Route>
              <Route component={ERROR}></Route>
            </Switch>
          </Provider>
      </Router>
    ) 
  }
}