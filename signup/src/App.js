import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Aside'></div>
        <div className='App__Form'>
          {/* <div className='PageSwitcher'>
            <a href='#' className="PageSwitcher__Item PageSwitcher__Item--Active">Signup</a>
          </div> */}

          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='formField'>
                <label className='FormField__Label' for='firstname'>FirstName</label><br></br>
                <input type='text' id='fname' className='FormFields__Input' placeholder="enter your name" name="fname" /><br></br>
                             </div>
            </form>
          </div>
          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='formField'>
              <label className='FormField__Label' for='firstname'>LastName</label><br></br>
                <input type='text' id='lname' className='FormFields__Input' placeholder="enter your name" name="lname" /><br></br>
                             </div>
            </form>
          </div>
          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='formField'>
              <label className='FormField__Label' for='firstname'>Email</label><br></br>
                <input type='text' id='email' className='FormFields__Input' placeholder="enter your email" name="email" /><br></br>
                             </div>
            </form>
          </div>
          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='formField'>
              <label className='FormField__Label' for='firstname'>PAssword</label><br></br>
                <input type='password' id='password' className='FormFields__Input' placeholder="enter your password" name="password" /><br></br>
                             </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

               
               
export default App;
