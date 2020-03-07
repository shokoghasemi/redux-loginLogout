import * as  React from "react";
import { connect } from "react-redux";
import { Logout } from "../redux/actions";

class  LogoutPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
  console.log('logoutprops',this.props.name)
  return (
    <>
      <p>hello, {this.props.name}</p>
      <button onClick={() => this.props.logout()}>Logoutt</button>
    </>
  );
}
}
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
