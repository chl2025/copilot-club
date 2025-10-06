# 🏖️ Leisure Club Management Web App

A full-stack web application for managing leisure club memberships, facilities, bookings, and transaction history. Built with React, Node.js/Express, and PostgreSQL.

---

## 📦 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Auth**: JWT (JSON Web Tokens)
- **ORM**: Native SQL queries via `pg`

---

## 🚀 Features

- Member registration and profile management
- Facility listing and booking
- Booking history and transaction logging
- JWT-based authentication
- Modular backend architecture

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/chl2025/copilot-club.git
cd copilot-club
```

---

### 2. Setup PostgreSQL Database

Create a PostgreSQL database named `leisure_club` and run the schema:

```bash
psql -U your_user -d leisure_club -f database/schema.sql
```

---

### 3. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
DB_USER=your_user
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=leisure_club
JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
node server.js
```

Server runs at: `http://localhost:3001`

---

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
REACT_APP_API_URL=http://localhost:3001
```

Start the React app:

```bash
npm start
```

App runs at: `http://localhost:3000`

---

## 📁 Project Structure

```
copilot-club/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── db/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── .env
├── database/
│   └── schema.sql
└── README.md
```

---

## 🧪 API Endpoints

| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| POST   | `/members`                   | Create new member              |
| GET    | `/members/:id`               | Get member details             |
| PUT    | `/members/:id`               | Update member info             |
| DELETE | `/members/:id`               | Deactivate member              |
| GET    | `/members/:id/bookings`      | Member's booking history       |
| POST   | `/facilities`                | Add new facility               |
| GET    | `/facilities`                | List all facilities            |
| POST   | `/bookings`                  | Create a booking               |
| POST   | `/auth/login`                | Login and receive JWT token    |

---

## 🧑‍💻 Developer Notes

- Backend uses native SQL queries via `pg` module.
- JWT token must be sent in `Authorization` header for protected routes.
- Booking creation automatically logs a transaction.

---

## 📦 Deployment Tips

- Use [Railway](https://railway.app) or [Render](https://render.com) for backend + PostgreSQL.
- Use [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for frontend.
- Store secrets securely using environment variables.

---

## 📜 License

MIT License © 2025 Chi
