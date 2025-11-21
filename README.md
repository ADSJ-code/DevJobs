# DevJobs - Job Board Application

Project Preview(
    
https://github.com/ADSJ-code/DevJobs/blob/master/Captura%20de%20tela%202025-08-27%20234503.png?raw=true)

## 🚀 Executive Summary

**DevJobs** is a Single Page Application (SPA) designed to demonstrate **production-grade frontend architecture**.

Unlike standard portfolio projects that require local Node.js environments, this application is fully **containerized**. It implements a **Multi-Stage Docker Build** process that compiles the React application and serves it via a high-performance **Nginx** server, ensuring zero-configuration deployment and consistent behavior across any environment.

## ⚡ Quick Start (Run in Minutes)

This project is optimized for Docker. You do **not** need Node.js installed to run this application.

### Prerequisites
* Docker & Docker Compose

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ADSJ-code/DevJobs
    ```

2.  **Run with Docker Compose:**
    ```bash
    docker-compose up --build
    ```

3.  **Access the Application:**
    Open your browser and navigate to: 
    
    http://localhost:3000

---

## 🏗️ Architecture & Engineering

This project goes beyond simple UI development by implementing DevOps best practices for frontend delivery.

### 1. Infrastructure (Docker + Nginx)

* **Multi-Stage Build:** The `Dockerfile` uses a `node:20-alpine` image to build the artifacts and discards it, keeping only the optimized static files.

* **Nginx Server:** A lightweight Alpine Nginx container serves the application.

* **SPA Routing:** Custom `nginx.conf` handles client-side routing (React Router), preventing 404 errors on page refresh by redirecting fallback requests to `index.html`.

* **Performance:** Gzip compression is enabled for text-based assets.

### 2. Internationalization (i18n)

* **Auto-Detection:** The application automatically detects the user's browser language.

* **Support:** Native support for English (`en-US`) and Portuguese (`pt-BR`).

### 3. Tech Stack

* **Core:** React.js (Vite)
* **Routing:** React Router DOM v6
* **Styling:** Chakra UI
* **Containerization:** Docker
* **Server:** Nginx (Alpine Linux)

---

## ✨ Key Features

* **Job Search:** Real-time filtering by title and metadata.

* **Dynamic Routing:** Deep linking support for job details (`/vaga/:id`).

* **Responsive Design:** Fully adaptive layout for Mobile and Desktop.

* **Component-Based Architecture:** Reusable components (JobCard, Header) for maintainability.

---

## 🔧 Local Development (Optional)

If you wish to modify the code without Docker:


# Install dependencies

```bash
npm install
```

# Run dev server

```bash
npm run dev
```