# Simple Podcast App

A full-stack podcast web application that allows users to **browse**, **play**, and **manage** podcasts and episodes.  
The project is built using **Next.js 15 (Frontend)** and **Node.js + Express (Backend)** — fully deployed on **Vercel** and **Railway**.

---

## Live Demo

-  Frontend (Next.js): User => [https://podcast-front-end.vercel.app/home](https://podcast-front-end.vercel.app/home)  
-  Frontend (Next.js): Admin => [https://podcast-front-end.vercel.app/admin/episodes/list](https://podcast-front-end.vercel.app/admin/episodes/list)  
-  Backend API (Express): [https://podcast-api.up.railway.app/](https://podcast-api.up.railway.app/)

---

## Project Overview

The app consists of two main parts:

| Part | Tech | Description |
|------|------|--------------|
| **Frontend** | Next.js 15 + TypeScript + Zustand + Shadcn | A responsive modern UI for podcast browsing, playing, and authentication |
| **Backend** | Node.js + Express + MongoDB + Cloudinary | Handles authentication, podcasts, episodes, and media uploads |

---

## Features

###  Authentication
- Secure login, register, and logout flows  
- JWT-based authentication with refresh tokens  
- Tokens stored in HTTP-only cookies for security  

---

###  Podcast & Episode Management
- Create, edit, and delete podcasts and episodes  
- Fetch and paginate data from backend API  
- Integrated **audio player** with full playback controls  
- Auto state updates with **Zustand**  
- File uploads (image/audio) handled via **Cloudinary**

---

###  Modern UI
- Built with **Shadcn UI + TailwindCSS 4**  
- Light/Dark theme support using **next-themes**  
- Elegant icons from **Lucide-react**  
- Animated interactions via **Framer Motion** and **tw-animate-css**

---

##  State Management

The app uses **Zustand** for lightweight global state:
- `authStore`: user data, tokens, and login state  
- `podcastStore`: podcast and episode lists  
- `playerStore`: current playing track and controls  

---

## ⚙️ Tech Stack

| Layer | Technologies |
|-------|---------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Zustand, Shadcn UI, TailwindCSS, Axios |
| **Backend** | Node.js, Express, TypeScript, MongoDB, Mongoose, Cloudinary, JWT |
| **Dev Tools** | ESLint, Prettier, LightningCSS, PostCSS, Nodemon |
| **Deployment** | Vercel (frontend) + Railway (backend) |

---

##  API Overview

Base URL: [https://podcast-api.up.railway.app/api](https://podcast-api.up.railway.app/api)

### Auth
| Action | Method | Endpoint |
|--------|---------|----------|
| Register | `POST` | `/auth/register` |
| Login | `POST` | `/auth/login` |
| Logout | `POST` | `/auth/logout` |

### Podcasts
| Action | Method | Endpoint |
|--------|---------|----------|
| Create | `POST` | `/podcast` |
| Get All | `GET` | `/podcast?limit=10&page=1` |
| Update | `PATCH` | `/podcast/:id` |
| Delete | `DELETE` | `/podcast/:id` |

### Episodes
| Action | Method | Endpoint |
|--------|---------|----------|
| Create | `POST` | `/episode` |
| Get All | `GET` | `/episode?search=query&page=1&limit=10` |
| Update | `PATCH` | `/episode/:id` |
| Delete | `DELETE` | `/episode/:id` |

---

##  Development Setup

### Clone the Repository

```bash
git clone https://github.com/Mo-waleed/Podcast-App.git
cd Podcast-App

You’ll now have:
 Podcast-App/
 ├── frontend/   # Next.js app
 ├── backend/    # Express server

Run the Frontend:
cd frontend
npm install
npm run dev

Run the Backend:
cd backend
npm install
npm run dev
```
Security

## JWT Authentication

HTTP-only cookies

Rate limiting with express-rate-limit

Environment variables managed with .env

CORS protection and input validation

---

## Environment Variables

### Backend (.env)

Create a `.env` file inside `/backend` with the following variables:
DATABASE_URL=MONOGDB_URL
JWT_SECRET=JWT_SECRET
NODE_ENV=development
PORT=6002
ADMIN_EMAIL=ADMIN_EMAIL
ADMIN_PASS=ADMIN_PASSWORD
FRONT_END_URL=FRONT_END_URL

CLOUDINARY_NAME=CLOUD_NAME
CLOUDINARY_API_KEY=CLOUD_KEY
CLOUDINARY_API_SECRET=CLOUD_SECRET


### frontend (.env)

ARCJET_KEY=ARJECT_KEY
BACK_END_URL=BACK_END_URL  OR   //http://localhost:6002
JWT_SECRET=JWT_SECRET

---
## Future Enhancements

Playlist queue and shuffle

Playback speed & volume controls

