import React from 'react';
import { Drawer } from '@material-ui/core'
import DrawerList from '../DrawerList'
import { BrowserRouter } from 'react-router-dom';

interface Prop {
    status: boolean,
    closeFunction: () => void
}

export default function DrawerMenu({ status, closeFunction }: Prop) {
  return (
    <>
    <Drawer anchor="left" open={ status }>
      <DrawerList closeFunction={ closeFunction }/>
    </Drawer>
    </>
  );
}