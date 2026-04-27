# Personal Portfolio — Arsany Naim

A single-page React portfolio showcasing my projects, experience, and contact information, with an animated UI and a Firebase-authenticated admin dashboard.

## Live Demo

> [arsany-portfolio.vercel.app](https://arsany-portfolio.vercel.app/)

## Features

- Animated letter-by-letter text transitions on page load
- Responsive sidebar navigation with mobile hamburger menu
- Contact form powered by EmailJS (no backend required)
- Interactive Leaflet map showing location
- Firebase Google OAuth for a protected admin dashboard
- Resume download link and social links (LinkedIn, GitHub)

## Pages

| Route | Description |
|---|---|
| `/` | Home — animated hero with logo |
| `/about` | About me |
| `/portfolio` | Project showcase |
| `/experience` | Work history timeline |
| `/contact` | Contact form + map |
| `/login` | Admin login (Firebase) |
| `/dashboard` | Protected admin dashboard |

## Tech Stack

- **React 17** + React Router 6
- **SCSS/SASS** for styling
- **GSAP** for advanced animations
- **Firebase 9** — Google Auth, Firestore, Storage
- **EmailJS** — client-side email sending
- **Leaflet** / React Leaflet — interactive map
- **FontAwesome** — icons

## Getting Started

### Prerequisites

- Node.js 14+
- npm

### Installation

```bash
git clone https://github.com/your-username/your-portfolio.git
cd your-portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root with the following values:

```env
# Firebase
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=

# EmailJS
REACT_APP_EMAILJS_SERVICE_ID=
REACT_APP_EMAILJS_TEMPLATE_ID=
REACT_APP_EMAILJS_PUBLIC_KEY=
```

### Running Locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start the development server |
| `npm run build` | Build for production |
| `npm test` | Run the test suite |

## Project Structure

```
src/
├── components/
│   ├── Home/               # Hero page + animated logo
│   ├── About/
│   ├── Portfolio/
│   ├── Experience/
│   ├── Contact/            # EmailJS form + Leaflet map
│   ├── Dashboard/          # Firebase-protected dashboard
│   ├── Login/
│   ├── Layout/             # Master layout with sidebar
│   ├── Sidebar/            # Navigation + social links
│   └── AnimatedLetters/    # Reusable letter animation
├── App.js                  # Route definitions
├── firebase.js             # Firebase config & exports
└── index.js
```
