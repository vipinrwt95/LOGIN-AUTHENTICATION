import { Switch, Route,Redirect } from 'react-router-dom';
import React,{useContext, useState} from 'react';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TokenProvider from './store/TokenProvider';
import TokenContext from './store/TokenContext';

function App() {
  const authctx=useContext(TokenContext);
  const login=authctx.isLoggedIn;
 


 return (
    <Layout>
  <Switch>
    <Route path='/' exact>
      <HomePage />
      </Route>
   {!authctx.isLoggedIn && <Route path='/auth'>
      <AuthPage />
    </Route>}
   {authctx.isLoggedIn && <Route path='/profile'>
  <UserProfile />
    </Route>}
    <Route path='*'>
      <Redirect to='/' />
    </Route>
  </Switch>
</Layout>
    
  )
}

export default App;
