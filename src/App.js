import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='Sign-up' element={<SignUp />} />
    </Routes>
  );
}

export default App;
