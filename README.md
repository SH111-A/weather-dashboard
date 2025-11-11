🌤️ React Weather Dashboard 
deployed:https://weather-dashboard-liard-beta.vercel.app/

✅ Project Overview

The React Weather Dashboard is a frontend-only application that fetches and displays live weather information from the OpenWeatherMap API.

This project demonstrates:

API consumption using Axios

State management with React Hooks

Component-based UI architecture

Loading, error & success states

Secure handling of API keys through .env

Responsive and clean UI design

This project was created as part of Project 1 (Month 1): Frontend API-Based Application.

✅ Features

🔍 Search weather by city name

🌡️ Current weather details (temperature, humidity, pressure, wind speed)

📅 5-day / 3-hour forecast

⏳ Loading spinner during API call

⚠️ Friendly error messages

📱 Fully responsive layout

🧩 Modular components (SearchBar, CurrentWeather, Forecast, Spinner, ErrorBanner)

🔐 .env-based API key security

✅ Tech Stack

React.js (Vite)

JavaScript (ES6+)

Axios

OpenWeatherMap API

CSS

✅ Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/weather-dashboard.git
cd weather-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Create a .env file

Create .env in the root of the project and add:

VITE_OWM_API_KEY=YOUR_API_KEY_HERE
VITE_DEFAULT_CITY=Bengaluru
VITE_UNITS=metric

4️⃣ Run the app
npm run dev

✅ App will be available at:

👉 http://localhost:5173


✅ Deployment Instructions
🚀 Deploy to Vercel
1. Push project to GitHub

(You already did this ✅)

2. Open Vercel

👉 https://vercel.com

3. Import Project

New → Import Project → Select your GitHub repo

4. Add Environment Variables

Go to:

Project Settings → Environment Variables

Add:

VITE_OWM_API_KEY=YOUR_KEY
VITE_DEFAULT_CITY=Bengaluru
VITE_UNITS=metric

5. Deploy

Click Deploy, and Vercel will host your frontend app online.
