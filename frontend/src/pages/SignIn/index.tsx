import React from 'react';
import style from './style';
import { Grid } from '@material-ui/core';
import SignInForm from '../../components/SignInForm'

export default function SignIn() {
  
   const styles = style() 

  return (
    <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          className={styles.grid} >
      <SignInForm />
    </Grid>   
  );
}
