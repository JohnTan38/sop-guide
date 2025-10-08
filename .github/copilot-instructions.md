# Copilot Instructions for sop-guide

## Repository Overview

**Purpose**: This is a Next.js web application that serves as an interactive SOP (Standard Operating Procedure) guide for the ESKER invoice processing system. It provides documentation and workflows for user management, invoice processing automation, and master data operations.

**Tech Stack**:
- **Framework**: Next.js 15.5.2 with App Router
- **Runtime**: Node.js v20.19.5+
- **Language**: TypeScript 5+
- **UI**: React 19.1.0 with Tailwind CSS v4
- **Icons**: lucide-react (v0.542.0)
- **Build Tool**: Turbopack (Next.js built-in)

**Repository Size**: Small (~5 source files, 676 lines in main page component)

## Critical Build Information

### Prerequisites
Always run `npm install` before any build or development commands:
```bash
npm install
```

### Development Server
Start the development server (works reliably):
```bash
npm run dev
# Server starts on http://localhost:3000
# Ready time: ~1 second
```

**Important**: The dev server works WITHOUT network access (fonts load from cache). This is the preferred way to validate changes.

### Build Command
The build command is configured with `--turbopack` flag:
```bash
npm run build
```

**CRITICAL BUILD ISSUE**: The build will FAIL in environments without internet access due to Google Fonts loading. This is a known limitation:
- Error: `Failed to fetch 'Geist' from Google Fonts`
- Error: `Failed to fetch 'Geist Mono' from Google Fonts`
- **Workaround**: Use `npm run dev` to validate changes instead of builds in restricted networks
- The build works fine in production environments with internet access

### Linting
ESLint is configured with Next.js and TypeScript rules:
```bash
npm run lint
```

**Expected Warnings**: The linter currently shows 4 warnings about using `<img>` instead of `<Image />` from next/image. These are pre-existing and acceptable.

### Production Start
After a successful build:
```bash
npm start
```

## Project Structure

### Key Directories
```
/home/runner/work/sop-guide/sop-guide/
├── src/
│   └── app/                 # Next.js App Router directory
│       ├── page.tsx        # Main application (676 lines, all SOP content)
│       ├── layout.tsx      # Root layout with font configuration
│       └── globals.css     # Tailwind CSS imports and theme
├── public/                  # Static assets (images, SVGs)
├── .github/                 # GitHub configuration (this file)
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration (minimal)
├── postcss.config.mjs      # PostCSS with Tailwind plugin
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

### Source Files (all in src/app/)
1. **page.tsx** - Main application component (client-side, 676 lines)
   - Contains all SOP data structures and UI logic
   - Implements search, navigation, and PDF export
   - Uses lucide-react icons (Search, Download, FileText, Users, Lock, Key, Activity, Database)
   
2. **layout.tsx** - Root layout component
   - Configures Geist and Geist Mono fonts from Google Fonts
   - Sets metadata: title "ESKER SOP App", description "Built with Next JS"
   
3. **globals.css** - Global styles
   - Imports Tailwind CSS
   - Defines theme variables
   - Font family fallback: Arial, Helvetica, sans-serif

### Configuration Files
- **eslint.config.mjs**: Uses Next.js presets (core-web-vitals, TypeScript), ignores node_modules, .next, out, build
- **tsconfig.json**: Strict mode enabled, paths alias `@/*` → `./src/*`
- **next.config.ts**: Empty/minimal configuration
- **postcss.config.mjs**: Tailwind CSS v4 PostCSS plugin

### No Test Suite
There are NO test files or test scripts configured. Do not attempt to run tests.

## Making Code Changes

### Where to Edit
- **All SOP content and UI**: Edit `src/app/page.tsx`
- **Metadata, fonts, or layout**: Edit `src/app/layout.tsx`  
- **Global styles or theme**: Edit `src/app/globals.css`
- **Build configuration**: Edit `next.config.ts` (rarely needed)
- **Linting rules**: Edit `eslint.config.mjs`

### Development Workflow
1. **Always run `npm install` first** (if dependencies changed or fresh clone)
2. Edit source files in `src/app/`
3. Run `npm run dev` to start development server
4. Open http://localhost:3000 to view changes (hot reload enabled)
5. Run `npm run lint` to check for issues
6. In environments with internet access, optionally run `npm run build` to verify production build

### Important Notes
- **Client Components**: page.tsx uses "use client" directive (required for useState and interactivity)
- **TypeScript**: All components are TypeScript (.tsx), strict mode is enabled
- **Styling**: Uses Tailwind CSS v4 with inline theme configuration in globals.css
- **Icons**: Import from 'lucide-react', already included
- **Images**: Currently uses `<img>` tags (lint warnings are acceptable), alternatively use next/image

## Common Issues & Workarounds

### Google Fonts Build Failure
**Problem**: Build fails with "Failed to fetch fonts from Google Fonts"
**Cause**: No internet access to fonts.googleapis.com
**Solution**: Use `npm run dev` for validation instead. Build works in production with internet.

### ESLint Warnings About Images
**Problem**: Warnings about using `<img>` instead of `<Image />`
**Status**: Pre-existing, acceptable warnings
**Fix (if needed)**: Import `Image` from 'next/image' and replace `<img>` tags

## Git and GitHub

### .gitignore
Excludes: node_modules, .next/, out/, build/, .env*, .DS_Store, *.tsbuildinfo, next-env.d.ts

### No CI/CD
There are currently NO GitHub Actions workflows or CI/CD pipelines configured.

## Additional Context

### Application Features
The SOP guide application includes:
- User management procedures (create, lock/unlock, reset password)
- ESKER invoice processing system overview and workflow diagrams
- Master data export/import guidelines
- Interactive search and navigation
- Print/PDF export functionality
- SVG workflow diagrams embedded in JSX

### Dependencies to Know
- **next**: Framework (15.5.2)
- **react** & **react-dom**: UI library (19.1.0)
- **lucide-react**: Icon library (0.542.0)
- **tailwindcss**: Styling (@4.x)
- **typescript**: Type checking (^5)

### Performance Notes
- Dev server ready time: ~1 second
- npm install time: ~20 seconds
- The application is a single-page app (SPA) with client-side routing

## Instructions for Agents

**Always trust these instructions first**. Only perform additional searches if:
1. The information here is incomplete or unclear
2. You encounter errors not documented here
3. You need to understand specific code logic not covered here

**Key reminders**:
- Run `npm install` before any commands in a fresh environment
- Use `npm run dev` for validation (works without internet)
- Don't attempt to run tests (none exist)
- Don't try to build in restricted networks (will fail on fonts)
- Lint warnings about `<img>` tags are pre-existing and acceptable
- All main code is in `src/app/page.tsx` (676 lines)
