import React from 'react';
import { Grid } from '@material-ui/core';
import style from './style';

import SignUpForm from '../../components/SignUpForm'

export default function SignUp() {
   const styles = style() 

  return (
    <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          className={styles.grid} >
      <SignUpForm />
    </Grid>   
  );
}
