# Eventify

Eventify is a comprehensive event management platform developed as the final project for a university React Development course. This web application is designed to streamline the process of organizing, managing, and attending events, providing an intuitive interface and robust features for users.

## Features

### User Authentication

- **Sign Up / Login:** Secure user registration and authentication using JWT.
- **User Roles:** Different user roles including attendees, organizers, and administrators.

### Event Management

- **Create Events:** Organizers can create events with detailed descriptions, images, and schedules.
- **Edit Events:** Full control for organizers to update event information.
- **Delete Events:** Remove outdated or canceled events easily.

### Ticketing System

- **Ticket Purchase:** Seamless ticket purchasing process with online payment integration.
- **E-Tickets:** Automatically generated electronic tickets sent to users via email.
- **Ticket Management:** View and manage purchased tickets in the user dashboard.

### Admin Panel

- **User Management:** Admins can view and manage all users, assign roles, and handle user-related issues.
- **Event Approval:** Admins can approve or reject events created by organizers to maintain quality and relevance.
- **Email Notifications:** Automatic email notifications to users when events are approved or updated by admins.

### Email Notifications

- **Event Approval Notifications:** Automatic email notifications sent to users when their events are approved by admins.
- **User Invitations:** Organizers can send email invites to users for their events.

### Optional: User Dashboard

- **Profile Management:** Users can update their personal information and profile pictures.
- **My Events:** Attendees can view events they have registered for, and organizers can manage their created events.
- **Notifications:** Real-time notifications for event updates, ticket purchases, and reminders.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: State management library for managing application state.
- **Tailwind CSS**: Utility-first CSS framework for quickly building custom designs.
- **NextUI**: UI components for Next.js applications.
- **React Icons**: Provides a set of icons for use in React applications.
- **React Helmet**: Manages document head tags such as `<title>` and `<meta>` in React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend API.
- **Sonner**: A library for generating and validating JWT tokens used for user authentication.
- **React Router**: A library for routing in React applications, enabling navigation between different views or pages.

### Backend

- **Node.js**: A JavaScript runtime environment for server-side applications.
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **MongoDB**: A NoSQL database used for storing event data, user information, and admin configurations.
- **Prisma**: A modern database toolkit for Node.js and TypeScript, providing an interface for querying the database.
- **Resend**: A library used for sending email notifications to users.
- **JWT (JSON Web Tokens)**: Used for securely transmitting information between parties as a JSON object.
- **Bcrypt**: A library for hashing passwords to ensure secure storage in the database.
- **Validator**: Provides validation functions to validate user inputs and API requests.
- **Cloudinary**: Cloud-based image and video management service for uploading, storing, and serving images in your applications.
- **CORS (Cross-Origin Resource Sharing)**: Middleware for enabling CORS in your Express.js application.

## Setup Instructions

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/eventify.git
   cd eventify
   ```

2. **Install Dependencies:**

   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Set Up Environment Variables:**

   - Create `.env` files in both the `frontend` and `backend` directories with appropriate configuration variables like API URLs, database connection strings, JWT secrets, Cloudinary credentials, and email service credentials.

4. **Run the Development Servers:**

   ```bash
   # Start frontend server
   cd frontend
   npm run dev

   # Start backend server
   cd ../backend
   npm start
   ```

5. **Access Eventify:**
   - Open your browser and navigate to `http://localhost:3000` to access the Eventify application.

## Contributing

We welcome contributions from the community. If you have suggestions, find any issues, or want to add new features, please open an issue or submit a pull request on our GitHub repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, please contact Abdishakur at engshakrayare114@gmail.com.

```

```
