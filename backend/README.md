# Podcast Backend

This is the backend server for the **Simple Podcast App**, built using **Node.js**, **Express**, and **TypeScript**.  
It handles authentication, podcast management, and audio file uploads with full CRUD operations.

---

## Features

### Authentication
- **Register** new users  
- **Login / Logout**  
- **Refresh Token** system for secure session handling  
- Passwords hashed using **bcryptjs**

---

### Podcast Management
- Admins can:
  - Add new podcasts  
  - Edit or delete existing podcasts  
  - View all podcasts  
- Each podcast can have multiple **episodes**, and if a podcast is deleted, **all its episodes** are automatically removed.

---

### Episode Management
- Add, edit, and delete episodes for each podcast  
- Fetch all episodes under a specific podcast  
- Integrated with **Cloudinary** for uploading images and audio files

---

## Tech Stack

- **Node.js** + **Express** + **TypeScript**
- **MongoDB** + **Mongoose**
- **Cloudinary** (for media storage)
- **JWT** (for authentication)
- **Multer** (for file uploads)
- **Axios**, **Lodash**, **Nodemailer**, and other utilities

---

## Development Tools

- **TypeScript**
- **ESLint + Prettier** (for clean, consistent code)
- **Nodemon** (for auto-restart in development)

---

## API Documentation

You can test the API using **Postman** or any API client.

### AUTH

| Action | Method | Endpoint |
|--------|---------|-----------|
| Register | `POST` | https://podcast-api.up.railway.app/api/auth/register |
| Login | `POST` | https://podcast-api.up.railway.app/api/auth/login |
| Logout | `POST` | https://podcast-api.up.railway.app/api/auth/logout |

---

### PODCASTS

| Action | Method | Endpoint |
|--------|---------|-----------|
| Create Podcast | `POST` | https://podcast-api.up.railway.app/api/podcast/ |
| Get All Podcasts | `GET` | https://podcast-api.up.railway.app/api/podcast?limit=10&page=1 |
| Update Podcast | `PATCH` | https://podcast-api.up.railway.app/api/podcast/:id |
| Get Podcast With Episodes | `GET` | https://podcast-api.up.railway.app/api/podcast/getPodcastWithEpisodes/:id?search=query&page=1&limit=10 |
| Delete Podcast | `DELETE` | https://podcast-api.up.railway.app/api/podcast/:id |

---

### EPISODES

| Action | Method | Endpoint |
|--------|---------|-----------|
| Create Episode | `POST` | https://podcast-api.up.railway.app/api/episode |
| Get Single Episode | `GET` | https://podcast-api.up.railway.app/api/episode/:id |
| Update Episode | `PATCH` | https://podcast-api.up.railway.app/api/episode/:id |
| Get All Episodes | `GET` | https://podcast-api.up.railway.app/api/episode?search=query&page=1&limit=10 |
| Delete Episode | `DELETE` | https://podcast-api.up.railway.app/api/episode/:id |

---

## Security

- JWT-based authentication  
- Rate limiting (via `express-rate-limit`)  
- CORS and cookie-based token handling  
- Environment variables managed via `.env`

---

## Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run development server with nodemon |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run the compiled server (`dist/`) |

---

## 🧑‍💻 Author

Developed by **Mo Waleed**  
📫 GitHub: [@Mo-waleed](https://github.com/Mo-waleed)
