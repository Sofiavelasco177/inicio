import React, { useEffect, useState } from 'react';
import './home.css';
import  Navbar from "../componentes/Navbar"

function Home() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");

    if (name) setUserName(name);
    if (email) setUserEmail(email);
  }, []);

  return (
    <div className='bienvenida'>
      <section>
        <h3>Bienvenidos{userName}</h3>
        <p> conectado  {userEmail}</p>
        <p>Encuentra lo que mas te gusta en Prime video </p>
      </section>
      <Navbar></Navbar>
   </div>
  );
}

export default Home; 