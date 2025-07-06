import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ margin: '10px 0' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {' '}
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: '10px', color: 'red', background: 'none', border: 'none' }}
      >
        ❌
      </button>
    </li>
  );
}

export default TaskItem;