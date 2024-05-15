// /components/CourseForm.js
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const CourseForm = ({ onAddCourse, onCancel }) => {
    const [name, setName] = useState('');
    const [credits, setCredits] = useState('');
    const [grade, setGrade] = useState('');
    const [isMajor, setIsMajor] = useState(false);
    const [isMinor, setIsMinor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCourse({ name, credits: parseFloat(credits), grade, isMajor, isMinor });
        setName('');
        setCredits('');
        setGrade('');
        setIsMajor(false);
        setIsMinor(false);
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Course Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Credits</label>
                <input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} required />
            </div>
            <div>
                <label>Grade</label>
                <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)} required />
            </div>
            <div className={styles.checkboxGroup}>
                <label>
                    <input type="checkbox" checked={isMajor} onChange={(e) => setIsMajor(e.target.checked)} />
                    Major
                </label>
                <label>
                    <input type="checkbox" checked={isMinor} onChange={(e) => setIsMinor(e.target.checked)} />
                    Minor
                </label>
            </div>
            <div className={styles.buttonGroup}>
                <button type="submit" className={styles.submitButton}>Add Course</button>
                <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

export default CourseForm;
