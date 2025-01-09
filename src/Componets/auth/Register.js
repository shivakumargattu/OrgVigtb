import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setError('Passwords do not match');
            return;
        }


        try {
            await axios.post('https://authentication-jwt-backend.onrender.com/register', { username, email, password,confirmpassword });
            alert('Registered successfully');
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setError('');
            navigate('/login');
        } catch (error) {
            setError('Registration failed: ' + (error.response?.data?.message || 'An error occurred'));
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6 w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">Register</h2>

                <div className="mb-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                <div className="mb-6">
                    <input
                        type="password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        required
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-700"
                    />
                </div>

                {error && <p className="text-red-500 mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
                >
                    Register
                </button>
                <p className="text-center my-4">OR</p>
                <Link to="/login">
                    <button
                        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200"
                    >
                        Login
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default Register;
