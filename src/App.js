import React, { Component } from 'react'
import NavBar from './components/NavBar'
import LogIn from './components/LogIn'
import Dashboard from "./components/Dashboard"
// import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button'
import { homedir } from 'os';




class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <LogIn />

        <Button onClick={this.loggedIn} variant="contained" color="primary">Log In</Button>
        {/* <Dashboard/> */}
      </div>
    )
  }
}
export default App




