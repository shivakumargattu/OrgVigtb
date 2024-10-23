const Protected = () => {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redirect to login after logout
    };

    if (!token) {
        return <p>You need to log in to access this page.</p>;
    }

    return (
        <div>
            <h2>Protected Route</h2>
            <p>Welcome back!</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Protected;
