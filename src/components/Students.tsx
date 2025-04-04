import React from 'react';
import { Outlet } from 'react-router-dom';
const Students = () => {
    return (
        <div>
            <h3>SV</h3>
            <Outlet />
        </div>
    );
};

export default Students;