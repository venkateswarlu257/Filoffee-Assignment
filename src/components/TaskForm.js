import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;  

    addTask({
      id: Date.now(),
      title,
      description,
      dueDate,
      status,
    });

    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('Pending');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="input-style" />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="input-style"></textarea>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} className="input-style" />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="input-style">
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit" className="btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;
