// src/components/MembersOnly.js
import React from 'react';
import { auth } from '../FireBaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../components/Navbar';

function MembersOnly() {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>; // Optionally display a loading message
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
        <Navbar />
      <h2>Members Only Section</h2>
      <p>Welcome, {user.email}!</p>
      {/* Add member-specific content here */}
    </div>
  );
}

export default MembersOnly;
