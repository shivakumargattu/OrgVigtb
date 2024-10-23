import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            alert('Logged in successfully');
            navigate('/home'); // Redirect to protected page
        } catch (error) {
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-4  text-green-600 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email" // Changed placeholder to 'Email'
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 mb-2 rounded hover:bg-green-700 transition duration-200"
                    >
                        Login
                    </button>
                    <br/>
                    <p>OR</p>

            <Link to="/register">        
              <button  className="w-full bg-green-600 mt-3 text-white py-2 rounded hover:bg-green-700 transition duration-200"
                    >
                        Register
                    </button>
                    </Link>     
                </form>
            </div>
        </div>
    );
};

export default Login;
