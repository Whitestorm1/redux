import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';



 const Login = ()=> {
       
    const[name,SetName]=useState();
    const[password,SetPassword]=useState();
    const[email,SetEmail]=u2seState();
    const dispatch = useDispatch();



const clickFunction=(e)=>{
    



}
const submitted=(e)=>{
    e.preventDefault();

}
    return (
        <div>
       <form onSubmit={submitted}>
          <h1>  login here </h1>
          <input  
          type="name"
          placeholder="name"
          value={name}
          onChange={(e)=>SetName(e.target.value)}
          />
          <input  
          type="Email"
          placeholder="Email"
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
          />
          <input  
          type="password"
          placeholder="password"
          value={password}
          onChange={(e)=>SetPassword(e.target.value)}

          />
          <button onClick={clickFunction}></button>
          
       </form>
            
        </div>
    )
}
export default  Login;
