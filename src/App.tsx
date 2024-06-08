import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <div className='bg-[#F4F0FE] px-4 text-[#072635]'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patient/:patientName" element={<Dashboard />} />
      </Routes>
      </div>
    
  );
};

export default App;
