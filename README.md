# Weather Dashboard

## Overview
This Weather Dashboard is a React-based application that provides real-time weather updates using the OpenWeatherMap API. Users can search for a city to view the current weather conditions and forecasts.

## Features
- Search for weather conditions in any city
- View current weather details like temperature, humidity, and wind speed
- See a forecast for the upcoming days
- Responsive UI for desktop and mobile users

## Technologies Used
- **React 19**: Frontend framework for building UI
- **Vite**: Fast development and build tool
- **Tailwind CSS**: Styling framework for designing UI
- **Axios**: For making API requests
- **OpenWeatherMap API**: Third-party API to fetch weather data

## Folder Structure
```
/weather-dashboard
│-- public/
│-- src/
│   │-- assets/
│   │-- components/
│   │   │-- CurrentWeather.jsx
│   │   │-- Forecast.jsx
│   │   │-- SearchBar.jsx
│   │-- utils/
│   │   │-- api.js
│   │-- App.jsx
│   │-- main.jsx
│   │-- index.css
│-- .env
│-- package.json
│-- vite.config.js
```

## Setup & Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file and add your OpenWeatherMap API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## API Integration
This application fetches weather data from the **OpenWeatherMap API**. The API key is stored in the `.env` file and accessed using Vite's environment variables.

Example API request in `api.js`:
```js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
    const response = await axios.get(`${BASE_URL}/weather`, {
        params: {
            q: city,
            appid: API_KEY,
            units: "metric"
        }
    });
    return response.data;
};
```

## Running the Build Version
To create a production-ready build:
```sh
npm run build
```
To preview the built version:
```sh
npm run preview
```

## License
This project is open-source and available under the [MIT License](LICENSE).



