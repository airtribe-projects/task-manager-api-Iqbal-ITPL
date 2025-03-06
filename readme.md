# Task Management API

## Overview
The Task Management API is a simple RESTful service built with Express.js. It allows users to create, retrieve, update, and delete tasks, as well as filter tasks by completion status and priority level.

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v14+ recommended)
- [Postman](https://www.postman.com/) or `curl` for testing API endpoints

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/airtribe-projects/task-manager-api-Iqbal-ITPL.git
   cd task-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```
   The API will run on `http://localhost:3000`.

## API Endpoints

### 1. Get All Tasks
- **Endpoint:** `GET /tasks`
- **Description:** Retrieve all tasks.
- **Response Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Task 1",
      "description": "Complete the project",
      "completed": false,
      "priority": "medium"
    }
  ]
  ```

### 2. Get a Task by ID
- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieve a specific task by its ID.
- **Response Example:**
  ```json
  {
    "id": 1,
    "title": "Task 1",
    "description": "Complete the project",
    "completed": false,
    "priority": "medium"
  }
  ```

### 3. Create a New Task
- **Endpoint:** `POST /tasks`
- **Description:** Add a new task.
- **Request Body:**
  ```json
  {
    "title": "New Task",
    "description": "Work on Express.js project",
    "completed": false,
    "priority": "high"
  }
  ```
- **Response Example:**
  ```json
  {
    "id": 2,
    "title": "New Task",
    "description": "Work on Express.js project",
    "completed": false,
    "priority": "high"
  }
  ```

### 4. Update a Task
- **Endpoint:** `PUT /tasks/:id`
- **Description:** Update an existing task.
- **Request Body:** (At least one field required)
  ```json
  {
    "completed": true,
    "priority": "low"
  }
  ```
- **Response Example:**
  ```json
  {
    "id": 2,
    "title": "New Task",
    "description": "Work on Express.js project",
    "completed": true,
    "priority": "low"
  }
  ```

### 5. Delete a Task
- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Remove a task by ID.
- **Response Example:**
  ```json
  ```

### 6. Get Tasks by Priority
- **Endpoint:** `GET /tasks/priority/:level`
- **Description:** Retrieve tasks filtered by priority (`low`, `medium`, `high`).
- **Response Example:**
  ```json
  [
    {
      "id": 1,
      "title": "Task 1",
      "description": "Complete the project",
      "completed": false,
      "priority": "high"
    }
  ]
  ```

### 7. Get Tasks by Completion Status
- **Endpoint:** `GET /tasks?completed=true`
- **Description:** Retrieve tasks filtered by completion status (`true` or `false`).
- **Response Example:**
  ```json
  [
    {
      "id": 2,
      "title": "Task 2",
      "description": "Work on Express.js project",
      "completed": true,
      "priority": "medium"
    }
  ]
  ```

## Testing with Postman or Curl
- Use Postman to send requests to `http://localhost:3000/tasks`
- Alternatively, use curl:
  ```sh
  curl -X GET http://localhost:3000/tasks
  ```

