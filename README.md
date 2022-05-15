# Final_Project_Backend_Server
Backend server code for CSCI 39548 final project (Spring '22)
## Platform For Managing Students and Campuses

## Group members
- Ramon Torres - Mightywise <br/>
- Tahmina Munni - TahminaM

### Prerequisites
- Install PostgreSQL (Postgres) [[link](https://www.postgresql.org/download/)] - required to run the database
- Install Postman [[link](https://www.postman.com/downloads/)] - optional tool for API testing 

### Use the following steps to set up and run the server (back-end) application on your local machine
1.	Download the GitHub repository ZIP file to your local machine and unzip it.
2.  Start a terminal (e.g., Git Bash) on your local machine.
3.	Go into the "sever-starter-code" folder, enter the command to install dependencies: `npm install` 
4.	Start the server application by entering the command: `npm start` 
5.	After the server application is successfully started, its access address is at: `http://localhost:5000`

### Stack
- Node
- Express
- React
- Redux
- PostgreSQL
- Sequelize

### User Stories

As a user I:
- [x] will land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students

can navigate to all campuses view, and
- [x] see a list of all campuses in the database
- [x] see an informative message if no campuses exist
- [x] add a new campus
- [x] with a validated form displaying real-time error messages

can navigate to a single campus view, and
- [x] see details about a single campus, including enrolled students (if any)
- [x] see an informative message if no students are enrolled at that campus
- [x] navigate to any student’s single student view 
- [x] delete the campus 
- [x] edit campus information (including adding/removing students)
- [x] with a validated form displaying real-time error messages

can navigate to all students view, and
- [x] see a list of all students in the database
- [x] see an informative message if no students exist
- [x] add a new student
- [x] with a validated form displaying real-time error messages

can navigate to a single student view, and
- [x] see details about a single student, including the campus at which they are enrolled (if exists)
- [x] see an informative message if student is not enrolled at a campus
- [x] navigate to single campus view of the student’s enrolled campus
- [x] delete the student
- [x] edit the student’s information (including campus s/he is enrolled at)
- [x] with a validated form displaying real-time error messages
