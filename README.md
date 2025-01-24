# Simple Notes App Backend

This is a simple backend application built using **Hapi.js** for managing notes. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on notes. It serves as a learning project to understand backend development concepts.

## Features

- Add a new note
- Retrieve all notes
- Retrieve a specific note by ID
- Update a note by ID
- Delete a note by ID

## Folder Structure
```
project-root/
├── src/
│ ├── handler.js 
│ ├── notes.js 
│ ├── routes.js 
│ └── server.js 
├── .gitignore 
├── eslint.config.mjs 
├── notes-api-test.postman_environment.json 
├── notes-api-test.postman_collection.json 
├── package.json 
└── package-lock.json 
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository:
   ```
   git clone https://github.com/ai-azz/simple-notes-backend.git
   ```

2. Navigate to the project directory:
    
    ```
    cd project-root
    
    ```
    
3. Install dependencies:
    
    ```
    npm install
    
    ```
    

### Running the Server

Start the server with the following command:

```
npm start

```

The server will run on `http://localhost:5000`.

### API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| POST | `/notes` | Add a new note |
| GET | `/notes` | Retrieve all notes |
| GET | `/notes/{id}` | Retrieve a note by ID |
| PUT | `/notes/{id}` | Update a note by ID |
| DELETE | `/notes/{id}` | Delete a note by ID |

### Sample Request Body

### Add Note (`POST /notes`):

```
{
  "title": "Sample Note",
  "tags": ["learning", "hapi"],
  "body": "This is a sample note body."
}

```

### Update Note (`PUT /notes/{id}`):

```
{
  "title": "Updated Note Title",
  "tags": ["update", "learning"],
  "body": "Updated note content."
}

```

### Postman Collection

To test the API, you can use the provided Postman collection:

1. Import the `notes-api-test.postman_collection.json` file into Postman.
2. Configure the environment using `notes-api-test.postman_environment.json`.

## Project Details

### Code Highlights

- **Handler Functions**: Each route's logic is defined in `handler.js`.
- **Routing**: Routes are managed in `routes.js` and imported into the server configuration.
- **Data Storage**: Notes are stored in-memory using an array in `notes.js`.
- **Error Handling**: Provides descriptive responses for success and failure scenarios.

### Dependencies

Key dependencies used in this project:

- **Hapi.js**: A rich framework for building applications and services.
- **NanoID**: Generates unique IDs for notes.

Check all dependencies in the package.json file.
