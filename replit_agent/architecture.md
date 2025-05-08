# Architecture Overview

## Overview

This application follows a modern web architecture with a React frontend and Express.js backend. It's built as a monorepo where both client and server code exist in the same repository. The application appears to be a workshop platform for women in IT, featuring educational content and interactive challenge tasks.

Key technical choices:
- **Frontend**: React with Shadcn UI components, TailwindCSS for styling
- **Backend**: Express.js API server
- **Database**: PostgreSQL with Drizzle ORM
- **Build Tool**: Vite for frontend development and building
- **Deployment**: Configured for Replit deployment

## System Architecture

The system follows a client-server architecture with clear separation between frontend and backend:

```
┌────────────────┐         ┌────────────────┐         ┌────────────────┐
│                │         │                │         │                │
│  React Client  │ ◄─────► │  Express API   │ ◄─────► │  PostgreSQL    │
│  (Browser)     │   HTTP  │  (Server)      │   SQL   │  Database      │
│                │         │                │         │                │
└────────────────┘         └────────────────┘         └────────────────┘
```

### Directory Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── hooks/          # React hooks
│   │   ├── lib/            # Utility functions and constants
│   │   ├── pages/          # Page components
│   │   └── types/          # TypeScript type definitions
├── server/                 # Express.js backend
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API route definitions
│   ├── storage.ts          # Database access layer
│   └── vite.ts             # Vite configuration for development
├── db/                     # Database-related files
│   ├── index.ts            # Database connection setup
│   ├── migrations/         # Drizzle migrations
│   └── seed.ts             # Seed data for development
├── shared/                 # Shared code between client and server
│   └── schema.ts           # Database schema definitions
```

## Key Components

### Frontend Components

1. **Pages**: The application has several pages:
   - Home: Main landing page with sections like Hero, Overview, ChallengeTasks, Resources, and Contact
   - Privacy Policy, Terms of Service, and Cookie Policy pages

2. **UI Components**: Built using Shadcn UI, a collection of reusable components based on Radix UI primitives:
   - Button, Card, Dialog, Form, Input, etc.
   - Custom components like GradientText for styled text elements

3. **State Management**:
   - Uses React Query for API data fetching and cache management
   - Local component state with useState for UI state

### Backend Components

1. **API Routes**: Express.js routes for handling API requests:
   - `/api/contact`: Handles contact form submissions
   - `/api/health`: Health check endpoint

2. **Database Interface**: Drizzle ORM is used to interact with PostgreSQL database:
   - Connection setup in `db/index.ts`
   - Schema definitions in `shared/schema.ts`

3. **Server Middleware**: Express.js middleware for request handling, logging, and error handling

### Data Layer

1. **Database Schema**:
   - Users table with username and password fields
   - Contact form schema for form validation

2. **ORM**: Drizzle ORM provides type-safe database access:
   - Schema definitions with Zod validation
   - Query building with type safety

## Data Flow

### Contact Form Submission Flow

1. User fills out the contact form in the frontend
2. Form data is validated using Zod schema
3. Frontend submits data to `/api/contact` endpoint
4. Server processes the request and returns success/error response
5. Frontend displays appropriate toast notification to the user

### Static Content Flow

1. Express server serves the built Vite application
2. React Router handles client-side routing
3. Components load content from constants or fetch from API when needed

## External Dependencies

### Frontend Dependencies

1. **UI Framework**:
   - React
   - TailwindCSS for styling
   - Shadcn UI / Radix UI for accessible components

2. **Animation & Effects**:
   - Framer Motion for animations
   - Confetti-js for celebration effects

3. **Data Management**:
   - React Query for API data fetching
   - Zod for data validation

### Backend Dependencies

1. **Server Framework**:
   - Express.js

2. **Database**:
   - Neon Serverless PostgreSQL
   - Drizzle ORM
   - WebSockets for Neon database connection

3. **Development Tools**:
   - TypeScript
   - ESBuild for bundling

## Deployment Strategy

The application is configured for deployment on Replit:

1. **Build Process**:
   - Frontend built using Vite (`vite build`)
   - Backend bundled using ESBuild
   - Output files placed in `dist` directory

2. **Development Mode**:
   - Dev server started with `npm run dev`
   - Uses Vite's development server with HMR

3. **Production Mode**:
   - Static assets served from `dist/public`
   - Server runs from `dist/index.js`

4. **Environment Configuration**:
   - Database URL stored in environment variable
   - NODE_ENV determines production/development mode

5. **Replit-Specific Configuration**:
   - `.replit` file for Replit configuration
   - Deployment target set to "autoscale"
   - Port 5000 mapped to external port 80

## Authentication and Authorization

The application includes a users schema, suggesting authentication capabilities, but the implementation appears minimal in the current codebase. The schema includes:

- User model with username and password fields
- Insert user schema with Zod validation

A more robust authentication system would typically be implemented using:
- Password hashing
- JWT or session-based authentication
- Middleware for protected routes

## Future Considerations

1. **Security Enhancements**:
   - Implement proper password hashing
   - Add CSRF protection
   - Implement rate limiting

2. **Scalability**:
   - Consider caching strategies
   - Optimize database queries
   - Implement proper connection pooling

3. **Feature Expansion**:
   - User authentication and profiles
   - Progress tracking for workshop participants
   - Admin dashboard for content management