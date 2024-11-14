


# Contact Management System

## Overview

This project is a **Contact Management System** built using **React** for the frontend and **Express** with **MongoDB** for the backend. The project provides functionalities to manage contacts, such as adding, updating, deleting, and viewing contacts. The frontend includes a user-friendly interface with a form for adding new contacts and a table for displaying all contacts. 

The backend handles CRUD operations (Create, Read, Update, Delete) and ensures data validation to maintain the integrity of the information. The system is designed to be easily extended and modified.

## Project Structure

- **Client (Frontend)**: Built with React, Material UI, and Axios for making HTTP requests to the backend.
- **Server (Backend)**: Built with Express and MongoDB as the database.

## Features

- **Add Contact**: Users can add new contacts with first name, last name, email, phone, company, and job title.
- **Edit Contact**: Existing contacts can be updated.
- **Delete Contact**: Users can delete contacts from the system.
- **Email and Phone Validation**: Ensures emails are unique and valid, and phone numbers are numerical.
- **Pagination and Sorting**: Contacts can be paginated and sorted for better usability.


## Why MongoDB?

I chose **MongoDB** as the database for this project because it is a NoSQL database that is less complex and easy to deploy. Since this project may require future changes or extensions to the schema, MongoDB provides a flexible and scalable solution. It allows for easy modification of the data structure without the need for complex migrations or changes to a rigid schema. Additionally, MongoDB works well for projects where schema design may evolve over time, making it a good choice for this project.

## Project Workflow

1. **Frontend Development**:
   I started by building the basic structure of the project using React. This included creating a form to collect contact details and a table to display the list of contacts.

2. **Backend Development**:
   After setting up the frontend, I moved to the backend using **Express** and **MongoDB**. I ensured that the CRUD operations were functioning properly by implementing routes to handle contact creation, reading, updating, and deletion.

3. **Data Validation**:
   I added validations to the backend to ensure that there were no duplicate entries in the database. This includes:
   - Ensuring the **email** is unique.
   - Ensuring the **phone number** contains only numerical values.

4. **UI Enhancements**:
   The UI was designed to be clean and intuitive. I drew inspiration from the **Erino** website for the structure, logos, colors, and fonts. The design includes a responsive layout with the form and table displayed side-by-side for better user experience.

5. **Deployment**:
   To easily track my progress and demonstrate the functionality, I deployed the application:
   - **Frontend**: Deployed on [Netlify](https://peaceful-nougat-e4dc92.netlify.app/)
   - **Backend**: Deployed on [Render](https://render.com)

6. **Final Thoughts**:
  I would like to thank the **Erino** team  for taking the time to review this project and giving me this opportunity, and I hope you enjoy the work I've done.

## Setup Instructions

### Prerequisites

- **Node.js** installed on your system (version 14 or higher).
- **MongoDB** installed locally or a MongoDB cloud service like **MongoDB Atlas**.
- **Git** installed for version control and cloning the repository.

### Setting up the Project

#### 1. Clone the Repository

```bash
git clone https://github.com/udaytripurani/contact-management.git
cd contact-management
```

#### 2. Backend Setup

- Navigate to the **server** folder:

```bash
cd server
```

- Install dependencies:

```bash
npm install
```

- Set up the **MongoDB connection** in `server.js` or use **MongoDB Atlas** for a cloud-based database (update the connection URL accordingly).

- Start the backend server:

```bash
npm start
```

The server will run on port `5000` by default.

#### 3. Frontend Setup


- Install dependencies:

```bash
npm install
```

- Start the React development server:

```bash
npm start
```

The frontend will run on port `3000` by default.

#### 4. View the Application

- Open your browser and go to `http://localhost:3000` to view the application.
- The backend API is running on `http://localhost:5000`.

## Additional Information

- **Contact Schema**:
  The MongoDB schema for the contact includes fields such as `firstName`, `lastName`, `email`, `phone`, `company`, and `jobTitle`.

- **Validations**:
  - **Email**: Ensures that the email is in the correct format and not already used by another contact.
  - **Phone**: Ensures that the phone number is numerical.



## THANK YOU😁




