# Todo-Backend

This is a Node.js + Express.js backend API for a simple Todo application, using MongoDB for database storage. It supports creating, reading, updating, and deleting todo tasks (CRUD operations).

🚀 Features
Create a new todo

Get all todos

Get a specific todo by ID

Update a todo by ID

Delete a todo by ID

Fully RESTful API

MongoDB + Mongoose integration

Environment variable support with .env

🛠️ Technologies Used
Node.js

Express.js

MongoDB

Mongoose

Postman (for API testing)

📂 Project Structure
bash
Copy
Edit
todo-backend/
│
├── config/
│   └── database.js        # MongoDB connection
│
├── models/
│   └── Todo.js            # Mongoose schema
│
├── routes/
│   └── todos.js           # Routes for Todo CRUD
│
├── .env                   # Environment variables
├── index.js               # Entry point
└── package.json
⚙️ Setup Instructions
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/todo-backend.git
cd todo-backend
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
Inside the project root, create a .env file and add:

ini
Copy
Edit
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/YourDBName
Replace YourDBName with your desired database name.

4. Start the server
bash
Copy
Edit
node index.js
You should see:

pgsql
Copy
Edit
Server is running on port 3000
Database connected successfully
📬 API Endpoints (use with Postman)

Method	Endpoint	Description
GET	/api/v1/todos	Get all todos
GET	/api/v1/todos/:id	Get a single todo
POST	/api/v1/todos	Create a new todo
PUT	/api/v1/todos/:id	Update a todo
DELETE	/api/v1/todos/:id	Delete a todo
🔍 Testing with Postman
Open Postman

Use the appropriate method (GET, POST, PUT, DELETE)

Set the request URL: http://localhost:3000/api/v1/todos

For POST/PUT, go to the Body tab > raw > JSON and use a structure like:

json
Copy
Edit
{
  "title": "Learn Express",
  "description": "Build a todo backend API"
}
📌 Notes
Ensure MongoDB is running locally

You can also use MongoDB Atlas for cloud DB
