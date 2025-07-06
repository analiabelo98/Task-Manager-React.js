import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '80%', padding: '8px' }}
      />
      <button type="submit" style={{ padding: '8px' }}>Add</button>
    </form>
  );
}

export default AddTaskForm;