// /components/GPACalculator.js
 import React from 'react';
 import styles from '../styles/GPACalculator.module.css';
 
 const GPACalculator = ({ gpa, majorGpa, minorGpa }) => {
     return (
         <div className={styles.gpaContainer}>
             <div className={styles.gpaBox}>
                 <p>Cumulative GPA</p>
                 <p>{gpa}</p>
             </div>
             <div className={styles.gpaBox}>
                 <p>Major GPA</p>
                 <p>{majorGpa}</p>
             </div>
             <div className={styles.gpaBox}>
                 <p>Minor GPA</p>
                 <p>{minorGpa}</p>
             </div>
         </div>
     );
 };
 
 export default GPACalculator;
 