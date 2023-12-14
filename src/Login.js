import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './login.css';

function Login() {
  const history = useNavigate();
    const [values, setValues] = useState({
        name: '',
        password: ''
    })

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }


    const handleSubmit = (event) => {
      event.preventDefault();
      
          axios.post('http://localhost:8081/login', values)
          .then(res => {
              if(res.data === "Success") {
                history("/home",{state:{id:values.name}})
              } 
              else {
                alert("No record exist");
              }

          })
          .catch(err => console.log(err));
     
  } 


  return (
    <div>
        <div className="list-container">
            <h2>Login</h2>
            <form action="POST" onSubmit={handleSubmit} >
              <table>
                <tr>
              <td>  <label htmlFor="name">name</label></td>
              <td><input type="text" placeholder="Enter Name" name='name' onChange={handleInput}/></td>
                </tr>
                <tr>
              <td>  <label htmlFor="password">Password</label></td>
              <td>  <input type="password" placeholder="Enter Password" name='password' onChange={handleInput}/></td>
                </tr>
               <tr>
              <td> <button type="submit">Login</button> </td>    
               <td> <Link to="/signup">Create Account</Link></td>
               </tr>
               </table>
            </form>
        </div>
    </div>
  )
}

export default Login
