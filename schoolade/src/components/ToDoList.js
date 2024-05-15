// /components/ToDoList.js
import React, { useState } from 'react';
import styles from '../styles/List.module.css';

const ToDoList = ({ tasks, setTasks, onAddAssignmentClick }) => {
    const [newTask, setNewTask] = useState('');

    const toggleTaskCompletion = (taskId) => {
        setTasks(
            tasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const removeTask = (taskId) => {
        setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return (
        <div className={styles.todoContainer}>
            <div className={styles.header}>
                <h3>Assignments</h3>
                <button onClick={onAddAssignmentClick} className={styles.addButton}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskCompletion(task.id)}
                        />
                        {task.task}
                        <button onClick={() => removeTask(task.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
