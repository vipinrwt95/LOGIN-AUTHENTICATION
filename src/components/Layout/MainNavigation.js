import { useContext ,useState } from 'react';
import { Link } from 'react-router-dom';
import TokenContext from '../../store/TokenContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  let content;
  
  const ctx=useContext(TokenContext);
  const isLoggedIn=ctx.isLoggedIn;
  const logoutHandler=()=>
  {
   ctx.logout(); 
  }
 if(!isLoggedIn)
 {
 content =<header className={classes.header}>
  <Link to='/'>
    <div className={classes.logo}>React Auth</div>
  </Link>
  <nav>
    <ul>
      <li>
        <Link to='/auth'>Login</Link>
      </li>
    </ul>
  </nav>
</header>

 } 
 else
 {
  
  content=<header className={classes.header}>
  <Link to='/'>
    <div className={classes.logo}>React Auth</div>
  </Link>
  <nav>
    <ul>
     <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </ul>
  </nav>
</header>
}

return (
   <>{content}
   </>

  );
};

export default MainNavigation;
