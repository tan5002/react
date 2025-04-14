import React, { useEffect, useState } from 'react';
import { getTodosByUser } from '../services/gorestApi';

const UserTodos: React.FC = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodosByUser().then(response => setTodos(response.data));
  }, []);

  return (
    <div>
      <h2>User Todos</h2>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title} - {todo.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserTodos;
