# InstaChef - Automated Instagram Posting for Restaurants

**InstaChef** is a smart web app that automatically generates and posts engaging content on Instagram for restaurants. It is designed for restaurant owners who want to grow their online presence without hiring a social media team.

## 🔥 Features

- ✨ Automated daily Instagram posts
- 📸 AI/stock image-based content generation
- 🧠 Smart caption templates tailored to cuisine type
- 📅 Dashboard for template selection and post preview
- 🔐 Firebase Auth for login/signup
- ☁️ Firestore for restaurant data and content storage
- 🚀 Instagram Graph API integration (coming soon)

## 🧱 Stack

- **Frontend**: React + Tailwind + Firebase Auth + Firestore
- **Backend**: Node.js + Express + Firebase Admin SDK
- **Media**: Pexels API (images), OpenAI (captions), Shotstack (videos)
- **Auth & Storage**: Firebase
- **Scheduling**: Firebase Cloud Functions

## 💡 Use Case

> A restaurant owner signs up, selects a post template once, and the system auto-generates & posts engaging content daily to Instagram — all hands-free.

---

# Insta Restaurant Bot Frontend

This is the frontend application for the Insta Restaurant Bot, built with React, TypeScript, and Material-UI.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/kartiksbhamare/insta-restaurant-bot.git
cd insta-restaurant-bot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from create-react-app

## Features

- Material-UI components for modern UI
- TypeScript for type safety
- React Router for navigation
- Firebase integration
- Responsive design

## Project Structure

```
src/
  ├── components/     # Reusable components
  ├── pages/         # Page components
  ├── services/      # API and Firebase services
  ├── types/         # TypeScript types
  ├── utils/         # Utility functions
  └── App.tsx        # Main application component
```
