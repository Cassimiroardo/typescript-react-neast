import React, { useState } from 'react';
import { Button, Paper, Typography, TextField } from '@material-ui/core';
import { login } from '../../services/auth.user';

import style from './style'

export default function SignInForm(){
  const styles = style()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit() {
    await login(username, password)
    document.location.reload()
  }

  function onChange(e: any) {
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value)
  }

  return (
    <Paper className={styles.root}>
        <Typography variant="h4" className={styles.title}>
            Logar
        </Typography>
        <form className={styles.form}>

            <TextField id="outlined-basic" 
                       label="Username" 
                       variant="outlined" 
                       className={styles.input}
                       onChange={onChange}
                       name="username"
                       />

            <TextField id="outlined-basic" 
                       label="Senha" 
                       variant="outlined" 
                       className={styles.input}
                       onChange={onChange}
                       name="password"
                       />

            <Button variant="contained"
                    className={styles.button}
                    onClick={onSubmit}
                    >
                Logar
            </Button>
        </form>
    </Paper>
  );
}
