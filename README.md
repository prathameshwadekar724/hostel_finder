# 🏠 **HostelFinder – Hostel / PG Finder Web Application**

A modern, responsive, and fast **Hostel / PG Finder web application** built using **Next.js 16**, **TailwindCSS**, and **SerpAPI (Google Maps API)**.
Users can search any location and view nearby hostels/PGs with detailed information such as rating, reviews, and map navigation.

This project features a clean UI, secure backend API handling, and fully responsive pages.

---

## 🚀 **Features**

* 🔍 Search hostels/PGs by entering any location
* 📍 Fetches real hostel data using Google Maps + SerpAPI
* ⭐ Shows ratings, reviews & categories
* 🖥 Fully responsive design (mobile/tablet/desktop)
* 🔐 Secure backend API (SerpAPI key NOT exposed)
* 🧭 Includes Home, Hostel Results, Hostel Details, About Page
* 🧩 Clean component structure with reusable Navbar

---

## 🛠️ **Tech Stack**

| Technology                  | Description            |
| --------------------------- | ---------------------- |
| **Next.js 16 (App Router)** | Routing + Backend APIs |
| **React**                   | UI components          |
| **TailwindCSS**             | Styling                |
| **SerpAPI (Google Maps)**   | Fetching place results |
| **Vercel**                  | Deployment             |

---

## 📁 **Project Folder Structure**

Your current folder structure:

```
HOSTEL-FINDER/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── api.js                # API helper for fetching hostel data
│   │
│   ├── app/
│   │   ├── about/
│   │   │   └── page.jsx          # About Page
│   │   │
│   │   ├── hostel\[data_id]/
│   │   │   └── page.jsx          # Hostel Details Page
│   │   │
│   │   ├── hostels/
│   │   │   └── page.js           # Hostels list page (search results)
│   │   │
│   │   ├── globals.css           # Global CSS
│   │   ├── layout.js             # Root Layout
│   │   └── page.js               # Home Page
│   │
│   ├── components/
│   │   └── Navbar.jsx            # Navigation Bar
│
├── .env                          # SerpAPI key (DO NOT PUSH)
├── .gitignore
├── next.config.mjs
├── package.json
└── README.md
```

---

## 🔐 **Environment Variables (Important)**

Create a **.env** file and add:

```
SERPAPI_KEY=your_serpapi_key_here
```

⚠️ Do NOT expose your API key in frontend code.
This project uses backend helper functions, so your key stays secure.

---

# ⚙️ **Getting Started**

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/hostel-finder.git
cd hostel-finder
```

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Add Environment Variable

Create `.env`:

```
SERPAPI_KEY=your_serpapi_key_here
```

## 4️⃣ Start Development Server

```bash
npm run dev
```

Visit:
👉 **[http://localhost:3000](http://localhost:3000)**

---

# 📡 **API Flow**

```
User Search → Backend api.js → SerpAPI → Results → UI Rendering
```

✔ Keeps API key secure
✔ Prevents misuse
✔ Works perfectly on Vercel deployment

---

# 🖥️ **Pages Overview**

### 🏡 Home Page (`src/app/page.js`)

* Clean modern UI
* Search bar for entering location
* Responsive layout

### 🏨 Hostels List Page (`src/app/hostels/page.js`)

* Shows hostels based on location
* Shows name, category, rating, distance

### 📘 Hostel Details Page (`src/app/hostel/[data_id]/page.jsx`)

* Detailed info
* Images, rating, reviews
* Google Maps button

### ℹ About Page (`src/app/about/page.jsx`)

* Simple About information
* Purpose + project goal

### 📌 Navbar (`src/components/Navbar.jsx`)

* Clean navigation
* Home + About links

---

# 🚀 **Deployment (Vercel Recommended)**

1. Push project to GitHub
2. Go to **vercel.com** → Import Repository
3. Add environment variable in Vercel Dashboard:

```
SERPAPI_KEY=your_key_here
```

4. Click **Deploy**
5. Done 🎉

---

# 🧑‍💻 **Author**

**Prathamesh Wadekar**
Full Stack Developer | Android Developer
📧 Open for collaborations & improvements

---

# ⭐ **Support**

If you like this project, please give it a ⭐ on GitHub!

---
