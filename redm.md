# Uber Clone

Welcome to the **Uber Clone** project! This modern, full-stack application replicates Uber’s core functionality—allowing users to book rides and captains to manage driving tasks. This app features a responsive design, secure authentication, and role-based dashboards. It's an excellent learning resource or a starting point for building your own ride-sharing platform.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [How It Works](#how-it-works)
  - [User Flow](#user-flow)
  - [Captain Flow](#captain-flow)
- [Authentication](#authentication)
- [Examples](#examples)
- [Contributing](#contributing)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## Features

- **User Authentication:** Secure sign-up and log-in for users.
- **Captain Authentication:** Separate registration and login for captains.
- **Role-Based Dashboards:** Unique dashboards for users and captains with route protection.
- **Responsive Design:** Mobile-friendly and fully responsive.
- **Modern UI:** Built with Tailwind CSS for a sleek and professional look.
- **Video Backgrounds:** Dynamic video backgrounds for login pages.
- **Social Login (Placeholder):** Ready for GitHub, Twitter, and Facebook OAuth integration.

## Tech Stack

- **React.js:** Component-based UI development.
- **React Router:** Enables single-page navigation.
- **Axios:** Handles API calls for authentication and data.
- **Tailwind CSS:** Utility-first styling for rapid UI development.
- **Lucide React:** Lightweight, customizable icons.
- **Vite:** Fast build tool for modern JavaScript applications.

## Project Structure

```
uber-clone/
├── public/
│   ├── video.mp4         # Video background for login
│   └── Signup.webp       # Signup page image
├── src/
│   ├── Components/
│   │   ├── auth/         # Authentication components
│   │   │   ├── User_Login.jsx
│   │   │   ├── User_Signup.jsx
│   │   │   ├── Captain_auth/
│   │   │   │   ├── CaptainRegistration.jsx
│   │   │   │   └── Captain_Login.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/      # Context for state management
│   │   │   └── AuthContext.jsx
│   │   ├── Dashboard/    # Dashboard components
│   │   │   ├── Dashboard.jsx
│   │   │   └── CaptainDashboard.jsx
│   │   ├── Pages/        # Main pages
│   │   │   ├── Layout.jsx
│   │   │   └── Home/
│   │   │       └── Hero.jsx
│   └── App.jsx           # Main application router
├── .env                  # Environment variables
├── package.json          # Project dependencies
└── README.md             # This file
```

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/uber-clone.git
cd uber-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the project root:

```
VITE_BASE_API_URL=http://your-backend-api.com/api
```

Replace with your actual backend API URL (e.g., `http://localhost:5000/api` for local development).

### 4. Run the Application

```bash
npm run dev
```

Open `http://localhost:5173` (or your Vite port) in your browser.

## How It Works

### User Flow

1. **Sign Up:** Users register at `/user-signup`.
2. **Log In:** Users log in at `/user-login`.
3. **Dashboard:** Authenticated users are redirected to `/dashboard`.

### Captain Flow

1. **Register:** Captains register via `/captain-registration`.
2. **Log In:** Captains log in at `/captain-login`.
3. **Dashboard:** Only logged-in captains can access `/captain-dashboard`.

## Authentication

- **AuthContext:** Manages login state and API calls.
- **ProtectedRoute:** Restricts access to authenticated users or captains.

## Examples

### User Login Form

```jsx
// User_Login.jsx
const { loginFormData, handleLoginChange, handleLogin } = useAuth();

<input
    name="email"
    value={loginFormData.email}
    onChange={handleLoginChange}
    type="email"
    placeholder="Email"
/>
<button onClick={handleLogin}>Login</button>
```

### Protected Captain Dashboard

```jsx
// App.jsx
<Route
    path="/captain-dashboard"
    element={
        <ProtectedRoute captainOnly={true}>
            <CaptainDashboard />
        </ProtectedRoute>
    }
/>
```

## Contributing

Contributions are welcome! Here’s how to get started:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/new-feature`.
3. Commit changes: `git commit -m "Add new feature"`.
4. Push the branch: `git push origin feature/new-feature`.
5. Open a pull request.

## Future Enhancements

- **Social Login:** Implement OAuth for GitHub, Twitter, and Facebook.
- **Real-Time Updates:** Use WebSockets for real-time ride tracking.
- **Google Maps Integration:** Enable map-based ride booking.
- **Payments:** Integrate Stripe or PayPal for ride payments.
- **Improved UX:** Add loading indicators during API calls.

## License

This project is open-source under the MIT License. Feel free to use, modify, and share it!

