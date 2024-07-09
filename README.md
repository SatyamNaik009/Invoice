Project Title: Invoice Manager

Description:"Invoice Manager" is a web application designed to streamline billing processes by allowing users to create, manage. Built using Java with Spring Boot for the backend and React for the frontend, it provides a user-friendly interface where users can add new invoices, update their status (e.g. mark as paid).

Technologies Used:

Backend Development: Java: Core programming language for backend logic. Spring Boot: Framework for rapid application development, handling dependency injection, MVC architecture, and RESTful web services. Spring Data: Simplifies database interaction with JPA repositories.

Frontend Development: React: JavaScript library for building interactive user interfaces. Axios: Handles asynchronous HTTP requests to the backend API.

Database: MySQL: Relaional database management system for storing hotel information, user data, and booking details. Hibernate: ORM (Object-Relational Mapping) tool for mapping Java objects to database tables and vice versa.

Other Technologies: HTML & CSS: Markup and styling for frontend UI components. Git: Version control system for collaborative development and code management. Maven: Dependency management tools for building and managing Java-based projects.

Prerequisites: Java Development Kit (JDK): Ensure JDK 8 or higher is installed. You can download it from the Oracle website or use OpenJDK.

Integrated Development Environment (IDE): Recommended IDEs include IntelliJ IDEA, Eclipse, or VS Code with appropriate plugins for Java and React development.

Node.js and npm: Install Node.js and npm from Node.js official website.

MySQL Database: Set up and configure MySQL database server. Install MySQL from MySQL website.

Step-by-Step Installation Guide:

Backend Setup (Java with Spring Boot):

Clone the Repository:
Clone the repository from your version control system (e.g., GitLab, GitHub).

Import Backend Project:
Open your IDE and import the backend project as a Maven project.

Configure Application Properties:
Navigate to src/main/resources/application.properties.

Run the Application:
Run the backend application class to start the Spring Boot application.

Verify Backend Setup:
Access http://localhost:8080 to ensure the backend is running without errors. You may see a default Spring Boot page or a customized landing page if implemented.

Frontend Setup (React):

Navigate to Frontend Directory:
Open a terminal or command prompt.
Navigate to the frontend directory within your cloned repository (e.g., src/main/frontend).

Install Dependencies:
Run npm install to install all frontend dependencies specified in package.json.

Start the Development Server:
Run npm start to start the frontend development server.

Verify Frontend Setup:
Access http://localhost:3000 in your web browser to view the React application. You should see the frontend .

Database Setup:
Create Database Schema:
Use MySQL Workbench or SQLYog to create a database schema.

Final Steps:

Integrate Frontend with Backend:
Update frontend API endpoints (axios calls) in React components to match backend URL (http://localhost:8080).

By following these steps, you should have set up and running on your local development environment.

This setup ensures efficient invoice management, improves payment tracking accuracy.
