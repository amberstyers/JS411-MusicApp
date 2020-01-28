// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// This is code from Medium for the nav bar

import React, { Component } from 'react'
import NavBar from './components/NavBar'
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    )
  }
}
export default App

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained">Default</Button>
//       <Button variant="contained" color="primary">
//         Primary
//       </Button>
//       <Button variant="contained" color="secondary">
//         Secondary
//       </Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" color="primary" href="#contained-buttons">
//         Link
//       </Button>
//     </div>
//   );
// }