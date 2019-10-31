import React from 'react';
import './Login.css';
import AuthService from './AuthService';

class Login extends React.Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/')
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>Register</h1>
                    <form method="POST" action="/login"  onSubmit={this.handleFormSubmit}>

                        <input className="form-item" type="text" placeholder="enter your first name" name="firstname" onChange={this.handleChange} />
                        <input className="form-item" type="text" placeholder="enter your last name" name="lastname" onChange={this.handleChange} />
                        <input className="form-item" type="text" placeholder="enter your email" name="email" onChange={this.handleChange} />
                        <input className="form-item" type="password" placeholder="password" name="password" onChange={this.handleChange} />

                        <input className="form-submit" type="submit" values="submit" name="submit" />
                    </form>
                </div>
            </div>
        )
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormSubmit(e) {e('/');
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }
}
export default Login;