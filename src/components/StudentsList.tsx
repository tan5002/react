import React from 'react';
import { Link } from 'react-router-dom';
const StudentsList = () => {
    const students = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith'},
        { id: 3, name: 'Michael Johnson' }
    ]
    return (
        <div>
            <h3>List</h3>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;