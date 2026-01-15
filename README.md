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
