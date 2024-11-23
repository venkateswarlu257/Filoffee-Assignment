import React, { useState } from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const [editingId, setEditingId] = useState(null);
  const [updatedStatus, setUpdatedStatus] = useState('');
  const [updatedDueDate, setUpdatedDueDate] = useState('');

  // Handle task update
  const handleUpdateTask = (task) => {
    updateTask({ ...task, status: updatedStatus, dueDate: updatedDueDate });
    setEditingId(null); // Exit editing mode
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className="task-card">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          {editingId === task.id ? (
            <>
              <div>
                <label>Status:</label>
                <select value={updatedStatus} onChange={(e) => setUpdatedStatus(e.target.value)} className="input-style">
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label>Due Date:</label>
                <input
                  type="date"
                  value={updatedDueDate}
                  onChange={(e) => setUpdatedDueDate(e.target.value)}
                  className="input-style"
                />
              </div>
              <button onClick={() => handleUpdateTask(task)} className="btn-primary">Save</button>
              <button onClick={() => setEditingId(null)} className="btn-danger">Cancel</button>
            </>
          ) : (
            <>
              <p>Due: {task.dueDate}</p>
              <p>Status: {task.status}</p>
              <button
                onClick={() => {
                  setEditingId(task.id);
                  setUpdatedStatus(task.status);
                  setUpdatedDueDate(task.dueDate);
                }}
                className="btn-danger"
              >
                Edit
              </button>
              <button onClick={() => deleteTask(task.id)} className="btn-danger">Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
