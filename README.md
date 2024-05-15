# Student Assistance Website

## Features

### GPA

* it shows three boxes that cumulative gpa, major gpa, minor gpa
    - the gpa is calculated based on the user's semester information
    - GPA calculation as a weighted average of the grades, when the number of credit/hours is the weight and the numeric grade is taken from the GPA table.
    The GPA is equal to the sum of the product of the credit hours weight (w) times the grade (g):
    
    GPA = w1×g1+ w2×g2+ w3×g3 + ... + wn×gn
    
    The credit hours weight (wi) is equal to the credit hours of the class divided by the sum of the credit hours of all the classes:
    
    wi= ci / (c1+c2+c3+...+cn)

* cumulative gpa:
    semester A (125 total quality points, 35 total credit hours)
    semester B (50 total quality points, 10 total credit hours)
    Total quality points = 175
    Total credit hours = 45

    175 / 45 = 3.88 cumulative GPA
* Determine your major GPA. Courses can be included in your 'Major' in course settings.

### Semester

* the user can see the semester boxes below the gpa
    - the semester is year/season format (e.g. FALL 2023)
    - semester is sorted by the date, oldest semester would be bottom and nearest/current semester would be placed on very top
* the user can add the semester through the add button on the nav bar
    - the user can input the semester period
    - the user select the year and season of semester then it would create by the information

### Course

* when the user click the specific semester, it shows the add and edit button, and the card list of courses blocks that user input
    - the course cards shows the letter grade of the course
    - grade weights: {grade weights: a+=4, a=4, a-=3.7, b+=3.3, b=3, 3-=2.7, c+=2.3, c=2, c-=1.7, d+1.3, d=1, d-=0.7 and f=0}
    - the user can choose the grade scale either percentage or points ways
* when the user click the specific course card, it shows the to do list of assignments
    - the user can add/edit the assignment with grade categories
    - if the user marked the assignment as just finished, then it shows just checked status
    - if the user marked the graded, the user can input the score of the assignment
    - these score is calculated with the user's score and maximum score
        - The weighted grade is equal to the sum of the product of the weights (w) in percent (%) times the grade (g):
        
        Weighted grade = w1×g1+ w2×g2+ w3×g3+..
* course has a grade categories that each course can have different grade categories that shows the user how the grade is split up.
* designate courses as in progress! As courses get completed they will affect your cumulative GPA

### Export

* the user can export the data through the export button on the nav bar

## requirement

using React, Next.js, and data fetching to build a full-stack web application.

For full credit, your site should: 
- Have a cohesive, thoughtful design/aesthetic
- Have a purpose/some sort of reason for existing
- Be usable and look good on multiple screen sizes
- Be fully deployed to Netlify
- Keep track of user interaction using state 
- Fetch data from either an internal source or third party API or persist data to a third party tool / database

## Information

* ILIANA CHAE

## Reference

* https://www.rapidtables.com/calc/grade/grade-calculator.html
* https://gpadmissions.osu.edu/resources/calculate-gpa.html
* https://gpacalculator.net/cumulative-cgpa-calculator/
* https://gpacalculator.io/cumulative-gpa-calculator/
* https://blog.logrocket.com/css-breakpoints-responsive-design/

## Known Errors

* assignment function is disappeared when the user clicks the other courses