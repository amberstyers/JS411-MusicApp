// import React, { Component } from 'react'
// import NavBar from './components/NavBar'
// import LogIn from './components/LogIn'
// import Dashboard from './components/Dashboard'
// import { homedir } from 'os';


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <LogIn />
//         <Dashboard/>
//       </div>
//     )
//   }
// }
// export default App

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Button from '@material-ui/core/Button'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import './App.css';


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        loggedIn: true,
      }
    }

    logged = (e) => {
        this.setState({
          loggedIn: false
        })
    }

  render() {

    //conditional return based on logged in status
    if (this.state.loggedIn) {
      return (
      <>
      <NavBar />
      <br/>
      <div className = 'dashboardContainer'>
      <LogIn />
      <Button variant="contained" color="primary" onClick = {this.logged}>
        Log-In
      </Button>
      </div>
      </>)

    } else {

      return (
        <>
        <NavBar />
        <br/>
        <Dashboard />
        </>
      )
    }
  }

}

export default App 



