# User API Documentation

## Endpoints Overview

- `POST /users/register` - User registration endpoint.
- `POST /users/login` - User login endpoint.
- `GET /users/profile` - Get user profile endpoint.
- `GET /users/logout` - User logout endpoint.

---

## User Registration Endpoint

### Endpoint

`POST /users/register`

### Description

This endpoint allows a new user to register by providing the necessary information. The provided data is validated before creating a new user in the database. Upon successful registration, the endpoint returns an authentication token along with the user details.

### Request Body

The request must be in JSON format and contain the following properties:

- **fullname** (object): Contains the user's name details.
  - **firstname** (string, required): Must be at least 3 characters long.
  - **lastname** (string, optional): If provided, must be at least 3 characters long.
- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 6 characters long.

#### Example Request Body

```json
{
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "password123"
}
```

### Success Response

- **Status Code:** 201 Created
- **Response Body:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com"
  }
}
```

### Validation Error

- **Status Code:** 400 Bad Request
- **Response Body:**

```json
{
  "errors": [
    { "msg": "Error message", "param": "field_name", "location": "body" }
  ]
}
```

---

## User Login Endpoint

### Endpoint

`POST /users/login`

### Description

This endpoint allows an existing user to log in by providing their email and password. Upon successful validation, the endpoint returns an authentication token along with the user details.

### Request Body

The request must be in JSON format and include the following properties:

- **email** (string, required): Must be a valid email address.
- **password** (string, required): Must be at least 6 characters long.

#### Example Request Body

```json
{
  "email": "alice.smith@example.com",
  "password": "password123"
}
```

### Success Response

- **Status Code:** 200 OK
- **Response Body:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com"
  }
}
```

### Authentication Error

- **Status Code:** 401 Unauthorized
- **Response Body:**

```json
{
  "message": "Invalid email or password"
}
```

### Validation Error

- **Status Code:** 400 Bad Request
- **Response Body:**

```json
{
  "errors": [
    { "msg": "Error message", "param": "field_name", "location": "body" }
  ]
}
```

---

## User Profile Endpoint

### Endpoint

`GET /users/profile`

### Description

This endpoint retrieves the authenticated user's profile information. The request must include a valid authentication token provided either in the authorization header or cookies. The middleware verifies the token before accessing the profile information.

### Success Response

- **Status Code:** 200 OK
- **Response Body:**

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com"
  // Additional user details if available...
}
```

### Authentication Error

- **Status Code:** 401 Unauthorized
- **Response Body:**

```json
{
  "message": "Unauthorized access"
}
```

---

## User Logout Endpoint

### Endpoint

`GET /users/logout`

### Description

This endpoint logs out the authenticated user by clearing the authentication token. It also blacklists the current token to prevent its further use. The user must be authenticated to access this endpoint.

### Success Response

- **Status Code:** 200 OK
- **Response Body:**

```json
{
  "message": "Logged out successfully"
}
```

### Authentication Error

- **Status Code:** 401 Unauthorized
- **Response Body:**

```json
{
  "message": "Unauthorized access"
}
```
