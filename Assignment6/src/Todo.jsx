import React, { useState } from 'react';

function TodoApp() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [...prevTasks, newTask].sort());
            setNewTask('');
        }
    };

    const handleDeleteTask = (taskToDelete) => {
        setTasks((prevTasks) => prevTasks.filter(task => task !== taskToDelete));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter new task"
            />
            <button onClick={handleAddTask}>Add</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task} <button onClick={() => handleDeleteTask(task)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
