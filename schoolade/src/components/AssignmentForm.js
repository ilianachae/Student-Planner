// /components/AssignmentForm.js
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const AssignmentForm = ({ onAddAssignment, onCancel }) => {
    const [task, setTask] = useState('');
    const [score, setScore] = useState('');
    const [maxScore, setMaxScore] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddAssignment({ task, score: parseFloat(score), maxScore: parseFloat(maxScore), completed: false });
        setTask('');
        setScore('');
        setMaxScore('');
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Task</label>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} required />
            </div>
            <div>
                <label>Score</label>
                <input type="number" value={score} onChange={(e) => setScore(e.target.value)} required />
            </div>
            <div>
                <label>Max Score</label>
                <input type="number" value={maxScore} onChange={(e) => setMaxScore(e.target.value)} required />
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Add Task</button>
                <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default AssignmentForm;
