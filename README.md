## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)

## <a name="introduction">Introduction</a>

Welcome to SwapNPlay, your one‑stop hub for discovering, trading, and selling video games. Built with Next.js and powered by RAWG’s game database, SwapNPlay brings you an intuitive, minimal‑design interface and social features to connect gamers worldwide. Sign in with Google for a seamless experience, browse titles by genre, search for your favorite games, and dive deep into each game’s details—complete with screenshots, descriptions, and ratings. Behind the scenes, our PostgreSQL database keeps track of user profiles and active game listings, so you can focus on what matters: finding your next great play.

## <a name="tech-stack">Tech Stack</a>

- React 19
- Next.js 15
- PostgreSQL
- TailwindCSS
- TypeScript

## <a name="features">Features</a>

**Google Authentication**: Allows users to log in easily using their Google account.

**RAWG API Integration**: Fetches up‑to‑date game data (titles, screenshots, descriptions, ratings) in real time.

**Genre Filters**: Browse through games with filtered by genre.

**Search**: Find games instantly by title or keyword with our built‑in search bar..

**User & Listing Management**:
    - PostgreSQL‑backed Users: Stores user profiles, authentication data, and activity logs.
    - PostgreSQL‑backed Listings: Persists game listings, trade offers, and sale details.

**Minimalistic Design**: Fresh and simple UI for ease of use and a clean aesthetic.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**
Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone git@github.com:mbanixox/trade-in-games.git
cd trade-in-games
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
AUTH_SECRET= 
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
RAWG_API_KEY=
```

Generate an auth secret value

```bash
npm auth secret
```

Go to RAWG Games API and sign up an account to get an API key.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
