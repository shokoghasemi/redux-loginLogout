import React from "react";
import { connect } from "react-redux";
import { Login } from "../redux/actions";

 class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { name, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <p>please, Login</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.onChange}
        ></input>
        <input
          type="text"
          name="password"
          value={password}
          onChange={this.onChange}
        ></input>
        <button
          disabled={this.props.isLogin}
          onClick={() => this.props.login()}
        >
          Login
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  login: () => dispatch(Login())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
