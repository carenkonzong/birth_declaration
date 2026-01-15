# Birth Declaration (React + TypeScript)

A portfolio web application that simulates an online birth declaration workflow.  
Users can create a birth declaration through a multi-step form, save it, and track its status from submission to approval.

This project was built primarily to practice **large form handling**, **client-side validation**, and **clean React application structure**.  
A mock backend (JSON Server) is used so the focus stays on front-end architecture and data flow.

---

## Features

- Multi-step birth declaration form (child, parents, declarant)
- Save and retrieve declarations
- Status tracking: **draft**, **pending**, **approved**, **rejected**
- Dashboard summary cards by status
- Declaration list with search and filtering
- Detailed declaration view
- Responsive layout (desktop & mobile)

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **React Hook Form**
- **Yup**
- **Tailwind CSS**
- **Radix UI / shadcn-style components**
- **JSON Server** (mock REST API)

---

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
- **npm**

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

## Key Technical Decisions

**React Hook Form**  
I chose React Hook Form because the declaration form is large and multi-step.  
Using uncontrolled inputs helped keep re-renders low and made the form logic easier to manage as the number of fields grew.

**Yup instead of Zod**  
At the time of building this project, Yup had more straightforward integration with React Hook Form for my use case.  
It allowed me to define validation rules quickly without adding extra boilerplate.

**JSON Server**  
JSON Server was used to prototype the full flow without spending time on backend setup.  
All API calls go through a small service layer, so replacing it with a real backend would not require refactoring the UI.

## Data Model

The application centers around a single main entity: a **birth declaration**.  
Each declaration groups all information needed to follow the declaration from creation to approval.

### Declaration Schema

```typescript
{
  id: string,
  declarationId: string,
  submittedAt: string,
  status: "draft" | "pending" | "approved" | "rejected",
  child: {
    firstName: string,
    lastName: string,
    gender: "Male" | "Female",
    dateOfBirth: string,
    cityOfBirth:  string,
    timeOfBirth: string
  },
  father: ParentProfile,
  mother: ParentProfile,
  declarant:  {
    fullName: string,
    relationshipToChild: string,
    email: string,
    phone: string,
    addInfo?: string
  }
}
```

The model was kept intentionally explicit to avoid implicit assumptions and make validation easier at the form level.
Full TypeScript definitions are available in src/types/

## Future Enhancements

This project is **still actively being worked on**.  
The next improvements I am focusing on are features that introduce real-world constraints, security, and workflow complexity, including:

- **Authentication** — login for parents, clerks, and administrators
- **Role-based access control** — different permissions for declarants vs. government staff
- **File uploads** — supporting documents such as IDs and hospital records
- **Notifications** — email or SMS alerts when a declaration status changes
- **PDF generation** — export a completed declaration as an official document
- **Payments** — fees for expedited processing
- **Admin workflow** — review and approval interface for clerks
- **Audit logging** — traceability of changes for compliance
- **Multi-language support** — English / French
- **Dark mode** — user preference toggle

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact & Connect

**CarenKonzong**

- GitHub: [@carenkonzong](https://github.com/carenkonzong)
- Email: tsafackedwin@gmail.com
- LinkedIn: www.linkedin.com/in/edwinnkonzong-184328347
- Portfolio: -

---

### About This Project

I built this project to practice designing a structured, form-heavy application similar to what is commonly found in government or enterprise systems.

The focus was on:

- managing complex form state

- keeping data models explicit and type-safe

- organizing a React codebase for readability and maintainability

This is a demonstration project. Data is stored locally using JSON Server and resets on server restart.
A production version would require authentication, a real database, server-side validation, and compliance with privacy regulations.
