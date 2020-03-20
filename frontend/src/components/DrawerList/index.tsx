import React from 'react';
import { List, ListItem, ListItemText, Avatar, Divider } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import EmojiIcon from '@material-ui/icons/EmojiPeople'
import WorkIcon from '@material-ui/icons/Work'

import style from './style'
import { Link } from 'react-router-dom';

interface Prop {
    closeFunction: () => void
}

function DrawerList({ closeFunction }: Prop) {
  const styles = style()
  const linkStyle = {
      color: 'black'
  }

  function handleDrawerClose() {
      closeFunction()
  }

  const logged = (
    <>
    <Link to="/createtask" style={linkStyle}>
        <ListItem button onClick={handleDrawerClose}>
            <Avatar className={styles.avatar}>
                <PeopleIcon />
            </Avatar>
            <ListItemText primary="Criar tarefa" secondary="crie uma tarefa e adicione a sua lista!" className={styles.margin}/>
        </ListItem>
    </Link>
    <Link to="/alltasks" style={linkStyle}>
        <ListItem button onClick={handleDrawerClose}>
            <Avatar className={styles.avatar}>
                <WorkIcon/>
            </Avatar>
            <ListItemText primary="Ver minhas tarefas" secondary="veja sua lista com todas as suas tarefas" className={styles.margin}/>
        </ListItem>
    </Link>
    </>
  )

  const notLogged = (
    <>
        <Link to="/signin" style={linkStyle}>
        <ListItem button onClick={handleDrawerClose}>
            <Avatar className={styles.avatar}>
                <PeopleIcon />
            </Avatar>
            <ListItemText primary="Logar" secondary="faça login com sua conta agora!" className={styles.margin}/>
        </ListItem>
        </Link>
        <Link to="/signup" style={linkStyle}>
        <ListItem button onClick={handleDrawerClose}>
            <Avatar className={styles.avatar}>
                <EmojiIcon/>
            </Avatar>
            <ListItemText primary="Cadastrar-se" secondary="crie uma conta agora!" className={styles.margin}/>
        </ListItem>
        </Link>
    </>
  )

  return (
        <List component="nav">

            { localStorage.getItem('usertoken') ? logged : notLogged  }

            <Divider />

            <ListItem button onClick={handleDrawerClose}>
                <ListItemText primary="Fechar" className={styles.close}/>
            </ListItem>
        </List>
  );
}


export default DrawerList
