// /components/SemesterForm.js
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const SemesterForm = ({ onAddSemester, onCancel }) => {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddSemester({ name, startDate, endDate });
        setName('');
        setStartDate('');
        setEndDate('');
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Semester Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Start Date</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div>
                <label>End Date</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Add Semester</button>
                <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default SemesterForm;
