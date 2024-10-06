// src/components/MembersOnly.js
import React from 'react';
import { auth } from '../FireBaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from '../components/Navbar';
import './MembersOnly.css'; // Styling for the page and sidebar
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

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
        <Navbar />{/* Global Navigation Bar */}
       {/* Sidebar for Members-Only Navigation */}
       <div className="sidebar">
                
                <ul>
                    <li><Link to="/members/profile">Your Profile</Link></li>
                    <li><Link to="/members/events">Event Schedules</Link></li>
                    <li><Link to="/members/resources">Exclusive Resources</Link></li>
                    <li><Link to="/members/community">Community Forum</Link></li>
                    <li><Link to="/members/settings">Account Settings</Link></li>
                </ul>
            </div>

            {/* Welcome Message and Main Content */}
            <div className="main-content">
                <h1>Welcome, {user.displayName}!</h1>
                <p>
                    We're thrilled to have you as part of our exclusive community. Here you can access
                    members-only content, participate in special events, and explore unique resources just for you!
                </p>

                <h2>What’s Inside?</h2>
                <ul>
                    <li>🎶 Access personalized event schedules and VIP invites.</li>
                    <li>📚 Browse through exclusive educational resources and music sheets.</li>
                    <li>💬 Engage with fellow members on our community forum.</li>
                    <li>⚙️ Customize your account and profile settings.</li>
                </ul>

                <p>Let’s make the most of your membership!</p>
            </div>
    </div>
  );
}

export default MembersOnly;
