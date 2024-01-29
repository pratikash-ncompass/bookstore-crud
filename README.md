# Express.js and MySQL CRUD Operations for a Bookstore App

This repository demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations on three tables: Authors, Customers, and Books. The application is built using Express.js as the backend framework and MySQL as the database.

## Features

- Create, retrieve, update, and delete authors, customers, and books.
- Utilizes Express.js for handling HTTP requests and MySQL for data storage.
- Implements RESTful API endpoints for each CRUD operation on the three tables.
- Provides a simple and clean structure for easy understanding and modification.

## Prerequisites

- Node.js installed on your machine.
- MySQL server set up with appropriate database and tables.

## Setup

1. Clone the repository:
   git clone <link_to_this_repo>
   cd <repo_name>

2. Install dependencies:
   npm install

3. Configure MySQL:
   - Create a database for the application.
   - Update the MySQL connection details in `utils/database.js` file.

4. Run the application:
   npm start

   The server will start running on `http://localhost:8080`.

## API Endpoints

### Authors

- **GET /author/all**: Get a list of all authors.
- **GET /author/getAuthor/:id**: Get details of a specific author.
- **POST /author/addAuthor**: Create a new author.
- **PUT /authors/update/:id**: Update details of a specific author.
- **DELETE /authors/delete/:id**: Delete a specific author.

### Customers

- **GET /customer/allCustomers**: Get a list of all customers.
- **GET /customer/get/:id**: Get details of a specific customer.
- **POST /customer/add**: Create a new customer.
- **PUT /customer/update/:id**: Update details of a specific customer.
- **DELETE /customer/delete/:id**: Delete a specific customer.

### Books

- **GET /book/readAll**: Get a list of all books.
- **GET /book/read/:id**: Get details of a specific book.
- **POST /book/insert**: Create a new book.
- **PUT /book/update/:id**: Update details of a specific book.
- **DELETE /book/delete/:id**: Delete a specific book.

