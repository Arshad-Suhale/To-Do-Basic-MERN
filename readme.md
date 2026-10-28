# MERN Todo App

A full-stack Todo application built with the MERN stack to practise React, REST API integration, CRUD operations, state management, and custom hooks.

## Features

- **Create tasks** — Add new tasks to your list.
- **View tasks** — Fetch and display tasks from the backend.
- **Update tasks** — Toggle tasks between pending and completed.
- **Delete tasks** — Remove tasks from the list.
- **Filter tasks** — View All, Pending, or Completed tasks.
- **Task counts** — Display total, pending, and completed task counts.
- **Toast notifications** — Show success and error messages for task operations.
- **Error handling** — Handle failed API requests.
- **Separated API logic** — Keep HTTP requests in a dedicated API module.
- **Custom React hook** — Encapsulate task-related state and operations in a custom hook.

## Tech Stack

### Frontend

- React
- JavaScript (ES6+)
- Tailwind CSS
- React Toastify
- Fetch API

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

The project is organized into separate frontend and backend directories.

```text
project/
├── frontend/
│   └── src/
│       ├── api/
│       │   └── taskApi.js
│       ├── hooks/
│       │   └── useTask.js
│       ├── components/
│       │   ├── ToDoHeader.jsx
│       │   ├── ToDoBody.jsx
│       │   └── ToDoForm.jsx
│       │   └── ToDoList.jsx
│       │   └── ToDoItem.jsx
│       └── App.jsx
│       └── App.css
│       └── index.css
│       └── main.jsx
│
└── backend/
│   └── src/
│   │   ├── config/
│   │   │   └── config.js
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   ├── model/
│   │   │   └── task.model.js
│   │   └── routes/
│   │   │   └── task.route.js
│   │   └── app.js
│   └── server.js
```

## Architecture

### Frontend

- **`App.jsx`** — Composes the UI, manages the selected task filter, and determines which tasks are visible.
- **`useTask.js`** — Manages task state, initial fetching, CRUD operations, task counts, and notifications.
- **`taskApi.js`** — Contains functions responsible for communicating with the backend API.
- **Components** — Render the Todo interface and individual tasks.

### Backend

- **Config** — Define the Config.
- **Routes** — Define the task API endpoints.
- **Controllers** — Handle task operations and HTTP responses.
- **Mongoose model** — Defines the task schema and interacts with MongoDB.

## API Endpoints

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/task/`           | Retrieve all tasks |
| POST   | `/api/task/create`     | Create a task      |
| PUT    | `/api/task/edit/:id`   | Update a task      |
| DELETE | `/api/task/delete/:id` | Delete a task      |

### Task Data Model

A task contains the following fields:

| Field             | Type    | Description                                        |
| ----------------- | ------- | -------------------------------------------------- |
| `taskTitle`       | String  | Task title; required                               |
| `taskDescription` | String  | Task description; defaults to an empty string      |
| `isCompleted`     | Boolean | Whether the task is completed; defaults to `false` |
| `createdAt`       | Date    | Automatically generated creation timestamp         |
| `updatedAt`       | Date    | Automatically generated update timestamp           |

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js and npm
- MongoDB, either locally or through a hosted instance
- Git

### 1. Clone the repository

```bash
git clone "https://github.com/Arshad-Suhale/To-Do-Basic---MERN.git"
cd To-Do-Basic---MERN
```

### 2. Set up the backend

Navigate to the backend directory:

```bash
cd backend
npm install
```

Configure your MongoDB connection string and any required environment variables according to your backend configuration.

Start the backend using the script defined in your `package.json`. For example, if your project has a `dev` script:

```bash
npm run dev
```

### 3. Set up the frontend

Open a second terminal:

```bash
cd frontend
npm install
```

Start the React development server using the script defined in your frontend `package.json`, for example:

```bash
npm run dev
```

### 4. Verify the API URL

The frontend API module currently uses the base URL:

```text
http://localhost:3000/api/task
```

Make sure this matches your backend server configuration.

## What I Learned

This project has helped me practise:

- Building React components and managing state with `useState`.
- Using `useEffect` to fetch data from an API.
- Handling asynchronous operations with `async`/`await`.
- Performing CRUD operations through REST API endpoints.
- Updating arrays immutably using methods such as `map` and `filter`.
- Deriving visible tasks and task counts from existing state.
- Separating API communication from React state management.
- Creating custom hooks to organize stateful logic.
- Handling API errors and displaying toast notifications.

## Project Status

The core Todo functionality and the initial code-refactoring pass are complete. This is a learning project that will continue to evolve as I practise additional React and full-stack development concepts.

## License

This project is intended for learning and practice. Add a license if you decide to distribute it publicly.
