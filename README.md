# 🚀 React Login App CI/CD Pipeline

A simple React Login Page project built with **React + Vite** and deployed using a **CI/CD pipeline with GitHub Actions and GitHub Pages**.

This project demonstrates how code changes are automatically built, tested, and deployed after every push to GitHub.

---

## 🔄 CI/CD Workflow

### 1. Code Development
Developer makes changes in the React application using **VS Code**.

Example:
- Update components
- Modify UI
- Add new features

---

### 2. Git Version Control

Changes are tracked and pushed using Git:

```bash
git add .
git commit -m "update changes"
git push
```

---

### 3. GitHub Repository

The updated code is pushed to the GitHub repository.

After every push:

```
GitHub Repository
        ↓
GitHub Actions Triggered
```

---

## ⚙️ GitHub Actions Pipeline

Workflow file location:

```
.github/workflows/deploy.yml
```

GitHub Actions automatically starts the CI/CD process.

---

## 🔹 CI (Continuous Integration)

CI automatically performs:

✔ Checkout latest source code  
✔ Setup Node.js environment  
✔ Install project dependencies  

```bash
npm install
```

✔ Build production files

```bash
npm run build
```

✔ Verify successful build

---

## 🔹 CD (Continuous Deployment)

After successful build:

✔ Upload generated `dist` folder  
✔ Deploy application using GitHub Pages  
✔ Update live website automatically  

---

## 📌 Complete Flow

```
Developer
    ↓
Code Change
    ↓
Git Commit & Push
    ↓
GitHub Repository
    ↓
GitHub Actions
    ↓
CI: Install + Build
    ↓
CD: Deploy
    ↓
Live Website Updated
```

---

## 🛠️ Tech Stack

- React.js
- Vite
- Git
- GitHub
- GitHub Actions
- GitHub Pages

---

## 🎯 Purpose

The goal of this project is to understand and implement a real CI/CD workflow by automating:

- Build process
- Deployment process
- Application updates

After every code push, the application is automatically deployed without manual steps.

---

## ✨ Key Learning

**Code → Push → Automation → Deployment → Live Update**
