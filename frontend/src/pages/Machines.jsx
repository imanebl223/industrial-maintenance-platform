// src/pages/Machines.jsx
import React, { useEffect, useState } from 'react';
import { api } from '../api';

function Machines() {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    api.get('/machines')
      .then(res => setMachines(res.data))
      .catch(err => console.error('Erreur chargement machines', err));
  }, []);

  return (
    <div>
      <h2>Liste des machines</h2>
      <ul>
        {machines.map(machine => (
          <li key={machine.id}>{machine.name} - {machine.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Machines;
