import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authslice";
import { useNavigate } from 'react-router-dom';


    function Login() {
        const [username, setUsername] = useState('');
        const dispatch = useDispatch();
        const navigate = useNavigate();
      
        const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(login());
          navigate('/home');
        };
      
        return (
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
        );
      }
      
      export default Login;