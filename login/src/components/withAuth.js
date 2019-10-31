import React from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService();
    return class AuthWrapped extends React.Component {
        // constructor() {
        //     super();
        //     this.state = {
        //         user: null
        //     }
        // }
        state = {
            confirm: null,
            loaded: false
        };

        componentDidMount() {
            if (!Auth.loggedIn())
                this.props.history.replace("/login");
            else {
                try {
                    const confirm = Auth.getConfirm();
                    console.log("confirmation is:", confirm);
                    this.setState({
                        confirm: confirm,
                        loaded: true
                        // user: profile
                    })
                }
                catch (err) {
                    console.log(err);
                    Auth.logout();
                    this.props.history.replace("/login");
                }
            }
        }
        render() {
            if (this.state.loaded === true) {
                if (this.state.confirm) {
                    console.log("confirmed!");
                    // if (this.state.user) {
                    return (
                        <AuthComponent history={this.props.history} user={this.state.confirm} />
                        // <AuthComponent {...this.props}{...this.state} />
                    );
                }
                else {
                    console.log("not confirmed!");
                    return null;
                }
            } else {
                return null;
            }
        }
    };
}