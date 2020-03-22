import React, { useState } from 'react';
import { Button, Paper, Typography, TextField } from '@material-ui/core';

import style from './style'
import { register } from '../../services/auth.user';

export default function SignUpForm() {
  const styles = style()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [confPassword,setConfPassword] = useState('')

  function onChange(e: any) {
    const input = e.target.name
    const value = e.target.value

    if(input === 'username') {
      setUsername(value)
    }
    else if(input === 'password') {
      setPassword(value)
    }
    else {
      setConfPassword(value)
    }
  }

  async function onSubmit() {
    password === confPassword ? await register( username, password ) : document.location.reload() 

  }

  return (
    <Paper className={styles.root}>
        <Typography variant="h4" className={styles.title}>
            Cadastrar
        </Typography>
        <form className={styles.form}>

            <TextField id="outlined-basic" 
                       label="Username" 
                       variant="outlined" 
                       className={styles.input}
                       onChange={onChange}
                       name="username" />

            <TextField id="outlined-basic" 
                       label="Senha" 
                       variant="outlined" 
                       className={styles.input}
                       onChange={onChange}
                       name="password" />

            <TextField id="outlined-basic" 
                       label="Confirme a Senha" 
                       variant="outlined" 
                       className={styles.input}
                       onChange={onChange}
                       name="confpassword" />

            <Button variant="contained"
                    className={styles.button}
                    onClick={onSubmit}>
                Enviar
            </Button>
        </form>
    </Paper>
  );
}
