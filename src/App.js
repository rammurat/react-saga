import React, {Component} from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

import store from "./store";
import Home from "./containers/home";
import PSP from "./containers/psp";

export default class App extends Component {
  render() {
    return(
      <Router>
          <Provider store={store}>
            <Route path='/' exact component={Home}></Route>
            <Route path='/psp' exact component={PSP}></Route>
          </Provider>
      </Router>
    ) 
  }
}