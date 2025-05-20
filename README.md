# 🛒 E Auth Ecommerce Application

![Angular](https://img.shields.io/badge/Frontend-Angular18-red?style=flat-square\&logo=angular) ![Node.js](https://img.shields.io/badge/Backend-Node.js-green?style=flat-square\&logo=node.js) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square\&logo=mongodb) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/KishanThorat111/EcommerceApplication?style=flat-square) ![GitHub stars](https://img.shields.io/github/stars/KishanThorat111/EcommerceApplication?style=flat-square)

---

## 🔍 Overview

**E Auth Ecommerce Application** is a full-stack, secure authentication platform inspired by Amazon's UI. Built with **Angular 18**, **Node.js**, and **MongoDB**, it offers:

* Secure sign-in/sign-out functionality
* Session management
* Encrypted password storage
* Responsive frontend
* CI/CD pipelines via **GitHub Actions**
* Dockerized deployment on **AWS EC2**

🔗 **Live Demo (optional)**: *Coming Soon*
📂 **GitHub Repo**: [EcommerceApplication](https://github.com/KishanThorat111/EcommerceApplication)

---

## 🧰 Tech Stack

| Frontend   | Backend              | DevOps/Cloud                    | Database |
| ---------- | -------------------- | ------------------------------- | -------- |
| Angular 18 | Node.js & Express.js | Docker, GitHub Actions, AWS EC2 | MongoDB  |

> Additional: Tailwind CSS, SCSS, JWT, NGINX (for SPA routing)

---

## ✨ Features

* ✅ **Amazon-style UI** (fully responsive)
* 🔒 **Secure Authentication** with session and JWT
* 🧠 **Auth Guards** for protected Angular routes
* 💬 **Login/Logout functionality**
* 🧱 **MongoDB integration**
* ⚙️ **Dockerized** frontend & backend
* 🚀 **CI/CD pipeline** with GitHub Actions
* 🌐 **Deployed on AWS EC2 with reverse proxy (NGINX)**

---

## 🧱 Project Structure

### 🖥️ Frontend - Angular (`cookie-client`)

```
📁 src/app/
 ┣ 📁 pages/            → auth/, home/
 ┣ 📁 services/         → api.service.ts, auth.service.ts
 ┣ 🛡️ auth.guard.ts     → Protects routes
📄 Dockerfile            → Multi-stage Angular + NGINX
📄 nginx.conf            → Custom SPA routing config
```

### ⚙️ Backend - Node.js (`cookie-server`)

```
📁 models/              → User.js (Mongoose schema)
📁 middleware/          → is-authenticated.js (JWT middleware)
📄 server.js            → Entry point
📄 .env                 → Secrets (auto-generated in CI)
📄 Dockerfile           → Lightweight node-alpine image
```

---

## 🔁 CI/CD Workflow

🚀 **Platform**: GitHub Actions
🔄 **Trigger**: On `push` to `main`

### 🔧 CI/CD Steps:

1. Checkout code
2. Generate `.env` file (backend)
3. Login to DockerHub
4. Build and push Docker images
5. On EC2:

   * Pull latest image
   * Remove old container
   * Run updated container

📄 Config File: `.github/workflows/cicd.yml`

---

## 🐳 Docker & Deployment

### 🖥️ Frontend (Angular + NGINX)

* **Stage 1**: Builds Angular app
* **Stage 2**: Serves app using `nginx:1.23-alpine`
* **Routing**: Custom NGINX config supports SPA fallback

### 🔧 Backend (Node.js)

* Based on `node:alpine3.18`
* Uses `npm start` to launch server on port `4000`

---

## ☁️ Hosting & Deployment

| Component | Platform         | Port | Reverse Proxy |
| --------- | ---------------- | ---- | ------------- |
| Frontend  | AWS EC2 (Docker) | 80   | NGINX         |
| Backend   | AWS EC2 (Docker) | 4000 | —             |

> CI/CD pipelines auto-deploy on each commit to `main`

---

## 🧪 Testing

* 🔍 **Tool Used**: Insomnia (API Testing)
* ✔️ JWT-based protected routes tested
* ✔️ Angular reactive form validation tested

---

## 📦 Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/KishanThorat111/EcommerceApplication.git
   cd EcommerceApplication
   ```

2. **Frontend Setup**

   ```bash
   cd cookie-client
   npm install
   ng serve
   ```

3. **Backend Setup**

   ```bash
   cd cookie-server
   npm install
   ```

4. **Create `.env` File in cookie-server**

   ```
   MONGODB_USERNAME=your_username
   MONGODB_PASSWORD=your_password
   SUPER_SECRET_KEY=your_secret_key
   PORT=4000
   ```

5. **Run Backend**

   ```bash
   node server.js
   ```

6. **Access App**

   * Frontend: `http://localhost:4200`
   * Backend: `http://localhost:4000`

---

## 🔒 Code Snippets

```js
// MongoDB Connection
mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.mongodb.net/EcommerceApp`);
```

```ts
// Angular Auth Guard
canActivate(): boolean {
  return this.authService.isLoggedIn();
}
```

---

## 📸 Screenshots

> *(Optional – Add screenshots if you want to enhance visual appeal)*
> Include images such as login page, home page, deployment diagram, etc.

---

## 📈 Project Outcomes

* ⚡ High-performance, scalable authentication system
* 🔐 Secure with JWT and bcrypt
* 🌍 Real-time deployment via CI/CD
* 💻 Seamless UX similar to Amazon

---

## 📚 Additional Resources

* 📘 [Angular Official Docs](https://angular.io/docs)
* 📘 [Node.js Docs](https://nodejs.org/en/docs)
* 📘 [MongoDB Manual](https://www.mongodb.com/docs/manual/)
* 📘 [GitHub Actions Docs](https://docs.github.com/en/actions)

---

## 🙌 Acknowledgments

Special thanks to:

* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/)
* [GitHub Actions](https://github.com/features/actions)

---

## 📬 Contact

**Kishan Thorat**
🌐 [Portfolio Website](https://portfolio.ecommerceweb.shop)
📧 [kishanthorat111@gmail.com](mailto:kishanthorat111@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/kishan-thorat/)
🔗 [GitHub](https://github.com/KishanThorat111)

---

> ⭐ If you found this project useful, feel free to star the repo and share it!

---
