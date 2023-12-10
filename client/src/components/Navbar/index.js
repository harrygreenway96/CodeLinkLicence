// src/components/Navbar/index.js
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import SignupModal from '../SignupModal';
import styles from './Navbar.module.css';
import '../../global-styles.css'; // Make sure to import global styles

const Navbar = () => {
  const { isLoggedIn, login, logout } = useAuth();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  return (
    <>
      <nav className={`${styles.navbar} u-text-center`}> {/* Use utility class for text alignment */}
        <div className={styles.brand}>CodeLinkLicense</div>
        <div className={styles.links}>
          <a href="/licenses" className={`${styles.link} u-button`}>My Licenses</a> {/* Use utility class for buttons */}
          <a href="/marketplace" className={`${styles.link} u-button`}>Marketplace</a>
          <a href="/dashboard" className={`${styles.link} u-button`}>Dashboard</a>
        </div>
        <div className={styles.auth}>
          {isLoggedIn ? (
            <>
              <div className={styles.welcome}>Welcome, User!</div>
              <button className={`${styles.button} u-button u-button-primary`} onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button className={`${styles.button} u-button u-button-primary`} onClick={login}>Login</button>
              <button className={`${styles.button} u-button u-button-primary`} onClick={openSignupModal}>Sign Up</button>
            </>
          )}
        </div>
      </nav>
      {showSignupModal && <SignupModal onClose={closeSignupModal} />}
    </>
  );
};

export default Navbar;
