import { Switch, Route } from 'react-router-dom';
import React,{useContext, useState} from 'react';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TokenProvider from './store/TokenProvider';
import TokenContext from './store/TokenContext';

function App() {
  const ctx=useContext(TokenContext);
  const login=ctx.isLoggedIn;
 


 return (
    <Layout>
  <Switch>
    <Route path='/' exact>
      <HomePage />
      </Route>
   <Route path='/auth'>
      <AuthPage />
    </Route>
    <Route path='/profile'>
  <UserProfile />
    </Route>
  </Switch>
</Layout>
    
  )
}

export default App;
