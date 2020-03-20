import React,{ useState } from 'react';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerMenu from '../DrawerMenu';

import style from './style'

export default function Header() {
  const [open, setOpen] = useState(false)
  const styles = style()

  function handleDrawerOpen() {
    setOpen(true)
  }

  function handleDrawerClose() {
    setOpen(false)
  }

  return (
    <>
      <AppBar position="static" className={styles.root}>
          <Toolbar>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={1}>
                <IconButton color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item xs={11}>
                <Typography variant="h5">
                  TASK-MANAGEMENT
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
      </AppBar>
      <DrawerMenu status={open} closeFunction={handleDrawerClose}/>  
    </>
  );
}
