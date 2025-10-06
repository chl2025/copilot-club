import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [facilities, setFacilities] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/facilities`)
      .then(res => setFacilities(res.data));
  }, []);

  const registerMember = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/members`, { name, email })
      .then(res => alert(`Member created: ${res.data.name}`));
  };

  return (
    <div>
      <h1>Leisure Club</h1>
      <h2>Register Member</h2>
      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <button onClick={registerMember}>Register</button>

      <h2>Facilities</h2>
      <ul>
        {facilities.map(f => (
          <li key={f.id}>{f.name} - {f.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
