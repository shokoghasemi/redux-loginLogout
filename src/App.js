import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Panel from "./component/Panel.js";
import About from "./component/About.js";
import LogoutPage from "./component/Logout";
import LoginPage from "./component/Login";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log("ll",this.props.isLogin);
    return (
      <React.Fragment>
        <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/panel">Panel</Link>
              </li>
              {this.props.isLogin ? (
                <li>
                  <Link to="/logout">logout</Link>
                </li>
              ) : null}
            </ul>
          </nav>
          <Switch>
            <Route path="/logout">
              <LogoutPage />
            </Route>
            <Route path="/panel">
              <Panel />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => state.login;
export default connect(mapStateToProps, null)(App);
