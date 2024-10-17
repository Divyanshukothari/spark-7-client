import React, { useState, useEffect } from 'react';

// Import the theme (assuming it's in the same directory)
import { theme } from './theme';

export default function UserDetails() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, []);

  const fetchUserDetails = async () => {
    try {
      // Replace this URL with your actual API endpoint
      const response = await fetch('https://api.example.com/user/1');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.background,
      color: theme.text,
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
      padding: '2rem',
    },
    photoContainer: {
      flex: '0 0 300px',
      marginRight: '2rem',
    },
    photo: {
      width: '100%',
      height: 'auto',
      borderRadius: '0.5rem',
      border: `2px solid ${theme.secondary}`,
    },
    detailsContainer: {
      flex: 1,
    },
    detailItem: {
      marginBottom: '1rem',
    },
    label: {
      fontWeight: 'bold',
      color: theme.secondary,
      marginBottom: '0.25rem',
    },
    value: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '0.5rem',
      borderRadius: '0.25rem',
    },
    loading: {
      textAlign: 'center',
      fontSize: '1.2rem',
      marginTop: '2rem',
    },
    error: {
      color: '#ff6b6b',
      textAlign: 'center',
      fontSize: '1.2rem',
      marginTop: '2rem',
    },
  };

  if (loading) {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.headerText}>User Details</h1>
        </header>
        <div style={styles.loading}>Loading user details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.headerText}>User Details</h1>
        </header>
        <div style={styles.error}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerText}>User Details</h1>
      </header>
      <main style={styles.main}>
        <div style={styles.photoContainer}>
          <img src={user.photo} alt={user.name} style={styles.photo} />
        </div>
        <div style={styles.detailsContainer}>
          <div style={styles.detailItem}>
            <div style={styles.label}>Name:</div>
            <div style={styles.value}>{user.name}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.label}>Email:</div>
            <div style={styles.value}>{user.email}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.label}>Phone:</div>
            <div style={styles.value}>{user.phone}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.label}>Address:</div>
            <div style={styles.value}>{user.address}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.label}>Date of Birth:</div>
            <div style={styles.value}>{user.dateOfBirth}</div>
          </div>
          <div style={styles.detailItem}>
            <div style={styles.label}>Occupation:</div>
            <div style={styles.value}>{user.occupation}</div>
          </div>
        </div>
      </main>
    </div>
  );
}