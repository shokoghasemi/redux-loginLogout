import * as React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Panel from "./component/Panel";
import About from "./component/About";
import LogoutPage from "./component/Logout";
import LoginPage from "./component/Login";
import { isLogin } from "./redux/types";

class App extends React.Component<isLogin> {
  // constructor(props:isLogin) {
  //   super(props);
  // }
  render() {
    console.log("ll", this.props.isLogin);
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

              {this.props.isLogin ? (
                <>
                  <li>
                    <Link to="/panel">Panel</Link>
                  </li>
                  <li>
                    <Link to="/logout">logout</Link>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
          <Switch>
            <Route path="/logout">
              {this.props.isLogin ? <LogoutPage /> : "please login"}
            </Route>
            <Route path="/panel">
              <Panel />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              {!this.props.isLogin ? <LoginPage /> : "name"}
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state: isLogin) => ({ isLogin: state.isLogin });
export default connect(mapStateToProps, null)(App);
