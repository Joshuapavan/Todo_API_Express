# Todo API

A RESTful API for managing todos built with Node.js, Express, and MySQL.

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Configure database:
   - Update MySQL credentials in `/config/database.js` and `/config/setup.js`
   - Default configuration:
     - Host: localhost
     - User: root
     - Port: 3306
     - Database: todo_db

## Running the Application

```bash
npm run dev
```

The server will start on port 3000.

## API Endpoints

### Health Check
- GET `/healthcheck` - Check if the server is running

### Todos
- GET `/api/todos` - Get all todos
- GET `/api/todo/:id` - Get a specific todo
- POST `/api/todo` - Create a new todo
  ```json
  {
    "title": "Your todo title"
  }
  ```
- PUT `/api/todo/:id` - Update a todo
  ```json
  {
    "title": "Updated title",
    "completed": true
  }
  ```
- DELETE `/api/todo/:id` - Delete a todo

## Response Format

All API responses follow this structure:
```json
{
  "success": true|false,
  "status": 200|201|404|500,
  "message": "Response message",
  "data": {} // Optional data object
}
```

## Database Schema

```sql
CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Tech Stack
- Node.js
- Express.js
- MySQL2
- Nodemon (development)
