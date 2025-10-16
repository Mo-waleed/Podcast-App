# 🎙️ Podcast Backend

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

# TypeScript

# ESLint + Prettier (for clean code)

# Nodemon (for auto-restart in development)

---

## API Documentation

Using Potman

---

## Security

# JWT-based authentication

# Rate limiting (via express-rate-limit)

# CORS and cookie-based token handling

# Environment variables managed via .env

---

## Scripts

**npm run dev* : Run development server with nodemon
**npm run build* : Compile TypeScript to JavaScript
**npm start* : Run the compiled server (dist/)
