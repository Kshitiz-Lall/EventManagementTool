# EventManagementTool

## Overview

EventManagementTool is a robust web application designed to help users create, manage, and participate in events. Built with ASP.NET Core for the backend API and React for the frontend, it provides a seamless experience for event organization, user authentication, real-time chat, photo uploads, and more. The project follows a clean architecture with clear separation of concerns, making it easy to maintain and extend.

## Features
- User registration and authentication (JWT-based)
- Event creation, editing, and deletion
- RSVP and attendee management
- Real-time chat for event participants (SignalR)
- User profiles and photo uploads (Cloudinary integration)
- Following/unfollowing users
- Pagination and filtering for activities
- Error handling and validation

## Project Structure
```
EventManagementTool/
├── API/            # ASP.NET Core Web API
├── Application/    # Application logic (CQRS, Handlers, DTOs)
├── Domain/         # Entity models
├── Infrastructure/ # External services (Cloudinary, Auth)
├── Persistence/    # Data access (EF Core)
└── client-app/     # React frontend
```

## Prerequisites
- [.NET 8 SDK](https://dotnet.microsoft.com/download)
- [Node.js (LTS)](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/) (or SQLite for development)
- [Cloudinary account](https://cloudinary.com/) (for photo uploads)

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Kshitiz-Lall/EventManagementTool.git
cd EventManagementTool
```

### 2. Backend Setup (API)
- Update `API/appsettings.Development.json` with your database and Cloudinary credentials.
- Run database migrations:
  ```bash
  dotnet ef database update --project Persistence
  ```
- Start the API:
  ```bash
  dotnet watch run --project API/API.csproj
  ```

### 3. Frontend Setup (client-app)
```bash
cd client-app
npm install
npm start
```
The React app will run on [http://localhost:3000](http://localhost:3000).

### 4. (Optional) Docker
You can use the provided `Dockerfile` to containerize the API.

## Usage Examples
- Register a new user and log in.
- Create a new event and invite others.
- Join an event and participate in the real-time chat.
- Upload a profile photo.
- Follow other users to see their activities.

## Contribution Guidelines
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them.
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a pull request describing your changes.

Please ensure your code follows the existing style and includes appropriate tests where applicable.

## Contact
For questions, suggestions, or support, please contact:
- **Maintainer:** Kshitiz Lall
- **Email:** kshitiz.lall@example.com
- **GitHub:** [Kshitiz-Lall](https://github.com/Kshitiz-Lall)

---

Thank you for using and contributing to EventManagementTool!
