import React from 'react';

import style from './style';
import { Card, Typography, CardContent, Button, CardActions, Grid } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Assignment';
import { deleteTask } from '../../services/tasks.user';

interface Prop {
  id: number,
  title: string,
  description: string,
  status: string
}

export default function TasksListItem({id, title, description, status}: Prop) {
   const styles = style() 

  function statusColor() {
    if(status === 'OPEN'){
      return "red"
    }
    else if(status === 'IN_PROCESS') {
      return "yellow"
    }
    else if(status === 'DONE') {
      return "green"
    }
  }

  async function handleDelete(e: React.SyntheticEvent) {
    e.preventDefault()
    await deleteTask(id)
    document.location.reload()
  }

  return (
      <Card className={styles.card} elevation={6}>
        <CardContent>
          <Grid container
                direction="row"
                justify="space-between"
                alignItems="flex-start">
          <Typography variant="h5" className={styles.title}>
            { title.toUpperCase() }
          </Typography>
          <Typography variant="h5" style={{color: statusColor()}}>
            <Brightness1Icon />
          </Typography>
          </Grid>
          <Typography variant="body2">
            { description }
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" className={styles.button}>
          Editar Status
        </Button>
        <Button size="small" className={styles.button} onClick={handleDelete}>
          Excluir
        </Button>
      </CardActions>
      </Card>
  );
}
