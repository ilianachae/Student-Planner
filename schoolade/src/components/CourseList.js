// /components/CourseList.js
import React from 'react';
import styles from '../styles/List.module.css';

const CourseList = ({ courses, onSelectCourse, onAddCourseClick }) => {
    return (
        <div className={styles.courseContainer}>
            <div className={styles.header}>
                <h3>Courses</h3>
                <button onClick={onAddCourseClick} className={styles.addButton}>Add Course</button>
            </div>
            <ul>
                {courses.map((course, index) => (
                    <li
                        key={index}
                        className={styles.courseCard}
                        onClick={() => onSelectCourse(course)}
                    >
                        <span className={styles.courseName}>{course.name}</span>
                        <span className={styles.courseGrade}>{course.grade}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;

