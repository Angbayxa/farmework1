# AI Coding Agent Instructions for Angular Summer 26 Project

## Project Overview

**Tech Stack**: Angular 20, TypeScript 5.8, Standalone Components, JSON Server (local API mock)

This is an **Angular SPA (Single Page Application)** educational project using modern standalone API (no NgModules). The app provides a minimal routing setup with a local JSON-based database for development.

## Architecture

### Core Structure
- **[src/app/app.ts](app.ts)**: Root component using standalone API with RouterOutlet
- **[src/app/app.routes.ts](app.routes.ts)**: Route definitions (currently empty - routes need to be added here)
- **[src/app/app.config.ts](app.config.ts)**: Application-level providers including router configuration
- **[src/main.ts](main.ts)**: Bootstrap entry point using `bootstrapApplication()`

### Styling
- Global styles in [src/styles.css](src/styles.css)
- Component-scoped styles in individual `.css` files (paired with component files)
- Prettier configured for Angular HTML templates

### Data Layer
- **db.json**: Local JSON database (managed by `json-server` and `json-server-auth`)
- Run mock API with: `npm run db`
- API runs on `http://localhost:3000` by default
- Supports authentication via `json-server-auth` package

### Key Dependencies
- **@angular/core@20**: Core framework (standalone components)
- **@angular/router**: Client-side routing
- **@angular/forms**: Form handling
- **rxjs@7.8**: Reactive programming (observables)
- **json-server@0.17**: Mock REST API for development
- **notyf@3.10**: Toast notification library
- **Prettier**: Code formatting with Angular HTML parser

## Development Workflow

### Prerequisites
```bash
npm install
```

### Running the Application
- **Development server**: `npm run dev` or `npm start` (port 4200)
- **Mock API**: `npm run db` (port 3000)
- **Watch mode builds**: `npm run watch`

### Common Commands
- **Build**: `npm run build` (production-optimized, stores artifacts in `dist/`)
- **Tests**: `npm test` (Karma + Jasmine framework)
- **Generate component**: `ng generate component feature-name` → creates in `src/app/`

### Build Budgets
Production builds enforce strict size limits:
- Initial bundle: 500kB warning / 1MB error
- Per-component styles: 4kB warning / 8kB error

## Project-Specific Conventions

### Standalone Components Pattern
All components use the standalone API:
```typescript
@Component({
  selector: 'app-component-name',
  imports: [CommonModule, FormsModule],  // Explicit imports required
  templateUrl: './component-name.html',
  styleUrl: './component-name.css',
})
export class ComponentName {}
```

**Key Point**: Standalone components require explicit `imports` array - no shared module declarations.

### Routes Structure
Routes are declared in [src/app/app.routes.ts](src/app/app.routes.ts) and passed to `provideRouter()` in [src/app/app.config.ts](src/app/app.config.ts).

### Component Naming
- Files: kebab-case (e.g., `feature-name.component.ts`, `feature-name.html`)
- Classes: PascalCase (e.g., `FeatureNameComponent`)
- Selectors: kebab-case with `app-` prefix (e.g., `<app-feature-name>`)

### TypeScript Configuration
- Target: Modern browsers only
- Strict mode enabled in [tsconfig.json](tsconfig.json)
- App-specific config in [tsconfig.app.json](tsconfig.app.json)
- Test-specific config in [tsconfig.spec.json](tsconfig.spec.json)

## API Integration

### JSON Server Setup
- Database file: [db.json](db.json)
- Authentication: Handled by `json-server-auth` package
- Resources are exposed as REST endpoints matching JSON structure

### Typical HTTP Integration Pattern
Services should:
1. Use Angular's `HttpClient` (inject via dependency injection)
2. Communicate with `http://localhost:3000/` endpoints during development
3. Return typed Observables from RxJS

Example services typically reside in `src/app/services/` (create as needed).

## Notifications

The project includes **Notyf** for toast notifications:
```typescript
import { Notyf } from 'notyf';
const notyf = new Notyf();
notyf.success('Success message');
notyf.error('Error message');
```

Include Notyf CSS in [src/styles.css](src/styles.css) as needed.

## State & Best Practices

- **No state management library**: Use services with RxJS Subjects/BehaviorSubjects for simple state
- **Global error handling**: Configured via `provideBrowserGlobalErrorListeners()` in app config
- **Code formatting**: Run Prettier with Angular HTML parser before commits
- **Testing**: Use Jasmine + Karma (configured in [angular.json](angular.json))

## When Adding New Features

1. **Components**: Generate with `ng generate component` → auto-creates in `src/app/`
2. **Services**: Create in `src/app/services/` with typed responses
3. **Routes**: Add to [src/app/app.routes.ts](src/app/app.routes.ts)
4. **Styles**: Keep component CSS scoped (paired `.css` files)
5. **Types**: Define in separate `.model.ts` or `.types.ts` files as project grows

## Files to Never Edit Without Reason
- `tsconfig.json`, `tsconfig.app.json` - TypeScript build configuration
- `angular.json` - Build architect configuration (modify only for special build needs)
- `package.json` - Use `npm install` for dependency changes
