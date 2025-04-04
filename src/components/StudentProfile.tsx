import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const StudentsProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h2>Students Profile</h2>
            <p>You are viewing the profile of student with ID: {id}</p>
            <button onClick={() => navigate("/students")}>Back of Students</button>
        </div>
    );
};

export default StudentsProfile;