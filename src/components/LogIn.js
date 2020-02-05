

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 100
    },
  },

}));


export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <TextField id="standard-basic" label="Username*" />
    <TextField id="standard-basic" label="Password*" />
    {/* <div className={classes.root}>
      <Button variant="contained" color="primary">
        Log In
      </Button>
  </div> */
  }
  </form>
   
  );
}

// const Dashboard = () => {
//   return(
//       <div className='dashContainer'>
//           <TextField id="filled-basic" label="UserName" variant="filled" />
//           <TextField id="filled-basic" label="Password" variant="filled" />
//       </div>
      
//   )
// }


// export default Dashboard
   
