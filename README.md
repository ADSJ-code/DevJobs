# DevJobs - Job Board Application

![Project Preview](https://github.com/ADSJ-code/DevJobs/blob/master/Captura%20de%20tela%202025-08-27%20234503.png?raw=true)

## 🚀 Executive Summary

**DevJobs** is a Single Page Application (SPA) designed to demonstrate **production-grade frontend architecture** and **API integration**.

Unlike standard portfolio projects that use static mock data, this application consumes **real-time job data** via the Remotive API. It is fully **containerized**, implementing a **Multi-Stage Docker Build** process that results in an ultra-lightweight production image (**~80MB**), served via high-performance **Nginx**.

## ⚡ Quick Start (Run in Minutes)

This project is optimized for Docker. You do **not** need Node.js installed to run this application.

### Prerequisites
* Docker & Docker Compose

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ADSJ-code/DevJobs
    ```

2.  **Navigate to DevJobs** 
    ```bash
    cd DevJobs
    ```

3.  **Run with Docker Compose:**
    ```bash
    docker-compose up --build
    ```

4.  **Access the Application:**
    Open your browser and navigate to: 
    `http://localhost:3000`

---

## 🏗️ Architecture & Engineering

This project goes beyond simple UI development by implementing DevOps best practices for frontend delivery.

### 1. Infrastructure (Docker + Nginx)

* **Multi-Stage Build:** The `Dockerfile` uses a `node:20-alpine` image to build the artifacts and immediately discards it.

* **Ultra-Lightweight:** The final production image is approximately **80MB** (vs. >900MB for standard Node images).

* **Nginx Server:** A lightweight Alpine Nginx container serves the static application.

* **SPA Routing:** Custom `nginx.conf` handles client-side routing (React Router), preventing 404 errors on page refresh.

* **Performance:** Gzip compression is enabled for text-based assets.

### 2. Advanced Logic & Integration

* **Real-Time Data:** Fetches live job postings via the **Remotive API** (Public/No-Key required).

* **Smart Search Engine:** Implements a client-side "synonym dictionary". Searching for "Desenvolvedor" (PT) automatically finds "Developer" (EN) jobs, bridging language barriers.

* **Internationalization (i18n):** Auto-detects browser language to translate UI elements (PT-BR / EN-US).

### 3. Tech Stack

* **Core:** React.js (Vite)
* **Data:** Fetch API (consuming Remotive.com)
* **Routing:** React Router DOM v6
* **Styling:** Chakra UI
* **Containerization:** Docker
* **Server:** Nginx (Alpine Linux)

---

## ✨ Key Features

* **Live Job Feed:** Displays real remote job opportunities available worldwide.

* **Compound Filtering:** Filter jobs by **Search Term**, **Region** (e.g., Europe, USA, Worldwide), and **Contract Type** simultaneously.

* **Dynamic Routing:** Deep linking support for job details (`/vaga/:id`), allowing users to share specific job links.

* **Responsive Design:** Adaptive layout that transforms from a grid view (Desktop) to a stacked view (Mobile).

* **Error Handling:** Graceful UI states for loading, empty results, and network errors.

---

## 🔧 Local Development (Optional)

If you wish to modify the code without Docker:

# Install dependencies
```bash
npm install
```

and

```bash
npm run dev
```