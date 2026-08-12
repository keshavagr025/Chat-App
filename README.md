<div align="center">
  <img src="https://img.icons8.com/bubbles/200/000000/chat.png" alt="Chat App Logo" width="120" />
  <h1>💬 MERN Real-Time Chat App</h1>
  <p>A full-stack, real-time messaging application built with the MERN stack and Socket.io.</p>

  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
    <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </p>
</div>

---

## ✨ Features

- **⚡ Real-Time Messaging:** Instant messaging powered by `Socket.io`.
- **🔐 Secure Authentication:** JWT-based authentication and Bcrypt password hashing.
- **🟢 Online Status:** See who is currently online in real-time.
- **🎨 Dynamic Themes:** Choose your favorite aesthetic with DaisyUI theme integration.
- **🖼️ Image Uploads:** Seamless profile picture updates using Cloudinary.
- **📱 Fully Responsive:** Beautifully designed for both desktop and mobile devices.
- **🧠 State Management:** Efficient global state handling using Zustand.

## 🛠️ Tech Stack

### Frontend
- **React 18** (Vite)
- **Tailwind CSS** + **DaisyUI**
- **Zustand** (State Management)
- **React Router DOM**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **Socket.io Client**

### Backend
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **Socket.io** (WebSockets)
- **JSON Web Tokens (JWT)**
- **Cloudinary** (Image Storage)
- **Bcryptjs** (Cryptography)

---

## 🚀 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- MongoDB connection string
- [Cloudinary](https://cloudinary.com/) account credentials

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Install dependencies
From the root directory, you can install both frontend and backend dependencies using the provided script:
```bash
npm run build
```
*(Alternatively, you can manually run `npm install` inside both the `frontend/` and `backend/` directories).*

### 3. Environment Variables
Create a `.env` file in the **backend** directory and add the following variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Run the Application

#### Start the Backend Server (Development Mode)
```bash
cd backend
npm run dev
```

#### Start the Frontend Client
Open a new terminal and run:
```bash
cd frontend
npm run dev
```

The app will typically be available at `http://localhost:5173`.

---

## 📂 Project Structure

```text
chat-app/
├── backend/               # Node/Express backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── lib/           # Database, Socket.io configs
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # Express routes (auth, messages)
│   │   └── index.js       # Entry point
│   ├── .env               # Environment variables
│   └── package.json       
│
├── frontend/              # React/Vite frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page layouts (Home, Login, etc.)
│   │   ├── store/         # Zustand stores (useAuthStore, etc.)
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # React DOM rendering
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── package.json       
│
└── package.json           # Root package.json (build scripts)
```

## 📜 License

This project is licensed under the ISC License.
