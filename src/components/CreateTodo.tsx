import React, { useState } from 'react';
import { createTodoForUser } from '../services/gorestApi';

const CreateTodo: React.FC = () => {
  const [title, setTitle] = useState('');
  const [dueOn, setDueOn] = useState('');
  const [status, setStatus] = useState('pending');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createTodoForUser(title, dueOn, status);
      alert('Todo created!');
    } catch {
      alert('Error creating todo');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Todo</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="date" value={dueOn} onChange={e => setDueOn(e.target.value)} required />
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTodo;
