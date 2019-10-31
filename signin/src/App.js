//  import React from 'react';
// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      // error: '',
    };

    // this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.dismissError = this.dismissError.bind(this);
  }

  // dismissError() {
  //   this.setState({ error: '' });
  // }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.email) {
      return this.setState({ error: 'Email is required' });
    }

    // if (!this.state.password) {
    //   return this.setState({ error: 'Password is required' });
    // }

    // return this.setState({ error: '' });
  }

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  // handlePassChange(evt) {
  //   this.setState({
  //     pass: evt.target.value,
  //   });
  // }

  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" action="svs.html" method="POST" onSubmit={this.handleSubmit}>
              {/* {
                this.state.error &&
                <h4 className="error" data-test="error" >

                  {this.state.error}
                </h4>
              } */}

              <div className="wrap-input100 validate-input">
                <input className="input100" type="text" data-test="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                <span className="focus-input100" data-placeholder="Email">
                </span>
              </div>


{/* 
              <div class="wrap-input100 validate-input" data-validate="Enter password">
						<span class="btn-show-pass">
							<i class="zmdi zmdi-eye"></i>
						</span>
						<input class="input100" type="password" name="pass" data-test="password" value={this.state.password} onChange={this.handlePassChange}></input>
						<span class="focus-input100" data-placeholder="Password"></span> 
					</div> */}


              <div className="wrap-input100 validate-input" data-validate="Enter password">
                <span className="btn-show-pass">
                  <i className="zmdi zmdi-eye"></i>
                </span>
                <input className="input100" type="password" name="pass" data-test="password"  onChange={this.handlePassChange} />
                <span className="focus-input100" data-placeholder="Password"></span>
              </div>
              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn"></div>
                  <button className="login100-form-btn" data-test="submit">
                    Login
							</button>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group fgPw">
                  <div className="wrap-password" >
                    <a href="1.html" data-bind="click: forgotReset" className="password" >Forgot
                                            Password ?</a>
                    <span className="pull-right" >

                      New User ? <a href="sign up" >Sign Up</a>
                    </span>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
