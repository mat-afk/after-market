import { useState } from 'react';
import './styles.css';

export default function App() {

  const [str] = useState("Hello World");

  return (
    <div className='container'>
      <h2>{str}</h2>
      <button>Renda Fixa</button>
      <button>Renda Variável</button>
    </div>
  );
}
