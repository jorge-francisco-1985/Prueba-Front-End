import React from 'react';


import './App.css';
import { elements } from './datos/datos';
import Elements from './components/Elements'
function App() {
  return (
    <div className="App">
      <Elements elements={elements}/>
    </div>
  );
}

export default App;
