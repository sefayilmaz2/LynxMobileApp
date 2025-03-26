# Todo App with Lynx Framework

This is a ReactLynx project bootstrapped with `create-rspeedy`.

## Overview

This Todo application provides a clean and intuitive interface for managing daily tasks. Built with Lynx Framework, it offers a smooth mobile-first experience with features like user authentication, task creation, completion tracking, and task deletion.

## Features

- User Authentication (Login/Logout)
- Task Management (Add, Delete, Toggle completion)
- Modern UI with gradient background
- Toast notifications for actions
- Responsive design
- Mobile-friendly interface

## Technology Stack

- **Framework**: Lynx Framework
- **Language**: TypeScript
- **Styling**: CSS with Flexbox

## Project Structure
```bash
src/
├── assets/
│ ├── arrow.png
│ ├── lynx-logo.png
│ └── read-logo.png
├── components/
│ └── Toast.tsx
├── navigation/
│ └── useNavigate.ts
├── screens/
│ ├── HomeScreen.tsx
│ └── LoginScreen.tsx
├── App.css
├── App.tsx
└── index.tsx
```


## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Scan the QRCode in the terminal with your LynxExplorer App to see the result.

You can start editing the page by modifying `src/App.tsx`. The page auto-updates as you edit the file.

## Usage

1. Launch the application
2. Log in with your credentials
3. Add new tasks using the input field
4. Mark tasks as complete by clicking the checkbox
5. Delete tasks using the delete button
6. Log out when finished

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Acknowledgments

- Built with Lynx Framework
- Inspired by modern mobile application design
- Uses gradient design patterns for enhanced UI

---

For more information about Lynx Framework and its capabilities, visit the official documentation.
