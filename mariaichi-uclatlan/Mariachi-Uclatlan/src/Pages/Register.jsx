import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Adjust the path according to your project structure
import './Register.css'; // Import the CSS file
import { auth, db } from '../firebase'; // Adjust the path according to your project structure
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import necessary functions
import { doc, setDoc } from 'firebase/firestore'; // Import Firestore functions
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // New field
    const [phoneNumber, setPhoneNumber] = useState(''); // New field
    const [schoolYear, setSchoolYear] = useState(''); // New field
    const [dob, setDob] = useState(''); // New field
    const [major, setMajor] = useState(''); // New field
    const [section, setSection] = useState(''); // New field
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        try {
            // Create a new user with email and password
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user; // Get the user object

            // Save additional user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
                phoneNumber,
                schoolYear,
                dob,
                major,
                section,
                email,
            });

            setSuccessMessage('Registration successful! You can now log in.');
            setEmail('');
            setPassword('');
            setName('');
            setPhoneNumber('');
            setSchoolYear('');
            setDob('');
            setMajor('');
            setSection('');
            navigate('/members-only'); // Redirect to MembersOnly page
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="register-container">
            <Navbar />
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="name">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="schoolYear">School Year:</label>
                        <select
                            id="schoolYear"
                            value={schoolYear}
                            onChange={(e) => setSchoolYear(e.target.value)}
                            required
                        >
                            <option value="">Select School Year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="major">Major:</label>
                        <input
                            type="text"
                            id="major"
                            value={major}
                            onChange={(e) => setMajor(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="section">Section:</label>
                        <input
                            type="text"
                            id="section"
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
