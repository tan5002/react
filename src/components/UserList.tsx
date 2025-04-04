import React from 'react';
import { Link } from 'react-router-dom';
const UserList = () => {
    const users = [
        { id: 1, name: 'John Doe'},
        { id: 2, name: 'Jane Doe'},
        { id: 3, name: 'Bob Smith'},
    ]
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;