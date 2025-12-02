import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState('');

  const fetchAge = async () => {
    if (name) {
      const response = await fetch(`https://api.agify.io?name=${name}`);
      const data = await response.json();
      setCount(data.age || 0);

      const genderResponse = await fetch(`https://api.genderize.io?name=${name}`);
      const genderData = await genderResponse.json();
      setGender(genderData.gender || '');
    }
  };

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <div>
        <button onClick={fetchAge}>Get Age</button>
        <p>Age: {count}</p>
        <p>Gender: {gender}</p>
      </div>
    </>
  )
}

export default App
