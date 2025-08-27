# Project Structure & Organization

## Root Directory Layout

```
Kamdata_website-development/
├── frontend/           # React TypeScript application
├── functions/          # Firebase Cloud Functions (Node.js/TypeScript)
├── terraform/          # Infrastructure as Code
├── bigquery/           # BigQuery schemas and queries
├── .nvmrc             # Node.js version specification
├── activate-env.ps1   # PowerShell environment activation
└── README.md          # Project documentation
```

## Frontend Structure (`frontend/`)

```
frontend/
├── public/
│   ├── index.html     # Main HTML template
│   ├── sitemap.xml    # SEO sitemap
│   └── robots.txt     # Search engine directives
├── src/
│   ├── components/    # Reusable React components
│   ├── pages/         # Page-level components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API and external service integrations
│   ├── types/         # TypeScript type definitions
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   ├── index.tsx      # Application entry point
│   └── index.css      # Global styles
├── build/             # Production build output
├── package.json       # Dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── postcss.config.js  # PostCSS configuration
```

## Backend Structure (`functions/`)

```
functions/
├── src/
│   ├── config/        # Configuration files
│   ├── handlers/      # HTTP request handlers
│   ├── services/      # Business logic services
│   └── index.ts       # Cloud Functions entry point
├── lib/               # Compiled JavaScript output
├── package.json       # Dependencies and scripts
└── tsconfig.json      # TypeScript configuration
```

## Infrastructure Structure (`terraform/`)

```
terraform/
└── main.tf           # Main Terraform configuration
```

## Routing Structure

The application follows this URL structure:

- `/` - Homepage (Inicio)
- `/servicios` - Services overview
  - `/servicios/conferencias` - Conferences
  - `/servicios/talleres` - Workshops
  - `/servicios/mentoria-grupal` - Group Mentoring
  - `/servicios/mentoria-individual` - Individual Mentoring
  - `/servicios/nexo-estrategico` - Strategic Nexus
- `/metodo-dance` - DANCE Methodology
- `/sobre-kamdata` - About Kamdata
- `/casos-exito` - Success Cases
- `/blog` - Blog posts
- `/contacto` - Contact page

## Component Organization Patterns

### Components Directory Structure
```
components/
├── Layout/           # Layout components (Header, Footer, etc.)
├── UI/              # Basic UI components (Button, Input, etc.)
├── Forms/           # Form-specific components
├── Navigation/      # Navigation-related components
└── Sections/        # Page section components
```

### Naming Conventions

- **Components**: PascalCase (e.g., `ContactForm.tsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Directories**: PascalCase for component folders
- **CSS Classes**: Tailwind utility classes, kebab-case for custom classes

## Data Layer Organization

### BigQuery Tables
- `contact_submissions` - Contact form submissions
- `blog_posts` - Blog content management
- `user_analytics` - User behavior tracking

### Services Structure
- API calls organized by domain (analytics, contact, blog)
- Centralized error handling
- Type-safe request/response interfaces

## Development Workflow

1. **Frontend Development**: Work in `frontend/src/`
2. **Backend Development**: Work in `functions/src/`
3. **Infrastructure Changes**: Modify `terraform/main.tf`
4. **Testing**: Use respective test directories in each module

## File Naming Standards

- React components: `ComponentName.tsx`
- Hooks: `useHookName.ts`
- Services: `serviceName.ts`
- Types: `typeName.ts`
- Utils: `utilityName.ts`
- Tests: `fileName.test.ts` or `fileName.spec.ts`

## Import Organization

Follow this import order:
1. React and external libraries
2. Internal components (using path aliases)
3. Types and interfaces
4. Utilities and helpers
5. Relative imports

## Environment Configuration

- Development: Local Firebase emulators
- Staging: Firebase project staging environment
- Production: Firebase project production environment
- Infrastructure: Managed via Terraform state