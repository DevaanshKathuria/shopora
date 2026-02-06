# Shopora

A full-stack e-commerce application built using the MERN stack (MongoDB, Express, React, Node.js).

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Render (Backend), Vercel (Frontend)

## Features

- **Product Management:** Create, Read, Update, and Delete (CRUD) products.
- **Responsive UI:** Built with React for a dynamic user experience.
- **RESTful API:** Backend API to handle data requests.
- **Database Integration:** Persistent data storage using MongoDB.

## Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/DevaanshKathuria/shopora.git](https://github.com/DevaanshKathuria/shopora.git)
cd shopora
```

### 2. Backend Setup (Server)

Navigate to the server directory and install dependencies:

```bash
cd server
npm install

```

Create a `.env` file in the `server` folder and add your MongoDB connection string:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here

```

Start the backend server:

```bash
npm run dev

```

### 3. Frontend Setup (Client)

Open a new terminal, navigate to the client directory, and install dependencies:

```bash
cd client
npm install

```

Start the React application:

```bash
npm start

```

## Project Structure

```
shopora/
├── client/          # React Frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js & Express Backend
│   ├── models/      # Mongoose Models
│   ├── routes/      # API Routes
│   ├── server.js    # Entry point
│   └── package.json
└── README.md

```

## Deployment

* **Frontend:** Deployed on [Vercel](https://vercel.com/)
* **Backend:** Deployed on [Render](https://render.com/)

---

**Author:** Devaansh Kathuria
