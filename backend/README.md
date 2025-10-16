#  Podcast Backend

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
- **Multer** (for handling file uploads)
- **Axios**, **Lodash**, **Nodemailer**, and other utilities

---

## Development Tools

TypeScript

ESLint + Prettier (for clean code)

Nodemon (for auto-restart in development)

---

## API Documentation

**Using Potman*

**AUTH**

**Register* : https://podcast-api.up.railway.app/api/auth/register
**Login* : https://podcast-api.up.railway.app/api/auth/login
**Logout* : https://podcast-api.up.railway.app/api/auth/logout

**PODCASTS**

**Create A Podcast* : https://podcast-api.up.railway.app/api/podcast/
**Get ALL Podcasts* : https://podcast-api.up.railway.app/api/podcast?&limit=10&page=1
**Patch podcast* : https://podcast-api.up.railway.app/api/podcast/:id
**Get Podcast With Episodes* : https://podcast-api.up.railway.app/api/podcast/getPodcastWithEpisodes/:id?search=query&page=1&limit-10
**Delete Podcast* : https://podcast-api.up.railway.app/api/podcast/:id

**EPISODES**

**Create A Episode* : https://podcast-api.up.railway.app/api/episode
**Get Single Episode* : https://podcast-api.up.railway.app/api/episode/:id
**Patch Episode* : https://podcast-api.up.railway.app/api/episode/:id
**Get All Episodes* : https://podcast-api.up.railway.app/api/episode?search=query&page=1&limit=10
**Delete Episode* : https://podcast-api.up.railway.app/api/episode/:id

---

## Security

JWT-based authentication

Rate limiting (via express-rate-limit)

 CORS and cookie-based token handling

 Environment variables managed via .env

---

## Scripts

**npm run dev* : Run development server with nodemon
**npm run build* : Compile TypeScript to JavaScript
**npm start* : Run the compiled server (dist/)
