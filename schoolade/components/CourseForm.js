// /components/CourseForm.js
import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const CourseForm = ({ onAddCourse, onCancel }) => {
    const [name, setName] = useState('');
    const [credits, setCredits] = useState('');
    const [grade, setGrade] = useState('In Progress');
    const [isPassFail, setIsPassFail] = useState(false);
    const [countTowardGpa, setCountTowardGpa] = useState(true);
    const [isMajor, setIsMajor] = useState(false);
    const [isMinor, setIsMinor] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCourse({ name, credits: parseFloat(credits), grade, isPassFail, countTowardGpa, isMajor, isMinor });
        setName('');
        setCredits('');
        setGrade('In Progress');
        setIsPassFail(false);
        setCountTowardGpa(true);
        setIsMajor(false);
        setIsMinor(false);
        onCancel();
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
                <label>Course Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label>Credits: </label>
                <input type="number" value={credits} onChange={(e) => setCredits(e.target.value)} required />
            </div>
            <div className={styles.formGroup}>
                <label>Grade: </label>
                <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
                    <option value="In Progress">In Progress</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="D-">D-</option>
                    <option value="F">F</option>
                    <option value="Pass">Pass</option>
                    <option value="Fail">Fail</option>
                </select>
            </div>
            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
                <label>
                    <input type="checkbox" checked={isPassFail} onChange={(e) => setIsPassFail(e.target.checked)} />
                    Pass/Fail
                </label>
                <label>
                    <input type="checkbox" checked={countTowardGpa} onChange={(e) => setCountTowardGpa(e.target.checked)} />
                    Count Toward GPA
                </label>
            </div>
            <div className={`${styles.formGroup} ${styles.checkboxGroup}`}>
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
