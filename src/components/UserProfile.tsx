import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserProfile = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>User Profile</h1>
            <p>Viewing details for User ID: {id}</p>
            <button onClick={() => navigate("/users")} > Back to users</button>
        </div>
    );
};

export default UserProfile;