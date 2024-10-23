import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem('token'); // Check if token exists

    if (!token) {
        return <Navigate to="/login" />; // Redirect to login if not authenticated
    }

    return element; // Render the protected component
};

export default ProtectedRoute;
