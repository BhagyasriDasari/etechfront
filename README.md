# Frontend - Scheduling Platform

This is the frontend of the Scheduling Platform application, which allows users to register, log in, set availability, and schedule appointments.

## Technologies Used:
- **HTML/CSS/JavaScript** for the frontend development
- **Fetch API** for making HTTP requests
- **http-server** for serving static files in development

## Setup Instructions

### Prerequisites:
Ensure you have [Node.js](https://nodejs.org/) installed on your system. This is needed to run the HTTP server.

### 1. Clone the repository:
Clone the project repository to your local machine.

2. Install Dependencies:
To install the necessary packages for serving the frontend, run:

bash
Copy code
npm install -g http-server
3. Run the Frontend:
After installing the dependencies, you can start the frontend development server by running the following command:

bash
Copy code
http-server
The application will be available at http://localhost:8080 (or other available IPs in the terminal output).

4. Navigate to the Application:
Open your web browser and go to http://localhost:8080 to start interacting with the frontend application.

Features:
Login Page: Users can log in with their email and password.
Register Page: Users can create a new account.
Dashboard Page: Displays the user's appointments and availability.
Schedule Page: Allows users to set their availability and schedule appointments.
API Integration:
The frontend interacts with the backend API hosted on http://localhost:5000 (or another URL if deployed). All requests for login, registration, setting availability, and scheduling are handled via HTTP requests to this API.




Deployed Link:https://etechfront.vercel.app/