import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

    const userData = localStorage.getItem('userData');
    const user = userData ? JSON.parse(userData) : null;

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
        
        navigate('/signin');
    };

    if (!user) {
        return <p>Loading...</p>;  
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to your Dashboard</h1>
                <p className="text-xl text-gray-700 mb-4">Name: {user.name}</p>
                <p className="text-xl text-gray-700 mb-4">Email: {user.email}</p>

                {/* Logout link */}
                <button
                    id="logout-link"
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none mt-4"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
