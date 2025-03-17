# UberClone Backend API Documentation

## User Registration Endpoint

### Endpoint
`POST /api/v1/user/sign-up`

> **Note:** Although the documentation refers to this as the `/users/register` endpoint, the actual route in the code is `/api/v1/user/sign-up`.

### Description
This endpoint is used to register a new user. It validates the provided input and creates a new user record in the database. If the registration is successful, a JWT token is generated and returned along with the user data.

### Request Body
The request body must be in JSON format and include the following fields:

- **FirstName** (string): Must be at least 3 characters long.
- **LastName** (string): Must be at least 3 characters long.
- **email** (string): Must be a valid email address.
- **password** (string): Must be at least 6 characters long.

#### Example
```json
{
    "FirstName": "John",
    "LastName": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

### Response
The response will be in JSON format and include the following fields:

- **message** (string): A success message.
- **user** (object): The created user object.
- **token** (string): The JWT token.

#### Example
```json
{
    "message": "User created successfully",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "FirstName": "John",
        "LastName": "Doe",
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Error Response
The error response will be in JSON format and include the following fields:

- **errors** (array): An array of error objects.

#### Example
```json
{
    "errors": [
        { "field": "email", "message": "Invalid email format" },
        { "field": "password", "message": "Password must be at least 6 characters long" }
    ]
}
```

#### User Already Exists
```json
{
    "message": "User already exists"
}
```

## User Login Endpoint

### Endpoint
`POST /api/v1/user/login`

### Description
This endpoint authenticates a user and returns a JWT token upon successful login.

### Request Body
The request body must be in JSON format and include the following fields:

- **email** (string): The registered email address.
- **password** (string): The user's password.

#### Example
```json
{
    "email": "john.doe@example.com",
    "password": "securepassword"
}
```

### Response
The response will be in JSON format and include the following fields:

- **message** (string): A success message.
- **user** (object): The user object.
- **token** (string): The JWT token.

#### Example
```json
{
    "message": "Login successful",
    "user": {
        "_id": "60d0fe4f5311236168a109ca",
        "FirstName": "John",
        "LastName": "Doe",
        "email": "john.doe@example.com"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Error Response
#### Invalid Credentials
```json
{
    "message": "Invalid email or password"
}
```

#### User Not Found
```json
{
    "message": "User not found"
}
```
