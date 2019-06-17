import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import TotalReducers from "../../store/reducers";
import Header from "../Header/header";
import Home from "../../pages/homePage";
import Add from "../../pages/addPage";
import Edit from "../../pages/editPage";
import "./app.scss";

const store = createStore(TotalReducers);

// console.log(store.getState());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div id="AppComponent">
          <div className="app-container">
            <Router>
              <Header />
              <Switch>
                <Route path="/" exact render={() => <Redirect to="/home" />} />
                <Route path="/home" component={Home} />
                <Route path="/add" component={Add} />
                <Route path="/edit" component={Edit} />
              </Switch>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
