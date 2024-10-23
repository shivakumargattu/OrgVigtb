import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/auth/register', { username, email, password });
            alert('Registered successfully');
            // Clear fields
            setUsername('');
            setEmail('');
            setPassword('');
            // Redirect to login page
            navigate('/login'); // Redirect to the login page
        } catch (error) {
            alert('Registration failed: ' + (error.response?.data?.message || 'An error occurred'));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Register</h2>

                <div className="mb-4">
                    <input 
                        type="text" 
                        value={username} // Set the value to username state
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>
                
                <div className="mb-4">
                    <input 
                        type="email" 
                        value={email} // Set the value to email state
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                <div className="mb-6">
                    <input 
                        type="password" 
                        value={password} // Set the value to password state
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
                >
                    Register
                </button>
                <p>OR</p>
                <Link to="/login"><button 
                     
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
                >
                    Login
                </button></Link>

            </form>
        </div>
    );
};

export default Register;
