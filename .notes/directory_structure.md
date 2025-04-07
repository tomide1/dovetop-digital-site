# Dovetop Digital Site - Directory Structure

> Last updated: 2025-03-07 16:35:25

This document provides an overview of the project's directory structure.

## Directory Overview

```
  │   .git
  │   .next
  │   .notes
  │   .vscode
  │   app
  │     │   (auth)
  │     │     │   reset-password
  │     │     │   signin
  │     │     │   signup
  │     │   (default)
  │     │   api
  │     │     │   hello
  │     │   css
  │     │     │   additional-styles
  │   components
  │     │   craco
  │     │   ui
  │   node_modules
  │   notes
  │   public
  │     │   images
```

## Key Directories Explained

- **app/**: Next.js app router with route groups
  - **(auth)/**: Authentication and login related pages
  - **(default)/**: Main website pages
- **components/**: React components organized by functionality
  - **ui/**: Core UI elements like header, footer, and logo
  - **craco/**: Custom form and feature-related components
- **public/**: Static assets served by Next.js

  - **images/**: Image assets for the website

- **.notes/**: Project documentation and notes

## File Structure Notes

- The project uses Next.js App Router structure
- Component organization follows a flat hierarchy with domain-specific subfolders
- Styling is primarily handled by Tailwind CSS
