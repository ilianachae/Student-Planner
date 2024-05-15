// /pages/index.js
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import GPACalculator from '../components/GPACalculator';
import SemesterList from '../components/SemesterList';
import CourseList from '../components/CourseList';
import ToDoList from '../components/ToDoList';
import SemesterForm from '../components/SemesterForm';
import CourseForm from '../components/CourseForm';
import AssignmentForm from '../components/AssignmentForm';
import { calculateGpa } from '../utils/gpaCalculator';
import { exportToExcel } from '../utils/exportToExcel';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [semesters, setSemesters] = useState([]);
    const [selectedSemester, setSelectedSemester] = useState(null);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showSemesterForm, setShowSemesterForm] = useState(false);
    const [showCourseForm, setShowCourseForm] = useState(false);
    const [showAssignmentForm, setShowAssignmentForm] = useState(false);

    const handleAddSemesterClick = () => {
        setShowSemesterForm(true);
    };

    const handleAddCourseClick = () => {
        setShowCourseForm(true);
    };

    const handleAddAssignmentClick = () => {
        setShowAssignmentForm(true);
    };

    const handleExportToExcel = () => {
        exportToExcel(semesters, 'student_data');
    };

    const cumulativeGpa = calculateGpa(semesters.flatMap(sem => sem.courses || []));
    const majorGpa = calculateGpa(semesters.flatMap(sem => (sem.courses || []).filter(course => course.isMajor)));
    const minorGpa = calculateGpa(semesters.flatMap(sem => (sem.courses || []).filter(course => course.isMinor)));

    const handleAddCourse = (course) => {
        if (!selectedSemester) return;

        const updatedSemesters = semesters.map(sem =>
            sem === selectedSemester ? { ...sem, courses: [...(sem.courses || []), course] } : sem
        );

        setSemesters(updatedSemesters);
        setSelectedSemester({
            ...selectedSemester,
            courses: [...(selectedSemester.courses || []), course],
        });

        setShowCourseForm(false);
    };

    const handleAddAssignment = (assignment) => {
        if (!selectedCourse) return;

        const updatedCourses = (selectedSemester.courses || []).map(course =>
            course === selectedCourse ? { ...course, assignments: [...(course.assignments || []), assignment] } : course
        );

        const updatedSemesters = semesters.map(sem =>
            sem === selectedSemester ? { ...sem, courses: updatedCourses } : sem
        );

        setSemesters(updatedSemesters);
        setSelectedCourse({ ...selectedCourse, assignments: [...(selectedCourse.assignments || []), assignment] });
        setShowAssignmentForm(false);
    };

    return (
        <div>
            <Navbar onExportClick={handleExportToExcel} />
            <main className={styles.main}>
                <section className={styles.gpaSection}>
                    <GPACalculator gpa={cumulativeGpa} majorGpa={majorGpa} minorGpa={minorGpa} />
                </section>
                <section className={styles.semesterSection}>
                    <SemesterList semesters={semesters} onSelectSemester={setSelectedSemester} onAddSemesterClick={handleAddSemesterClick} />
                    {showSemesterForm && (
                        <div className={styles.formContainer}>
                            <SemesterForm
                                onAddSemester={(semester) => {
                                    setSemesters([...semesters, semester]);
                                    setShowSemesterForm(false);
                                }}
                                onCancel={() => setShowSemesterForm(false)}
                            />
                        </div>
                    )}
                </section>
                {selectedSemester && (
                    <section className={styles.courseSection}>
                        <CourseList courses={selectedSemester.courses || []} onSelectCourse={setSelectedCourse} onAddCourseClick={handleAddCourseClick} />
                        {showCourseForm && (
                            <div className={styles.formContainer}>
                                <CourseForm
                                    onAddCourse={handleAddCourse}
                                    onCancel={() => setShowCourseForm(false)}
                                />
                            </div>
                        )}
                    </section>
                )}
                {selectedCourse && (
                    <section className={styles.assignmentSection}>
                        <ToDoList tasks={selectedCourse.assignments || []} setTasks={(updatedTasks) => {
                            const updatedCourses = (selectedSemester.courses || []).map(course =>
                                course === selectedCourse ? { ...course, assignments: updatedTasks } : course
                            );

                            const updatedSemesters = semesters.map(sem =>
                                sem === selectedSemester ? { ...sem, courses: updatedCourses } : sem
                            );

                            setSemesters(updatedSemesters);
                            setSelectedCourse({ ...selectedCourse, assignments: updatedTasks });
                        }} onAddAssignmentClick={handleAddAssignmentClick} />
                        {showAssignmentForm && (
                            <div className={styles.formContainer}>
                                <AssignmentForm
                                    onAddAssignment={handleAddAssignment}
                                    onCancel={() => setShowAssignmentForm(false)}
                                />
                            </div>
                        )}
                    </section>
                )}
            </main>
        </div>
    );
}
