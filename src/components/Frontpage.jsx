import React, { useState } from 'react';

// Theme object to keep colors consistent across components
const theme = {
  primary: '#4a0e4e',  // Dark purple
  secondary: '#8e44ad', // Lighter purple
  text: '#ffffff',     // White text
  background: '#2c0a2f', // Very dark purple background
};

export default function Frontpage() {
  const [inputValue, setInputValue] = useState('');

  const handleStart = () => {
    console.log('Starting with input:', inputValue);
    // Add your start logic here
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.background,
      color: theme.text,
      width:"100%",
    },
    header: {
      backgroundColor: theme.primary,
      padding: '1rem',
      textAlign: 'center',
    },
    headerText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
    },
    content: {
      width: '100%',
      maxWidth: '20rem',
    },
    input: {
      width: '100%',
      padding: '0.5rem',
      marginBottom: '1rem',
      backgroundColor: theme.background,
      color: theme.text,
      border: `1px solid ${theme.secondary}`,
      borderRadius: '0.25rem',
    },
    button: {
      width: '100%',
      padding: '0.5rem',
      backgroundColor: theme.secondary,
      color: theme.text,
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: theme.primary,
    },
  };

  return (
    <div style={styles.container}>
      {/* Top banner */}
      <header style={styles.header}>
        <h1 style={styles.headerText}>Dark Purple Project</h1>
      </header>

      {/* Main content */}
      <main style={styles.main}>
        <div style={styles.content}>
          {/* Input field */}
          <input
            type="text"
            placeholder="Enter your address 0x.."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={styles.input}
          />

          {/* Start button */}
          <button 
            onClick={handleStart}
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary}
            onMouseLeave={(e) => e.target.style.backgroundColor = theme.secondary}
          >
            Start
          </button>
        </div>
      </main>
    </div>
  );
}