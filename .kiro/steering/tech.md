# Technology Stack & Build System

## Architecture Overview

Serverless architecture on Google Cloud Platform (GCP) with Firebase integration for scalability, security, and ease of maintenance.

## Frontend Stack

- **Framework**: React 18.2.0 with TypeScript
- **Styling**: Tailwind CSS 3.2.0 with custom design system
- **Routing**: React Router DOM 6.4.0
- **Forms**: React Hook Form 7.38.0
- **Animation**: Framer Motion 7.6.0
- **SEO**: React Helmet Async 1.3.0
- **HTTP Client**: Axios 1.1.3
- **Testing**: Jest, React Testing Library, Cypress 13.6.0

## Backend Stack

- **Runtime**: Node.js 18
- **Platform**: Firebase Cloud Functions 4.1.0
- **Framework**: Express.js 4.18.2
- **Database**: Google BigQuery 6.2.0
- **Storage**: Google Cloud Storage 6.5.2
- **Email**: SendGrid 7.7.0
- **Security**: Helmet 6.0.0, CORS 2.8.5
- **Validation**: Joi 17.7.0
- **Testing**: Jest 29.3.1, ts-jest 29.0.3

## Infrastructure

- **IaC**: Terraform >= 1.3.0
- **Cloud Provider**: Google Cloud Platform
- **Hosting**: Firebase Hosting with global CDN
- **DNS**: Cloud DNS
- **SSL**: Google-managed SSL certificates
- **Security**: Cloud Armor with DDoS protection
- **Monitoring**: Cloud Logging, Cloud Monitoring

## Development Tools

- **Node Version**: 18.18.0 (specified in .nvmrc)
- **Package Manager**: npm with package-lock.json
- **TypeScript**: 4.4.2+ with strict mode enabled
- **Build Tool**: React Scripts 5.0.1
- **Linting**: ESLint with React app configuration

## Common Commands

### Frontend Development
```bash
cd frontend
npm install          # Install dependencies
npm start           # Start development server (port 3000)
npm run build       # Build for production
npm test            # Run tests
npm run cypress:open # Open Cypress testing
```

### Backend Development
```bash
cd functions
npm install          # Install dependencies
npm run build       # Compile TypeScript
npm run serve       # Start Firebase emulators
npm run deploy      # Deploy to Firebase
npm test            # Run Jest tests
```

### Infrastructure
```bash
cd terraform
terraform init      # Initialize Terraform
terraform plan      # Plan infrastructure changes
terraform apply     # Apply infrastructure changes
```

### Firebase Commands
```bash
firebase login      # Authenticate with Firebase
firebase init       # Initialize Firebase project
firebase deploy     # Deploy all services
firebase emulators:start # Start local emulators
```

## Path Aliases (TypeScript)

- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/pages/*` → `src/pages/*`
- `@/hooks/*` → `src/hooks/*`
- `@/utils/*` → `src/utils/*`
- `@/types/*` → `src/types/*`
- `@/services/*` → `src/services/*`

## Environment Requirements

- Node.js 18.18.0
- Firebase CLI (global install)
- Google Cloud SDK
- Terraform >= 1.3.0
- GCP Project with billing enabled