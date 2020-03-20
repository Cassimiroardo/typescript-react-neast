import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import RoutesHome from './routes/home'
import RoutesProfile from './routes/profile'
import Header from './components/Header';

import GlobalStyle from './global'

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        { localStorage.getItem('usertoken') ? <RoutesProfile /> : <RoutesHome />  }
      </BrowserRouter>
    </>
  );
}

export default App;
