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

## Recent Changes (Migration & Deployment)
- **2025-01-17**: Migrated routing from react-router-dom to wouter for Replit compatibility
- **2025-01-17**: Installed missing dependencies (react-router-dom, sonner)
- **2025-01-17**: Fixed import issues and established proper client/server separation
- **2025-01-18**: Added comprehensive Netlify deployment setup:
  - Enhanced index.html with SEO metadata, Open Graph tags, structured data
  - Created netlify.toml configuration with build settings and redirects
  - Added _redirects file for SPA routing support
  - Created sitemap.xml and updated robots.txt
  - Added manifest.json for PWA features
  - Created .env.example for environment variable documentation

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

## Netlify Deployment Setup
The project is now fully configured for Netlify deployment:

### Files Created for Deployment:
- `client/index.html`: Enhanced with comprehensive SEO metadata, Open Graph tags, Twitter cards, and structured data
- `netlify.toml`: Build configuration, redirects, security headers, and caching rules
- `client/public/_redirects`: SPA routing support (`/* /index.html 200`)
- `client/public/sitemap.xml`: Search engine sitemap
- `client/public/robots.txt`: Updated with sitemap reference
- `client/public/manifest.json`: PWA manifest for app-like features
- `.env.example`: Environment variables documentation

### Deployment Instructions:
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist/public`
4. The netlify.toml file will handle all other configuration automatically

### SEO Features Included:
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Sitemap for search engine indexing
- PWA manifest for mobile app-like experience

## Current Status
Application successfully migrated and running on Replit environment. Fully configured for Netlify deployment with comprehensive SEO optimization.