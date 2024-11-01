import React, { useEffect, useState } from 'react';

function ApiResults() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    fetch('http://www.omdbapi.com/?apikey=tu_api_key')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error al cargar la API:', error));
  }, []);

  return (
    <div>
      <h2>Resultados de la API</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ApiResults;
