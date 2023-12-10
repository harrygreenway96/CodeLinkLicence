
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import Navbar from '../components/Navbar';
import './App.css';
import './global-styles.css';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      {/* ... other components */}
    </AuthProvider>
  );
};

export default App;
