import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authslice';
import './Navbar.css';

function Navbar() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">PRIME VIDEO</h2>
      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Registro</Link>
        {isAuthenticated && (
          <>
            <Link to="/home">Home</Link>
            <Link to="/results">API Results</Link>
            <button onClick={handleLogout} className="navbar-logout">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
