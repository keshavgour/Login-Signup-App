import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import './signup.css';


function Signup() {

    const [values, setValues] = useState({
        name: '',
        password: ''
    })
    const navigate = useNavigate();
 
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
       
            axios.post('http://localhost:8081/signup', values)
            .then(res => {
                navigate('/');
            })
            .catch(err => console.log(err));
       
    } 
  return (
    <div>
    <div className="list-container">
        <h2>Signup</h2>
        <form action="" onSubmit={handleSubmit}>
            <table>
            <tr>
           <td> <label htmlFor="name">Name</label></td>
           <td> <input type="text" placeholder="Enter Name" name='name' id='name' onChange={handleInput}/></td>
            </tr>
            <tr>
           <td> <label htmlFor="password">Password</label></td>
          <td>  <input type="password" placeholder="Enter Password" name='password' id='password' onChange={handleInput}/></td>
            </tr>
           <tr>
           <td> <button type="submit">Signup</button></td>     
          <td> <Link to="/">Login</Link></td>
           </tr>
           </table>
        </form>
    </div>
</div>
  )
}

export default Signup
