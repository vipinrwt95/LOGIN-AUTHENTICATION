import React,{useState}from "react";
const TokenContext=React.createContext({
tokenid:'',
isLoggedIn:false,
login:(token)=>
{

},
logout:()=>
{

}
});
export const TokenProvider=(props)=>
{
  const [tokenid,updateToken]=useState(null)
  let userIsLoggedIn=!!tokenid;

const loginHandler=(token)=>{
  updateToken(token)
}
const logoutHandler=()=>
{
    updateToken(null);
}
const tokenContext={
    tokenid:tokenid,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

 return(
    <TokenContext.Provider value={tokenContext}>{props.children}</TokenContext.Provider>
 )

}


export default TokenContext;