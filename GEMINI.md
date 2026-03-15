# LexVu Project Overview

LexVu is a React-based web application designed for a legal services company. It provides information about their paralegal, Intellectual Property (IP), and custom legal solutions.

## Architecture and Technologies

-   **Framework:** React 19 (using Vite for build and development)
-   **Routing:** React Router v7
-   **Styling:** Vanilla CSS with a centralized variable system (`src/styles/variables.css`). Each component typically has its own CSS file in `src/styles/`.
-   **Email Integration:** `@emailjs/browser` for handling contact form submissions.
-   **Hosting:** GitHub Pages (`gh-pages` package used for deployment).
-   **Icons/Images:** Custom assets located in `src/assets/stockimages/` and `public/`.

## Project Structure

-   `src/components/`: Contains all React components, including page-level components and smaller UI parts.
-   `src/styles/`: Contains all CSS files.
-   `src/assets/`: Contains images and videos used in the application.
-   `src/data/`: Contains static data, such as blog posts (`blogs.js`).
-   `index.html`: Main entry point for the browser.
-   `src/main.jsx`: React entry point.
-   `src/App.jsx`: Main application component with routing logic.

## Building and Running

### Development
To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```

### Production Build
To create a production-ready build:
```bash
npm run build
```
Note: The build script also copies `index.html` to `404.html` to support client-side routing on GitHub Pages.

### Deployment
To deploy the application to GitHub Pages:
```bash
npm run deploy
```

### Linting
To check for code style and potential errors:
```bash
npm run lint
```

## Development Conventions

-   **Component Structure:** Prefer functional components and hooks.
-   **Styling:** Use CSS variables from `variables.css` for consistent colors and fonts.
-   **Routing:** New pages should be added as routes in `src/App.jsx`.
-   **Linting:** ESLint is configured to enforce standard React and Vite practices. Note that `no-unused-vars` allows variables starting with an uppercase letter (likely for React components).
-   **Assets:** Place new images in `src/assets/stockimages/` and reference them using relative paths in components.
