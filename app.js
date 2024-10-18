// app.js

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'data', 'todos.json');


// Middleware
 // Use CORS middleware
 app.use(cors());
app.use(bodyParser.json());

// Helper function to read the JSON file
function readTodos() {
    const data = fs.readFileSync(DATA_FILE);
    return JSON.parse(data);
}

// Helper function to write to the JSON file
function writeTodos(todos) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

// Create a new todo
app.post('/api/todos', (req, res) => {
    console.log(req.body)
    const todos = readTodos();
    const newTodo = {
        id: Date.now(),
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
});

// Get all todos
app.get('/api/todos', (req, res) => {
    const todos = readTodos();
    res.json(todos);
});

// Get a single todo
app.get('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });
    res.json(todo);
});

// Update a todo
app.put('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Todo not found' });

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed ?? todo.completed;

    writeTodos(todos);
    res.json(todo);
});

// Delete a todo
app.delete('/api/todos/:id', (req, res) => {
    const todos = readTodos();
    const updatedTodos = todos.filter(t => t.id !== parseInt(req.params.id));
    if (todos.length === updatedTodos.length) {
        return res.status(404).json({ message: 'Todo not found' });
    }
    writeTodos(updatedTodos);
    res.json({ message: 'Todo deleted' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
