# Invoice Processing System

A full-stack invoice management application built with React.js, Spring Boot, and MySQL.

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios for API calls
- React Router for navigation
- JWT for authentication

### Backend
- Spring Boot (Java 21)
- Spring Security
- Spring Data JPA
- MySQL 8.0
- JWT Authentication

## Project Structure
```
invoice-system/
├── frontend/           # React.js frontend application
├── backend/           # Spring Boot backend application
└── database/          # Database scripts and schema
```

## Prerequisites
- Node.js (v18 or higher)
- Java 21
- MySQL 8.0
- Maven

## Setup Instructions

### Database Setup
1. Install MySQL 8.0
2. Create a database named `invoice_db`
3. Use the following credentials:
   - Username: root
   - Password: cdac
4. Run the schema script from `database/init.sql`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Build the project:
   ```bash
   mvn clean install
   ```
3. Run the application:
   ```bash
   mvn spring-boot:run
   ```
The backend will start on http://localhost:8080

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
The frontend will start on http://localhost:3000

## API Documentation

### Authentication Endpoints
- POST /api/auth/signup - Register new user
- POST /api/auth/login - User login

### Invoice Endpoints (Protected)
- GET /api/invoices - Get all invoices
- POST /api/invoices - Create new invoice
- PUT /api/invoices/{id} - Update invoice
- DELETE /api/invoices/{id} - Delete invoice

## Testing
Import the Postman collection from `postman/Invoice_System.postman_collection.json` to test the APIs.

## Features
- User authentication with JWT
- Protected routes
- Invoice CRUD operations
- Responsive design
- Form validation
- Error handling

## Security Features
- JWT token-based authentication
- Password encryption
- Protected API endpoints
- Secure session management 