import React from 'react';
import { theme } from './theme';

export default function ThankYouPage() {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
      color: theme.text,
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
    },
    message: {
      fontSize: '2rem',
      fontWeight: 'bold',
      textAlign: 'center',
      maxWidth: '80%',
      lineHeight: '1.4',
    },
    highlight: {
      color: theme.secondary,
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.message}>
        Thank you for <span style={styles.highlight}>appearing in this exam</span>
      </h1>
    </div>
  );
}