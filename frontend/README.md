# Simple Podcast App — Frontend

This is the **frontend** for the **Simple Podcast App**, built with **Next.js 15**, **TypeScript**, and a modern UI powered by **Shadcn**, **TailwindCSS**, and **Lucide Icons**.  
It provides a clean, responsive interface for browsing, playing, and managing podcasts and episodes.

---

## Features

### Authentication
- Full login, register, and logout flows integrated with the backend API  
- Auth state managed using **Zustand**  
- Secure token handling and session persistence  

---

### Podcast & Episode Management
- Fetch, create, edit, and delete podcasts  
- View all podcasts and episodes with pagination and search  
- Automatic UI updates using **Zustand** state management  
- Audio player with play/pause, next/previous, and track progress  
- Smooth UI transitions using **Framer Motion** and **Tailwind animations**

---

### UI & Styling
- Built with **Shadcn UI** components  
- Styled using **TailwindCSS** and **tailwind-merge**  
- Light/Dark mode with **next-themes**  
- Custom animations via **tw-animate-css**  
- Icons from **Lucide-react**

---

## State Management

The app uses **Zustand** for global state management:
- Auth store (user data, tokens, login/logout)
- Podcast store (podcasts, episodes, current playing)
- Player state (isPlaying, currentTrack, controls)

This makes the app lightweight, reactive, and easy to scale.

---

## Tech Stack

- **Next.js 15** (App Router)  
- **React 19**  
- **TypeScript**  
- **Zustand**  
- **Shadcn UI**  
- **TailwindCSS**  
- **Axios**  
- **Lucide-react**  
- **Next-Themes**  
- **Sonner** (for toast notifications)

---

## Development Tools

- **ESLint + Prettier** for code quality and formatting  
- **TypeScript** for type safety  
- **LightningCSS** for fast builds  
- **PostCSS** + **TailwindCSS v4** for modern styling  

---

## 🧾 Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Run the development server |
| `npm run build` | Build the production version |
| `npm run start` | Start the production server |

---

## API Integration

All data is fetched via **Axios** from the backend API:  
🔗 [Podcast Backend api](https://podcast-api.up.railway.app/)

Endpoints include:
- **Auth** (Register / Login / Logout / Refresh Token)
- **Podcasts** (CRUD operations)
- **Episodes** (CRUD operations)

---

## Player Features (Future Enhancements)

- Playlist queue and shuffle  
- Volume and playback speed control  



