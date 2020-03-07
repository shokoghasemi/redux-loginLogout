import * as React from "react";
import { connect } from 'react-redux';
import { Login } from "../redux/actions";

interface Props { };
interface State { name: string; password: string };
class LoginPage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

    }
    state: State = {
        name: "",
        password: ""
    }
    onSubmit = (e: any) => {
        e.preventDefault();
    };
    onChange = (e: any) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        // const { name, password } = this.state;
        console.log('props', this.props)
        console.log('state', this.state);

        return (
            <form onSubmit={this.onSubmit}>
                <p>please, Login</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                ></input>
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                ></input>
                <button
                    disabled={this.props.isLogin}
                    onClick={
                        this.state.name === "admin" && this.state.password === "admin"
                            ? () => this.props.login()
                            : null
                    }
                >
                    Login
        </button>
            </form>
        );
    }
}


const mapStateToProps = state => state.login;
const mapDispatchToProps = dispatch => ({
    login: () => dispatch(Login())
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
