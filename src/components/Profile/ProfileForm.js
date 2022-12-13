import classes from './ProfileForm.module.css';
import React,{useRef,useContext} from 'react';
import TokenContext from '../../store/TokenContext';

const ProfileForm = () => {
const enterednewPasswordref=useRef();
const authctx=useContext(TokenContext);

const submitHandler=(event)=>
{
event.preventDefault();
const newpassword=enterednewPasswordref.current.value;

fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDN4iNjO2zbFUxmYwSwoXCk68cOxrExcKE",
{
method:'POST',
body:JSON.stringify({
  idToken:authctx.tokenid,
  password:newpassword,
  returnSecureToken:true
}),
headers:{
  'Content-Type':'application/json'
}
}).then(res=>{
  if(res.ok)
  {

  }
  else{
    return res.json().then(data=>{
     alert(data.error.message)
    })
  }
}
)
}

return (
    <form className={classes.form }onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password'ref={enterednewPasswordref} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
