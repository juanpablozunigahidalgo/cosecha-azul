# Cosecha Azul . Home Assigment. 

## Overview

This project consists of a simple full-stack application that allows users to register transactions, view account balances, and check transaction history. It is built with:

- **Frontend**: React with TypeScript
- **Backend**: Node.js with Express using TypeScript

### Key Features:
- **Register Transaction**: Users can either create a new account or register a transaction for an existing account.
- **View Transaction History**: Users can check the transaction history and balance by entering a customer ID.

## Installation Instructions

To run this project locally, follow the steps below:

### Prerequisites
- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
- **Git**: Ensure you have Git installed.

### Steps

1. **Clone the repository from GitLab**:

git clone https://gitlab.com/juanpablozunigahidalgo/cosecha-azul

3. **Install dependencies**:
- For the frontend:
  ```
  cd frontend
  npm install
  ```
- For the backend:
  ```
  cd ../backend
  npm install
  ```
### Backend Dependencies

The backend uses the following key dependencies:
- **Express**: A web framework for Node.js used to handle HTTP requests and routing.
- **TypeScript**: Provides type safety to JavaScript code, improving development productivity and reducing errors.
- **Nodemon**: Automatically restarts the server when changes are made.
- **ts-node**: Executes TypeScript code directly without the need for pre-compilation.

To install these dependencies, use the command:
npm install express body-parser cors typescript ts-node nodemon @types/express @types/node

These dependencies are already listed in the `package.json`, so running `npm install` will install them automatically.

4. **Run the application**:

First   
- To run the backend:
  ```
  cd ../backend
  npm run dev
  ```
  This will start the backend API on `http://localhost:5000`.

Second
- To run the frontend:
  ```
  cd frontend
  npm start
  ```
  This will start the frontend development server and typically open a new tab in your browser at `http://localhost:3000`.

  ## How the Code Works

1. **Frontend**:
   - The frontend consists of a simple React TypeScript app that provides two main functionalities:
     - **Register Transaction**: Users can input their information and submit a transaction. The form has validation that requires the user to enter either an existing `customerID` or both `name`, `surname`, and `initialCredit` for new accounts.
     - **View Transaction History**: Users can check their transaction history by providing a `customerID`.

2. **Backend**:
   - The backend is built using Node.js and Express with TypeScript.
   - It exposes two main endpoints for account management and transaction history.
   - The project stores all account and transaction data in memory for simplicity.
   - The backend also performs validation to ensure correct data is sent to the API.

### CI/CD

This project includes a `.gitlab-ci.yml` file for GitLab CI/CD. It is configured to run linting, tests, and deploy the application when pushing to the repository. Make sure to set up the appropriate GitLab runners and environment variables for deployment.

## Future Improvements

- Use a real database (e.g., MongoDB or PostgreSQL) instead of in-memory storage.
- Add more detailed validation and error handling.
- Implement authentication for user accounts.
- Improve the frontend UI/UX.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
