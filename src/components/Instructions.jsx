import React, { useState } from 'react';

// Import the theme (assuming it's in the same directory)
import { theme } from './theme';

export default function InstructionsPage() {
  const [inputValue, setInputValue] = useState('');
  const [testStarted, setTestStarted] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleStartTest = () => {
    if (inputValue.toLowerCase() === 'start') {
      setTestStarted(true);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.background,
      color: theme.text,
      padding: '2rem',
    },
    header: {
      backgroundColor: theme.primary,
      padding: '1rem',
      textAlign: 'center',
      marginBottom: '2rem',
    },
    headerText: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    main: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    instructions: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '1.5rem',
      borderRadius: '0.5rem',
      marginBottom: '2rem',
    },
    instructionTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: theme.secondary,
    },
    instructionList: {
      listStyleType: 'decimal',
      paddingLeft: '1.5rem',
    },
    instructionItem: {
      marginBottom: '0.5rem',
    },
    startSection: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    input: {
      flex: '1',
      padding: '0.5rem',
      marginRight: '1rem',
      backgroundColor: theme.background,
      color: theme.text,
      border: `1px solid ${theme.secondary}`,
      borderRadius: '0.25rem',
    },
    button: {
      padding: '0.5rem 1rem',
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
    testStarted: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: theme.secondary,
      textAlign: 'center',
      marginTop: '2rem',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>Test Instructions</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.instructions}>
          <h2 style={styles.instructionTitle}>Please read the following instructions carefully:</h2>
          <ol style={styles.instructionList}>
            <li style={styles.instructionItem}>Ensure you are in a quiet environment with no distractions.</li>
            <li style={styles.instructionItem}>You will have 60 minutes to complete the test once it begins.</li>
            <li style={styles.instructionItem}>Read each question carefully before answering.</li>
            <li style={styles.instructionItem}>You can review and change your answers before submitting the test.</li>
            <li style={styles.instructionItem}>Click the "Submit" button when you have finished the test.</li>
            <li style={styles.instructionItem}>To start the test, type "start" in the input field below and click the "Start Test" button.</li>
          </ol>
        </div>
        <div style={styles.startSection}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type 'start' to begin"
            style={styles.input}
          />
          <button
            onClick={handleStartTest}
            style={styles.button}
            onMouseEnter={(e) => e.target.style.backgroundColor = theme.primary}
            onMouseLeave={(e) => e.target.style.backgroundColor = theme.secondary}
          >
            Start Test
          </button>
        </div>
        {testStarted && (
          <div style={styles.testStarted}>
            The test has started! Good luck!
          </div>
        )}
      </main>
    </div>
  );
}