# Project Overview
This is a full-stack JavaScript application migrated from Lovable to Replit. The application uses a modern web stack with React frontend and Express backend.

## Technology Stack
- **Frontend**: React, Wouter (routing), Tailwind CSS, shadcn/ui components
- **Backend**: Express.js with TypeScript
- **Storage**: In-memory storage (MemStorage)
- **Build**: Vite for development and production builds
- **UI Components**: shadcn/ui component library

## Project Architecture
- **client/**: React frontend application
  - `src/pages/`: Page components (Index, NotFound)
  - `src/components/`: UI components (Hero, FAQ, Footer, etc.)
  - `src/components/ui/`: shadcn/ui components
- **server/**: Express backend
  - `index.ts`: Main server entry point
  - `routes.ts`: API route definitions
  - `storage.ts`: In-memory storage interface
  - `vite.ts`: Vite development server setup
- **shared/**: Shared types and schemas between frontend and backend
  - `schema.ts`: Drizzle ORM schemas and Zod validation

## Recent Changes (Migration)
- **2025-01-17**: Migrated routing from react-router-dom to wouter for Replit compatibility
- **2025-01-17**: Installed missing dependencies (react-router-dom, sonner)
- **2025-01-17**: Fixed import issues and established proper client/server separation

## User Preferences
- Follow fullstack_js development guidelines
- Use wouter for frontend routing instead of react-router-dom
- Maintain security best practices with proper client/server separation
- Use in-memory storage unless specifically requested to use database

## Development Notes
- Server runs on port 5000 (only exposed port on Replit)
- Vite configuration handles both development and production builds
- Uses Express middleware for API logging and error handling
- All API routes should be prefixed with `/api`

## Current Status
Application successfully migrated and running on Replit environment.