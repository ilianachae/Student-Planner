// /components/Navbar.js
import React from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ onAddSemesterClick, onExportClick }) => {
    return (
        <nav className={styles.navbar}>
            <h1>Student Assistance Website</h1>
            <div>
                <button onClick={onExportClick} className={styles.exportButton}>Export</button>
            </div>
        </nav>
    );
};

export default Navbar;
