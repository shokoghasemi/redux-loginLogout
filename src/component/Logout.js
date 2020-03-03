import React from "react";
import { connect } from "react-redux";
import { Logout } from "../redux/actions";

function LogoutPage(props) {
  return (
    <>
      <p>hello, {props.name}</p>
      <button onClick={() => props.logout()}>Logoutt</button>
    </>
  );
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(Logout())
});
export default connect(mapStateToProps, mapDispatchToProps)(LogoutPage);
