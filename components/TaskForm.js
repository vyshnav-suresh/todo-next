import React, { useState } from 'react';

function TaskForm({ initialData, onSubmit }) {
  const [text, setText] = useState(initialData ? initialData.text : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskData = { text };

    if (initialData) {
      // If initialData exists, it's an edit operation, so include the task ID for updating
      taskData.id = initialData.id;
    }

    onSubmit(taskData);
    setText(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border rounded p-2 w-full"
        placeholder="Enter your task"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button
        type="submit"
        className="bg-indigo-500 text-white p-2 rounded mt-2"
      >
        {initialData ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
