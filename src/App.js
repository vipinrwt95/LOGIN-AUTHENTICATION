import { Switch, Route } from 'react-router-dom';
import React,{useState} from 'react';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import TokenProvider from './store/TokenProvider';

function App() {
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
    
  );
}

export default App;
