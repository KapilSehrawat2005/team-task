# FluxBoard RBAC Project Management System

Production-ready Next.js 14 project management application with MongoDB Atlas, Mongoose, JWT authentication, HTTP-only cookies, and backend-enforced RBAC for `admin`, `leader`, `member`, and `pending` roles.

## Features

- Signup and login with bcrypt password hashing
- JWT authentication stored in HTTP-only cookies
- Edge middleware for protected routes and request auth context injection
- Central backend RBAC guards for API route enforcement
- Admin dashboard for user management, project creation, and task assignment
- Leader dashboard for project-scoped task creation and task tracking
- Member dashboard for assigned task execution and status updates
- Fully responsive Tailwind UI built for desktop and mobile

## Tech Stack

- Next.js 14 App Router
- MongoDB Atlas
- Mongoose
- JWT via `jose`
- Tailwind CSS
- TypeScript

## Environment Setup

1. Copy `.env.example` to `.env.local`
2. Fill in:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `JWT_EXPIRES_IN`
   - `BOOTSTRAP_ADMIN_EMAIL`

`BOOTSTRAP_ADMIN_EMAIL` is used to create the first admin account while keeping all other new signups as `pending`.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Default Role Flow

- Signup creates a `pending` user by default
- If signup email matches `BOOTSTRAP_ADMIN_EMAIL`, the account becomes `admin`
- Admin assigns leaders and members to projects
- Leaders manage tasks only within their own assigned project
- Members can only update statuses for their own tasks

## API Routes

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/me`

### Admin

- `GET /api/admin/users`
- `PUT /api/admin/update-user`

### Projects

- `POST /api/projects/create`

### Tasks

- `POST /api/tasks/create`
- `GET /api/tasks/leader`
- `PUT /api/tasks/update-status`
