// src/components/SignupModal/index.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './SignupModal.module.css';
import '../../global-styles.css'; // Make sure to import global styles if not already done in the root component

const SignupModal = ({ onClose }) => {
  const { signUp } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = async () => {
    try {
      await signUp(username, password);
      onClose(); // Close the modal on successful sign up
    } catch (error) {
      // Handle sign up errors (e.g., display error message)
      console.error(error);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.closeButton} onClick={onClose}>&times;</span>
        <h2 className="u-text-center">Sign Up</h2>
        <input
          className="modal-input" // Use global class
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="modal-input" // Use global class
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="u-button u-button-primary" onClick={handleSignUpClick}>Create Account</button>
      </div>
    </div>
  );
};

export default SignupModal;
