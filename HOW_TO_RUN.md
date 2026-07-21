# 🚀 How to Run this Project

This guide provides step-by-step instructions to set up, run, build, and troubleshoot the **Aman Javed Portfolio** project (Next.js 15 + React 19 + Tailwind CSS).

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed on your machine:
- **Node.js**: `v18.17.0` or higher (v20+ recommended). [Download Node.js](https://nodejs.org/)
- **Package Manager**: `npm` (comes with Node.js) or `yarn` / `pnpm` / `bun`

---

## 🛠️ Step-by-Step Setup & Run Guide

### 1. Install Dependencies

Install all required NPM packages:

```bash
npm install
```

> **Note:** If you encounter dependency conflicts, you can use `npm install --legacy-peer-deps`.

---

### 2. Configure Environment Variables (Optional)

Check the `.env` file in this directory. Update any environment variables if needed:

```env
NEXT_PUBLIC_SITE_URL=https://amanjaved7327.builtwithrocket.new
# Add or update API keys if using Supabase, OpenAI, Gemini, etc.
```

---

### 3. Run the Development Server

Start the Next.js local development server:

```bash
npm run dev
```

Once started, open your browser and navigate to:
👉 **[http://localhost:4028](http://localhost:4028)**

---

## 📦 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server on port **4028** with hot reloading |
| `npm run build` | Builds an optimized production bundle in `.next/` |
| `npm run serve` | Runs the compiled production build (after running `npm run build`) |
| `npm run start` | Alias for `npm run dev` (runs dev server on port 4028) |
| `npm run type-check` | Runs TypeScript type checking without emitting files |
| `npm run lint` | Checks code quality and syntax using ESLint |
| `npm run lint:fix` | Automatically fixes ESLint errors where possible |
| `npm run format` | Formats all source code with Prettier |

---

## 🏗️ Building for Production

To test or deploy the production build locally:

1. **Build the application:**
   ```bash
   npm run build
   ```

2. **Serve the production app:**
   ```bash
   npm run serve
   ```

---

## 🔍 Troubleshooting & Common Issues

### Issue 1: Port 4028 is already in use
If port `4028` is in use by another application:
- Run with a custom port:
  ```bash
  npx next dev -p 3000
  ```

### Issue 2: Build or Cache Errors
If you experience build errors or unexpected caching issues, clear the `.next` cache folder:
- **Windows (PowerShell):**
  ```powershell
  Remove-Item -Recurse -Force .next
  ```
- **Linux / Mac (Bash):**
  ```bash
  rm -rf .next
  ```

### Issue 3: Missing or Corrupted `node_modules`
Reinstall dependencies completely:
- **Windows (PowerShell):**
  ```powershell
  Remove-Item -Recurse -Force node_modules, package-lock.json
  npm install
  ```
- **Linux / Mac (Bash):**
  ```bash
  rm -rf node_modules package-lock.json
  npm install
  ```
