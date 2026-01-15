# Birth Declaration System

A modern web application designed to streamline the birth registration process for Canadian citizens. Built to replace legacy paper-based systems, this platform allows parents to submit birth declarations online, track application status, and manage their documents efficiently.

## Overview

I developed this project to demonstrate front-end development capabilities using modern React architecture. The system handles the complete lifecycle of birth declarations from initial submission through approval. While it currently uses JSON Server for the backend, the architecture is designed to scale to a production-grade API.

### The Problem It Solves

Birth registration is a critical administrative process, but traditional systems involve lengthy paperwork and in-person visits. This application digitizes the entire process, allowing parents to:

- Submit birth declarations without having to leave the confort of their home
- Track application status in real-time
- Store and retrieve declaration records
- Reduce processing time for government clerks

### Core Functionality

- **Multi-step Declaration Forms**: Structured forms collecting child, parent, and declarant information with real-time validation
- **Status Tracking**: Monitor applications through draft, pending, approved, and rejected states
- **Dashboard Overview**: Visual summary cards showing declaration counts by status
- **Detailed View**: Individual declaration pages displaying complete submission details
- **Search & Filter**: Find declarations by status, date, or child name
- **Responsive Design**: Fully functional on desktop, tablet, and mobile devices

### Technical Highlights

- **Type-Safe Development**: Comprehensive TypeScript interfaces for all data structures
- **Form Validation**: Yup schema validation integrated with React Hook Form for robust error handling
- **Component Architecture**: Reusable UI components built with Radix UI primitives
- **Custom Hooks**: Encapsulated business logic in `useDeclarations` hook for cleaner component code
- **Routing**: React Router v7 with dynamic routes for declaration details
- **Modern Styling**: Tailwind CSS v4 with custom gradient designs and smooth animations

## Tech Stack

### Frontend

- **React 19** - Latest React features including improved server components support
- **TypeScript 5.9** - Static typing for enhanced code reliability
- **Vite** - Lightning-fast build tool and dev server
- **React Router v7** - Client-side routing with nested layouts
- **React Hook Form** - Performant forms with minimal re-renders
- **Yup** - Schema-based form validation

### UI/UX

- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives (Dialog, Popover)
- **Lucide React** - Beautiful, consistent icon system
- **Custom Components** - Built using shadcn/ui patterns for consistency

### Backend (Development)

- **JSON Server** - RESTful API mock server
- **Fetch API** - Native HTTP requests with proper error handling

## Project Structure

```
birth_declaration/
├── src/
│   ├── Pages/                    # Route components
│   │   ├── Dashboard. tsx         # Main dashboard with overview cards
│   │   ├── New_declaration_page2.tsx  # Multi-section birth declaration form
│   │   └── Declaration_detail.tsx     # Individual declaration view
│   ├── components/               # Reusable UI components
│   │   ├── All_declarations.tsx  # Searchable declaration list
│   │   ├── Card_parent.tsx       # Status summary cards
│   │   ├── Top_bar.tsx           # Navigation header with search
│   │   ├── Sidebar.tsx           # Side navigation panel
│   │   └── ui/                   # Radix UI wrapper components
│   ├── hooks/
│   │   └── use-declarations/     # Custom hook for data fetching
│   ├── services/
│   │   └── index.ts              # API service layer
│   ├── types/                    # TypeScript type definitions
│   │   ├── Declaration.ts        # Core declaration type
│   │   └── Profile.ts            # Child, parent, declarant types
│   ├── routes/                   # Route configuration
│   ├── config/
│   │   └── env.ts                # Environment variables
│   └── lib/
│       └── utils.ts              # Utility functions (classname merging)
├── Database/
│   └── db.json                   # Mock database with sample declarations
└── public/                       # Static assets
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/carenkonzong/birth_declaration.git

# Navigate to project directory
cd birth_declaration

# Install dependencies
npm install
```

### Running Locally

You need to run both the frontend and backend servers:

```bash
# Terminal 1: Start Vite development server
npm run dev
```

```bash
# Terminal 2: Start JSON Server (mock API)
npm run server
```

The application will be available at:

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8080
