# 🎬 PIXY – Your Personal Streaming Universe

Welcome to **PIXY**, the ultimate Netflix-inspired streaming web app where you can discover, preview, and enjoy your favorite **movies, series, and dramas** in a beautiful, interactive UI.

---

## 🚀 Live Preview

[🔗 Live Demo]()

---

## 📸 Preview

<img src="demo/screenshot1.png" alt="Home Page Preview" width="100%">
<img src="demo/screenshot2.png" alt="Genre Scroll Example" width="100%">
<img src="demo/screenshot3.png" alt="Search Preview" width="100%">

---

## 🔥 Key Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| 🎨 **Responsive Design**    | Works smoothly on desktop, tablet, and mobile devices.                        |
| 🔍 **Advanced Search**      | Search by movie/series **name**, **genre**, or **cast name**.                  |
| 🧑‍💻 **Authentication**       | Fully functional **Sign Up**, **Login**, and **Logout** features.             |
| 🎭 **Genre-Based Browsing** | Filter content using genres like Action, Comedy, Drama, Thriller, etc.       |
| 🎞️ **Preview System**       | Shows **teasers/thumbnails** and metadata for each movie or show.           |
| 🧭 **Horizontal Scrolling** | Netflix-like **category sliders** for movies and series sections.           |
| 📈 **Scalable & Extendable**| Built with modular architecture to support future features.                |
| 🧠 **More Features Coming** | Stay tuned for personalized watchlists, recommendations, and more!         |

---

## ⚙️ Tech Stack Used

| Category       | Tools/Libraries                                                                 |
|----------------|----------------------------------------------------------------------------------|
| 🧠 Frontend     | `React`, `React DOM`, `Lucide React` (icons), `Tailwind CSS`, `tailwind-scrollbar-hide` |
| 📦 State & API | `Axios`, `React Hot Toast` (notifications)                                       |
| 🎞️ Media       | `React Player`                                                                  |
| 🔀 Routing      | `React Router DOM`                                                              |
| 🗃️ Backend      | `MongoDB` (database)                                                            |

---

## 📂 Folder Structure (Example)
```
PIXY/
│
├── frontend/
│   └── src/
│       ├── components/       # Reusable UI components (e.g., Navbar, Card, Slider)
│       ├── hooks/            # Custom React hooks
│       ├── pages/            # Application pages (e.g., Home, Login, Details)
│       ├── store/            # Global state (e.g., Redux, Context API, Zustand)
│       └── utils/            # Helper functions and constants
│
├── backend/
│   ├── config/               # DB configuration and environment settings
│   ├── controllers/          # Request handler logic (e.g., auth, media)
│   ├── middleware/           # Authentication, error handling middleware
│   ├── models/               # Mongoose schemas for MongoDB
│   ├── routes/               # Express routes (e.g., /auth, /media)
│   ├── services/             # External service logic (e.g., APIs, mailers)
│   ├── utils/                # Utility functions (e.g., token generator)
│   └── server.js             # Main backend entry point
│
└── README.md
```


---

## 🌟 Upcoming Features

- 💖 Add to Favorites & Watchlist

- 🤖 AI-Powered Recommendations

- 📝 User Reviews & Ratings

- 🌐 Multi-language Support

- ⏳ Watch History

---

## 🧪 To Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/PIXY.git

# Move into the project directory
cd PIXY

# Install dependencies
npm install

# Start the development server
npm start
