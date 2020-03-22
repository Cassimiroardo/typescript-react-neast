import React, { useState } from 'react';

import style from './style';
import { Grid, Paper, TextField, Typography, Button, Snackbar } from '@material-ui/core';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import { createTask } from '../../services/tasks.user';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export default function CreateTask() {
  const styles = style() 
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  function onChange(e: any) {
    const input = e.target.name 
    const value = e.target.value

    if(input === 'title') {
      setTitle(value)
    }
    else {
      setDescription(value)
    }
  }

  async function onSubmit() {
    const res = await createTask(title, description)
    if(res){
    handleClick()
    }
  }

  return (
    <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          className={styles.root}>
      <Paper className={styles.paper} elevation={8}>
        <Grid container
              direction="column"
              justify="center"
              alignItems="center">
          <AssignmentIndOutlinedIcon style={{color: '#FF9800'}}/>
          <Typography variant="h4" className={styles.paperTitle}>
            Crie sua Tarefa
          </Typography>
        </Grid>
        <TextField id="outlined-basic"
                   label="titulo"
                   variant="outlined"
                   size="small"
                   className={styles.titleInput}
                   name="title"
                   onChange={onChange}
                   />
        <TextField id="outlined-basic"
                   label="descrição"
                   variant="outlined"
                   multiline
                   rows="5"
                   className={styles.textInput}
                   name="description"
                   onChange={onChange}
                   />
        
        <Button variant="outlined"
                className={styles.button}
                onClick={onSubmit}
                >
          Criar
        </Button>
      </Paper>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Terefa criada com sucesso!
        </Alert>
      </Snackbar>
    </Grid>
  );
}
