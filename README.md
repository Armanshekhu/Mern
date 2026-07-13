# MERN Learning Workspace

A collection of hands-on web-development exercises and React projects created while learning the MERN stack. The repository currently focuses on HTML, CSS, JavaScript, and React fundamentals.

> Note: MongoDB, Express, and Node/Express backend projects have not been added yet.

## Contents

```
Prep/
├── Practice/        # JavaScript basics: callbacks and promises
├── ToDoList/        # Browser-based todo-list exercise
├── FetchData/       # Fetch API practice
├── Portfolio/       # Static portfolio page
└── React/
    ├── demo/        # Vite + React counter application
    └── react-app/   # Vite + React hooks and component practice
```

## Projects

### JavaScript exercises

- **Practice** — introductory HTML, CSS, callbacks, and promises.
- **ToDoList** — add todo items with a title and description in the browser.
- **FetchData** — Fetch API experiment using a posts endpoint.
- **Portfolio** — a static HTML/CSS/JavaScript portfolio page.

Open the relevant `index.html` file in a browser to view a static exercise.

### React applications

Both React projects use Vite, React 19, and npm.

| Project | Description | Directory |
| --- | --- | --- |
| React Counter | Increment, decrement, and reset counter controls. | `Prep/React/demo` |
| React Practice | Component hierarchy and React hook experiments. | `Prep/React/react-app` |

## Run a React project

1. Open a terminal in one of the React project folders:

   ```powershell
   cd Prep\React\demo
   # or
   cd Prep\React\react-app
   ```

2. Install dependencies:

   ```powershell
   npm install
   ```

3. Start the development server:

   ```powershell
   npm run dev
   ```

4. Open the local URL shown by Vite in your browser.

## Available npm scripts

Run these from either React project directory:

```powershell
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build
npm run lint     # Run oxlint
```

## Technology

- HTML5 and CSS3
- JavaScript (ES6+)
- React
- Vite
- npm

## Next steps

- Add an Express/Node.js API.
- Connect the API to MongoDB.
- Replace the local todo-list state with persisted data.
- Add environment-variable configuration and deployment documentation.
