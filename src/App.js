import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feed from "./components/Feed";
import Header from "./components/Header";
import CreateForm from "./components/CreateForm";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Switch>
            <Route exact path="/" component={Feed} />
            <Route path="/new" component={CreateForm} />
          </Switch>
      </div>
    );
  }
}

export default App;
