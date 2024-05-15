// /components/SemesterList.js
import React from 'react';
import styles from '../styles/List.module.css';

const SemesterList = ({ semesters, onSelectSemester, onAddSemesterClick }) => {
    return (
        <div className={styles.semesterContainer}>
            <div className={styles.header}>
                <h2>My Semesters</h2>
                <button onClick={onAddSemesterClick} className={styles.addButton}>Add Semester</button>
            </div>
            <ul>
                {semesters.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)).map((sem, index) => (
                    <li key={index} onClick={() => onSelectSemester(sem)}>
                        <div className={styles.semesterCard}>
                            <h3>{sem.name}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SemesterList;
