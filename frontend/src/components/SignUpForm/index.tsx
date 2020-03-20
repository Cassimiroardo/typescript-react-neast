import React from 'react';
import { Button, Paper, Typography, TextField } from '@material-ui/core';

import style from './style'

export default function SignUpForm() {
  const styles = style()

  return (
    <Paper className={styles.root}>
        <Typography variant="h4" className={styles.title}>
            Cadastrar
        </Typography>
        <form className={styles.form}>

            <TextField id="outlined-basic" 
                       label="Username" 
                       variant="outlined" 
                       className={styles.input} />

            <TextField id="outlined-basic" 
                       label="Senha" 
                       variant="outlined" 
                       className={styles.input} />

            <TextField id="outlined-basic" 
                       label="Confirme a Senha" 
                       variant="outlined" 
                       className={styles.input} />

            <Button variant="contained"
                    className={styles.button}>
                Enviar
            </Button>
        </form>
    </Paper>
  );
}
