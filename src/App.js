// src/App.js
import React from 'react';
import './App.css';
import PatientAppointmentInfo from './components/PatientAppointmentInfo'; // Adjust the path based on your file structure

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PatientAppointmentInfo />
      </header>
    </div>
  );
}

export default App;
