# 🎬 React Movie App

A modern and responsive movie browsing application built with **React**. Users can explore trending movies, view posters, ratings, and short summaries, and search for any movie using The Movie Database (TMDB) API.

---

## 🚀 Features

* 🔍 **Search movies** by name

* 🎥 **Browse trending movies**

* ⭐ **Movie rating badges**

* 🖼️ **High‑quality poster images**

* 📄 **Short overview descriptions**

* 📱 **Fully responsive UI**

* ⚡ Built with **React + Axios**

---

## 📁 Project Structure

```
Movie-App/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── index.js
│   ├── assets/
│   ├── components/
│   │   ├── Details.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── Movie.jsx
│   │   ├── MovieBox.jsx
│   │   └── NotFound.jsx
│   ├── redux/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

````

---

## 🛠️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

Create a `.env` file in the project root:

```env
VITE_MOVIE_API_KEY=7dc92be0abb045051bf66fdd913a4c96
```

Get your API key from: [https://www.themoviedb.org/](https://www.themoviedb.org/)

---

## ▶️ Run the Project

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 📚 Tech Stack

* React
* Axios
* Tailwind CSS / Custom CSS
* React Router
* TMDB API

---

## 📄 License

This project is licensed under the MIT License.
