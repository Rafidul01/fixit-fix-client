# 🛠️ Fixit-Fix

> A full-stack electronic repair service booking platform that connects customers with service providers for fast, secure, and hassle-free device repairs.

<p align="center">

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit-success?style=for-the-badge&logo=firebase)](https://fixit-fix.web.app)
[![React](https://img.shields.io/badge/React-18-20232A?style=for-the-badge&logo=react)](https://react.dev)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-black?style=for-the-badge&logo=express)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?style=for-the-badge&logo=mongodb)](https://mongodb.com)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</p>

---

# 📑 Table of Contents

- [About the Project](#about-the-project)
- [Live Demo](#live-demo)
- [Project Overview](#project-overview)
- [Category](#category)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Dependencies](#dependencies)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Contact](#contact)

---

# 📖 About the Project

**Fixit-Fix** is a full-stack repair service booking platform designed to simplify the process of finding and booking electronic repair services.

Customers can browse available repair services, book appointments, monitor repair progress, and manage their bookings, while service providers can manage services and track business analytics through a dedicated dashboard.

---

# 🌐 Live Demo

### 🔗 Live Site

https://fixit-fix.web.app

---

# 📸 Project Overview

Fixit-Fix offers an all-in-one platform where users can:

- Browse repair services.
- Book repair appointments.
- Track booking status.
- Manage bookings.
- Search services by keyword.
- Service providers can monitor service performance.

---

# 📱 Category

**Electronic Item Repairing Services**

Supported devices include:

- 📱 Smartphones
- 💻 Laptops
- 🖥️ Desktop Computers
- 📺 Televisions
- 📷 Cameras
- 📟 Tablets
- 🎮 Gaming Consoles
- 🎧 Audio Devices

---

# ✨ Features

## 👤 Authentication

- Email & Password Authentication
- Firebase Authentication
- JWT Protected Routes
- Secure Login & Registration

---

## 🔧 Service Management

- Browse Repair Services
- Service Details Page
- Book Repair Service
- Booking Confirmation
- Cancel Booking

---

## 📋 Booking Management

- View Booking History
- Track Booking Status
- Update Booking Information

Booking Status:

- 🟡 Pending
- 🔵 Working
- 🟢 Completed

---

## 🔍 Search & Filter

- Search by Service Name
- Filter Services
- Reset Filters
- Fast Search Experience

---

## 📊 Provider Dashboard

- View Total Bookings
- View Service Analytics
- Total Views
- Booking Statistics
- Manage Services

---

## 🎯 Other Features

- Responsive Design
- Axios API Integration
- SweetAlert Notifications
- Loading Spinner
- Protected Routes
- Error Handling

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Tailwind CSS
- DaisyUI
- Axios
- Firebase Authentication

---

## Backend

- Node.js
- Express.js
- JWT Authentication

---

## Database

- MongoDB Atlas

---

## Tools

- Git
- GitHub
- Firebase Hosting
- VS Code

---

# 📦 Dependencies

### Frontend

```json
{
  "react": "^18.x",
  "react-router-dom": "^6.x",
  "axios": "^1.x",
  "firebase": "^10.x",
  "tailwindcss": "^3.x",
  "sweetalert2": "^11.x"
}
```

### Backend

```json
{
  "express": "^4.x",
  "mongodb": "^6.x",
  "jsonwebtoken": "^9.x",
  "cors": "^2.x",
  "dotenv": "^16.x"
}
```

---

# ⚙ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/rafidul01/fixit-fix-client.git
```

Move into the project

```bash
cd fixit-fix-client
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

---

# 🔑 Environment Variables

Create a `.env.local`

```env
VITE_API_URL=

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=
```

Backend `.env`

```env
PORT=5000

DB_USER=

DB_PASS=

JWT_SECRET=
```

---

# 📂 Folder Structure

```text
fixit-fix/

├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── routes/
│   │   ├── context/
│   │   └── utils/
│
├── server/
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── utils/
│   └── index.js
│
└── README.md
```

---

# 🚀 Future Improvements

- Online Payment Integration
- Real-time Repair Tracking
- Live Chat with Technicians
- Push Notifications
- Customer Reviews & Ratings
- AI Repair Cost Estimation
- Email Notifications
- Dark Mode

---

# 📬 Contact

### 👨‍💻 Rafidul Hasan

📧 Email

```text
rafidulhasan555@gmail.com
```

🌐 Live Site

https://fixit-fix.web.app

💼 LinkedIn

https://linkedin.com/in/t-m-rafidul-hasan

---

<div align="center">

### ⭐ If you like this project, please consider giving it a star!

</div>
