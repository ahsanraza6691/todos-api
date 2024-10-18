# JSON To-Do App

A simple Node.js CRUD (Create, Read, Update, Delete) to-do list app using JSON for data storage.

## Prerequisites

- Node.js (https://nodejs.org)
- npm (Node Package Manager)

## Project Structure

```
json-todo-app/
│
├── data/
│   └── todos.json
│
├── app.js
└── package.json
```

- `data/todos.json`: Stores the to-do items.
- `app.js`: Main application file.
- `package.json`: Project configuration file.

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd json-todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the application

```bash
node app.js
```

The server will start on `http://localhost:3000`.

## API Documentation

The following endpoints are available in this application:

### 1. Create a New To-Do

- **URL**: `/api/todos`
- **Method**: `POST`
- **Description**: Creates a new to-do item.
- **Request Body**:
  ```json
  {
    "title": "Buy groceries"
  }
  ```
- **Response**:
  - **201 Created**
    ```json
    {
      "id": 1697623678000,
      "title": "Buy groceries",
      "completed": false
    }
    ```
- **Error Responses**:
  - **400 Bad Request**: If the request body is invalid.

### 2. Get All To-Dos

- **URL**: `/api/todos`
- **Method**: `GET`
- **Description**: Retrieves all to-do items.
- **Response**:
  - **200 OK**
    ```json
    [
      {
        "id": 1697623678000,
        "title": "Buy groceries",
        "completed": false
      },
      {
        "id": 1697623699000,
        "title": "Read a book",
        "completed": true
      }
    ]
    ```

### 3. Get a Single To-Do

- **URL**: `/api/todos/:id`
- **Method**: `GET`
- **Description**: Retrieves a single to-do item by its ID.
- **Parameters**:
  - `id` (URL parameter): The ID of the to-do item.
- **Response**:
  - **200 OK**
    ```json
    {
      "id": 1697623678000,
      "title": "Buy groceries",
      "completed": false
    }
    ```
- **Error Responses**:
  - **404 Not Found**: If the to-do item does not exist.

### 4. Update a To-Do

- **URL**: `/api/todos/:id`
- **Method**: `PUT`
- **Description**: Updates a to-do item by its ID.
- **Parameters**:
  - `id` (URL parameter): The ID of the to-do item.
- **Request Body**:
  ```json
  {
    "title": "Buy groceries and milk",
    "completed": true
  }
  ```
- **Response**:
  - **200 OK**
    ```json
    {
      "id": 1697623678000,
      "title": "Buy groceries and milk",
      "completed": true
    }
    ```
- **Error Responses**:
  - **404 Not Found**: If the to-do item does not exist.
  - **400 Bad Request**: If the request body is invalid.

### 5. Delete a To-Do

- **URL**: `/api/todos/:id`
- **Method**: `DELETE`
- **Description**: Deletes a to-do item by its ID.
- **Parameters**:
  - `id` (URL parameter): The ID of the to-do item.
- **Response**:
  - **200 OK**
    ```json
    {
      "message": "Todo deleted"
    }
    ```
- **Error Responses**:
  - **404 Not Found**: If the to-do item does not exist.

## Error Handling

- For non-existing routes, the server should return a **404 Not Found**.
- JSON validation errors or other invalid requests return a **400 Bad Request**.

## Additional Steps

To improve the app, consider the following:

1. **Data Validation**: Use libraries like `Joi` to validate the request body.
2. **Authentication**: Implement authentication and authorization using JWT.
3. **Persist Data with a Database**: Switch from JSON to a database such as MongoDB or SQLite for better data management.
4. **Use a Frontend Framework**: Integrate with a frontend framework (e.g., React, Vue.js) to create a full-stack application.

## License

This project is licensed under the MIT License.
