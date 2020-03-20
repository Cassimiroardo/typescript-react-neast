import React, { useState } from 'react';
import style from './style';
import { Grid } from '@material-ui/core';
import SignInForm from '../../components/SignInForm'

export default function SignIn() {
  const [state, setState] = useState({
    username: '',
    password: ''
  })
   const styles = style() 

  function onSubmit() {
    const { username, password } = state
  }

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
