import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { MainBody } from "./components/MainBody";
import Header from "./header/Header";
import HeroBanner from "./components/HeroBanner";
import { Menu2Component } from "./components/Menu2Component";
import { Menu3Component } from "./components/Menu3Component.js";
import { Menu4Component } from "./components/Menu4Component.js";
const Menu1 = () => (
  <div>
    <HeroBanner />
    <Header />
    <h2>Menu 1</h2>
    <MainBody />
  </div>
);
const Menu2 = () => (
  <div>
    <HeroBanner />
    <Header />
    <h2>Menu 2</h2>
    <Menu2Component />
  </div>
);
const Menu3 = () => (
  <div>
    <HeroBanner />
    <Header />
    <h2>Menu 3</h2>
    <Menu3Component />
  </div>
);
const Menu4 = () => (
  <div>
    <HeroBanner />
    <Header />
    <h2>Menu 4</h2>
    <Menu4Component />
  </div>
);
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/menu1" component={Menu1} />
        <Route exact path="/menu2" component={Menu2} />
        <Route exact path="/menu3" component={Menu3} />
        <Route exact path="/menu4" component={Menu4} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
